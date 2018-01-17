/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  
  Text, View,Button
  
} from 'react-native';

export default class App extends Component<{}> {

  randomNumber() {
    var rdn = Math.floor(Math.random() * 10);
    alert(rdn);
  }

  render() {
    return (
      <View>
        <Text>
            First app of the course; Hello World :)
        </Text>
        <Button 
          title="Generate Random"
          onPress={this.randomNumber}
         />          
      </View>
    );
  }
}

