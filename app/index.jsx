import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

import { Link } from "expo-router";

import Roulette from "@/components/Roulette";
import Bets from "@/components/Bets";
import BetType from "@/components/BetType";
import BetAmount from "@/components/BetAmount";
import Multiplayer from "@/components/Multiplayer";
import MainButton from "@/components/MainButton";

import { Colors } from "@/constants/Colors";
import { useState } from "react";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import GlassButton from "../components/GlassButton";

const HomeScreen = () => {
  const [betAmount, setBetAmount] = useState(0);
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container} lightColor={Colors.dark.background} darkColor={Colors.dark.background}>
      <SafeAreaView style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>SR</Text>
          </View>
          <ThemedText style={styles.title} type="title" lightColor={Colors.dark.text} darkColor={Colors.dark.text}>
             Space Roulette
          </ThemedText>
        </View>

        <Pressable 
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={32} color={Colors.dark.text} />
        </Pressable>
      </SafeAreaView>
      <Roulette />
      <Bets />
      <View style={styles.placingBetContainer}>
        <BetType />
        <BetAmount
          onBetAmountChange={(newAmount) => {
            setBetAmount(newAmount);
          }}
          betAmount={0}
          balance={10329}
        />
        <Multiplayer />
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <MainButton 
          title="Place a bet"
          onPress={() => console.log("Place bet pressed")}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#D91FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#D91FFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  logoText: {
    color: "black",
    fontSize: 22,
    padding: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    borderRadius: 26,
    overflow: "hidden",
  },
  canvasContainer: {
    position: "relative",
    width: 102,
    height: 32,
  },
  canvas: {
    position: "absolute",
    width: 102,
    height: 32,
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  placingBetContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#131243",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
});
export default HomeScreen;
