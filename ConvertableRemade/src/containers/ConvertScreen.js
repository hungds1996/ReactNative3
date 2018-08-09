import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { textDefault, masterStyles, primary } from "../theme";
import UnitColumn from "../components/UnitColumn";
import Big from 'big.js'
import { changeCurrentUnitIndex, changeBaseValue } from '../actions/'
import { connect } from 'react-redux';

class ConvertScreen extends PureComponent {
  state = {
  };

  render() {
    return (
      <View style={masterStyles.wrapper}>
        <View
          style={[
            masterStyles.wrapper,
            {
              flexDirection: "row"
            }
          ]}
        >
          <UnitColumn/>
          <UnitColumn/>
        </View>
      </View>
    );
  }
}



export default connect(null, { changeCurrentUnitIndex, changeBaseValue })(ConvertScreen);