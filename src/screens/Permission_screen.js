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
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Allow_button from '../component/Allow_button';
import {welcome_background_color, white_color} from '../styles/custom_colors';

const Image_permission_screen = () => {
  const handleAllowPermission = () => {};
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <View style={styles.homeContainer}>
        {/* <Image style={styles.logoStyle} source */}
        <Text style={styles.permission_text}>
          This Permission is required for Sharing{`\n`}Image to Sata Matka
          Customer Support
        </Text>
      </View>
      <Allow_button
        button_text="ALLOW PERMISSION"
        button_style={styles.button_style}
        onPress={handleAllowPermission}
      />
    </View>
  );
};

const Location_permission_screen = () => {
  const handleAllowPermission = () => {};
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <View style={styles.homeContainer}>
        {/* <Image style={styles.logoStyle} source */}
        <Text style={styles.permission_text}>
          This Permission is required for{`\n`}location validation to Dhan Jito
          {`\n`}Customer Support
        </Text>
      </View>
      <Allow_button
        button_text="ALLOW PERMISSION"
        button_style={styles.button_style}
        onPress={handleAllowPermission}
      />
    </View>
  );
};

const Permission_screen = () => {
  const handleAllowPermission = () => {};
  return (
    <>
      <Image_permission_screen />
    </>
  );
};

export default Permission_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: welcome_background_color,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permission_text: {
    fontSize: wp(4.5),
    color: white_color,
    textAlign: 'center',
    lineHeight: hp(3),
  },
  button_style: {
    bottom: hp(4),
  },
});
