import React from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigation } from './src/navigations/navigation';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer> 
    <MainNavigation/>
    </NavigationContainer>
  );
}

export default StackNavigation;
