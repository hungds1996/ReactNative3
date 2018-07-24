import React, { Component } from 'react';
import { Image } from 'react-native';
// const ImageStyle = {{ }}
class ChooseImage extends Component {


  render() {

    if (this.props.weather === 'Clear') {
      return (
        <Image source={require('../assets/clear.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Clouds') {
      return (
        <Image source={require('../assets/clouds.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Snow') {
      return (
        <Image source={require('../assets/snow.png')} style={this.props.style} resizeMode="contain" />
      );
    } else if (this.props.weather === 'Rain') {
      return (
        <Image source={require('../assets/rain.png')} style={this.props.style} resizeMode="contain" />
      );
    } else {
      return (
        <Image source={require('../assets/rain.png')} style={this.props.style} resizeMode="contain" />
      );
    }

  }
}

export default ChooseImage;