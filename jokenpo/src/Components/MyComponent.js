import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text > {this.props.test}  </Text>    
      </View>
    )
  }
};



const styles = {
    viewStyle : {
        justifyContent: 'center',
        alignItems: 'center',        
    }
  };
  