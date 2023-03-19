import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useContext} from 'react';
import withLinearGradient from '../hoc/withLinearGradient';
import theme from '../styles/theme.style';

import {CartContext} from '../context/cartContext';
import ProductItem from '../components/ProductItem';

const Divider = () => <View style={styles.divider} />;
const EmptyCart = () => (
  <View style={styles.emptyCart}>
    <Text style={styles.emptyCartText}>
      You have not added anything to cart
    </Text>
  </View>
);

const Cart = () => {
  const {cart} = useContext(CartContext);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductItem item={item} cartItem />}
          ItemSeparatorComponent={Divider}
          ListEmptyComponent={EmptyCart}
        />
      </View>
    </View>
  );
};

export default withLinearGradient(Cart);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20 * theme.BW,
  },
  list: {
    marginVertical: 20 * theme.BW,
  },
  divider: {
    width: '80%',
    height: 0.5,
    alignSelf: 'center',
    marginVertical: 20 * theme.BW,
    backgroundColor: '#d5d5d5',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
  emptyCart: {
    width: '100%',
    height: 100 * theme.BW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartText: {
    fontWeight: 'bold',
    color: '#102654',
  },
});
