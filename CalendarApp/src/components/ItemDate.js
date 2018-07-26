import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import {gray} from '../styles'
class ItemDate extends Component {
  state = {  }
  render() {
    const dayOfWeek = this.props.date.substring(0, this.props.date.indexOf(" "))
    const date = this.props.date.substring(this.props.date.indexOf("") + 1)

    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10, marginStart: 20, alignItems: 'baseline' }}>
            <Text style={styles.dayOfWeek}> Tuesday </Text>
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

export default ItemDate;