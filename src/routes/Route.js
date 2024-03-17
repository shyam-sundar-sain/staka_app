import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome_app from '../screens/Welcome_app';
import Log_in from '../screens/Log_in';
import Drawer from './Drawer';
import Sign_up from '../screens/Sign_up';
import {Logged_In_Navigator, Logged_Out_Navigator} from './Stack';

const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome_app"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome_app" component={Welcome_app} />
      <Stack.Screen
        name="Logged_Out_Navigator"
        component={Logged_Out_Navigator}
      />
      <Stack.Screen
        name="Logged_In_Navigator"
        component={Logged_In_Navigator}
      />
    </Stack.Navigator>
  );
};

export default Route;
