import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GetStarted = ({ navigation }) => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const onboardingData = [
    {
      image: require('../img/getstarted.png'), 
      title: 'Welcome To CashBoxLib',
      description: 'The CashBoxLib app is tailored to assist individuals, especially the youth in Liberia, in managing and saving their money more efficiently.'
    },
    {
      image: require('../img/welcome.png'),
      title: 'Automated Savings and Money Management App with Customizable Plans',
      description: 'The app enables users to automate their savings and manage their money efficiently, with customizable savings plans.'
    },
    {
      image: require('../img/savings.png'),
      title: 'Take Charge of Your Financial Future',
      description: 'Ready to take control of your finances? Start automating your savings and managing your money more efficiently today. Your path to financial success begins now!'
    },
  ];

  // Function to handle navigation between steps
  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('WelcomeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={onboardingData[currentIndex].image} style={styles.image}  />
      <Text style={styles.welcomeText}>{onboardingData[currentIndex].title}</Text>
      <Text style={styles.descriptionText}>{onboardingData[currentIndex].description}</Text>

      {/* Footer with Pagination and Next Button */}
      <View style={styles.footer}>
        <View style={styles.paginationWrapper}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[styles.paginationDot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <MaterialCommunityIcons name="greater-than" size={48} color="#003366" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 150,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#003366',
  },
  nextButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default GetStarted;
