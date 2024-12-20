import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React from "react";


import Rocket from "@/assets/icons/rocket.svg";
import Bomb from "@/assets/icons/bomb.svg";
import Crown from "@/assets/icons/crown.svg";
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";


const { width } = Dimensions.get("window"); // Get device screen width
const BUTTON_WIDTH = (width - 40) / 3; 

const Bets = () => {
  const bets = [
    {
      icon: () => <Bomb width={24} height={24} />,
      value: "14",
      bgColor: "#00FF00",
      borderColor: "#00E901",

    },
    {
      icon: () => <Rocket width={24} height={24} />,
      value: "2",
      bgColor: "#D91FFF",
      borderColor: "#E10CFB"
    },
    {
      icon: () => <Crown width={24} height={24} />,
      value: "2",
      bgColor: "#443383",
      borderColor: "#5849A4"
    },
  ];
  return (
    <View style={styles.container}>
      {bets.map((bet, index) => (
    <Pressable key={index+bet.value} style={[
          styles.betButtonContainer,
          { width: BUTTON_WIDTH, },
        ]}  onPress={()=> console.log(bet.value)}>
          <View style={{...styles.icon, backgroundColor: bet.bgColor, borderColor: bet.borderColor, shadowColor: bet.borderColor}} >
          {bet.icon()}
          </View>
          <ThemedText style={styles.betButtonText}>Bet {bet.value}x</ThemedText>
        </Pressable>
    
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap:10,
    paddingVertical: 10,
  },
  betButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    flex:1,
    backgroundColor: "#120E42",
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
    borderStyle: "solid",
    position: "relative",
    zIndex: 100,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  }, 

});

export default Bets;
