import React, { Component } from 'react';
import {
  Image,
  Dimensions
} from 'react-native';

class ScaledImage extends Component {
  state = { 
      width: this.props.width,
      height: 0
   }
    
  componentDidMount() {
      Image.getSize(this.props.uri, (realWidth, realHeight) => {
          this.setState({
              height: realHeight * this.props.width / realWidth
          })
      })
  }
  
  render() {
    return (
       <Image
        source={{uri:this.props.uri}}
        style={{height:this.state.height, width:this.state.width }}
       /> 
    );
  }
}

export default ScaledImage;