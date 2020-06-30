import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = (id) => {
    let tmpCartItems = cartItems;
    let idx = 0;
    for (let item of tmpCartItems) {
      if (item.id === id) {
        item.quantity += 1;
        product = item;
        break;
      }
      idx++;
    }
    tmpCartItems[idx] = product;
    setQuantity((quantity) => (quantity += 1));
    setCartItems(tmpCartItems);
  };

  const decreaseQuantity = (id) => {
    let tmpCartItems = cartItems;
    let idx = 0;
    for (let item of tmpCartItems) {
      if (item.id === id) {
        item.quantity -= 1;
        product = item;
        break;
      }
      idx++;
    }
    if (product.quantity === 0) {
      tmpCartItems.splice(idx, 1);
    } else {
      tmpCartItems[idx] = product;
    }
    setQuantity((quantity) => (quantity -= 1));
    setCartItems(tmpCartItems);
  };

  const updateQuantity = (product) => {
    let tmpCartItems = cartItems;
    let idx = 0;
    for (let item of tmpCartItems) {
      if (item.id === product.id) {
        item.quantity += 1;
        product = item;
        break;
      }
      idx++;
    }
    if (idx === cartItems.length) {
      product.quantity = 1;
    }
    tmpCartItems[idx] = product;
    setQuantity((quantity) => (quantity += 1));
    setCartItems(tmpCartItems);
  };

  const addToCart = (product) => {
    // setCartItems(cartItems.concat(product));
    updateQuantity(product);
    Alert.alert("Success", `${product.name} is added to your cart!`);
  };

  const getTotal = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.quantity * item.price;
    }
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        quantity: quantity,
        addToCart: addToCart,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        total: getTotal
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
