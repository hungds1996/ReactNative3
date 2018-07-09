import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class Match extends Component {
  state = {  }
  render() {
    return (
        <View style={styles.match}>
            <Text style={styles.time}>{this.props.date}</Text>
            <View style={styles.teams}>
                <Text style={styles.textNormal}>{this.props.teams[0]}</Text>
                <Image 
                    source={{uri:this.props.flags[0]}}
                    style={styles.flag}
                />
                <Text style={styles.textNormal}>-</Text>
                <Image 
                    source={{uri:this.props.flags[1]}}
                    style={styles.flag}
                />             
                <Text style={styles.textNormal}>{this.props.teams[1]}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    teams: {
      paddingBottom: 5,
      paddingLeft: 40,
      paddingRight: 40,    
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    time: {
      paddingBottom: 20,
      textAlign: 'center',
      color: 'white'
    },
    flag: {
      width: 20, 
      height: 20, 
      borderColor: 'white',
      borderWidth: 1
    }
  });

export default Match;