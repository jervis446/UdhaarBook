import React, {Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import { Icon, Text } from 'react-native-elements'; //for react native design elements

export default class account extends Component {
  state ={
    email: '9412573395',
    customer: '',
    balance: '',
  }
  static navigationOptions = {
    title: 'Account',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
            <View style={styles.container}>
              <Icon
               name='slideshare' />
              <Text>Customers</Text>
              <Text>{this.state.customer}</Text>
          </View>
          <View>
              <Icon
               name='slideshare' />
              <Text>Balance</Text>
              <Text>{this.state.email}</Text>
          </View>
          <View>
            <Icon
               name='slideshare' />
              <Text>Account Statement</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon:{
    width:60,
    height:60,
    marginTop:20,
    justifyContent: 'center'
  },
  inputContainer: {
      width:250,
      height:45,
      marginBottom:2,
      marginTop:40,
      flexDirection: 'row',
  },
  buttonContainer: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop: '10%',
    padding:10,
  },
  center: {
    alignItems:'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  center1: {
    alignItems:'center',
  },
  buttom: {
    marginTop: '95%' ,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    marginTop: 10,
  }
});


 // <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
 //            <Text>Forgot your password?</Text>
 //        </TouchableHighlight>