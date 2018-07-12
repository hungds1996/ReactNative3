/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  YellowBox
} from 'react-native';
import { createStackNavigator } from 'react-navigation'

import ItemList from './ItemList'
import Header from './Header'
YellowBox.ignoreWarnings([''])

const Navigation = createStackNavigator({
  ItemList: {
    screen: ItemList,
    navigationOptions: ({navigation}) => (
      {
        headerTitle: <Header/>,
      }
    )}
})

export default class App extends Component {
  state = {}

  render() {
    return (
      <Navigation/>
    );
  }
}


