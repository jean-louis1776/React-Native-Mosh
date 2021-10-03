import React from 'react';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  View
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='#5b3c88'
        title='Нажми на меня!'
        onPress={() => Alert.prompt('Введите текст...', 'Ваше сообщение', (text) => alert(text))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});