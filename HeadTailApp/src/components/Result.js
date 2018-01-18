import React, { Component } from 'react';
import { View, Image } from 'react-native';


const head = require('../../resources/imgs/moeda_cara.png');
const tail = require('../../resources/imgs/moeda_coroa.png');

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
  }

  componentWillMount() {
    //when this component will be mounting
    // we will be running result of the score
    const randnum = Math.floor(Math.random() * 2);
    let headOrTail = '';

    if (randnum === 0) {
      headOrTail = 'head';
    } else {
      headOrTail = 'tail';
    }

    this.setState({ result: headOrTail });
  }

  render() {
    if (this.state.result === 'head') {
        return (
          <View style={styles.resultStyle}>
            <Image source={head}/>            
          </View>

        );
    }
    return (
      <View style={styles.resultStyle}>
        <Image source={tail} />
      </View>
    );
  }  
}

const styles = {
  resultStyle: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center',
  }
}