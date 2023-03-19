import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import {CartContextProvider} from '../context/cartContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'HomeTabs'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
};

export default RootNavigator;
