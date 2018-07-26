import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SectionList
} from 'react-native';

import {menu} from './sectionlist-db.json'

import Header from './components/Header'
import Dishes from './components/Dishes'
class App extends Component {
  state = {  }

  _renderItem = ({ item, index }) => <Dishes data={item} index={index}/>

  _renderSectionHeader = ({ section: { category } }) => <Header data={category}></Header>

  _keyExtractor = (item, index) => item + index

  render() {
    return (
      <View>
        <SectionList
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          sections={menu}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default App;