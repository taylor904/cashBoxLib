import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';


const WelcomeScreen = () => {
 

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Easiest way to save money and track expenses</Text>
      <Image source={require('../img/aaa.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => { /* Handle press event */ }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#6CC0E5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  logo: {
    width: 300, 
    height: 300,
    marginBottom: 290,
    marginTop:20
  },
  button: {
    backgroundColor: '#003366', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 5, 
    alignSelf: 'stretch',
    marginTop: 20, 
  },
  buttonText: {
    fontSize: 20,
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute', 
    top: 20, 
    left: 20, 
  },
  backButtonText: {
    fontSize: 24, 
    color: '#000000', 
  },
});

export default WelcomeScreen;
