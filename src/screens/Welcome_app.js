import {CommonActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {async_keys, getData} from '../storage/HandlingAsyncStorage';
import {welcome_background_color, white_color} from '../styles/custom_colors';

const Welcome_app = ({navigation}) => {
  const [checkingUpdate, setCheckingUpdate] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchData();
    }, 2000);

    // return () => timeOutId();
  }, []);

  const fetchData = async () => {
    const isLogin = await getData(async_keys.isLogIn);
    if (isLogin) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Logged_In_Navigator'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Logged_Out_Navigator'}],
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <View style={styles.homeContainer}>
        {/* <Image style={styles.logoStyle} source */}
        <Text style={styles.welcome_text}>WELCOME TO DHAN JITO</Text>
      </View>

      {/* <Text style={styles.app_version_text}>App Version : 1.0.8</Text> */}
    </View>
  );
};

export default Welcome_app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: welcome_background_color,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  welcome_text: {
    fontSize: wp(4.8),
    color: white_color,
    textAlign: 'center',
    lineHeight: hp(3),
    fontWeight: '900',
  },
  update_checking_text: {
    fontSize: wp(3),
    color: white_color,
    textAlign: 'center',
    bottom: hp(3.5),
  },
  app_version_text: {
    fontSize: wp(3.5),
    color: white_color,
    textAlign: 'center',
    bottom: hp(3),
  },
});
