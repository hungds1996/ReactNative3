import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import {data} from './database.json'

class ComicDetail extends Component {
  state = {  }

  renderItem = ({item}) => <Image style={{height: 250}} source={{uri: item}}/>

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