import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

import ColorButton from './ColorButton';

class App extends Component {
    state = { 
        backgroundColor: 'black'
     }

    changeBackgroundColor = color => this.setState({backgroundColor: color})

    render() {
        return (
            <View style={{
                backgroundColor: this.state.backgroundColor
            }}>
                <ColorButton color='lightyellow' onPress={this.changeBackgroundColor}/>
                <ColorButton color='lightpink' onPress={this.changeBackgroundColor}/>
                <ColorButton color='lightblue' onPress={this.changeBackgroundColor}/>
                <ColorButton color='lightgreen' onPress={this.changeBackgroundColor}/>                

                <Button
                    title="Press to have fun"
                    onPress={() => this.setState({backgroundColor: 'white'})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
})

export default App;