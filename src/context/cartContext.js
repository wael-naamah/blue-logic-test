import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  function addItemToCart(item) {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex >= 0) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity + item.quantity,
      };
      setCart(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it as a new item
      setCart([...cart, item]);
    }
  }

  function removeItemFromCart(item) {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
