import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../styles/theme.style';

const Button = ({title, style, titleStyle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#102654',
    height: 30 * theme.BW,
    borderRadius: 15 * theme.BW,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60 * theme.BW,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Button;
