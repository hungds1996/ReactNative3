import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import {gray} from '../styles'
class ItemData extends Component {
  state = {  }
  render() {
    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10}}>
            <Text style={styles.dayOfweek}> Tuesday </Text>
            <Text style={styles.date}> 24 July 2018 </Text>            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    dayOfWeek: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 13,
        color: gray,
        marginStart: 20
    }
})

export default ItemData;