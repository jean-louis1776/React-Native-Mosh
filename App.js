import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';

import Screen from './app/components/Screen';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}