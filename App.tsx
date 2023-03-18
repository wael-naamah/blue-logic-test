/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
