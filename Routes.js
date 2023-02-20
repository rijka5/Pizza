import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Product' component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

