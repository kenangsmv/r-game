import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText';



const BetAmount = ({betAmount, balance}) => {
  const formatNumber = (num) => {
    return num.toLocaleString(); 
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <ThemedText style={styles.title}>Bet Amount:</ThemedText>
      <ThemedText style={styles.text}>{formatNumber(betAmount)} USDT</ThemedText>
      </View>
      <View style={styles.textContainer}>
      <ThemedText style={styles.title}>Balance:</ThemedText>
      <ThemedText style={styles.text}>{formatNumber(balance)} USDT</ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical: 5
  },
  textContainer:{
    display: "flex",
    flexDirection:"row",
    gap: 4
  },
  title:{
    color:"#9C9C9C",
    fontWeight: "bold",
    fontSize:12,
 
  },
  text:{
    fontSize:12,
    fontWeight: "bold",
  }
})

export default BetAmount;