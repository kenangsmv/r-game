import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import usdtIcon from "@/assets/images/cryptos/usdt.png";
import btcIcon from "@/assets/images/cryptos/btc.png";
import ethIcon from "@/assets/images/cryptos/eth.png";
import { Colors } from "@/constants/Colors";

const BetAmount = ({ betAmount, balance, onBetAmountChange }) => {
  const theme = useColorScheme() ?? 'light';

  const [selectedValue, setSelectedValue] = useState("");
  const [inputAmount, setInputAmount] = useState(
    betAmount === 0 ? "" : betAmount.toString()
  );

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const currencies = [
    { label: "USDT", value: "usdt", icon: usdtIcon },
    { label: "BTC", value: "btc", icon: btcIcon },
    { label: "ETH", value: "eth", icon: ethIcon },
  ];

  const amoutPortion = [
    { label: "1/2", value: 0.5 },
    { label: "1/3", value: 0.33 },
    { label: "1/4", value: 0.25 },
    { label: "Full", value: 1 },
  ];
  const [visible, setVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
            {formatNumber(betAmount)} USDT
          </ThemedText>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>Balance:</ThemedText>
          <ThemedText style={styles.text}>
            {formatNumber(balance)} USDT
          </ThemedText>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={showModal} style={styles.selectBox}>
          <Image source={selectedCurrency.icon} style={styles.icon} />
          <ThemedText style={styles.currencyText}>
            {selectedCurrency.label}
          </ThemedText>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#9C9C9C" />
        </TouchableOpacity>
        <TextInput
          style={[styles.input, styles.placeholderStyle]}
          value={inputAmount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
          placeholder="Enter bet amount"
          placeholderTextColor="#9C9C9C"
        />
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Picker
            selectedValue={selectedCurrency}
            onValueChange={(value) => {
              const selectedCurrency = currencies.find(
                (currency) => currency.value === value
              );
              setSelectedCurrency(selectedCurrency);
              hideModal();
            }}
            style={styles.picker}
          >
            {currencies.map((currency, index) => (
              <Picker.Item
                key={index}
                label={currency.label}
                value={currency.value}
              />
            ))}
          </Picker>
        </Modal>
      </Portal>
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
  cryptoSelector: {
    backgroundColor: "#202054",
    borderRadius: 12,

  },
  currencyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#202054",
    borderRadius: 12,
    padding: 6,
    alignItems: "center",
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
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRightWidth: 1,
    borderRightColor: "#384371",
    paddingRight: 10,
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
