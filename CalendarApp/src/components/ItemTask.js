import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import RoundCheckbox from 'rn-round-checkbox';

import {gray, categoryBirthday, white} from '../styles'
class ItemTask extends Component {
  state = {  }
  render() {
    return (
        <View style={styles.container}>
            <RoundCheckbox/>
            <Text style={styles.time}>{this.props.task.time}</Text>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.content}>{this.props.task.content}</Text>
                <Text style={styles.category}>{this.props.task.category}</Text>                
            </TouchableOpacity>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    time: {
        color: gray,
        marginStart: 10,
        width: 40,
    },
    task: {
        backgroundColor: categoryBirthday,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginStart: 10,
        flex: 1
    },
    content: {
        fontWeight: 'bold',
        color: white,
        fontSize: 16
    },
    category: {
        color: white,
        marginTop: 5,
        fontSize: 12,
        opacity: 0.8
    }
})

export default ItemTask;