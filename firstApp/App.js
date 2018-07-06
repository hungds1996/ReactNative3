import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

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
            <Text style={styles.time}>Jul 06 2018 - 21:00</Text>
            <View style={styles.teams}>
              <Text style={styles.textNormal}>Uruguay</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/uy.png'}}
                style={styles.flag}
              />
              <Text style={styles.textNormal}>-</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/fr.png'}}
                style={styles.flag}
              />             
              <Text style={styles.textNormal}>France</Text>              
            </View>
          </View>

          <View style={styles.match}>
            <Text style={styles.time}>Jul 07 2018 - 01:00</Text>
            <View style={styles.teams}>
              <Text style={styles.textNormal}>Brazil</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/br.png'}}
                style={styles.flag}
              />
              <Text style={styles.textNormal}>-</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/be.png'}}
                style={styles.flag}
              />             
              <Text style={styles.textNormal}>Belgium</Text>              
            </View>
          </View>
          <View style={styles.match}>
            <Text style={styles.time}>Jul 08 2018 - 01:00</Text>
            <View style={styles.teams}>
              <Text style={styles.textNormal}>Russia</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/ru.png'}}
                style={styles.flag}
              />
              <Text style={styles.textNormal}>-</Text>
              <Image 
                source={{uri:'http://flags.fmcdn.net/data/flags/w580/hr.png'}}
                style={styles.flag}
              />             
              <Text style={styles.textNormal}>Croatia</Text>              
            </View>
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
  teams: {
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  match: {
    backgroundColor: '#3E465D',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10
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

export default App;
