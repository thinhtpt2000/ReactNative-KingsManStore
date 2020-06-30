import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export const CartContext = React.createContext();

export const CartProvider = props => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = product => {
        setCartItems(cartItems.concat(product));
        Alert.alert('Success', `${product.name} is added to your cart!`);
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addToCart: addToCart
        }}>
            {props.children}
        </CartContext.Provider>
    );
}