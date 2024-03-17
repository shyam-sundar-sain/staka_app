import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {welcome_background_color} from '../styles/custom_colors';

const Bidding_history = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <Header title="Bidding History" navigation={navigation} />
    </View>
  );
};

export default Bidding_history;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
