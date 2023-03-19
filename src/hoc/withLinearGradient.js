import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const withLinearGradient = Component => {
  const WithLinearGradient = props => {
    return (
      <View style={styles.container}>
        <Component {...props} />
        <LinearGradient
          colors={['#ffffff', '#f2f2f2', '#d2d2d2', '#505c62']}
          style={styles.height}
        />
      </View>
    );
  };

  return WithLinearGradient;
};

export default withLinearGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  height: {height: 90},
});
