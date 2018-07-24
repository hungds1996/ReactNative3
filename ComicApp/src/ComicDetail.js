import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

import ScaledImage from './ScaledImage'
import {data} from './database.json'

class ComicDetail extends Component {
  state = {  }

  renderItem = ({item}) => <ScaledImage width={Dimensions.get('window').width} uri={item}/>

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.comic.title
    }
  }

  render() {
    return (
        <FlatList
            data={this.props.navigation.state.params.comic.photos}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
        />
    );
  }
}

export default ComicDetail;