import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './TextInput';
import Button from './Button';

import theme from '../styles/theme.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        width={'100%'}
        value={email}
        onChangeText={value => setEmail(value)}
      />

      <TextInput
        placeholder="Name"
        width={'100%'}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Password"
        width={'100%'}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <View style={styles.mobileInputs}>
        <TextInput
          width={'15%'}
          value={'+971'}
          onChangeText={value => setPassword(value)}
        />
        <TextInput
          placeholder="Mobile"
          width={'80%'}
          value={mobile}
          onChangeText={value => setMobile(value)}
        />
      </View>

      <Button title="Submit" style={styles.btn} onPress={handleSubmit} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  content: {
    height: 'auto',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 25 * theme.BW,
    padding: 15 * theme.BW,
    marginVertical: 10 * theme.BW,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
  mobileInputs: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  btn: {
    width: '90%',
    marginTop: 15 * theme.BW,
  },
});
