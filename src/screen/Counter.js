import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
@inject('store')
@observer
class Counter extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>hello</Text>
        </View>
        <Text>Count:{this.props.store.getUpdatedCount}</Text>
        <Button
          title={'increment'}
          onPress={() => this.props.store.increment()}
        />
        <Button
          title={'decrement'}
          onPress={() => this.props.store.decrement()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Counter;
