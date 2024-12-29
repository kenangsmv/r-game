import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import ThemedText from "./ThemedText";
import SelectInput from "./SelectInput";
import { CRYPTOCURRENCIES } from "@/constants/Cryptocurrencies";

const BetAmount = ({ betAmount, balance, onBetAmountChange }) => {
  const theme = useColorScheme() ?? 'light';
  const [inputAmount, setInputAmount] = useState(
    betAmount === 0 ? "" : betAmount.toString()
  );
  const [selectedCurrency, setSelectedCurrency] = useState(CRYPTOCURRENCIES[0]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const amoutPortion = [
    { label: "1/2", value: 0.5 },
    { label: "1/3", value: 0.33 },
    { label: "1/4", value: 0.25 },
    { label: "Full", value: 1 },
  ];

  const handleAmountChange = (text) => {
    const cleanedText = text?.replace(/[^0-9.]/g, "");
    setInputAmount(cleanedText);
    if (onBetAmountChange) {
      onBetAmountChange(parseFloat(cleanedText) || 0);
    }
  };

  const fullPortionStyle = {
    backgroundColor: Colors[theme].primary,
  };

  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Bet Amount:</ThemedText>
          <ThemedText style={styles.text}>
            {formatNumber(betAmount)} {selectedCurrency.label}
          </ThemedText>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Balance:</ThemedText>
          <ThemedText style={styles.text}>
            {formatNumber(balance)} {selectedCurrency.label}
          </ThemedText>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <SelectInput
          options={CRYPTOCURRENCIES}
          value={selectedCurrency}
          onChange={setSelectedCurrency}
          modalTitle="Select Currency"
        />
        <TextInput
          style={[styles.input, styles.placeholderStyle]}
          value={inputAmount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholder="Enter bet amount"
          placeholderTextColor="#9C9C9C"
        />
      </View>
      <View style={styles.amountPortionContainer}>
        {amoutPortion.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleAmountChange((balance * item.value).toString())}
            style={[
              styles.amountPortion,
              item.value === 1 ? fullPortionStyle : null,
            ]}
          >
            <ThemedText style={styles.portionText}>{item.label}</ThemedText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  title: {
    color: "#9C9C9C",
    fontWeight: "bold",
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#202054",
    borderRadius: 12,
    padding: 6,
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: 16, 
    fontFamily: "System", 
    fontWeight: "400", 
  },
  amountPortionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  amountPortion: {
    width: 50,
    height: 25,
    backgroundColor: "#3D2E72",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  portionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BetAmount;
