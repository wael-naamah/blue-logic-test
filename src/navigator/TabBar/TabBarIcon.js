import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CartContext} from '../../context/cartContext';
import theme from '../../styles/theme.style';

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
          <View style={styles.cartQtyContainer}>
            <Text style={styles.cartQty}>{cart.length}</Text>
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
    width: 22 * theme.BW,
    height: 22 * theme.BW,
    resizeMode: 'contain',
  },
  cartQtyContainer: {
    position: 'absolute',
    right: 2 * theme.BW,
    top: -10 * theme.BW,
    backgroundColor: '#E03A3F',
    width: 15 * theme.BW,
    height: 15 * theme.BW,
    borderRadius: (15 / 2) * theme.BW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartQty: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
