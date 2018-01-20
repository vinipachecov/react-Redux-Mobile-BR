import React from 'react';
import { Picker } from 'react-native';

export default props => (
  <Picker style={styles.operationStyle} >
    <Picker.Item label='Soma' value='soma' />
    <Picker.Item label='Subtração' value='subtracao' />    
  </Picker >

);

const styles = {
  operationStyle: {
    marginTop: 15,
    marginBottom: 15
  }
};