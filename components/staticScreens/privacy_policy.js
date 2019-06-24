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

export default class privacy extends Component {
  static navigationOptions = {
    title: 'Privacy Policy',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image style={styles.inputIcon} source={{uri:'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Security-Approved-icon.png'}}/>
         <View style={styles.buttonContainer}>
                   
                  <View style={styles.center}>
                         <View style={styles.inputContainer}>
                          <Icon
                             name='rowing' />
                          <Text style={{ fontSize: 14,
    fontWeight: 'bold'}}> Why my data is online ?</Text>
                          </View>
                        <Text H3>&bull; So that your data may be recovered when the phone is lost or defective.</Text>
                           <View style={styles.padding}/>
                        <Text H2>&bull; So that. SMS can be sent for every transcation.</Text>
                         <View style={styles.padding}/><View style={styles.padding}/>
                        <View style={styles.inputContainer}>
                        <Icon
                           name='rowing' />
                        <Text style={{ fontSize: 14,
    fontWeight: 'bold'}}> Is my data shared with another person or organisation ?</Text>
                        </View>
                        <View style={styles.padding}/>
                        <Text H3>&bull; No, we do not share your data with anyone.We use it to improve your UdhaarBook experiance.</Text>
                  </View>
              
         </View>
         
         <View style={styles.buttom}>
         <Text>               
    ______________________________________________________
</Text>
        <Text H4> UdhaarBook is fully committed to the security of your data!</Text>
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