import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return (
    <ListingsScreen />
  );
}