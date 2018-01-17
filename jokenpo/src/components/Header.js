import React, { Component } from 'react';
import { View, Image } from 'react-native';

const image = require('../../resources/jokenpo.png');

class Header extends Component {
  render() {
    return (
      <View>
          <Image 
            source={image}
          />
      </View>      
    );
  }
}

export default Header;
