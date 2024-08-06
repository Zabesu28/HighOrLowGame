import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameScreen = ({ navigation }) => {
  const [baseNumber, setBaseNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);

  useEffect(() => {
    setBaseNumber(generateRandomNumber());
  }, []);

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const handleGuess = (guess) => {
    const generatedNumber = generateRandomNumber();
    setNewNumber(generatedNumber);
    if ((guess === 'higher' && generatedNumber > baseNumber) ||
        (guess === 'lower' && generatedNumber < baseNumber)) {
      navigation.navigate('Result', { result: 'won', baseNumber, newNumber: generatedNumber });
    } else {
      navigation.navigate('Result', { result: 'lost', baseNumber, newNumber: generatedNumber });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseNumberText}>Starting: {baseNumber}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Higher" onPress={() => handleGuess('higher')} color="green" />
        <Button title="Lower" onPress={() => handleGuess('lower')} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseNumberText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default GameScreen;