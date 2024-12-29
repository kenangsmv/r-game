import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText'
import { Colors } from '@/constants/Colors'

const MainButton = ({ title, onPress, style }) => {
  return (
    <Pressable 
      style={[styles.button, style]} 
      onPress={onPress}
    >
      <ThemedText style={styles.buttonText}>{title}</ThemedText>
    </Pressable>
  )
}

export default MainButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#D617FD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
}) 