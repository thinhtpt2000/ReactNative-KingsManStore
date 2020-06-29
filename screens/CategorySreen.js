import React from "react";
import { StyleSheet, Text } from "react-native";

const CategorySreen = props => {
  return (
    <Text style={styles.container}>
      Category
    </Text>
  );
}

const styles = StyleSheet.create({

});

CategorySreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('categoryName')
  }
}

export default CategorySreen;