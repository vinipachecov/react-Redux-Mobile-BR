import React, { Component } from 'react';
import { Text } from 'react-native';

export default class AboutGame extends Component {
  render() {
    return (
      <Text 
        style={styles.textStyle}
      >
         Aqui podem ser acrescentadas informações sobre o jogo 
      </Text>      
    );
  }  
}

const styles = {
  textStyle: {
    flex: 1,
    backgroundColor: '#61BD8C',
  }
};
