import React from 'react';
import { View, TextInput } from 'react-native';


export default props => (
  <View> 
    <TextInput 
      style={styles.visorStyle}
      placeholder='Resultado' 
    /> 
  </View>  
);

const styles = {
  visorStyle: {
    height: 100,
    fontSize: 30,
  }
};
