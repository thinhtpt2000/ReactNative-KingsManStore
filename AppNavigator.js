import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CategorySreen from './screens/CategorySreen';
import CategoriesScreen from './screens/CategoriesScreen';


const AppNavigator = createStackNavigator({
    CategoriesScreen: {
        screen: CategoriesScreen
    },
    CategorySreen: {
        screen: CategorySreen
    }
});

export default AppNavigator;