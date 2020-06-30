import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { formatPrice } from "../utils/Number";
import { CartContext } from "../contexts/Cart";

export default CartListItem = (props) => {
  const { cartItem } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: cartItem.images[0].url,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{cartItem.name}</Text>
        <Text style={styles.price}>{formatPrice(cartItem.price)}</Text>
      </View>
      <View style={styles.actionRow}>
        <CartContext.Consumer>
          {({ decreaseQuantity }) => (
            <TouchableOpacity onPress={() => decreaseQuantity(cartItem.id)}>
              <Icon name="minuscircle" size={24} color="#CCC" />
            </TouchableOpacity>
          )}
        </CartContext.Consumer>
        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <CartContext.Consumer>
          {({ increaseQuantity }) => (
            <TouchableOpacity onPress={() => increaseQuantity(cartItem.id)}>
              <Icon name="pluscircle" size={24} color="#CCC" />
            </TouchableOpacity>
          )}
        </CartContext.Consumer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // use to see shadow in Android
    marginBottom: 16,
  },
  info: {
    flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  img: {
    width: 72,
    height: 72,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
