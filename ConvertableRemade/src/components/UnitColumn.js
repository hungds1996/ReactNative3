import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  masterStyles,
  textDefault,
  primary,
  primaryHighlight,
  textPicked
} from "../theme";
import UnitInput from "./UnitInput";

import { connect } from 'react-redux';
import { changeBaseValue, changeCurrentUnitIndex } from '../actions/';

import Big from 'big.js'

class UnitColumn extends PureComponent {
  state = {
    currentUnitIndex: 0
  };

  _onUnitItemPressed = index => this.setState({ currentUnitIndex: index });

  _renderUnitItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        masterStyles.horizontalPadding,
        {
          paddingVertical: 10,
          backgroundColor: index % 2 === 0 ? primary : primaryHighlight
        }
      ]}
      onPress={() => this._onUnitItemPressed(index)}
    >
      <Text
        style={{
          color:
            index === this.state.currentUnitIndex ? textPicked : textDefault
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  _unitKeyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={masterStyles.wrapper}>
        <UnitInput
          unit={this.props.unitList[this.state.currentUnitIndex]}
        />

        <FlatList
          data={this.props.unitList}
          extraData={this.state.currentUnitIndex}
          renderItem={this._renderUnitItem}
          keyExtractor={this._unitKeyExtractor}
        />
      </View>
    );
  }
}

const mapAppStateToProps = ({ unitList, currentUnitIndex }) => ({ unitList, currentUnitIndex });

export default connect(mapAppStateToProps)(UnitColumn);