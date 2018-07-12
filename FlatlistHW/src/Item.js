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

import Rate from './Rate'

class Item extends Component {
  state = {  }
  render() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.logoHolder}>
                <Image 
                    style={styles.logo}
                    source={{uri: this.props.place.logo}}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{this.props.place.name}</Text>
                <Text style={styles.textNormal}>{this.props.place.address}</Text>
                <View style={styles.infoBottom}>
                    <View style={styles.rateAndCat}>
                        <Rate rate={this.props.place.rate}/>
                        <Text style={{color: 'rgba(192,192,192,1)'}}>{this.props.place.category}</Text>
                    </View>
                    <View style={styles.distance}>
                        <Text>{this.props.place.distance} miles</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height/6,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
    },
    logoHolder: {
        padding: 10
    },
    info: {
        flex: 1
    },
    name: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    infoBottom: {
        marginVertical: 5,
        flexDirection: 'row'
    },
    rateAndCat: {
        flexDirection: 'row',
        flex: 1
    },
    distance: {
        paddingHorizontal: 5,
        justifyContent: 'flex-end'
    }


})

export default Item;