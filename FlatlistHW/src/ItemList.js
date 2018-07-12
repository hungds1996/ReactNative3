import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import {data} from './data.json'
import Item from './Item'

class ItemList extends Component {
    state = {}

    _renderItem = ({item}) => <Item place={item} />
  
    _keyExtractor = (item, index) => item.id
  
    render() {
      return (
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      );
    }
}

export default ItemList;