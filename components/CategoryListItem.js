import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CategoryListItem(props) {
  const { category } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{category.title}</Text>
        <Image style={styles.categoryImage} source={category.imageIcon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
});
