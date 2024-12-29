import { SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import SelectInput from '../components/SelectInput'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import * as Clipboard from 'expo-clipboard';
import { CRYPTOCURRENCIES, getNetworksByCryptoId } from '@/constants/Cryptocurrencies'

const Deposit = () => {
  const navigation = useNavigation();
  const [selectedCurrency, setSelectedCurrency] = useState(CRYPTOCURRENCIES[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(CRYPTOCURRENCIES[0].networks[0]);
  const [availableNetworks, setAvailableNetworks] = useState(CRYPTOCURRENCIES[0].networks);

  useEffect(() => {
    const networks = getNetworksByCryptoId(selectedCurrency.id);
    setAvailableNetworks(networks);
    setSelectedNetwork(networks[0]);
  }, [selectedCurrency]);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('0xd92652...79418b18');
  };

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
          <ThemedText style={styles.headerTitle}>Crypto Deposit</ThemedText>
          <Pressable 
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={28} color={Colors.dark.text} />
          </Pressable>
        </View>

        <SelectInput
          options={CRYPTOCURRENCIES}
          value={selectedCurrency}
          onChange={setSelectedCurrency}
          modalTitle="Select Currency"
          style={styles.selector}
        />


        <SelectInput
          options={availableNetworks}
          value={selectedNetwork}
          onChange={setSelectedNetwork}
          modalTitle="Select Network"
          style={styles.selector}
        />


        <View style={styles.addressContainer}>
          <ThemedText style={styles.addressLabel}>
            Your {selectedCurrency.label} deposit address
          </ThemedText>
          <View style={styles.addressBox}>
            <ThemedText style={styles.addressText}>0xd92652...79418b18</ThemedText>
            <Pressable onPress={copyToClipboard} style={styles.copyButton}>
              <Ionicons name="copy-outline" size={24} color={Colors.dark.text} />
            </Pressable>
          </View>
        </View>


        <View style={styles.minAmountContainer}>
          <ThemedText style={styles.minAmountLabel}>
            Min deposit amount {selectedCurrency.minDeposit}
          </ThemedText>
        </View>


        <View style={styles.warningContainer}>
          <Ionicons name="information-circle" size={20} color={Colors.dark.text} />
          <ThemedText style={styles.warningText}>
            Only send {selectedCurrency.label} to this address
          </ThemedText>
        </View>


        <View style={styles.qrContainer}>
          <Image 
            source={require('../assets/images/qr.png')} 
            style={styles.qrCode}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default Deposit

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
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#131243',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  selectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currencyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  networkIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: '600',
  },
  addressContainer: {
    marginTop: 12,
  },
  addressLabel: {
    color: '#888',
    marginBottom: 8,
  },
  addressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131243',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  addressText: {
    flex: 1,
    fontSize: 16,
  },
  copyButton: {
    padding: 8,
  },
  minAmountContainer: {
    marginBottom: 12,
  },
  minAmountLabel: {
    color: '#888',
    fontSize: 14,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 20, 147, 0.1)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  warningText: {
    color: Colors.dark.text,
    fontSize: 14,
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  qrCode: {
    width: 200,
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 12,
  },
}); 