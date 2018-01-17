import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import MyComponent from './src/Components/MyComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      userchoice: '',
      computerChoice: '',
      result: '' 
    };
  }

  jokenpo(userChoice) {
    // generate random number( 0, 1 ,2)
    var randnum = Math.floor(Math.random() * 3);
    
    var computerChoice = '';

    switch(randnum){
      case 0:
        computerChoice = 'pedra';
        break;
      case 1:
        computerChoice = 'papel';
        break;
      case 2:
        computerChoice = 'tesoura';
        break;
    }

    let result = '';
       
    if (computerChoice === 'pedra') {
      if(userChoice == 'pedra') {
         result = 'Empate'
      }

      else if(userChoice == 'papel') {
           result = 'Usuario Ganhou!'
        }
      else if(userChoice == 'tesoura') {
          result = 'Computador Ganhou!'
       }       
      }


    if (computerChoice === 'papel') {
      if(userChoice == 'pedra') {
          result = 'Computador Ganhou!'
      }

      else if(userChoice == 'papel') {
            result = 'Empate!'
        }
      else if(userChoice == 'tesoura') {
          result = 'Usuario Ganhou!'
        }       
      }

          
    if (computerChoice === 'tesoura') {
      if(userChoice == 'pedra') {
          result = 'Usuario Ganhou!'
      }

      else if(userChoice == 'papel') {
            result = 'Computador Ganhou!'
        }
      else if(userChoice == 'tesoura') {
          result = 'Empate!'
        }       
      }


    this.setState({ 
      userchoice: userChoice,
      computerChoice: computerChoice,
      result: result
    });
    alert(this.state.userchoice);      
  }


  render() {
    return (     
      <View style={styles.viewStyle}> 
       <Text>Escolha do Computador: {this.state.computerChoice}</Text>
       <Text>Escolha do usuário: {this.state.userchoice}</Text>
       <Text>Resultado: {this.state.result}</Text>
       <Button 
        title="pedra"
        onPress={() => {this.jokenpo('pedra')}}   
       />
       <Button 
        title="papel"
        onPress={() => {this.jokenpo('papel')}}   
       />
       <Button 
        title="tesoura" 
        onPress={() => {this.jokenpo('tesoura')}}   
       />
      </View>
    );
  }
}

const styles = {
  viewStyle : {
      justifyContent: 'center',
      alignItems: 'center',      
      flex: 1,
      
  }
  
};
