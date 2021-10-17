import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import Card from '../components/Card';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <>
            <ActivityIndicator visible={getListingsApi.loading} />
            <Screen style={styles.screen}>
                {getListingsApi.error && <>
                    <AppText style={[defaultStyles.text, styles.errorText]}>
                        Couldn't retrieve the listings.
                        Please, try later.
                    </AppText>
                    <AppButton title='Retry' onPress={loadListings} />
                </>}
                <FlatList
                    data={getListingsApi.data}
                    keyExtractor={(listing) => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={'$' + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    errorScreen: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 23,
        textAlign: 'center'
    },
    screen: {
        backgroundColor: defaultStyles.colors.light,
        paddingTop: 10
    }
})

export default ListingsScreen;