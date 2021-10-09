import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerStyle: styles.header }}>
        <Tab.Screen
            name='Feed'
            component={FeedNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='home' color={color} size={size} />
            }}
        />
        <Tab.Screen
            name='ListingEdit'
            component={ListingEditScreen}
            options={({ navigation }) => ({
                title: 'Listing Edit',
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('ListingEdit')} />,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
            })}
        />
        <Tab.Screen
            name='AccountScreen'
            component={AccountNavigator}
            options={{
                headerShown: false,
                title: 'Account',
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='account' color={color} size={size} />
            }}
        />
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    header: {
        borderBottomColor: "transparent",
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0
    }
})

export default AppNavigator;