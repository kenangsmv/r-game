import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  Text,
  Pressable,
  useColorScheme,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { BlurView } from "expo-blur";
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

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <ThemedView style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>A</Text>
          </View>
          <ThemedText style={styles.title} type="title">
            AnonBet
          </ThemedText>
        </ThemedView>

        <Link href="/signup">
          <Pressable
            style={styles.buttonContainer}
            onPress={() => console.log("Pressed")}
          >
            <View style={styles.canvasContainer}>
              <Canvas style={styles.canvas}>
                <RoundedRect
                  x={0}
                  y={0}
                  width={152}
                  height={52}
                  r={26}
                  color="#7F8CA1"
                />

                <RoundedRect x={2} y={2} width={148} height={48} r={24}>
                  <LinearGradient
                    start={vec(99, 0)} // Top-center
                    end={vec(99, 48)}
                    colors={["#5C7293", "#384371"]}
                  />
                </RoundedRect>
              </Canvas>
              <View style={styles.textContainer}>
                <ThemedText style={styles.buttonText}>Sign up</ThemedText>
              </View>
            </View>
          </Pressable>
        </Link>
      </SafeAreaView>
      <Roulette />
      <Bets />
      <View style={styles.placingBetContainer}>
        <BetType />
       <BetAmount betAmount={0} balance={10329}/>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "#bd1af7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    width: 152,
    height: 52,
  },
  canvas: {
    position: "absolute",
    width: 152,
    height: 52,
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
    backgroundColor: "#131243",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20
  },
});
