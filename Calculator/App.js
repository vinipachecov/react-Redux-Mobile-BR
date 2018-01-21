import React from 'react';
import { View, StatusBar } from 'react-native';
import { Top, Panel, Result } from './src/components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { num1: '', num2: '', operation: '+', result: '' };
  }


  calculate = () => {    
    let result = 0;
    switch (this.state.operation) {
      case '+':
        result = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;
      case '-':
        result = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;
      case '/':
        result = parseFloat(this.state.num1) / parseFloat(this.state.num2);
        break;
      case '*':
        result = parseFloat(this.state.num1) * parseFloat(this.state.num2);
        break;
      default:
        result = 0;
    }   
    console.log(result);
    this.setState({ result: result.toString() });  
  }

  updateVal = (fieldname, number) => {
    //Called when one of the operands changes their values
    const obj = { };
    obj[fieldname] = number;
    // Assign the new value of the fieldname state value
    this.setState(obj);
  }

  //helper functino sent to update the Panel state variable 'state' into the Operation class
  // there it will be updated
  updateOp = (newoperation) => {           
      this.setState({ operation: newoperation });      
  }
  

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#2196F3' barStyle="light-content" />
        <Top />
        <Result result={this.state.result} />
        <Panel 
          num1={this.state.num1}
          num2={this.state.num2}
          operation={this.state.operation}
          updateOp={this.updateOp}
          updateVal={this.updateVal}
          calculate={this.calculate}
        />
        
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
