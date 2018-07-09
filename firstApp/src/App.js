import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import Match from './Match'
class App extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textBig}>Schedule</Text>
          <Image
          style={{width: 100, height: 100, marginTop: 35, marginBottom:5}}
          source={{uri: 'https://i.pinimg.com/originals/bd/6b/49/bd6b49482d53bbc4e770c8adec28344e.png'}}
          />
          <Text style={styles.textMedium}>FIFA WORLDCUP 2018</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.match}>
            <Match 
              date='Jul 06 2018 - 21:00'
              teams={['Uruguay', 'France']}
              flags={['http://flags.fmcdn.net/data/flags/w580/uy.png', 'http://flags.fmcdn.net/data/flags/w580/fr.png']}
            />
          </View>
          <View style={styles.match}>
            <Match 
              date='Jul 06 2018 - 21:00'
              teams={['Uruguay', 'France']}
              flags={['http://flags.fmcdn.net/data/flags/w580/uy.png', 'http://flags.fmcdn.net/data/flags/w580/fr.png']}
            />
          </View>
          <View style={styles.match}>
            <Match 
              date='Jul 06 2018 - 21:00'
              teams={['Uruguay', 'France']}
              flags={['http://flags.fmcdn.net/data/flags/w580/uy.png', 'http://flags.fmcdn.net/data/flags/w580/fr.png']}
            />
          </View>
        </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 0.5,
    alignItems: 'center',
    marginBottom: 20
  },
  textBig: {
    marginTop: '10%',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textMedium: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textNormal:{
    color: 'white'
  },
  container: {
    backgroundColor: '#282F37',
    flex: 1
  },
  table: {
    flex: 0.5,
  },
  match: {
    backgroundColor: '#3E465D',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10
  }
});

export default App;
