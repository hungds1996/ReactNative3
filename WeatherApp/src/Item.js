import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  View,
  Image,
  StyleSheet
} from 'react-native';
import ChooseImage from './ChooseImage';
class Item extends Component {
  render() {
    
    return (
      <View style={styles.header}>
        <Text style={styles.date}>{this.props.date}</Text>
        <View style={styles.info}>
          <Text style={styles.temp}>{this.props.temp}</Text>
          <ChooseImage weather={this.props.weather} style={{ width: 50, height: 50 }} />
        </View>
      </ View >
    );
  }
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between', paddingHorizontal: '5%', width: width * 0.9,
    backgroundColor: '#2E2B3E',
    alignItems: 'center',
    marginBottom: 5
  },
  date: {
    color: 'white', 
    flex: 5, 
    fontSize: 16
  },
  info: { 
    flex: 3, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  temp: { 
    color: 'white', 
    fontSize: 16 
  }
})

export default Item;