import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {welcome_background_color} from '../styles/custom_colors';

const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <Header title="Notifications" navigation={navigation} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
