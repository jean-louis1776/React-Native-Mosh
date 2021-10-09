import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            // headerShadowVisible: false,
        }}
    >
        <Stack.Screen
            name='Account'
            component={AccountScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
            name='Messages'
            component={MessagesScreen}
        // options={{
        //     title: 'Listing Details',
        //     headerBackTitle: 'Feed',
        //     headerShown: false
        // }}
        />
    </Stack.Navigator>
);

export default AccountNavigator;
