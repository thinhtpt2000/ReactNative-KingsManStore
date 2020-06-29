import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
// Import Images Category
import SuitImage from "../assets/suit.png";
import TieImage from "../assets/tie.png";
import SunGlassImage from "../assets/sun-glasses.png";
import WatchImage from "../assets/watch.png";
import TrousersImage from "../assets/trousers.png";
import CaneImage from "../assets/cane.png";
import UmbrellaImage from "../assets/umbrella.png";

const categoriesInitValue = [
  { id: 1, title: "Suit Items", imageIcon: SuitImage },
  { id: 2, title: "Trousers Items", imageIcon: TrousersImage },
  { id: 3, title: "Tie Items", imageIcon: TieImage },
  { id: 4, title: "Sun Glasses Items", imageIcon: SunGlassImage },
  { id: 5, title: "Watch Items", imageIcon: WatchImage },
  { id: 6, title: "Cane Items", imageIcon: CaneImage },
  { id: 7, title: "Umbrella Items", imageIcon: UmbrellaImage },
];

const CategoriesScreen = (props) => {
  const [categories, setCategories] = useState([]);
  const [isInit, setInit] = useState(false);

  const initCategory = () => setCategories(categoriesInitValue);

  const initValue = () => {
    if (!isInit) {
      initCategory();
      setInit(true);
    }
  };

  initValue();

  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={categories}
        renderItem={({ item }) => 
        <CategoryListItem 
        category={item} 
        onPress={() => navigation.navigate('CategorySreen', {
          categoryName: item.title
        })}
        />
    }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

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
    title: 'Home'
}

export default CategoriesScreen;
