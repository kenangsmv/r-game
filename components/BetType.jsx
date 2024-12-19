import React, { useRef, useState } from "react";
import { View, Pressable, Text, StyleSheet, Animated } from "react-native";
import { ThemedText } from "./ThemedText";
import { TouchableOpacity } from "react-native-gesture-handler";

const ToggleButton = () => {
  const [selected, setSelected] = useState("Manual");
  const animatedValue = useRef(new Animated.Value(0)).current;
  const filters = ["Manual", "Auto"];

  const handleFilterPress = (filter) => {
    setSelected(filter);
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start(() => {
      animatedValue.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
  
      <Pressable
        onPress={() => setSelected("Manual")}
        style={[
          styles.button,
          selected === "Manual" ? styles.activeButton : styles.inactiveButton,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "Manual" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Manual
        </Text>
      </Pressable>


      <Pressable
        onPress={() => setSelected("Auto")}
        style={[
          styles.button,
          selected === "Auto" ? styles.activeButton : styles.inactiveButton,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "Auto" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Auto
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#202054",
    borderRadius: 12,
    padding: 6,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: "#D91FFF",
    borderWidth:1,
    borderStyle: "solid",
    borderColor:"#D617FD",
    shadowColor: "#D617FD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  activeText: {
    color: "#FFFFFF",
  },
  inactiveText: {
    color: "#9C9C9C",
  },
});

export default ToggleButton;
