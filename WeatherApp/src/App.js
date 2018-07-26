import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import MainScreen from './containers/MainScreen'

class App extends Component {
  state = {  }
  render() {
    return (
      <MainScreen/>
    );
  }
}

export default App;