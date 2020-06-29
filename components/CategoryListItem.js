import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import SuitImage from '../assets/suit.png';


export default function CategoryListItem(props) {
    return <View>
        <Text>CategoryListItem</Text>
        <Image source={SuitImage} />
    </View>
}