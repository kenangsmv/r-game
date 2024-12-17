import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText';

const Roulette = () => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.time}>00:44</ThemedText>
      <ThemedText style={styles.nextRound}>Next round in</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

export default Roulette;