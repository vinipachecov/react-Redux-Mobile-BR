import React from 'react';
import { View } from 'react-native';
import Number from './Number';

export default props => (
  <View style={styles.numberViewStyle}>
    <Number oper={'operator'} />
    <Number oper={'operand'} />
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