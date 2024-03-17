import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {welcome_background_color, white_color} from '../styles/custom_colors';

const Allow_button = ({button_text, button_style}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.button_container, button_style]}>
    <Text style={styles.button_text}>{button_text}</Text>
  </TouchableOpacity>
);

export default Allow_button;

const styles = StyleSheet.create({
  button_container: {
    width: wp(65),
    height: hp(7),
    borderRadius: hp(3.5),
    backgroundColor: white_color,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button_text: {
    color: welcome_background_color,
    fontSize: wp(4.2),
    fontWeight: '800',
  },
});
