import React from 'react';
import { View } from 'react-native';
import Number from './Number';

export default props => (
  <View style={styles.numberViewStyle}>
    <Number oper={'operator'} num={props.num1} updateVal={props.updateVal} name={'num1'} />
    <Number oper={'operand'} num={props.num2} updateVal={props.updateVal} name={'num2'} />
  </View>
);

const styles = {
  numberViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberInputStyle: {

  }
}