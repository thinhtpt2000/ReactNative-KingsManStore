import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CartListItem from "../components/CartListItem";
import CartTotal from "../components/CartTotal";

import { CartContext } from "../contexts/Cart";

const CartSreen = (props) => {
  //   const getOptimizeCartItems = (cartItems) => {
  //     let tmpCartItems = {};
  //     for (let item of cartItems) {
  //       if (tmpCartItems[item.id] === undefined) {
  //           item.quantity = 1;
  //           tmpCartItems[item.id] = item;
  //       }
  //       else {
  //           tmpCartItems[item.id].quantity += 1;
  //       }
  //     }
  //     cartItems = [];
  //     for (let item in tmpCartItems) {
  //         cartItems.push(tmpCartItems[item]);
  //     }
  //     return cartItems;
  //   };

  return (
    <View style={styles.container}>
      <CartContext.Consumer>
        {({ cartItems }) => {
          // const optimizeCartItems = getOptimizeCartItems(cartItems);
          return (
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartListItem cartItem={item} />}
              keyExtractor={(item) => `${item.id}`}
              style={{paddingHorizontal: 8}}
            />
          );
        }}
      </CartContext.Consumer>
      <CartTotal style={styles.total} />
    </View>
  );
};

CartSreen.navigationOptions = {
  title: "Cart",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 16,
  },
  total: {
    justifyContent: "flex-end",
  },
});

export default CartSreen;
