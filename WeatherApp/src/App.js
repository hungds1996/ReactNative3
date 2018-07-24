import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';
import axios from 'axios';
import Item from './Item';
import moment from 'moment';

import ChooseImage from './ChooseImage'
export default class App extends Component {

  state = {
    city: 'Tokyo',
    minus: 0,
    text: '',
    data: null,
    loading: false,
    error: false
  }

  componentWillMount() {
    this.getData()
  }

  async getData() {
    this.setState({
      loading: true,
      error: false
    })
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.city : this.state.text}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then(res => {
        this.setState({
          city: res.data.city.name,
          data: res.data.list
        })
      }).catch(error => {
        this.setState({
          error: true
        })
      })
    this.setState({
      loading: false,
    })
  }

  onChangeText = (text) => {
    this.setState({
      text
    })
  }

  renderItem = ({ item, index }) => {
    return <Item date={moment().add(index, 'd').format('DD/MM/YYYY')}
      temp={Math.floor(item.temp.max - this.state.minus)}
      weather={item.weather[0].main}
    />
  }

  convert = () => {
    this.setState({
      minus: this.state.minus > 10 ? 0 : 273
    })
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.SearchBar}>
            <TextInput onChangeText={this.onChangeText} underlineColorAndroid="#FFFFFF" />
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => this.getData()}>
            <Text style={{ color: '#393546', fontSize: 18 }}>Search</Text>
          </TouchableOpacity>
        </View>

        {!this.state.error ?
          <View>
            <View style={styles.TextContainer}>
              <Text style={{ color: '#FFF', fontSize: 30 }}>{this.state.city}</Text>
              <Text style={{ color: '#8D8B98', fontSize: 18 }}>{moment().format('DD/MM/YYYY')}</Text>
            </View>
            <View style={styles.ImageContainer}>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ChooseImage weather={this.state.data[0].weather[0].main} style={{ width: 150, height: 150 }} />
                <Text style={{ color: '#8D8B98', fontSize: 20 }}>{this.state.data[0].weather[0].main}</Text>
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ color: '#FFF', fontSize: 70 }}>{Math.floor(this.state.data[0].temp.max - this.state.minus)}°</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <TouchableOpacity onPress={this.convert}>
                    <Text style={{ color: this.state.minus > 10 ? '#817E92' : 'white', fontSize: 20 }}>
                      F°
                </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.convert}>
                    <Text style={{ color: this.state.minus > 10 ? 'white' : '#817E92', fontSize: 20, marginLeft: '20%' }}>
                      C°
                </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <Flatlist /> */}
            <View style={{ alignItems: 'center', marginTop: '10%' }}>
              {/* <Item temp="23" date="21/07/2018" /> */}
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                extraData={this.state.minus}
              />
            </View>
          </View>
          : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 30 }}> 404 not found</Text>
          </View>}
      </View >
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#39354C',
    padding: '5%'
  },
  SearchBar: {
    backgroundColor: '#FFFFFF',
    width: width * 0.6,
    height: height * 0.07,
    borderRadius: 6
  },
  Button: {
    height: height * 0.07,
    backgroundColor: '#FFFFFF',
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 5
  },
  ImageContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row'
  }

});