import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default props => (
  <View style={styles.headerStyle}>
    <Text> Calculadora 1.0</Text>
    </View>
);

const styles = { 
  headerStyle: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 25,
    color: '#FFF'
  }
}
