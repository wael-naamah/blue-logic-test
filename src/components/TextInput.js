import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import theme from '../styles/theme.style';

const CustomTextInput = ({width, style, errorMessage, ...props}) => {
  return (
    <View style={{width: width}}>
      <TextInput
        {...props}
        autoCorrect={false}
        placeholderTextColor="#969696"
        style={[styles.input, style, errorMessage && styles.errorBorder]}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
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
  errorBorder: {
    borderBottomColor: 'red',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    paddingLeft: 8 * theme.BW,
    alignSelf: 'flex-start',
  },
});

export default CustomTextInput;
