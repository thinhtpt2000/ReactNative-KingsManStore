import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ProductListItem from "../components/ProductListItem";
import axios from "axios";

const CategorySreen = (props) => {
  const [products, setProducts] = useState([]);
  const { navigation } = props;
  const categoryId = navigation.getParam("categoryId");

  useEffect(async () => {
    await axios
      .get(`/products?category=${categoryId}`)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.container}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <ProductListItem product={item} />
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
