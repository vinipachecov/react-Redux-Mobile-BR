import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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

  constructor(props) {
    super(props);

    //create our state variable listItems as an empty array
    this.state = { listItems: [] };
  }

  componentWillMount() {
    //http request
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => {
      this.setState({ listItems: response.data });  
    })
    .catch(err => {
      console.log(`error =  + ${err}`);
    });
  }

  render() {        
    return (        
      <ScrollView style={{ backgroundColor: '#DDD' }}>   
        { this.state.listItems.map((item) => {
            return <Items key={item.titulo} item={item} />;
        })}     
      </ScrollView>
    );
  }
}



