import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class Dishes extends Component {
  state = {  }
  render() {
    return (
        <View style={{paddingVertical: 10, backgroundColor : this.props.index & 1 ? "#adb0bd" : "#ffffff" }}>
            <Text style={styles.title}>{this.props.data.title}</Text>
            <Image source={{uri:this.props.data.image}} style={{width: 400, height: 400}}/>
            <View style={styles.rating}>
                {Array.from(new Array(this.props.data.rate)).map((rate, index) => (
                    <Image 
                        style={{width: 20, height: 20, marginHorizontal: 2}} 
                        source={{uri: 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Star-fav-icon.png'}}
                    />
                ))}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'lightblue',
        flex: 1
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    }
})

export default Dishes;