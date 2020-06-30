// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import axios from 'axios';

const AppContainer = createAppContainer(AppNavigator);
axios.defaults.baseURL = 'http://e49ffa446dce.ngrok.io';

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({

});