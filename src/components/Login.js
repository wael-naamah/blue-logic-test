import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './TextInput';
import Button from './Button';
import theme from '../styles/theme.style';
import Greeting from './Greeting';

import {
  isValidEamil,
  isValidMobile,
  isStrongPassword,
  getStrongPasswordErrorMessage,
  isSubmitDisabled,
} from 'utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    setLoggedIn(true);
  };

  const signOut = () => {
    setEmail('');
    setName('');
    setPassword('');
    setMobile('');
    setLoggedIn(false);
  };
  if (loggedIn) {
    return <Greeting name={name} signOut={() => signOut()} />;
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        width={'100%'}
        value={email}
        keyboardType="email-address"
        errorMessage={
          email && !isValidEamil(email)
            ? 'Oh no! Please enter a valid email'
            : ''
        }
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
        secureTextEntry={true}
        value={password}
        errorMessage={
          password && !isStrongPassword(password)
            ? getStrongPasswordErrorMessage(password)
            : ''
        }
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
          errorMessage={
            mobile && !isValidMobile(mobile)
              ? 'Oh no! Please enter a valid mobile (ex: 5xxxxxxxx)'
              : ''
          }
          onChangeText={value => setMobile(value)}
          keyboardType="phone-pad"
        />
      </View>

      <Button
        title="Submit"
        style={styles.btn}
        disabled={isSubmitDisabled(email, mobile, name, password)}
        onPress={handleSubmit}
      />
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
