import React, {Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import * as firebase from 'firebase';

import { SocialIcon } from 'react-native-elements';

import fire from '../Firebase/firebase_initialize.js';
 <fire />

export default class Login extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
      error: '',
    }
  }



   handleSignUp = () => {
   
    this.setState({error:''});

   const{email,password} = this.state;

   // firebase.auth().createUserWithEmailAndPassword(email,password)
   // .then(() => {
   // this.setState({error:'',loading:false});
   //   this.props.navigation.navigate('Dashboard');
   // })

   // .catch(() => {
   //   this.setState({error:'Authentication Failed',loading:false});

   // })

   firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(() => {
       Alert.alert("Succesfully Registered");
      this.props.navigation.navigate('Landing');

    })
    .catch((error) => {
      this.setState({error:'Enter the Valid Email & Password'})
      Alert.alert(error.toString(error));
    })



  //  try {
  //     // this.setState({error:''});
  //     firebase.auth().createUserWithEmailAndPassword(email, password);
  //     this.props.navigation.navigate('Register');

  //   } catch (error) {
  //     this.setState({
  //       error:'Enter the Valid Email & Password'
  //     })
  //      Alert.alert(this.state.error);

  //   }
   }

  static navigationOptions = {
    title: 'Registration',
  };

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>  this.handleSignUp()}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Are You Registered? Login here</Text>
        </TouchableHighlight>

       <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  signUpText: {
    color: 'white',
  }
});