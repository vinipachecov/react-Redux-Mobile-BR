import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Items from './Items';


export default class ListItems extends Component {
  // Life cycle methods
  // 1 constructor(props) {
  //   super(props);
  //   console.log('Construindo a aplicação');
  // }  

  // 2 componentWillMount() {
  //   console.log('Fazer alguma coisa antes de renderizar');
  // }

  // 4 componentDidMount() {
  //   console.log('Componente foi renderizado');    
  // }

  // 3 render(){}

  componentWillMount() {
    //http request
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => {
      console.log(response);
    })
    .catch(err => {
      console.log(`error =  + ${err}`);
    });
  }

  render() {        
    return (        
      <View>
        <Items />
        <Items />
        <Items />        
      </View>
    );
  }
}

