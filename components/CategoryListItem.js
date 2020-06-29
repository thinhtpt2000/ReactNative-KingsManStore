import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default function CategoryListItem(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.categoryImage} source={props.images} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#00F',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1, // use to see shadow in Android,
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        width: 64,
        height: 64
    }
});