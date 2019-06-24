
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



export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Landing',
  };

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.buttomContainer}>Welcome to UdhaarBook !</Text>

        <TouchableHighlight style={[styles.buttomContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Account')}>
          <Text style={styles.loginText}>test screen</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Privacy')}>
          <Text style={styles.loginText}>test screen</Text>
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
  buttomContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:50,
    width:250,
    borderRadius:30,
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