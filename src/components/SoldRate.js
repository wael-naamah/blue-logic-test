import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SoldRate = () => {
  return (
    <View style={styles.cricle}>
      <Text>SoldRate</Text>
    </View>
  );
};

export default SoldRate;

const styles = StyleSheet.create({
  cricle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderRightRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: -40,
    left: -60,
    zIndex: 2,
  },
});
