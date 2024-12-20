import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  Platform,
} from "react-native";



import { Link } from "expo-router";

import {
  Canvas,
  LinearGradient,
  RoundedRect,
  vec,
} from "@shopify/react-native-skia";
import Roulette from "@/components/Roulette";
import Bets from "@/components/Bets";
import BetType from "@/components/BetType";
import BetAmount from "@/components/BetAmount";
import Multiplayer from "@/components/Multiplayer";

import { Colors } from "@/constants/Colors";
import { useState } from "react";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import GlassButton from "../components/GlassButton";


const HomeScreen = () => {
  const [betAmount, setBetAmount] = useState(0);
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

        <Link href="/signup">
        <GlassButton title="Sign up" onPress={() => console.log("Pressed")} />
        </Link>
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
      <SafeAreaView >
        <Pressable style={styles.placeBetButton}>
          <ThemedText style={styles.placeBetButtonText}>Place a bet</ThemedText>
        </Pressable>
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
    paddingVertical: 400,
    // backgroundColor: "red"
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // backgroundColor:"blue"
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
    // backgroundColor: "yellow"
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
  placeBetButton: {
    backgroundColor: Colors.dark.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#D617FD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  placeBetButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default HomeScreen;
