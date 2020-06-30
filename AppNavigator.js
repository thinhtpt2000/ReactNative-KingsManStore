import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import CategorySreen from "./screens/CategorySreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import CartScreen from "./screens/CartScreen";
import SettingScreen from "./screens/SettingScreen";
import OrderScreen from "./screens/OrderScreen";

import IconWithBadge from "./components/IconWithBadge";

import { CartContext } from "./contexts/Cart";

const defaultTabBarOption = {
  activeTintColor: "#147EFB",
  inactiveTintColor: "#CCC",
};

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
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} color={tintColor} />
  ),
  tabBarOptions: defaultTabBarOption,
};

const CartStack = createStackNavigator({
  CartScreen: {
    screen: CartScreen,
  },
});
// CartStack.navigationOptions = {
//   tabBarLabel: "Cart",
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="ios-cart" size={24} color={tintColor} />
//   ),
//   tabBarOptions: defaultTabBarOption,
// };
CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ tintColor }) => (
    <CartContext.Consumer>
      {({ quantity }) => (
        <IconWithBadge
          name="shoppingcart"
          size={24}
          badgeCount={quantity}
          color={tintColor}
        />
      )}
    </CartContext.Consumer>
  ),
  tabBarOptions: defaultTabBarOption,
};

const OrderStack = createStackNavigator({
  OrderScreen: {
    screen: OrderScreen,
  },
});
OrderStack.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="wallet" size={24} color={tintColor} />
  ),
  tabBarOptions: defaultTabBarOption,
};

const SettingStack = createStackNavigator({
  SettingScreen: {
    screen: SettingScreen,
  },
});
SettingStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="setting" size={24} color={tintColor} />
  ),
  tabBarOptions: defaultTabBarOption,
};

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack,
});

AppNavigator.tabBarOptions = defaultTabBarOption;

export default AppNavigator;
