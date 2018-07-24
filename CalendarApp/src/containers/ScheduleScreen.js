import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import {white, calendarBackground} from '../styles'
import ItemData from '../components/ItemData'
class ScheduleScreen extends Component {
  state = {  }
  render() {
    return (
        <View
          style={styles.container}
        >
          <CalendarStrip
            style={styles.calendar}
            calendarColor={calendarBackground}

          />
          <ItemData/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  calendar: {
    height: 100
  }
})

export default ScheduleScreen;