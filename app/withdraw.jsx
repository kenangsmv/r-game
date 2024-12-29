import { SafeAreaView, StyleSheet, View, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import MainButton from '../components/MainButton'
import SelectInput from '../components/SelectInput'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { CRYPTOCURRENCIES, getNetworksByCryptoId } from '@/constants/Cryptocurrencies'

const Withdraw = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('0');
  const [selectedCurrency, setSelectedCurrency] = useState(CRYPTOCURRENCIES[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(CRYPTOCURRENCIES[0].networks[0]);
  const [availableNetworks, setAvailableNetworks] = useState(CRYPTOCURRENCIES[0].networks);

  useEffect(() => {
    const networks = getNetworksByCryptoId(selectedCurrency.id);
    setAvailableNetworks(networks);
    setSelectedNetwork(networks[0]);
  }, [selectedCurrency]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.content}>

        <View style={styles.header}>
          <Pressable 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={28} color={Colors.dark.text} />
          </Pressable>
          <ThemedText style={styles.headerTitle}>Withdraw</ThemedText>
          <Pressable 
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={28} color={Colors.dark.text} />
          </Pressable>
        </View>

        <View style={styles.balanceContainer}>
          <ThemedText style={styles.balanceLabel}>Your balance:</ThemedText>
          <ThemedText style={styles.balanceAmount}>0.00000000 {selectedCurrency.label}</ThemedText>
        </View>


        <View style={styles.amountContainer}>
          <SelectInput
            options={CRYPTOCURRENCIES}
            value={selectedCurrency}
            onChange={setSelectedCurrency}
            modalTitle="Select Currency"
            style={styles.selector}
          />
          
          <View style={styles.amountInputContainer}>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholderTextColor="#666"
              placeholder={`Enter amount (min. ${selectedCurrency.minWithdraw})`}
            />
            <Pressable style={styles.maxButton}>
              <ThemedText style={styles.maxButtonText}>Max</ThemedText>
            </Pressable>
          </View>
        </View>


        <SelectInput
          options={availableNetworks}
          value={selectedNetwork}
          onChange={setSelectedNetwork}
          modalTitle="Select Network"
        />


        <View style={styles.addressContainer}>
          <ThemedText style={styles.inputLabel}>Enter address</ThemedText>
          <TextInput
            style={styles.addressInput}
            placeholder={`Enter ${selectedCurrency.label} address`}
            placeholderTextColor="#666"
          />
        </View>


        <View style={styles.minAmountContainer}>
          <ThemedText style={styles.minAmountText}>
            Min withdrawal amount {selectedCurrency.minWithdraw}
          </ThemedText>
          <ThemedText style={styles.feeText}>
            Transaction fee - {selectedCurrency.withdrawFee}
          </ThemedText>
        </View>


        <View style={styles.buttonContainer}>
          <MainButton 
            title="Withdraw" 
            onPress={() => console.log('Withdraw pressed')}
          />
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default Withdraw

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginBottom: 24,
  },
  balanceLabel: {
    color: '#888',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: '600',
  },
  amountContainer: {
    marginBottom: 16,
    gap: 12,
  },
  selector: {
    marginBottom: 0,
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131243',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
  },
  currencyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  currencyText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131243',
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  amountInput: {
    flex: 1,
    color: Colors.dark.text,
    fontSize: 16,
    padding: 0,
  },
  maxButton: {
    backgroundColor: Colors.dark.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: "#D617FD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  maxButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  selectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  networkIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  networkText: {
    fontSize: 16,
    fontWeight: '600',
  },
  addressContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    color: '#888',
    marginBottom: 8,
  },
  addressInput: {
    backgroundColor: '#131243',
    borderRadius: 12,
    padding: 16,
    color: Colors.dark.text,
    fontSize: 16,
  },
  minAmountContainer: {
    marginTop: 'auto',
    marginBottom: 16,
  },
  minAmountText: {
    color: '#888',
    marginBottom: 4,
  },
  feeText: {
    color: '#888',
  },
  buttonContainer: {
    marginBottom: 16,
  },
}); 