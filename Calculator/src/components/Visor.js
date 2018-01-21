import React from 'react';
import { View, TextInput } from 'react-native';


export default props => (
  <View> 
    <TextInput 
      style={styles.visorStyle}
      placeholder='Resultado' 
      value={props.result}
    /> 
  </View>  
);

const styles = {
  visorStyle: {
    height: 100,
    fontSize: 30,
  }
};

// // Here we can start to see where react really do.
// // Manipulating the virtual DOM by checking differences
// // in the state variables. If you don't accumulate or 
// // change programattically the state values
// // it will not be changed and remain the initial value.
// export default class Visor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { resultado: '' };
//   }
  
//   render() {
//     return (
//       <View> 
//         <TextInput 
//           style={styles.visorStyle}
//           placeholder='Resultado' 
//           value={this.state.resultado}
//         /> 
//       </View>  
//     );
//   }
// }