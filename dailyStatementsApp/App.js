import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';


export default class App extends Component {
  
  // onButtonPressed() {        
  //   alert('BUtton Pressed!');
  // }
  

  render() {
    // const { Header, main, Body, Footer } = styles;
    const { button, textButton, main } = styles;

    return (
      // <View style={main}>
      //   <Text style={Header}> Header </Text>
      //   <Text style={Body}> Body </Text>
      //   <Text style={Footer}> Footer </Text>
      // </View>

      <View style={main}>
        {/* <Button
          onPress={this.onButtonPressed}
          title={"press me"}
          color={'#841584'}
        /> */}
        {/* <TouchableOpacity
          style={button}
        >
          <Text style={textButton}> Clique Aqui</Text>
        </TouchableOpacity>    */}
        
        <Image 
          source={  require('./imgs/uvas.png') }      
        /> 
      </View>
    );
  }
}

const styles = {  
  main: {
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',   
    borderWidth: 3,     
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }

};

  // textStyle: {
  //   fontSize: 25,
  //   color: '#fff',
  //   backgroundColor: '#08509B',

  // },
  // viewStyle: {
  //   backgroundColor: 'skyblue',
  //   height: 300,
  //   // align the elements vertically flex-end, flex,start, center, space-between, space-around
  //   justifyContent: 'space-around',
  //   // align the elements horizontally flex-end, flex,start, center
  //   alignItems: 'stretch',
  //   // How items are organized: row || column
  //   flexDirection: 'column',
  // },
  // textStyle2: {
  //   fontSize: 25,
  //   color: '#fff',
  //   backgroundColor: '#2A48FA',

  // },
  // main: {
  //   backgroundColor: 'cornflowerblue',
  //   flex: 1

  //   // align the elements vertically flex-end, flex,start, center, space-between, space-around

  //   // align the elements horizontally flex-end, flex,start, center

  //   // How items are organized: row || column

  // },
  // Header: {
  //   fontSize: 25,
  //   color: '#fff',
  //   backgroundColor: 'brown',
  //   flex: 1

  // },
  // Body: {
  //   fontSize: 25,
  //   color: '#fff',
  //   backgroundColor: 'yellowgreen',
  //   flex: 1

  // },
  // Footer: {
  //   fontSize: 25,
  //   color: '#fff',
  //   backgroundColor: 'orangered',
  //   flex: 1

  // }
// };
