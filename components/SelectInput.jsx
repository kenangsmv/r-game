import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import ThemedText from "./ThemedText";

const SelectInput = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select option",
  modalTitle = "Select Option",
  style
}) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <TouchableOpacity onPress={showModal} style={[styles.selectBox, style]}>
        {value?.icon && <Image source={value.icon} style={styles.icon} />}
        <ThemedText style={styles.selectText}>
          {value?.label || placeholder}
        </ThemedText>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#9C9C9C" />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={hideModal}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <ThemedText style={styles.modalTitle}>{modalTitle}</ThemedText>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => {
                      onChange(option);
                      hideModal();
                    }}
                  >
                    {option.icon && (
                      <Image source={option.icon} style={styles.optionIcon} />
                    )}
                    <ThemedText style={styles.optionText}>
                      {option.label}
                    </ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202054",
    padding: 12,
    borderRadius: 12,
    gap: 10,
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#202054',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: '#2A2968',
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SelectInput; 