import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
// Import Images Category
import SuitImage from "./assets/suit.png";
import TieImage from "./assets/tie.png";
import SunGlassImage from "./assets/sun-glasses.png";
import WatchImage from "./assets/watch.png";
import TrousersImage from "./assets/trousers.png";
import CaneImage from "./assets/cane.png";
import UmbrellaImage from "./assets/umbrella.png";

const categoriesInitValue = [
  { id: 1, title: "Suit Items", imageIcon: SuitImage },
  { id: 2, title: "Trousers Items", imageIcon: TrousersImage },
  { id: 3, title: "Tie Items", imageIcon: TieImage },
  { id: 4, title: "Sun Glasses Items", imageIcon: SunGlassImage },
  { id: 5, title: "Watch Items", imageIcon: WatchImage },
  { id: 6, title: "Cane Items", imageIcon: CaneImage },
  { id: 7, title: "Umbrella Items", imageIcon: UmbrellaImage },
];

export default function App() {
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

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
        {/* <CategoryListItem images={SuitImage} title="Suit Items" />
        <CategoryListItem images={TrousersImage} title="Trousers Items" />
        <CategoryListItem images={TieImage} title="Tie Items" />
        <CategoryListItem images={SunGlassImage} title="Sun Glasses Items" />
        <CategoryListItem images={WatchImage} title="Watch Items" />
        <CategoryListItem images={CaneImage} title="Cane Items" />
        <CategoryListItem images={UmbrellaImage} title="Umbrella Items" /> */}
        {/* {categories.map((item) => {
          return (
            <CategoryListItem
              key={item.id}
              category={item}
            />
          );
        })} */}
      {/* </ScrollView> */}

      <FlatList
          style={styles.flatList}
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              category={item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    alignItems: "stretch",
    justifyContent: "center",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  // scrollView: {
  //   paddingLeft: 16,
  //   paddingRight: 16,
  // },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
