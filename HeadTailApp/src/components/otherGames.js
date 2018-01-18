import React, { Component } from 'react';
import { Text } from 'react-native';

export default class OtherGames extends Component {
  render() {
    return (
      <Text 
        style={styles.textStyle}
      >
         Informações sobre outros jogos e sobre o desenvolvedor
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
