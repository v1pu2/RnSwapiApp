import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import DetailScreen from '../screens/DetailScreen';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import Colors from '../theme/Colors';

const Navigators = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.color2,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
         <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.color2,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
