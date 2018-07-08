import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm';
class Login extends Component {
  state = { 
   }
  
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} enabled>
          <View style={styles.logoContainer}>
            <Image
              source={require('./images/LOK.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.loginForm}>
            <LoginForm/>
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'steelblue',
    flex: 1
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 400*0.3,
    width: 583*0.3
  },
  loginForm: {
    flex: 1
  }
})

export default Login;