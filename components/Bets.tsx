import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Canvas, rect, RoundedRect, Shadow } from "@shopify/react-native-skia";


const { width } = Dimensions.get("window"); // Get device screen width
const BUTTON_WIDTH = (width - 40) / 3; 

const Bets = () => {
  const bets = [
    {
      icon: "",
      value: "14",
      bgColor: "#00BA01",
      borderColor: "#00E901",

    },
    {
      icon: "",
      value: "2",
      bgColor: "#B301EA",
      borderColor: "#E10CFB"
    },
    {
      icon: "",
      value: "2",
      bgColor: "#443383",
      borderColor: "#5849A4"
    },
  ];
  return (
    <ThemedView style={styles.container}>
      {bets.map((bet, index) => (
        <Pressable key={index+bet.value} style={[
            styles.betButtonContainer,
            { width: BUTTON_WIDTH, },
          ]} onPress={()=> console.log(bet.value)}>
          <View style={{...styles.icon, backgroundColor: bet.bgColor, borderColor: bet.borderColor}} ></View>
          <ThemedText style={styles.betButtonText}>Bet {bet.value}x</ThemedText>
        </Pressable>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    gap:10,
    paddingVertical: 10,
  },
  betButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex:1,

    gap: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#6549AD",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  betButtonText:{
   fontWeight: "bold"
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth:1,
    borderStyle: "solid"
  },
});

export default Bets;
