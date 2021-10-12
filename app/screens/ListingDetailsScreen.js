import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-expo-image-cache'

import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import defaultStyles from '../config/styles';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: defaultStyles.colors.light, flex: 1 }}>
            <Image style={styles.image} preview={{ uri: listing.images[0].thumbnailUrl }} tint='light' uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/avatar.png')}
                        title='Ilya Aleksin'
                        subTitle='5 Listings'
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: defaultStyles.colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 40,
        borderRadius: 15,
        overflow: 'hidden',
        // shadowOffset: { width: 10, height: 10 },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        // shadowColor: defaultStyles.colors.shadowColor,
        // elevation: 10
    }
})

export default ListingDetailsScreen;