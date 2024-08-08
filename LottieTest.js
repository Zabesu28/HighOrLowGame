import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieTest = ( { name }) => {
  chemin = null;
  if(name == 'winner'){
    chemin = require('./assets/animations/winner.json');
  }
  if(name == 'looser'){
    chemin = require('./assets/animations/looser.json');
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={chemin}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // Ajoutez un fond blanc pour voir clairement l'animation
  },
  animation: {
    width: 100,
    height: 100,
  },
});

export default LottieTest;