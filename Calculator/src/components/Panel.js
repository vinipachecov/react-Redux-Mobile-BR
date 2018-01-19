import React from 'react';
import { View, Text } from 'react-native';
import Input from './Input';
import Operation from './Operation';
import Command from './Command';


const Panel = (props) => {
  return (
    <View>
      <Input />
      <Operation />
      <Command />      
    </View>
  )
};

export { Panel };