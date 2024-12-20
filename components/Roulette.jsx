import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';


const Roulette = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <ThemedText style={styles.time}>00:44</ThemedText>
        <ThemedText style={styles.nextRound}>Next round in</ThemedText>
      </View>
      <Image source={require("@/assets/images/roulette.png")} style={styles.roulette} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nextRound: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9C9C9C",
  },
  roulette: {
    width: 350,
    height: 350,
  }
});

export default Roulette;