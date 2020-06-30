import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ProductListItem from "../components/ProductListItem";

const productsInitValue = [
  {
    id: 1,
    name: "Vest Đen Viền Trắng",
    images: [
      {
        url:
          "https://salt.tikicdn.com/cache/w390/ts/product/20/c4/c9/a3cd43cc74f959b5963563b9a098c85f.jpg",
      },
      {
        url:
          "https://salt.tikicdn.com/cache/w80/ts/product/e9/50/37/edfc0c5059c1eecf837e700d42a20356.jpg",
      },
    ],
    price: 500000,
  },
  {
    id: 2,
    name: "Vest Xanh Chấm Bi",
    images: [
      {
        url:
          "http://cavino.vn/wp-content/uploads/2017/10/vest-xanh-cham-bi-2.jpg",
      },
      {
        url:
          "http://cavino.vn/wp-content/uploads/2017/10/vest-xanh-cham-bi1.jpg",
      },
    ],
    price: 399000,
  },
];

const CategorySreen = (props) => {
  const [products, setProducts] = useState([]);
  const [isInit, setInit] = useState(false);

  const initProducts = () => setProducts(productsInitValue);

  const initValue = () => {
    if (!isInit) {
      initProducts();
      setInit(true);
    }
  };

  initValue();

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
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  },
});

CategorySreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("categoryName"),
  };
};

export default CategorySreen;
