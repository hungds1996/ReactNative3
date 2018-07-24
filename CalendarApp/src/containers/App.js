/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import {createStackNavigator} from 'react-navigation'

import AddTaskScreen from './AddTaskScreen'
import ScheduleScreen from './ScheduleScreen'
import {gray, white} from '../styles'

const Navigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Schedule',
      headerRight:
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask')}
      >
        <Image
          style={{ width: 20, height: 20, marginEnd: 10 }}
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADBSURBVEhL7dY7CgIxFIXhFLoBK5cgili4GHeiYGPlCnQVNq5BBCvBytLCSnuxEXz8FyaQIjMoJtfCe+BjICQ5aSYzzvJB6sVTNRPccERPBjTSxAPPwhIq6cKXijVUYsVWnC3ZihvoVxggLN4hNs+Tg9ZQmTHuCDdO4YQ2opFTXRFbmMIMpTkgtiiFEUrTwQLbCnuEG14Qm+dtMMXXXzN7j604W/6vWK6+sHgFlcjVeoYvlstBLS3MMcRP/q8tb8a5F1/ApEDAYfgdAAAAAElFTkSuQmCC' }} />
      </TouchableOpacity>,
      headerTitleStyle: {
        color: gray,
        fontWeight:'500',
        fontSize:24,
        marginTop:5,
        alignSelf:'center'
      },
      headerStyle: {
        backgroundColor: white,
        elevation: 0
      }
    })
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add new task',
      headerLeft:
      <TouchableOpacity
        onPress={() => navigation.navigate('Schedule')}
      >
        <Image
          style={{ width: 20, height: 20, marginStart: 10 }}
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADCSURBVGhD7dMtCkJBGIXhUTG5A4PV4CoEwY3YrW5CsJjEpJuymN2AYPHn/cBwkbnm813OAy8Dk+aEKWat+t8zrR5t6UEXmlI6MeJI70YnSqU2IjpQGvEfaiOuNKYU/o2YUAoeocIjVHiECo9Q4REqPEKFR6joxIiwo/QjRvSk5ogbpRoRBhQPbw550YrSmdOdOjFmQR6jyGNUeYwqj1HlMao8RpXHqPIYVW1jlpRObcyZUvods6G0ZrSnNQ3jwkxCKR+8BekpyRbCfQAAAABJRU5ErkJggg==' }} />
      </TouchableOpacity>,
      headerTitleStyle: {
        color: gray,
        paddingLeft: 20
      },
      headerStyle: {
        backgroundColor: white
      }
    })
  }
})

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  
});
