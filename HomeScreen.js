import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AnimatedButton from './AnimatedButton';

const HomeScreen = ({ navigation }) => {
  const startGame = () => {
    Alert.alert("Long press to start the game");
  };

  return (
    <View style={styles.container}>
       <AnimatedButton onPress={startGame} navigation={navigation} />
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