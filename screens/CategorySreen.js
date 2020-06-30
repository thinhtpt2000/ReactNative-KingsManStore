import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ProductListItem from "../components/ProductListItem";
import axios from "axios";
import { CartContext } from "../contexts/Cart";

const CategorySreen = (props) => {
  const [products, setProducts] = useState([]);
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/products?category=${categoryId}`);
      const data = await res.data;
      setProducts(data);
    };
    fetchData();
    // await axios
    //   .get(`/products?category=${categoryId}`)
    //   .then((res) => {
    //     // console.log(res.data);
    //     setProducts(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <CartContext.Consumer>
            {({addToCart}) => <ProductListItem product={item} onAddToCartClick={()=> addToCart(item)}/>}
          </CartContext.Consumer>
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

CategorySreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("categoryName"),
  };
};

export default CategorySreen;
