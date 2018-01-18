import React from 'react';
import { 
  StyleSheet,
   Image,
    View, 
    TouchableHighlight,
    } from 'react-native';
import {Actions} from 'react-native-router-flux';

const logo = require('../../resources/imgs/logo.png');
const btnPlay = require('../../resources/imgs/botao_jogar.png');
const btnAbout = require('../../resources/imgs/sobre_jogo.png');
const btnOtherGames = require('../../resources/imgs/outros_jogos.png');


export default class Main extends React.Component {
  render() {
    return (      
      <View style={styles.mainScene}>

        <View style={styles.gameDetails}>
          <Image source={logo} />
          <TouchableHighlight onPress={() => {Actions.result();}}>  
            <Image source={btnPlay} />
          </TouchableHighlight >  
        </View>

        <View style={styles.footer}>
        <TouchableHighlight
          onPress={() => {Actions.aboutGame();}}
        >
          <Image source={btnAbout} />
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => {Actions.otherGames();}}
        >
          <Image source={btnOtherGames} />
        </TouchableHighlight>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainScene: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  gameDetails: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  
});

