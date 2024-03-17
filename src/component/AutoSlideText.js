import React, {useRef, useEffect, memo} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {black_color} from '../styles/custom_colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AutoSlideText = ({text, slideDuration = 10000, gap = 10}) => {
  const textWidth = text.length * 10; // Adjust the multiplier based on your text size and content
  const screenWidth = wp(100);
  const translateX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    const slideAnimation = () => {
      Animated.timing(translateX, {
        toValue: -textWidth,
        duration: slideDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        // Reset the animation when it completes
        translateX.setValue(wp(35));
        slideAnimation();
      });
    };

    slideAnimation();
    return () => {
      // Clean up the animation when the component unmounts
      translateX.stopAnimation();
    };
  }, [slideDuration, textWidth, screenWidth]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{translateX}],
          },
        ]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </View>
  );
};

export default memo(AutoSlideText);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    height: wp(6),
  },
  animatedView: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: wp(4),
    color: black_color,
    textAlignVertical: 'center',
  },
});
