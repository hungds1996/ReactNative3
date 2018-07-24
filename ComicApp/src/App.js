/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ComicListScreen from './ComicListScreen'
import ComicDetail from './ComicDetail'

YellowBox.ignoreWarnings([''])

const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({navigaiton}) => (
      {title: 'Comics'}
    )
  },
  ComicDetail:{
    screen: ComicDetail
  }
})

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
