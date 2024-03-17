import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

//COMPONENTS
import {
  black_color,
  welcome_background_color,
  white_color,
} from '../styles/custom_colors';

//ICONS
import ic_user from '../assets/icons/user.png';
import ic_lock from '../assets/icons/lock.png';
import {Icon} from '@rneui/themed';
import {async_keys, storeData} from '../storage/HandlingAsyncStorage';

const Forgot_password_component = ({isVisible, setIsVisible}) => {
  const [inputs, setInputs] = useState([
    {name: 'Enter Phone No', value: ''},
    {name: 'Enter OTP', value: ''},
    {name: 'Enter New Password', value: ''},
    {name: 'Confirm New Password', value: ''},
  ]);
  return (
    <Modal useNativeDriver isVisible={isVisible}>
      <View style={m_styles.container}>
        <View style={m_styles.header_container}>
          <Text style={m_styles.header_text}>Forgot Password.?</Text>
          <Icon
            type="entypo"
            name="circle-with-cross"
            color={white_color}
            size={wp(8)}
            containerStyle={m_styles.icon_cross_container}
            onPress={() => setIsVisible(false)}
          />
        </View>

        <View style={m_styles.home_container}>
          {inputs.map((item, index) => (
            <View key={item.name}>
              <View style={m_styles.input_container}>
                <TextInput
                  style={m_styles.input_box}
                  placeholder={item.name}
                  placeholderTextColor="#999"
                />
              </View>
              {index === 0 && (
                <Text
                  // key={index.toString()}
                  style={m_styles.otp_request_clickable}>
                  Send OTP
                </Text>
              )}
            </View>
          ))}

          <TouchableOpacity activeOpacity={0.8} style={m_styles.submit_button}>
            <Text style={m_styles.submit_text}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Forgot_user_name_component = ({isVisible, setIsVisible}) => {
  return (
    <Modal useNativeDriver isVisible={isVisible}>
      <View style={m_styles.container}>
        <View style={m_styles.header_container}>
          <Text style={m_styles.header_text}>Forgot Username.?</Text>
          <Icon
            type="entypo"
            name="circle-with-cross"
            color={white_color}
            size={wp(8)}
            containerStyle={m_styles.icon_cross_container}
            onPress={() => setIsVisible(false)}
          />
        </View>

        <View style={m_styles.home_container}>
          <View style={m_styles.input_container}>
            <TextInput
              style={m_styles.input_box}
              placeholder="Enter Phone No"
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={m_styles.submit_button}>
            <Text style={m_styles.submit_text}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const m_styles = StyleSheet.create({
  container: {
    backgroundColor: white_color,
    borderRadius: hp(2),
    overflow: 'hidden',
  },
  header_container: {
    backgroundColor: welcome_background_color,
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    justifyContent: 'center',
  },
  header_text: {
    color: white_color,
    fontSize: wp(5),
    fontWeight: '900',
  },
  icon_cross_container: {
    position: 'absolute',
    right: 5,
  },
  home_container: {
    backgroundColor: white_color,
  },
  input_container: {
    backgroundColor: '#f1f1f1',
    borderRadius: hp(1),
    marginVertical: hp(1),
    marginHorizontal: wp(5),
    paddingLeft: wp(4),
    height: hp(5),
  },
  input_box: {
    flex: 1,
    color: '#999',
  },
  submit_button: {
    backgroundColor: welcome_background_color,
    height: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1.5),
    marginHorizontal: wp(5),
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  submit_text: {
    color: white_color,
    fontWeight: '500',
  },
  otp_request_clickable: {
    textAlign: 'right',
    color: welcome_background_color,
    marginHorizontal: wp(5),
    marginBottom: hp(0.5),
    fontWeight: '500',
  },
});

const Log_in = ({navigation, route}) => {
  const [inputs, setInputs] = useState({
    user_name: '',
    password: '',
  });
  const [is_forgot_user_name_modal, setIs_forgot_user_name_modal] =
    useState(false);

  const [is_forgot_password_modal, setIs_forgot_password_modal] =
    useState(false);

  const user_name = '1234567890';
  const password = '123456';

  const hanldeInputs = (text, key) => {
    const obj = {...inputs, [key]: text};
    setInputs(obj);
  };

  const hanldeLogin = async () => {
    if (inputs.user_name === user_name && password === inputs.password) {
      await storeData(async_keys.isLogIn, true);
      navigation.navigate('Logged_In_Navigator');
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />

      <Forgot_password_component
        isVisible={is_forgot_password_modal}
        setIsVisible={setIs_forgot_password_modal}
      />

      <Forgot_user_name_component
        isVisible={is_forgot_user_name_modal}
        setIsVisible={setIs_forgot_user_name_modal}
      />

      <View style={styles.homeContainer}>
        <Text style={styles.login_title_text}>Log In</Text>

        <View style={styles.input_container}>
          <Image style={styles.input_image} source={ic_user} />
          <TextInput
            style={styles.input_box}
            placeholder="User Name / Mobile No."
            placeholderTextColor="#999"
            onChangeText={text => hanldeInputs(text, 'user_name')}
            value={inputs.user_name}
          />
        </View>
        <View style={styles.input_container}>
          <Image style={styles.input_image} source={ic_lock} />
          <TextInput
            style={styles.input_box}
            placeholder="Password"
            placeholderTextColor="#999"
            onChangeText={text => hanldeInputs(text, 'password')}
            value={inputs.password}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.login_button_container}
          onPress={hanldeLogin}>
          <Text style={styles.login_button_text}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.sign_up_text}>
          Don't have an Account?{' '}
          <Text
            onPress={() => navigation.navigate('Sign_up')}
            style={{color: welcome_background_color}}>
            SignUp Here
          </Text>
        </Text>
        <View style={styles.lower_container}>
          <Text
            onPress={() => setIs_forgot_password_modal(true)}
            style={styles.lower_text}>
            Forgot Password?
          </Text>
          <Text
            style={styles.lower_text}
            onPress={() => setIs_forgot_user_name_modal(true)}>
            Forgot Username?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Log_in;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white_color,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  login_title_text: {
    color: black_color,
    fontSize: wp(7),
    textAlign: 'center',
    fontWeight: '600',
  },
  input_container: {
    marginHorizontal: wp(4),
    height: hp(6),
    borderRadius: hp(1.5),
    backgroundColor: '#f1f1f1',
    paddingHorizontal: wp(3),
    marginTop: hp(3.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_image: {
    width: wp(5),
    height: wp(5),
    marginHorizontal: wp(2),
  },
  input_box: {
    flex: 1,
    color: '#999',
    fontSize: wp(4),
    fontWeight: '500',
  },
  login_button_container: {
    height: hp(6.5),
    backgroundColor: welcome_background_color,
    marginHorizontal: wp(14),
    marginTop: hp(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1.5),
  },
  login_button_text: {
    color: white_color,
    fontWeight: '500',
    fontSize: wp(4.2),
  },
  sign_up_text: {
    color: '#999',
    textAlign: 'center',
    letterSpacing: wp(0.2),
    marginTop: hp(1.5),
  },
  lower_container: {
    flexDirection: 'row',
    marginTop: hp(5),
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
    marginBottom: hp(2),
  },
});
