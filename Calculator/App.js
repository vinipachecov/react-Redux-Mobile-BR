import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { Top , Panel, Result } from './src/components'

export default class App extends React.Component {

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#2196F3' barStyle="light-content"/>
        <Top />
        <Result />
        <Panel />
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
