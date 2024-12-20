import { Pressable, StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import { LinearGradient } from "expo-linear-gradient";

const GlassButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <LinearGradient colors={["#5C7293", "#384371"]} style={styles.gradient}/>
        <ThemedText style={styles.text}>{title}</ThemedText>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "relative",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",

    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    position: "absolute",
    top: 0,
    left: 0,
  }
});

export default GlassButton;
