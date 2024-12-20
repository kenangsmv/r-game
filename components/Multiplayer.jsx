import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import ThemedText from "./ThemedText";


const Multiplayer = () => {
  const [minInputAmount, setMinInputAmount] = useState(0);
  const [maxInputAmount, setMaxInputAmount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.multiplayerContainer}>
        <ThemedText style={styles.title}>Min. multiplayer</ThemedText>
        <View style={styles.inputContainer}>
          <ThemedText style={[styles.label, styles.min]}>Min</ThemedText>
          <TextInput
            style={styles.input}
            value={minInputAmount}
            onChangeText={setMinInputAmount}
            keyboardType="numeric"
            placeholder="0"

          />
        </View>
      </View>
      <View style={styles.multiplayerContainer}>
        <ThemedText style={styles.title}>Max. multiplayer</ThemedText>
        <View style={styles.inputContainer}>
          <ThemedText style={[styles.label, styles.max]}>Max</ThemedText>
          <TextInput
            style={styles.input}
            value={maxInputAmount}
            onChangeText={setMaxInputAmount}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  multiplayerContainer: {
    flex: 1,
  },
  title: {
    color: "#9C9C9C",
    fontWeight: "bold",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#202054",
    borderRadius: 10,
    overflow: "hidden",
  },
  label: {
    fontSize: 12,
    borderRadius: 6,
    paddingHorizontal: 10,
    color: "black",
    fontWeight: "bold",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  min: {
    backgroundColor: "#FFB700",
    borderColor: "#FFCC02",
    shadowColor: "#FFCC02",

  },
  max: {
    backgroundColor: "#00FF00",
    borderColor: "#02F100",
    shadowColor: "#02F100",
  },
  input: {
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    textAlign: "right",
    flex: 1,
  },
});

export default Multiplayer;
