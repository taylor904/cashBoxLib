import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../onboardingscreens/SplashScreen';
import GetStarted from '../onboardingscreens/GetStarted';
import WelcomeScreen from '../onboardingscreens/WelcomeScreen';




const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
