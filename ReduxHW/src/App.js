import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'
import MathScreen from './components/MathScreen'

const store = createStore(rootReducer)

class App extends Component {
  state = { 
    number: 0
  }

  onPressAdd = () => {
    this.setState({number: 1})
  }

  onPressSubstract = () => {
    this.setState({number: 2})
  }

  render() {
    return (
      <Provider store={store}>
        <MathScreen/>
      </Provider>
    );
  }
}

export default App;