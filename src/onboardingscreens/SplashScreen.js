import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
 
    const handleGetStarted = () => {
        navigation.navigate('GetStarted');
      };
    
      useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('GetStarted')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, [navigation])
    

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../img/logo.png')} style={styles.logo} />
        <Text style={styles.cashBoxText}>CashBoxLib</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CC0E5', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 140, 
    height: 140,
    resizeMode: 'contain', 
    marginRight: 1,
  },
  cashBoxText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default SplashScreen;
