import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {welcome_background_color} from '../styles/custom_colors';
import Header from '../component/Header';

const Profile_details = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <Header title="Profile Deteils" navigation={navigation} />
    </View>
  );
};

export default Profile_details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
