import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import theme from '../styles/theme.style';

import {CartContext} from '../context/cartContext';

const ProductItem = ({item, cartItem}) => {
  const {addItemToCart, removeItemFromCart} = useContext(CartContext);

  const [quantity, setQuantity] = useState(cartItem ? item.quantity : 1);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleUpdateCart = () => {
    if (cartItem) {
      removeItemFromCart(item);
    } else {
      addItemToCart({...item, quantity});
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>

        <View style={styles.btns}>
          <TouchableOpacity onPress={removeItem}>
            <Image source={require('../assets/home/minus.png')} />
          </TouchableOpacity>
          <Text style={styles.qty}>{quantity}</Text>
          <TouchableOpacity onPress={addItem}>
            <Image source={require('../assets/home/plus.png')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleUpdateCart}>
          <Text style={styles.addItem}>
            {cartItem ? 'Remove from Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
    height: 110 * theme.BW,
    padding: 10 * theme.BW,
    marginLeft: 20 * theme.BW,
    marginRight: 20 * theme.BW,
  },
  itemDetails: {
    marginLeft: 15 * theme.BW,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#686869',
  },
  price: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
  qty: {textAlign: 'center', width: 25 * theme.BW},
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addItem: {
    textAlign: 'center',
    marginVertical: 10 * theme.BW,
    fontSize: 11,
    textDecorationLine: 'underline',
  },
});
