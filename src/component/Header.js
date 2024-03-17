import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  back_icon_background_color,
  welcome_background_color,
  white_color,
} from '../styles/custom_colors';
import {Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//ICONS
import ic_menu from '../assets/icons/menus.png';

const Header = ({style, home = false, title, navigation}) => {
  return (
    <View style={[styles.header_container, style, !home && styles.rounding]}>
      <View style={styles.first_container}>
        {home ? (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            activeOpacity={0.8}>
            <Image source={ic_menu} style={styles.menu_icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.8}>
            <Icon
              reverse
              type="ionicon"
              name="chevron-back"
              size={wp(3.3)}
              color={back_icon_background_color}
              containerStyle={styles.back_icon_container}
              iconStyle={styles.back_icon_style}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        )}

        <Text
          style={[
            styles.title_text,
            home && {fontWeight: '400', fontSize: wp(4.5)},
          ]}>
          {title}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.right_icon_container}>
        <Icon
          type="ionicon"
          name="wallet"
          size={wp(5)}
          color={white_color}
          containerStyle={styles.wallet_icon_container}
        />
        <Text style={styles.wallet_text}>0</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: welcome_background_color,
    paddingVertical: hp(1.3),
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rounding: {
    borderBottomLeftRadius: hp(3),
    borderBottomRightRadius: hp(3),
  },
  first_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu_icon: {
    width: wp(8),
    height: wp(8),
    marginLeft: wp(-2),
  },
  back_icon_container: {
    margin: 0,
  },
  back_icon_style: {
    fontSize: wp(6),
  },
  title_text: {
    color: white_color,
    fontWeight: '700',
    marginLeft: wp(5),
    fontSize: wp(3.9),
  },
  right_icon_container: {
    backgroundColor: back_icon_background_color,
    borderRadius: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(8),
  },
  wallet_icon_container: {
    position: 'absolute',
    left: wp(1),
  },
  wallet_text: {
    color: white_color,
    marginLeft: wp(1.5),
  },
});
