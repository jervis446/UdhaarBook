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
import fire from '../Firebase/firebase_initialize.js';
 <fire />


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      error: '',
      loading: false,
    }
  }

  handleLogin(){
  	// Alert.alert("Alert","Button pressed");
   this.setState({error:'',loading:true});

   const{email,password} = this.state;
   // firebase.auth().signInWithEmailAndPassword(email,password)
   // .then(() => {
   // 	this.setState({error:'',loading:false});
   // 	this.props.navigation.navigate('Dashboard');
   // })

   // .catch(() => {
   // 	this.setState({error:'Authentication Failed',loading:false});

   // })
   
   	firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() => {
      this.setState({error:''});
      Alert.alert("Login SuccessFull");
      this.props.navigation.replace('Dashboard',{
        email: this.state.email,
      });
    })
    .catch((error) => {
      this.setState({error:'Enter the Valid Email & Password'})
      Alert.alert(this.state.error);
      this.props.navigation.navigate('Login');
    })

   //  this.setState({error:'',loading:false});
   // 	this.props.navigation.navigate('Dashboard',{
   //            email: this.state.email,
   //          });
   // }
  //  catch (error) {
      
  //   }
  // }

}

 

  static navigationOptions = {
    title: 'Login',
  };

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  render() {
  	const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
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

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.handleLogin()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

       

       <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Not Registered? Register here</Text>
        </TouchableHighlight>
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
  loginText: {
    color: 'white',
  }
});


 // <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
 //            <Text>Forgot your password?</Text>
 //        </TouchableHighlight>