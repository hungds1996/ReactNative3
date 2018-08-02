import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

import { doMath } from '../actions'

class MathScreen extends Component {
  state = { 
    number: 0
  }

  _onPressMath = (result) => {
    this.props.doMath(result)
    this.setState({number: result})
  }

  render() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
          <Button 
            onPress={() => this._onPressMath(this.state.number - 1)}
            title="-"
            style={{width: 20}}
          />
          <View style={{ paddingHorizontal: 20, justifyContent: 'center'}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.props.result}</Text>
          </View>
          <Button 
            onPress={() => this._onPressMath(this.state.number + 1)}
            title='+'
            style={{width: 20}}
          />
        </View>
    );
  }
}
const mapStateToProps = (store) => ({result: store.result})

export default connect(mapStateToProps, { doMath })(MathScreen);