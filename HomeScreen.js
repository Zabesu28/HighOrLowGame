import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const startGame = () => {
    Alert.alert("Long press to start the game");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.startButton} 
        onLongPress={() => navigation.navigate('Game')}
        onPress={startGame}
      >
        <Text style={styles.startButtonText}>Start game!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'purple',
    padding: 50,
    borderRadius: 100,
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;