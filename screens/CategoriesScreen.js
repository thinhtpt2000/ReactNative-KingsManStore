import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
import axios from "axios";

const CategoriesScreen = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await axios
      .get("/categories")
      .then((res) => {
        // console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() =>
              navigation.navigate("CategorySreen", {
                categoryName: item.title,
                categoryId: item.id,
              })
            }
          />
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  flatList: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

CategoriesScreen.navigationOptions = {
  title: "Home",
};

export default CategoriesScreen;
