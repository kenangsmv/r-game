import { View, StyleSheet, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ThemedText from './ThemedText';

const PREPARATION_TIME = 3;
const SPIN_DURATION = 15000; // 15 секунд полного вращения
const PAUSE_DURATION = 10000;

const Roulette = () => {
 const rotation = useRef(new Animated.Value(0)).current;
 const [timeLeft, setTimeLeft] = useState(10);
 const [gameState, setGameState] = useState('waiting');
 const [prepTime, setPrepTime] = useState(PREPARATION_TIME);
 const timerRef = useRef(null);

 // Форматирование времени в формат mm:ss
 const formatTime = (seconds) => {
   const mins = Math.floor(seconds / 60);
   const secs = seconds % 60;
   return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
 };

 // Основная функция вращения
 const startSpinning = () => {
   rotation.setValue(0);
   
   Animated.sequence([
     // Мгновенный старт и постоянная максимальная скорость
     Animated.timing(rotation, {
       toValue: 7200, // 20 полных оборотов в секунду (360° × 20)
       duration: SPIN_DURATION * 0.8, // 12 секунд максимальной скорости
       easing: Easing.linear,
       useNativeDriver: true,
     }),
     // Резкое замедление в последние секунды
     Animated.timing(rotation, {
       toValue: 8640, // Добавляем еще 4 оборота для замедления
       duration: SPIN_DURATION * 0.2, // 3 секунды на остановку
       easing: Easing.bezier(0.1, 0, 0.9, 1), // Плавное замедление
       useNativeDriver: true,
     })
   ]).start(() => {
     setGameState('waiting');
     setTimeLeft(10);
   });
 };

 // Управление таймером и состояниями
 useEffect(() => {
   const updateTimer = () => {
     if (gameState === 'waiting') {
       setTimeLeft(prev => {
         if (prev <= 0) {
           setGameState('preparing');
           setPrepTime(PREPARATION_TIME);
           return 0;
         }
         return prev - 1;
       });
     } 
     else if (gameState === 'preparing') {
       setPrepTime(prev => {
         if (prev <= 1) {
           setGameState('spinning');
           startSpinning();
           setTimeLeft(15);
           return PREPARATION_TIME;
         }
         return prev - 1;
       });
     }
     else if (gameState === 'spinning') {
       setTimeLeft(prev => Math.max(0, prev - 1));
     }
   };

   timerRef.current = setInterval(updateTimer, 1000);
   
   return () => {
     clearInterval(timerRef.current);
   };
 }, [gameState]);

 // Интерполяция для вращения
 const rotateData = rotation.interpolate({
   inputRange: [0, 8640],
   outputRange: ['0deg', '8640deg'], // 24 полных оборота
 });

 // Получение текста статуса
 const getStatusText = () => {
   switch (gameState) {
     case 'preparing':
       return 'Preparing';
     case 'spinning':
       return 'Spinning...';
     case 'stopping':
       return 'Stopping...';
     default:
       return 'Next round in';
   }
 };

 return (
   <View style={styles.container}>
     {/* Контейнер для таймера */}
     <View style={styles.timeContainer}>
       <ThemedText style={styles.time}>
         {gameState === 'preparing' 
           ? formatTime(prepTime) 
           : formatTime(timeLeft)}
       </ThemedText>
       <ThemedText style={styles.nextRound}>{getStatusText()}</ThemedText>
     </View>

     {/* Контейнер для рулетки */}
     <View style={styles.rouletteContainer}>
       {/* Рулетка */}
       <Animated.Image 
         source={require("@/assets/images/roulette.png")} 
         style={[
           styles.roulette,
           {
             transform: [{ rotate: rotateData }],
           }
         ]} 
         resizeMode="contain"
       />
       
       {/* Стрелка-указатель */}
       <View style={styles.arrowContainer}>
         <View style={styles.arrow} />
       </View>
     </View>
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
  //  backgroundColor: '#1a1a1a',
 },
 timeContainer: {
   position: "absolute",
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   justifyContent: "center",
   alignItems: "center",
   zIndex: 1,
 },
 rouletteContainer: {
   width: 350,
   height: 350,
   alignItems: 'center',
   justifyContent: 'center',
   position: 'relative',
  //  transform: [{translateZ: 0}], // Для лучшей производительности
 },
 arrowContainer: {
   position: 'absolute',
   bottom: '15%', // Положение стрелки внутри круга
   zIndex: 2,
   width: 20,
   height: 30,
 },
 arrow: {
   width: 0,
   height: 0,
   backgroundColor: 'transparent',
   borderStyle: 'solid',
   borderLeftWidth: 10,
   borderRightWidth: 10,
   borderBottomWidth: 20,
   borderLeftColor: 'transparent',
   borderRightColor: 'transparent',
   borderBottomColor: '#FFD700',
   transform: [{ rotate: '180deg' }],
   // Тень для стрелки
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
 },
 time: {
   fontSize: 24,
   fontWeight: "bold",
   color: '#fff',
 },
 nextRound: {
   fontSize: 16,
   fontWeight: "bold",
   color: "#9C9C9C",
   marginTop: 5,
 },
 roulette: {
   width: '100%',
   height: '100%',
   backfaceVisibility: 'hidden',
  // r transform: [{translateZ: 0}], // Для лучшей производительности
 }
});

export default Roulette;