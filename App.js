import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './src/screens/Counter';
import store from './src/store/index';
import Navigation from './src/screens/ToDoList/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
