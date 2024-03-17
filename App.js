import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Welcome_app from './src/screens/Welcome_app';
import Log_in from './src/screens/Log_in';
import Home_screen from './src/screens/Home_screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes/Route';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
