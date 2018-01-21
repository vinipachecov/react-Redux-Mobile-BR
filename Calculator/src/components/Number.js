import React from 'react';
import { TextInput, Text } from 'react-native';

export default (props) => (
  <TextInput 
    style={styles.numberStyle} 
    placeholder={props.oper} 
    value={props.num}
    onChangeText={val => props.updateVal(props.name, val)}
  />
);

const styles = {
  numberStyle: {
    width: 140,
    height: 80,
    fontSize: 20,
  }
};