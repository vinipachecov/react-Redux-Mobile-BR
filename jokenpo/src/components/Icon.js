import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const imgpedra = require('../../resources/pedra.png');
const imgpapel = require('../../resources/papel.png');
const imgtesoura = require('../../resources/tesoura.png');

export default class Icon extends Component {

  render() {
    const { iconStyle, txtPlayer } = styles;
 
    if (this.props.choice === 'pedra') {
        return (
            <View style={iconStyle}>
                <Text style={txtPlayer}>{this.props.player}</Text>
                <Image source={imgpedra} />
            </View>
        );
    } else if (this.props.choice === 'tesoura') {
        return (
            <View style={iconStyle}>
                <Text style={txtPlayer}>{this.props.player}</Text>
                <Image source={imgtesoura} />
            </View>
        );
    } else if (this.props.choice === 'papel') {
        return (
            <View style={iconStyle}>
                <Text style={txtPlayer}>{this.props.player}</Text>
                <Image source={imgpapel} />
            </View>
        );
    }
    return false;
  }
}

const styles = {
    iconStyle: {
        alignItems: 'center',
        marginBottom: 10,
    },
    txtPlayer: {
        fontSize: 18,
    }
};
