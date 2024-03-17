import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import {welcome_background_color} from '../styles/custom_colors';

const Notice_board_rules = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <Header title="Notice Board/Rules" navigation={navigation} />
    </View>
  );
};

export default Notice_board_rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
