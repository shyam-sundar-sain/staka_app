import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome_app from '../screens/Welcome_app';
import Log_in from '../screens/Log_in';
import Drawer from './Drawer';
import Sign_up from '../screens/Sign_up';
import Bidding_history from '../screens/Bidding_history';
import Profile_details from '../screens/Profile_details';
import Account_statement from '../screens/Account_statement';
import All_history from '../screens/All_history';
import Top_winners from '../screens/Top_winners';
import Top_starline_winners from '../screens/Top_starline_winners';
import Notifications from '../screens/Notifications';
import Game_rates from '../screens/Game_rates';
import Notice_board_rules from '../screens/Notice_board_rules';
import Settings from '../screens/Settings';

export const Logged_Out_Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Log_in"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log_in" component={Log_in} />
      <Stack.Screen name="Sign_up" component={Sign_up} />
    </Stack.Navigator>
  );
};

export const Logged_In_Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Bidding_history" component={Bidding_history} />
      <Stack.Screen name="Profile_details" component={Profile_details} />
      <Stack.Screen name="Account_statement" component={Account_statement} />
      <Stack.Screen name="All_history" component={All_history} />
      <Stack.Screen name="Top_winners" component={Top_winners} />
      <Stack.Screen
        name="Top_starline_winners"
        component={Top_starline_winners}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Game_rates" component={Game_rates} />
      <Stack.Screen name="Notice_board_rules" component={Notice_board_rules} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
