import React, { Component } from 'react';
import { Picker } from 'react-native';

export default class Operation extends Component {  

  render() {
    return (
      <Picker 
        style={styles.operationStyle} 
        selectedValue={this.props.op}
        onValueChange={operacao => this.props.updateOp(operacao)}
      >
        <Picker.Item label='Soma' value='+' />
        <Picker.Item label='Subtração' value='-' />    
        <Picker.Item label='Divisão' value='/' />    
        <Picker.Item label='Multiplicação' value='*' />    
      </Picker >
    );
  }
}  

const styles = {
  operationStyle: {
    marginTop: 15,
    marginBottom: 15
  }
};