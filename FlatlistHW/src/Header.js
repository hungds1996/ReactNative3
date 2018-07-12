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
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, alignItems: 'center'}}><Text>Back arrow</Text></View>
            <View style={{flex: 1, alignItems: 'center'}}><Text>Places</Text></View>
            <View style={{flex: 1, alignItems: 'center'}}><Text>Menu icon</Text></View>          
        </View>
    );
  }
}

export default Header;