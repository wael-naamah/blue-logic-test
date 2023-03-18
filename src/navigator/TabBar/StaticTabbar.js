import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
} from 'react-native';
const {width} = Dimensions.get('window');

import TabIcon from './TabBarIcon';

const StaticTabbar = ({state: {routes}, state, value, navigation}) => {
  const [values, setValues] = useState(
    routes.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)),
  );

  const moveTabs = index => {
    const tabWidth = width / routes.length;

    values.map(v =>
      Animated.timing(v, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(),
    );
    Animated.spring(value, {
      toValue: tabWidth * index,
      useNativeDriver: true,
    }).start();
    Animated.timing(values[index], {
      toValue: 1,
      duration: 500,

      useNativeDriver: true,
    }).start();
  };

  // set tabs to the first index (home page)
  useEffect(() => {
    moveTabs(0);
  });

  // move tabs to the active route
  useEffect(() => {
    moveTabs(state.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index]);

  return (
    <View style={styles.container}>
      {routes.map((route, key) => {
        const label = route.name;
        const isFocused = state.index === key;

        const onTabPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let cursorKey = key;
        const tabWidth = width / routes.length;
        const cursor = tabWidth * cursorKey;
        const opacity = value.interpolate({
          inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [64, 0],
          extrapolate: 'clamp',
        });
        const opacity1 = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });

        return (
          <React.Fragment {...{key}}>
            {/* render active all tab bar */}
            <TouchableWithoutFeedback
              style={{flex: 1}}
              delayPressIn={1}
              onPress={onTabPress}>
              <Animated.View style={[styles.tab, {opacity}]}>
                <TabIcon route={route} />
              </Animated.View>
            </TouchableWithoutFeedback>
            {/* render active active tab bar */}
            <Animated.View
              style={[
                styles.animatedView,
                {
                  left: tabWidth * key,
                  width: tabWidth,
                  opacity: opacity1,
                  transform: [{translateY}],
                },
              ]}>
              <View style={styles.activeIcon}>
                <TabIcon route={route} />
              </View>
              <Text style={styles.activeLabel}>{label}</Text>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default StaticTabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  activeIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  animatedView: {
    position: 'absolute',
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLabel: {fontSize: 10, top: 12},
});
