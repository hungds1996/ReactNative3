import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';

class ComicListItem extends Component {
  state = {  }
  render() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: 'https://api.techkids.vn/reactnative/media/comic/lokcomic1giaingochungkhoanp1/Copy_of_1.jpg'}}
            />
            <Text style={styles.text}>LOK Comic #1: Giải ngố chứng khoán (P.1)</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: Dimensions.get('window').width/2
    },
    image: {
        height: 250,
    },
    Text: {
        fontWeight: 'bold'
    }
})

export default ComicListItem;