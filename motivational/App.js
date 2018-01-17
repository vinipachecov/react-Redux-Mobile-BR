import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';




export default class App extends React.Component {

  gerarNovaFrase() {

    const frases = Array();
    frases[0] = 'Você é sempre mais forte do que imagina.';
    frases[1] = 'Confiar em Deus acima de tudo.';
    frases[2] = 'Nunca negocie sua personalidade, é um preço muito caro a se pagar em nome de aprovação.';
    frases[3] = 'Verdade conhecida é verdade obedecida.';
    frases[4] = 'Jesus Cristo é o único caminho até o pai.';

    

    var numrand = Math.random();
    numrand = Math.floor(numrand * 5);

    var fraseEscolhida = frases[numrand];

    alert(fraseEscolhida);
  }

  render() {
   const { container, buttonStyle, buttonText } = styles;

    return (
      <View style={container}>

      <Image source={ require('./resources/logo.png')} />

      <TouchableOpacity 
        style={buttonStyle}
        onPress={this.gerarNovaFrase}>  
        <Text style={buttonText}> Nova Frase</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  }
});
