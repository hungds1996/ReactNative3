import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity
} from 'react-native';

import axios from 'axios'

import MainInfo from '../components/MainInfo'
import WeatherList from '../components/WeatherList'
class MainScreen extends Component {
  state = { 
    data: [],
    loading: true,
    unit: 'celcius',
    input: ''
   }

  componentDidMount() {
    this.setState({loading: true})
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=tokyo&appid=927d09bc49dbee6aac7f5cb1df707542').then(res => this.setState({data: res.data, loading: false}))
  }

  _changeUnit = (unit) => {
    this.setState({
      unit
    })
  }

  _onChangeText = (text) => {
    this.setState({
      input: text
    })
  }

  _search = (input) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${input}&appid=927d09bc49dbee6aac7f5cb1df707542`).then(res => this.setState({data: res.data, loading: false}))
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {/* Search Container */}
          <View style={styles.searchContainer}>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder="Enter city..." style={styles.textInput} 
                onChangeText={(text) => this._onChangeText(text)} value={this.state.input}></TextInput>                
            </View>
            <TouchableOpacity style={styles.searchButtonWrapper} onPress={() => this._search(this.state.input)}>
              <View style={styles.searchButton}>
                <Text>Search</Text>
              </View>
            </TouchableOpacity>
          </View> 

        {this.state.loading 
          ? <ActivityIndicator style={styles.activityIndicator}/>
          : <View>
              <MainInfo unit={this.state.unit} changeUnit={this._changeUnit} data={this.state.data.list[0]} city={this.state.data.city}/>      
              <WeatherList unit={this.state.unit} data={this.state.data.list ? this.state.data.list.slice(1) : ""}/>
            </View>}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39354C',
    marginTop: 20
  },
  textInputWrapper: {
    flex: 1
  },
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    height: 35,
    paddingLeft: 10,
    borderRadius: 5
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  searchButton: {
    backgroundColor: 'white',
    marginLeft: 7,
    padding: 10,
    borderRadius: 5,
  },
  searchButtonWrapper: {
    alignSelf: 'flex-end'
  },
  activityIndicator: {
    marginTop: 200
  },
  errorContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  error : {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  }
});

export default MainScreen;