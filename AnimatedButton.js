import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedButton = ({ onPress, navigation }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Animatable.View
      animation={isPressed ? 'pulse' : undefined}
      duration={500}
      iterationCount="infinite"
      easing="ease-out"
      style={styles.buttonContainer}

    >
      <TouchableOpacity
        style={[styles.button, isPressed ? styles.buttonPressed : styles.button]}
        onLongPress={() => navigation.navigate('Game')}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.buttonText}>Commencer le Jeu</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#a826d4',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default AnimatedButton;