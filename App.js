import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
// Import Images Category
import SuitImage from "./assets/suit.png";
import TieImage from "./assets/tie.png";
import SunGlassImage from "./assets/sun-glasses.png";
import WatchImage from "./assets/watch.png";
import TrousersImage from "./assets/trousers.png";
import CaneImage from "./assets/cane.png";
import UmbrellaImage from "./assets/umbrella.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CategoryListItem images={SuitImage} title="Suit Items" />
        <CategoryListItem images={TrousersImage} title="Trousers Items" />
        <CategoryListItem images={TieImage} title="Tie Items" />
        <CategoryListItem images={SunGlassImage} title="Sun Glasses Items" />
        <CategoryListItem images={WatchImage} title="Watch Items" />
        <CategoryListItem images={CaneImage} title="Cane Items" />
        <CategoryListItem images={UmbrellaImage} title="Umbrella Items" />
      </ScrollView>
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
  scrollView: {
    paddingLeft: 16,
    paddingRight: 16
  },
});
