import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//COLORS
import {white_color} from '../styles/custom_colors';

//ICON
import ic_profile from '../assets/icons/profile-user.png';
import ic_history from '../assets/icons/history.png';
import ic_passbook from '../assets/icons/book-of-black-cover-closed.png';
import ic_bid from '../assets/icons/auction.png';

const FooterComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Bidding_history')}
        activeOpacity={0.8}
        style={styles.FooterContainer}>
        <Image source={ic_bid} style={styles.footer_icon} />
        <Text style={styles.footer_text}>My Bids</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile_details')}
        activeOpacity={0.8}
        style={styles.FooterContainer}>
        <Image source={ic_profile} style={styles.footer_icon} />
        <Text style={styles.footer_text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Account_statement')}
        activeOpacity={0.8}
        style={styles.FooterContainer}>
        <Image source={ic_passbook} style={styles.footer_icon} />
        <Text style={styles.footer_text}>Passbook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('All_history')}
        activeOpacity={0.8}
        style={styles.FooterContainer}>
        <Image source={ic_history} style={styles.footer_icon} />
        <Text style={styles.footer_text}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  container: {
    // height: hp(8),
    backgroundColor: white_color,
    elevation: 5,
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    padding: hp(1),
    flexDirection: 'row',
  },
  FooterContainer: {
    padding: hp(1),
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  footer_icon: {
    width: wp(8),
    height: wp(8),
  },
  footer_text: {
    color: '#7a7a7a',
    fontWeight: '500',
  },
});
