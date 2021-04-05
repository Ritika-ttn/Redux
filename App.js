import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'mobx-react';
import CounterStore from './src/store/CounterStore';
import Counter from './src/screen/Counter';
class App extends Component {
  render() {
    return (
      <Provider store={CounterStore}>
        <Counter />
      </Provider>
    );
  }
}
export default App;
