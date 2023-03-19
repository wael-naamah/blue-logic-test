import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../styles/theme.style';
import Button from './Button';

const Greeting = ({name, signOut}) => {
  return (
    <View style={styles.content}>
      <Text>Welcome {name}!</Text>

      <Button title={'Sign Out'} style={styles.btn} onPress={() => signOut()} />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  content: {
    minHeight: 200 * theme.BW,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 25 * theme.BW,
    padding: 15 * theme.BW,
    zIndex: 4,
    backgroundColor: '#fff',
  },
  btn: {
    marginVertical: 20 * theme.BW,
    width: 100 * theme.BW,
  },
});
