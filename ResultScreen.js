import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LottieTest from './LottieTest';

const ResultScreen = ({ route, navigation }) => {
  const { result, baseNumber, newNumber } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {result === 'won' ? "GG t'es le goat" : "T'es éclaté le sang"} le nombre c'était {baseNumber} et t'as eu {newNumber}
      </Text>
      {result === 'won' && <Text style={styles.trophy}><LottieTest name="winner" /></Text>}
      {result !== 'won' && <Text style={styles.trophy}><LottieTest name="looser" /></Text>}
      <Button title="Play Again" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
  trophy: {
    fontSize: 50,
    marginBottom: 20,
  },
});

export default ResultScreen;