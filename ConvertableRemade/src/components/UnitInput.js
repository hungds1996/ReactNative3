import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { masterStyles, primaryDark } from "../theme";
import Big from 'big.js';
import { connect } from 'react-redux';
import { changeBaseValue } from '../actions/'

class UnitInput extends PureComponent {
  state = {
    inputValue: (Big(this.props.baseValue).div(this.props.unit.ratio)).toString()
  };

  componentWillReceiveProps(nextProps) {
    const newValue = Big(nextProps.baseValue).div(nextProps.unit.ratio);
  
    if (newValue != parseFloat(this.state.inputValue)) {
      this.setState({
        inputValue: newValue.toString()
      });
    }
  }

  _onChange = value => {
    this.setState({ inputValue: value }, () => {
      if (!isNaN(parseFloat(value))) {
        this.props.changeBaseValue(Big(value).times(this.props.unit.ratio));
      }
    });
  };

  render() {
    const unit = this.props.unit;
    return (
      <View
        style={[
          masterStyles.horizontalPadding,
          {
            backgroundColor: primaryDark
          }
        ]}
      >
        <Text style={masterStyles.textLarge}>{unit.name}</Text>
        <TextInput
          style={masterStyles.textLarge}
          value={this.state.inputValue}
          onChangeText={this._onChange}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

const mapAppStateToProps = ({ baseValue }) => ({ baseValue })

export default connect(mapAppStateToProps, { changeBaseValue })(UnitInput);