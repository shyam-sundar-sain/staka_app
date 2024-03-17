/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
import React, {useState, useEffect, useRef, useMemo, memo} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {
  black_color,
  welcome_background_color,
  welcome_background_color_low,
  white_color,
} from '../styles/custom_colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//COMPONENT
import Header from '../component/Header';
import AutoSlideText from '../component/AutoSlideText';
//ICONS
import ic_whatsapp from '../assets/icons/whatsapp.png';
import ic_telegram from '../assets/icons/telegram.png';
import FooterComponent from '../component/FooterComponent';
import {Icon} from '@rneui/themed';
import {useIsFocused} from '@react-navigation/native';

const Home_screen = ({navigation}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (!isFocused) {
      navigation.closeDrawer();
    }
  }, [isFocused]);
  const gamesData = [
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:35 PM',
      close: '5:35 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'closed',
    },
    {
      open: '3:30 PM',
      close: '5:30 PM',
      day: 'supreme day',
      game_id: '579-12-499',
      status: 'open',
    },
  ];
  const RenderGames = useMemo(
    () =>
      memo(({item, index}) => {
        return (
          <View key={index.toString()} style={styles.list_container}>
            <View style={styles.list_header_container}>
              <Text style={styles.list_header_text}>OPEN : {item.open}</Text>
              <Text style={styles.list_header_text}>CLOSE : {item.close}</Text>
            </View>

            <View style={styles.list_home_container}>
              <View style={styles.list_left_container}>
                <View style={styles.supreme_text_container}>
                  <Text style={styles.supreme_text}>{item.day}</Text>
                  <Icon
                    type="material-community"
                    name="information-outline"
                    color="rgba(255,0,0,.5)"
                    size={wp(5)}
                  />
                </View>

                <Text style={styles.below_of_supreme_text}>{item.game_id}</Text>
                {/* {item.status === 'closed' && ( */}
                <Text
                  style={[
                    styles.beting_close_text,
                    item.status === 'open' && {color: 'green'},
                  ]}>
                  Betting is{' '}
                  {item.status === 'open' ? 'Running Now' : 'Closed for Today'}
                </Text>
                {/* )} */}
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.list_right_container}>
                <Icon type="antdesign" name="play" color={white_color} />
                <Text style={styles.playText}>Play{`\n`}Game</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }),

    [],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={welcome_background_color}
        barStyle="light-content"
      />
      <Header home title="Dhan Jito" navigation={navigation} />
      <AutoSlideText text="Withdrawal Timing 8 AM To 8 PM Din Mein Kitni Bar Bhi Withdrawal Le Sakte Hain." />

      {/* SOCIAL MEDIA CONTAINER */}
      <View style={styles.social_media_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.milan_starline_container}>
          <Text style={styles.milan_starline_text}>Milan Starline</Text>
        </TouchableOpacity>

        {/* WHATSAPP */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.social_media_icon_container,
            {marginHorizontal: wp(4)},
          ]}>
          <Image style={styles.social_media_icon} source={ic_whatsapp} />
        </TouchableOpacity>

        {/* TELEGRAM */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.social_media_icon_container}>
          <Image style={styles.social_media_icon} source={ic_telegram} />
        </TouchableOpacity>
      </View>

      {/* RECHARGE & WITHDRAW */}
      <View style={styles.fund_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Log_in')}
          style={styles.reacharge_container}>
          <Text style={styles.reacharge_text}>RECHARGE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.reacharge_container, {marginLeft: wp(4)}]}>
          <Text style={styles.reacharge_text}>WITHDRAW</Text>
        </TouchableOpacity>
      </View>

      {/* ???????????????????????? */}
      <View style={styles.home_container}>
        <FlatList
          data={gamesData}
          renderItem={({item, index}) => (
            <RenderGames item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <FooterComponent navigation={navigation} />
    </View>
  );
};

export default Home_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white_color,
  },
  header_container: {
    backgroundColor: welcome_background_color,
    paddingVertical: 10,
  },
  social_media_container: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    justifyContent: 'space-between',
  },
  milan_starline_container: {
    // flex: 2,
    backgroundColor: welcome_background_color,
    paddingHorizontal: wp(7),
    borderRadius: hp(1),
    justifyContent: 'center',
  },
  milan_starline_text: {
    color: white_color,
    fontWeight: '500',
    fontSize: wp(5),
  },
  social_media_icon_container: {
    padding: wp(4),
    paddingHorizontal: wp(5),
    backgroundColor: welcome_background_color,
    alignItems: 'center',
    borderRadius: hp(1),
    // flex: 1,
  },
  social_media_icon: {
    height: wp(10),
    width: wp(10),
  },
  fund_container: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    marginBottom: hp(2),
  },
  reacharge_container: {
    flex: 1,
    borderRadius: hp(1.6),
    borderWidth: 0.5,
    borderColor: welcome_background_color,
    paddingVertical: hp(0.8),
    alignItems: 'flex-end',
  },
  reacharge_text: {
    marginRight: wp(3),
    color: '#777',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  home_container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    marginBottom: hp(-3),
    paddingBottom: hp(3),
    marginTop: hp(1),
  },

  list_container: {
    backgroundColor: white_color,
    borderRadius: hp(1),
    overflow: 'hidden',
    marginHorizontal: wp(4),
    marginVertical: hp(0.5),
    borderWidth: 1,
    borderColor: welcome_background_color,
  },
  list_header_container: {
    backgroundColor: welcome_background_color_low,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list_header_text: {
    color: white_color,
    fontSize: wp(3),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  list_home_container: {
    backgroundColor: white_color,
    flexDirection: 'row',
  },
  list_left_container: {
    marginLeft: wp(2.5),
    flex: 1,
    // borderWidth: 1,
  },
  supreme_text_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: hp(1),
    // borderWidth: 1,
  },
  supreme_text: {
    color: '#806d66',
    fontWeight: '500',
    marginRight: wp(2),
    textTransform: 'uppercase',
    // borderWidth: 1,
  },
  below_of_supreme_text: {
    color: '#31688d',
    fontSize: wp(3.3),
    fontWeight: '700',
  },
  beting_close_text: {
    marginVertical: hp(1),
    color: '#ff4b51',
    fontSize: wp(3),
    fontWeight: '500',
  },
  list_right_container: {
    backgroundColor: welcome_background_color,
    borderRadius: hp(1),
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.6),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2.5),
  },
  playText: {
    color: white_color,
    fontSize: wp(3.3),
    fontWeight: '500',
    textAlign: 'center',
    marginLeft: wp(2),
  },
});
