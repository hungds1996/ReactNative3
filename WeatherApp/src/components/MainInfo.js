import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

class MainInfo extends Component {
  state = {  }

  _calculateTimeStamp = (data) => {
    const date = new Date(data * 1000);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

  renderImage = (weather) => {
    switch(weather){
      case 'Clear':
        image = require('../assets/clear.png')
        break;
      case 'Clouds':
        image = require('../assets/clouds.png')
        break;
      case 'Rain':
        image = require('../assets/rain.png')
        break;
      case 'Snow':
        image = require('../assets/snow.png')
        break;
    }
    return image
  }

  _calculateTemperature = (celciusDegree, unit) => {
    return unit === 'celcius' ?
      Math.floor(celciusDegree) : Math.floor((Number(celciusDegree)*9 + 160)/5);
  }

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.props.city.name}, {this.props.city.country}</Text>            
            <Text style={styles.timeStampText}>{this._calculateTimeStamp(this.props.data.dt)}</Text>
        </View>
        <View style={styles.weatherContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.headerImage} resizeMode="contain" source={this.renderImage(this.props.data.weather[0].main)} />
            </View>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>{this._calculateTemperature(this.props.data.temp.day, this.props.unit)}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.infoTextContainer}>
              <Text numberOfLines={2} style={styles.infoText}>{this.props.data.weather ? this.props.data.weather[0].description : ""}</Text>
            </View>
            <View style={styles.unitContainer}>
              <TouchableOpacity style={styles.unitWrapper} onPress={() => this.props.changeUnit('celcius')}>
                <Text style={this.props.unit === 'celcius' ? styles.unitWhite : styles.unitMuted}>°C</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.unitWrapper} onPress={() => this.props.changeUnit('fahrenheit')}>
                <Text style={this.props.unit === 'fahrenheit' ? styles.unitWhite : styles.unitMuted}>°F</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    letterSpacing: 1
  },
  timeStampText: {
    fontSize: 20,
    color: "#ccc",
  },
  weatherContainer: {
    paddingHorizontal: 20
  },
  imageContainer: {
    paddingRight: 10,
    width: "100%",
    flex: 1
  },
  headerImage: {
    width: '100%'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  infoTextContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1
  },
  infoText: {
    color: "#ccc",
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 1
  },
  temperatureContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  temperature: {
    fontSize: 100,
    color: 'white',
    letterSpacing: 5
  },
  descriptionContainer: {
    flexDirection: 'row'
  },
  unitContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  unitWrapper: {
    paddingHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unitWhite: {
    color: 'white',
    fontSize: 22
  },
  unitMuted: {
    color: '#ccc',
    fontSize: 22
  }
})

export default MainInfo;