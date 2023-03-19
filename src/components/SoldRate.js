import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const SoldRate = ({sold, total}) => {
  return (
    <View style={styles.cricle}>
      <Image
        source={require('../assets/home/meter.png')}
        style={styles.meter}
      />
      <Image
        source={require('../assets/home/progress.png')}
        style={styles.meter}
      />
      <View>
        <Text style={styles.soldItems}>{sold}</Text>
        <Text style={styles.soldOf}>{'SOLD\nOUT OF'}</Text>
        <Text style={styles.maxAmount}>{total}</Text>
      </View>
    </View>
  );
};

export default SoldRate;

const styles = StyleSheet.create({
  cricle: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
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
    zIndex: 4,
  },
  soldItems: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#102654',
  },
  soldOf: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#686869',
  },
  maxAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#686869',
  },
  meter: {
    position: 'absolute',
    left: 55,
    bottom: 10,
  },
});
