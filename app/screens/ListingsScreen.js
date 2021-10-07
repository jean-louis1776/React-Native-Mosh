import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Card from '../components/Card';
import Screen from '../components/Screen';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale!',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]

function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingTop: 10
    }
})

export default ListingsScreen;