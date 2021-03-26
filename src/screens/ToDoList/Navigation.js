import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import ToDoList from './index';
import AddData from './AddData';
const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="ToDoList"
            component={ToDoList}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AddData"
            component={AddData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;
