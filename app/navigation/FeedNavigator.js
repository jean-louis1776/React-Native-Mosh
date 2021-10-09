import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false, presentation: 'modal' }}>
        <Stack.Screen name='Listings' component={ListingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} options={{ title: 'Listing Details', headerBackTitle: 'Feed', headerShown: false }} />
    </Stack.Navigator>
);

export default FeedNavigator;
