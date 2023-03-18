import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import withLinearGradient from '../hoc/withLinearGradient';
import Login from '../components/Login';
import Main from '../components/Main';
import theme from '../styles/theme.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentStyle}>
        <Login />
        <Main />
      </ScrollView>
    </View>
  );
};

export default withLinearGradient(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25 * theme.BW,
  },
  scroll: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
