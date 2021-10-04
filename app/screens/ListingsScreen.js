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

        // <View style={styles.listingCard}>
        //     <Card
        //         title='Red jacket for sale!'
        //         subTitle='$100'
        //         image={require('../assets/jacket.jpg')}
        //     />
        //     <Card
        //         title='Couch in great condition'
        //         subTitle='$1000'
        //         image={require('../assets/couch.jpg')}
        //     />
        // </View>
    );
}
const styles = StyleSheet.create({
    // listingCard: {
    //     backgroundColor: colors.light,
    //     padding: 20,
    //     paddingTop: 50,
    //     flex: 1
    // },
    screen: {
        backgroundColor: colors.light,
        padding: 20,
    }
})

export default ListingsScreen;