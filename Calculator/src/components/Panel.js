import React from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';


const Panel = props => {
  return (
      <View>
        <Input 
          num1={props.num1}  
          num2={props.num2} 
          updateVal={props.updateVal}
        />
        <Operation op={props.operation} updateOp={props.updateOp} />
        <Command action={props.calculate} />      
      </View>
  );
}


export { Panel };

