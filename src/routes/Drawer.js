import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from '@rneui/themed';

//COMPONENTS
import {welcome_background_color, white_color} from '../styles/custom_colors';
//SCREENS
import Home_screen from '../screens/Home_screen';
import Log_in from '../screens/Log_in';
//ICONS
import ic_user from '../assets/icons/drawer_user.png';
import ic_trophy from '../assets/icons/trophy.png';
import ic_notes from '../assets/icons/notes.png';
import ic_notification from '../assets/icons/notification.png';
import ic_list from '../assets/icons/list.png';
import ic_information_button from '../assets/icons/information-button.png';
import ic_settings from '../assets/icons/settings.png';
import ic_logout from '../assets/icons/logout.png';
import {clearData} from '../storage/HandlingAsyncStorage';
import {CommonActions} from '@react-navigation/native';

const CustomeDrawer = props => {
  const {navigation} = props;
  const handleLogout = async () => {
    await clearData();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Logged_Out_Navigator'}],
      }),
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header_container}>
        <Image source={ic_user} style={styles.user_icon} />
        <View style={styles.name_container}>
          <Text style={styles.name_text}>rajasthan</Text>
          <Text style={[styles.num_text]}>+919128433083</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile_details')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Icon
          type="font-awesome"
          name="user"
          color={welcome_background_color}
          size={wp(8)}
        />
        <Text style={styles.drawer_label_text}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('All_history')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Icon
          type="font-awesome"
          name="history"
          color={welcome_background_color}
          size={wp(8)}
        />
        <Text style={styles.drawer_label_text}>My History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Top_winners')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_trophy} />
        <Text style={styles.drawer_label_text}>Top Winners</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Top_starline_winners')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_trophy} />

        <Text style={styles.drawer_label_text}>Top Starline Winners</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Account_statement')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_notes} />

        <Text style={styles.drawer_label_text}>Account Statement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_notification} />

        <Text style={styles.drawer_label_text}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Game_rates')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_list} />

        <Text style={styles.drawer_label_text}>Game Rates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Notice_board_rules')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_information_button} />

        <Text style={styles.drawer_label_text}>Notice Board/Rules</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_settings} />

        <Text style={styles.drawer_label_text}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        activeOpacity={0.8}
        style={styles.drawer_label_container}>
        <Image style={styles.icon_drawer} source={ic_logout} />

        <Text style={styles.drawer_label_text}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
const DrawerNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomeDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#000',
        drawerActiveBackgroundColor: white_color,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home_screen}
        options={{
          drawerLabelStyle: {fontSize: wp(4)},
          drawerIcon: () => (
            <Icon
              type="material-community"
              name="home"
              color={welcome_background_color}
              size={wp(8)}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  header_container: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_icon: {
    height: wp(16),
    width: wp(16),
  },
  name_container: {
    flex: 1,
    marginLeft: wp(3),
  },
  name_text: {
    fontWeight: '900',
    color: '#000',
    fontSize: wp(4),
    letterSpacing: wp(0.15),
  },
  num_text: {
    color: '#000',
    marginTop: hp(0.8),
  },
  drawer_label_container: {
    flexDirection: 'row',
    paddingHorizontal: wp(6),
    paddingVertical: hp(1.2),
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderColor: '#999',
  },
  drawer_label_text: {
    color: '#000',
    fontSize: wp(4),
    fontWeight: '500',
    marginLeft: wp(9),
  },
  icon_drawer: {
    height: wp(7),
    width: wp(7),
  },
});
