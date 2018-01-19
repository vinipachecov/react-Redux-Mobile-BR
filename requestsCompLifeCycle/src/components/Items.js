import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Items extends Component {
  render() {
    const { 
      textLocalStyle,
      textValueStyle,
      textTitleStyle,
      imageStyle,
      containerStyle,
      imageContainerStyle,
      itemDetailStyle 
    } = styles;

    return (
      <View style={containerStyle}>

        <View style={imageContainerStyle}>
          <Image style={imageStyle} source={{ uri: this.props.item.foto }} />              
        </View>
       
        <View style={itemDetailStyle}>
          <Text style={textTitleStyle}>{this.props.item.titulo}</Text>  
          <Text style={textValueStyle}>R$ {this.props.item.valor}</Text>
          <Text style={textLocalStyle}>Local: {this.props.item.local_anuncio}</Text>
          <Text>Data de publicação: {this.props.item.publicada}</Text>
        </View>
      
     </View>        
    );
  }
}

const styles = {
  imageStyle: {
    height: 100,
    width: 100,
  },
  containerStyle: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  //102 so the image can fit with a little bit of extra space
  imageContainerStyle: {
    width: 102,
    height: 102,
  },
  itemDetailStyle: {
    marginLeft: 20,
    flex: 1,
  },
  textTitleStyle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  textValueStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textLocalStyle: {
    fontSize: 16,
  }
};
