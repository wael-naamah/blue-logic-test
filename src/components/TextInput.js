import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import theme from '../styles/theme.style';

const CustomTextInput = ({width, style, ...props}) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#969696"
      style={[styles.input, style, {width: width}]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    fontSize: 14,
    paddingVertical: 8 * theme.BW,
    paddingLeft: 8 * theme.BW,
    marginVertical: 6 * theme.BW,
  },
});

export default CustomTextInput;
