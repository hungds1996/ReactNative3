import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SectionList
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

import {white, calendarBackground} from '../styles'
import ItemDate from '../components/ItemDate'
import ItemTask from '../components/ItemTask'

import {data} from '../database.json'

class ScheduleScreen extends Component {
  state = {  }

  renderItem = ({item}) => <ItemTask task={item}/>

  renderSectionHeader = ({section: {date}}) => <ItemDate date={date}/>

  render() {
    return (
        <View
          style={styles.container}
        >
          <CalendarStrip
            style={styles.calendar}
            calendarColor={calendarBackground}

          />
          <SectionList
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            sections={data}
            keyExtractor={(item) => item.id}
          />
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