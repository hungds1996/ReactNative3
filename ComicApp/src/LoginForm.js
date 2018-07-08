import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

class Login extends Component {
  state = {
      userName: '',
      password: ''
   }
  
   _showAlert = () => {
    Alert.alert(
        this.state.userName == 'rongthepthanglong' ? (this.state.password == 'chimbayuonluon' ? 'Login succesful' : 'Nahhh') : 'Nahhh',
        this.state.userName == 'rongthepthanglong' ? (this.state.password == 'chimbayuonluon' ? 'Press OK to continue' : 'username or password is incorrect') : 'username or password is incorrect',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
   }

  render() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="usernmae: rongthepthanglong"
                ref="username"
                onSubmitEditing={() => this.nextInput.focus()}
                onChangeText={(text) => this.setState({userName: text})}
                returnKeyType="next"
                autoCapitalize="none"
                value={this.state.username}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password: chimbayuonluon"
                ref={(input) => this.nextInput = input}
                secureTextEntry
                onChangeText={(text) => this.setState({password: text})}                
                returnKeyType="go"
                onSubmitEditing={this._showAlert}
                value={this.state.password}
                style={styles.inputField}                
            />
            <TouchableOpacity 
                style={styles.buttonBox}
                onPress={this._showAlert}
            >
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inputField: {
        paddingHorizontal: 5,
        backgroundColor: 'lightblue',
        marginVertical: 10,
        borderRadius: 3,      
    },
    container: {
        marginHorizontal: 40
    },
    buttonBox: {
        borderRadius: 3,
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: 40,
        marginVertical: 20
    },
    buttonText: {
        fontSize: 26,
        textAlign: 'center'
    }
})

export default Login;