import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Header extends Component {
  state = {  }
  render() {
    return (
        <View style={{
          paddingVertical: 5,
          backgroundColor: 'steelblue'
        }}>
          <Text 
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              textAlign: 'center',
            }} >
            {this.props.data}
          </Text>
        </View>
    );
  }
}

export default Header;