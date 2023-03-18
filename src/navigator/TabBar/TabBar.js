import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
  Platform,
} from 'react-native';
import * as shape from 'd3-shape';
import Svg, {Path} from 'react-native-svg';

import StaticTabbar from './StaticTabbar';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const getPath = (height, width) => {
  const tabWidth = width / 5; // tabs = 5

  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 10, y: 0},
    {x: width + 10, y: 10},
    {x: width + 25, y: height - 25},
    {x: width + tabWidth - 15, y: height - 30},
    {x: width + tabWidth - 10, y: -10},
    {x: width + tabWidth, y: -10},
    {x: width + tabWidth, y: -10},
  ]);
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);
  return `${left} ${tab} ${right}`;
};

const TabBar = props => {
  const {width} = Dimensions.get('window');

  const height = 64;
  const value = new Animated.Value(0);

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  const d = getPath(height, width);

  return (
    <Animated.View style={[styles.tab]}>
      <View {...{height, width}}>
        <AnimatedSvg
          width={width * 2}
          {...{height}}
          style={{
            transform: [{translateX}],
          }}>
          <Path fill={'#ffffff'} {...{d}} />
        </AnimatedSvg>
        <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}>
          <StaticTabbar {...{value}} {...props} />
        </View>
      </View>
      <SafeAreaView style={styles.container} />
    </Animated.View>
  );
};

export default TabBar;

const shadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
    },
    android: {
      elevation: 6,
    },
  }),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  tab: {
    position: 'absolute',
    bottom: 0,
  },
  landscapeContainer: {
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    ...shadow,
  },
  landscapeTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
