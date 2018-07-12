import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import {data} from './database.json'
import ComicListItem from './ComicListItem';

import Orientation from 'react-native-orientation';

class ComicListScreen extends Component {
  state = {  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  renderItem = ({item}) => <ComicListItem comic={item} navigation={this.props.navigation}/>

  keyExtractor = (item, index) => item.id
  render() {
    return (
        <FlatList
            data={data}
            renderItem={this.renderItem}
            numColumns='2'
            keyExtractor={this.keyExtractor}
        />
    );
  }
}

export default ComicListScreen;