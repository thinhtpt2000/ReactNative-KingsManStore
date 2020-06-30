// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator";
import axios from "axios";

import { CartProvider } from "./contexts/Cart";

const AppContainer = createAppContainer(AppNavigator);
axios.defaults.baseURL = "http://50098360bd78.ngrok.io";

export default function App() {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
