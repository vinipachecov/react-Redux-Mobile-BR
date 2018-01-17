import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Header from './src/components/Header';
import Icon from './src/components/Icon';

export default class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      userchoice: '',
      computerChoice: '',
      result: '',
      previous: ''
    };
  }

  jokenpo(userChoice) {    
    // generate random number( 0, 1 ,2)    
    const randnum = Math.floor(Math.random() * 3);    

    let computerChoice = '';

    switch (randnum) {
      case 0:
        computerChoice = 'pedra';
        break;
      case 1:
      computerChoice = 'papel';
        break;
      case 2:
        computerChoice = 'tesoura';
      break;
      default: 
        computerChoice = '';
    }
    

    let result = '';
       
    if (computerChoice === 'pedra') {
      if (userChoice === 'pedra') {
         result = 'Empate';
      } else if (userChoice === 'papel') {
           result = 'Você Ganhou!';
      } else if (userChoice === 'tesoura') {
          result = 'Você Perdeu!';
       }       
      }


    if (computerChoice === 'papel') {
      if (userChoice === 'pedra') {
          result = 'Você Perdeu!';
      } else if (userChoice === 'papel') {
            result = 'Empate!';
        } else if (userChoice === 'tesoura') {
          result = 'Você Ganhou!';
        }       
      }

          
    if (computerChoice === 'tesoura') {
      if (userChoice === 'pedra') {
          result = 'Você Ganhou!';
      } else if (userChoice === 'papel') {
          result = 'Você Perdeu!';
      } else if (userChoice === 'tesoura') {
          result = 'Empate!';
        }       
      }


    this.setState({ 
      userchoice: userChoice,
      computerChoice,
      result,      
      
    });    
  }

  render() {
    return (     
      <View>          
 
         <Header />

         <View style={styles.actionPanelStyle}>

            <View style={styles.btnChoice}>
              <Button 
                title="pedra"
                onPress={() => { this.jokenpo('pedra'); }}   
              />
            </View>

            <View style={styles.btnChoice}>     
            <Button 
              title="papel"
              onPress={() => { this.jokenpo('papel'); }}   
            />
            </View>    

            <View style={styles.btnChoice}>
              <Button 
                title="tesoura" 
                onPress={() => { this.jokenpo('tesoura'); }}   
              />
            </View>

        </View>
      

        <View style={styles.stageStyle}>

          <Text style={styles.txtResult}>{this.state.result}</Text>    

          <Icon 
            choice={this.state.computerChoice} 
            player={'Computador'}
          />         
          
          <Icon 
            choice={this.state.userchoice} 
            player={'Jogador'}
          />                    
       
        </View>
    
      </View>
    );
  }
}

const styles = {
  viewStyle: {
      justifyContent: 'center',         
      flex: 1,      
  },
  btnChoice: {
    width: 90,
  },
  actionPanelStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },        
  stageStyle: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  }
};
