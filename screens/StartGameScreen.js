import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({onPickedNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  }
  const resetNumberHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
      const choosenNumber = parseInt(enteredNumber);
      if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
        // show alert...
        Alert.alert('Invalid Number!',
        'The number should be between 0-99', 
        [{text: 'Okay', style: 'destructive', onPress:resetNumberHandler}]
        );
        return;
      }
      onPickedNumber(choosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.numberInput}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetNumberHandler}> Reset </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});
