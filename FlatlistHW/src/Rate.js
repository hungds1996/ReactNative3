import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Rate extends Component {
  state = {
    realRate: this.props.rate,
    rates: [1, 2, 3, 4, 5]
   }
  render() {

    const rects = this.state.rates.map((rate, index) =>(
      <View
        style={{margin: 1, height: 5, width: 12, backgroundColor: rate <= this.state.realRate ? 'green' : 'grey'}}
        id={rate}
      />
    ))

    return (
      <View style={{marginRight: 5, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
        {rects}
      </View>
    );
  }
}

export default Rate;