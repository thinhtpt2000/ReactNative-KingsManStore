import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CartContext } from "../contexts/Cart";
import { formatPrice } from "../utils/Number";

const CartTotal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.label}>Total:</Text>
        <CartContext.Consumer>
          {({ total }) => (
            <Text style={styles.price}>{formatPrice(total())}</Text>
          )}
        </CartContext.Consumer>
      </View>
      <Button title="Check Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 8,
    marginBottom: 16
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: '700'
  }
});

export default CartTotal;
