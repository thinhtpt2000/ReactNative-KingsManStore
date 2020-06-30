import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import CategorySreen from "./screens/CategorySreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import CartScreen from "./screens/CartScreen";
import SettingScreen from "./screens/SettingScreen";
import OrderScreen from "./screens/OrderScreen";

const CategoryStack = createStackNavigator({
  CategoriesScreen: {
    screen: CategoriesScreen,
  },
  CategorySreen: {
    screen: CategorySreen,
  },
});
CategoryStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: () => <Icon name="ios-home" size={24}/>,
};

const CartStack = createStackNavigator({
  CartScreen: {
    screen: CartScreen,
  },
});
CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: () => <Icon name="ios-cart" size={24}/>
};

const OrderStack = createStackNavigator({
  OrderScreen: {
    screen: OrderScreen,
  },
});
OrderStack.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: () => <Icon name="ios-card" size={24}/>,
};

const SettingStack = createStackNavigator({
  SettingScreen: {
    screen: SettingScreen,
  },
});
SettingStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: () => <Icon name="ios-settings" size={24}/>
};

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack,
});

export default AppNavigator;
