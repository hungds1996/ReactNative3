import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import WeatherListItem from '../components/WeatherListItem';

class WeatherList extends PureComponent {
    state = {  }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = (item) => {
      return <WeatherListItem data={item.item} unit={this.props.unit} />
    }

    render() {
        return (
          <View style={styles.weatherList}>
            <FlatList data={this.props.data} keyExtractor={this._keyExtractor} renderItem={this._renderItem}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  weatherList: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20
  }
})

export default WeatherList;