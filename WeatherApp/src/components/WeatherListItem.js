import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class WeatherListItem extends PureComponent {
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
          <View style={styles.weatherItemWrapper}>
            <View style={styles.weatherItemTimeStampWrapper}>
              <Text style={styles.weatherItemTimeStamp}>{this._calculateTimeStamp(this.props.data.dt)}</Text>
            </View>
            <View style={styles.weatherItemInfoWrapper}>
              <Text style={styles.weatherItemTemperature}>{this._calculateTemperature(this.props.data.temp.day, this.props.unit)}</Text>
              <View>
                <Image style={styles.weatherItemImage} source={this.renderImage(this.props.data.weather[0].main)}></Image>
              </View>
            </View>
          </View> 
        );
    }
}

const styles = StyleSheet.create({
  weatherItemWrapper: {
    flex: 1,
    marginVertical: 8,
    backgroundColor: "#312F3F",
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 2,
    shadowColor: '#2E2B3E',
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  weatherItemTimeStampWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  weatherItemTimeStamp: {
    fontSize: 20,
    color: 'white'
  },
  weatherItemInfoWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1
  },
  weatherItemTemperature: {
    fontSize: 20,
    color: 'white',
    marginRight: 10
  },
  weatherItemImage: {
    height: 45,
    width: 45
  }
})
        
export default WeatherListItem;