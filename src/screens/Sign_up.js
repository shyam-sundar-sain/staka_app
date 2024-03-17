import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {welcome_background_color, white_color} from '../styles/custom_colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//COMPONENTS
import Allow_button from '../component/Allow_button';

//ICONS
import ic_user from '../assets/icons/user.png';
import ic_lock from '../assets/icons/lock.png';
import ic_call from '../assets/icons/phone-call-button.png';

const Sign_up = () => {
  const [inputs, setInputs] = useState([
    {name: 'Full Name', value: '', icon: ic_user},
    {name: 'Unique Username', value: '', icon: ic_user},
    {name: 'Mobile No', value: '', icon: ic_call},
    {name: 'Password', value: '', icon: ic_lock},
    {name: 'Confirm Password', value: '', icon: ic_lock},
  ]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <View style={styles.homeContainer}>
        <Text style={styles.welcome_text}>Welcome To</Text>
        <Text style={[styles.welcome_text, styles.welcome_text2]}>
          Dhan Jito
        </Text>

        {inputs.map(item => (
          <View key={item.name} style={styles.input_container}>
            <Image source={item.icon} style={styles.input_icon} />
            <TextInput
              style={styles.input_box}
              placeholder={item.name}
              placeholderTextColor="#999"
            />
          </View>
        ))}
        <Text style={styles.lower_text}>
          By click on Signup you are agree with our
        </Text>
        <Text style={[styles.lower_text, styles.lower_text2]}>
          Privacy Policy
        </Text>

        <Allow_button
          button_text="SIGNUP"
          button_style={styles.submit_button}
        />
      </View>
    </View>
  );
};

export default Sign_up;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: welcome_background_color,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome_text: {
    color: white_color,
    fontSize: wp(7),
    fontWeight: '700',
    letterSpacing: wp(0.4),
    marginHorizontal: wp(3),
    marginTop: hp(-3),
  },

  welcome_text2: {
    fontWeight: '900',
    marginTop: hp(0.7),
    marginBottom: hp(1),
  },
  input_container: {
    height: hp(5.5),
    borderRadius: hp(1.5),
    backgroundColor: white_color,
    marginHorizontal: wp(3),
    marginVertical: hp(0.8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_icon: {
    height: wp(4.5),
    width: wp(4.5),
    marginHorizontal: wp(4),
  },
  input_box: {
    flex: 1,
    color: '#999',
    fontSize: wp(4),
    // borderWidth: 1,
  },
  lower_text: {
    color: white_color,
    textAlign: 'center',
    fontSize: wp(4),
  },
  lower_text2: {
    textDecorationLine: 'underline',
    marginTop: hp(0.5),
  },
  submit_button: {
    width: wp(70),
    height: hp(6.5),
    marginTop: hp(2),
  },
});
