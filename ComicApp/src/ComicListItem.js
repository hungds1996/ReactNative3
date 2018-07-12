import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

class ComicListItem extends Component {
  state = {  }
  render() {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => this.props.navigation.navigate('ComicDetail', {comic: this.props.comic})}
        >
            <Image
                style={styles.image}
                source={{uri: this.props.comic.photos[0]}}
            />
            <Text 
                style={styles.text}
                numberOfLines={2}    
            >{this.props.comic.title}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: Dimensions.get('window').width/2,
        padding: 5
    },
    image: {
        height: 250,
    },
    Text: {
        fontWeight: 'bold'
    }
})

export default ComicListItem;