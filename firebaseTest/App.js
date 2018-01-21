import React from 'react';
import firebase from 'firebase';
import setup from './configs/keys.json';
import { StyleSheet, Text, View, Button, StatusBar, Platform } from 'react-native';

var barHeight = Platform.OS == 'ios' ? 20: StatusBar.currentHeight;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { actionRes: 'No Action Yet..' };
  }
  
  
  

  // call before this component is mounted
  componentWillMount() {
    var config = {
      apiKey: setup.apiKey,
      authDomain: setup.authDomain,
      databaseURL: setup.databaseURL,
      projectId: setup.projectId,
      storageBucket: setup.storageBucket,
      messagingSenderId: setup.messagingSenderId
    };
    firebase.initializeApp(config);
  }

  // saveData = () => {    
  //   console.log('Saving');
  //   // get access to database    
  //   // var db = firebase.database();    
  //   // db.ref("pontuacao").set("200");

  //   //more complex structure...
  //   var funcionarios = firebase.database().ref("funcionarios");
  //   // funcionarios.child("001").child("nome").set("Jorge");
  //   // db.ref("pontuacao").set("100").then(() => console.log('sucess!')).catch(err => console.log(err));        
  //   funcionarios.push().set(
  //     {
  //       nome: 'auhsuasa',
  //       alture: '1,50',
  //       peso: '60Kg'
  //     }
  //   );

    
  // }

  // removeData = () => {

  //   const db = firebase.database();

  //   db.ref("pontuacao").remove();
    

  //   const funcionarios = firebase.database().ref("funcionarios");
  //   funcionarios.child("001").remove();

  //   db.ref("")
  // }

  // listData = () => {
  //   // list our data
  //   const pontuacao = firebase.database().ref('pontuacao');
  //   //create a listener
  //   pontuacao.on('value', snapshot => {
  //     //here we retrieve dat
  //     let pontos = snapshot.val();
  //     alert(pontos);
  //     this.setState({ pontos });      
  //   });    

  // }


  signUpUser = () => {
    let email = "test@test.com"
    let passwd = "123456"

    const user = firebase.auth();
    user.createUserWithEmailAndPassword(email,passwd)
    .then(() => this.setState({ actionRes: 'User Registered..' }))
    .catch( err => {      
      switch ( err.code ) {
        case 'auth/email-already-in-use':          
          firebase.auth().signInWithEmailAndPassword(email,passwd)
            .then( (user) => this.setState({ actionRes: `Welcome back ${user.email}` }));
          break;
        default: 
          this.setState({ actionRes: 'something wrong happened' });        
      }      
    });
  }

  verfyLoggedUser = () => {
    const user = firebase.auth();
    const currentUser = user.currentUser;


    // create a listener for a specific state (will be changed when the variable changes)
    // user.onAuthStateChanged(
    //   (currentUser) => {
    if (currentUser) {          
        this.setState({ actionRes: 'Current user is signed in.'});                              
    } else {
      this.setState({ actionRes: 'Current user is not signed in.'});
    }  
    // );    
  }


  signOutUser = () => {
    firebase.auth().signOut();
    this.setState({ actionRes: 'You have signed out... =/' });
  }
  

  signInUser = () => {
    firebase.auth().signInWithEmailAndPassword('test@test.com','123456')
      .then( ( user) => this.setState({ actionRes: `Welcome back ${user.email}` }))
      .catch( err => this.setState({ actionRes: err.message }));
  }

  render() {
    return (
      <View style={styles.container}>    
        <Text> Firebase test </Text>    
        <Button 
          title={'Sign up'}
          onPress={this.signUpUser}
        />
        <Button 
          title={'Sign in'}
          onPress={this.signInUser}
        />
        <Button 
          title={'Verify Login'}
          onPress={this.verfyLoggedUser}
        />
         <Button 
          title={'Sign Out'}
          onPress={this.signOutUser}
        />
        <Button 
          title={'Save data'}
          onPress={this.saveData}
        />
         <Button 
          title={'List data'}
          onPress={this.listData}
        />
        <Button           
          title={'Remove data'}
          onPress={this.removeData}
        />             
        {/* <Text>Pontuação: {this.state.pontos}</Text> */}
        <View style={styles.textResultStyle}>          
          <Text>Result: {this.state.actionRes}</Text>
        </View>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: barHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  textResultStyle: {    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },

});
