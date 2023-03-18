import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CartContext} from '../../context/cartContext';

const TabBarIcon = ({route}) => {
  const {cart} = useContext(CartContext);

  if (route.name === 'Home') {
    return (
      <Image source={require('../../assets/home.png')} style={styles.tabIcon} />
    );
  } else if (route.name === 'Tickets') {
    return (
      <Image
        source={require('../../assets/ticket.png')}
        style={styles.tabIcon}
      />
    );
  } else if (route.name === 'Favorite') {
    return (
      <Image
        source={require('../../assets/heart.png')}
        style={styles.tabIcon}
      />
    );
  } else if (route.name === 'Cart') {
    return (
      <View>
        {cart.length ? (
          <View>
            <Text>{cart.length}</Text>
          </View>
        ) : null}
        <Image
          source={require('../../assets/cart.png')}
          style={styles.tabIcon}
        />
      </View>
    );
  } else {
    return (
      <Image
        source={require('../../assets/account.png')}
        style={styles.tabIcon}
      />
    );
  }
};

export default TabBarIcon;

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
