import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,TextInput,
  StatusBar,
} from 'react-native';
import { Header, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import firebase from '../Firebase/firebase_initialize.js';
//import { StatusBar, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { Container, Title, Content, Text, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'

<firebase />

export default class Dashboard extends Component {
  state = { currentUser: '9412573395',
            search:null,
            updateSearch: null,
            isModalVisible: false,
             name: null,
             mobile: null,
             email:null,
             msg: null,
          }
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible,isSubmited: false });
  };


  

  postMsg = (name, mobile, balance, msg, nameClear, mobileClear, balanceClear, msgClear) => {
    if(this.state.msg!=null){ 
      fetch('https://udhaarbook-7a9a3.firebaseio.com/customer.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "mobile": mobile,
          "balance": balance,
          "msg": msg,
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
              if(responseData.name != null ){
                this.setState({
                    name: null,
                    mobile: null,
                    balance:null,
                    msg: null,
                    isSubmited: true,
                  })              
              }
              else{
              Alert.alert(
                'Oops !',
                'Something went wrong',
                [
                  {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
            }

      })
      .done();
    }
      else{
        Alert.alert(
          'Oops !',
          'Press SUBMIT button after entering your Message.',
          [
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )        
      }
    
  };

                 


  render() {
    const { navigation } = this.props;
    const email = navigation.getParam('email', 'email');
    return (
      <View>
          <Header
              leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>this.props.navigation.openDrawer() }}
              centerComponent={{ text: this.state.currentUser, style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
           <SearchBar
            placeholder="Search Customer"
            //onChangeText={this.updateSearch}
            //value={search}
          />

           <View style={styles.container}>
           <TouchableHighlight style={styles.loginButton} onPress={this.toggleModal}>
           <View>
          <Text style={styles.loginText}>Add Customer</Text>
                  <Modal isVisible={this.state.isModalVisible}>
                            <View style={styles.modal}>
                                           <Container>
                                 
                                    <Content>


                                      <Card style={styles.postCard}>
                                      {this.state.isSubmited ?
                                      <View>
                                          <CardItem>
                                              <Left>
                                              </Left>
                                              <Body>
                                                  <TouchableOpacity success onPress={() => this.toggleModal()}>
                                                      <Icon active name="add" style={{fontSize: 40, color: '#64DD17', marginLeft:10}} />
                                                  </TouchableOpacity>
                                              </Body>
                                              <Right>
                                              </Right>
                                          </CardItem>
                                      </View>
                                      :
                                      <View>
                                          <CardItem>
                                              <Item>
                                                  <Input placeholder='Customer Name' onChangeText={(name) => this.setState({name})}/>
                                              </Item>
                                          </CardItem>
                                          <CardItem>
                                              <Item>
                                                  <Input placeholder='Customer Mobile' onChangeText={(mobile) => this.setState({mobile})}/>
                                              </Item>
                                          </CardItem>
                                          <CardItem>
                                              <Item>
                                                  <Input placeholder='Balance (May be in postive or negative)' onChangeText={(balance) => this.setState({balance})}/>
                                              </Item>
                                          </CardItem>
                                              <Form style = {{ marginLeft: 20, marginRight:20 }}>
                                                  <Textarea rowSpan={5} bordered placeholder="Type your message" onChangeText={(msg) => this.setState({msg})} />
                                              </Form>
                                          <CardItem>
                                              <Left>
                                              </Left>
                                              <Body>
                                                  <Button success onPress={() => this.postMsg(this.state.name, this.state.mobile, this.state.balance, this.state.msg)}>
                                                  <Text>SUBMIT</Text>
                                                  </Button>
                                              </Body>
                                              <Right>
                                              </Right>
                                          </CardItem>
                                      </View>
                                      }
                                      </Card>
                                    </Content>
                            </Container>
                    </View>
                  </Modal>
                  </View>
        </TouchableHighlight>
      </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#1C97F7',
  },
  alertText: {
    fontSize:12,
    color: '#ffffff',
  },
  conCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  conCardItem: {
    marginLeft: 5,
    marginTop:5,
  },
  conDetails: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
  },
  postCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,     
  },
  container: {
   
    marginLeft:130,
    marginTop:590,
  
   
  },
  // header:{
  //   backgroundColor: "#1E90FF",
  // },
  // headerContent:{
  //   padding:30,
  //   alignItems: 'center',
  // },
  // avatar: {
  //   width: 130,
  //   height: 130,
  //   borderRadius: 63,
  //   borderWidth: 4,
  //   borderColor: "white",
  //   marginBottom:10,
  // },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    height:'15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
     borderRadius: 10,
    height:50,
    width:180,
      justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 260,
    height:180,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '18%',
    marginTop: '90%',

  },
  loginText: {
    color: 'white',
  },
  modal : {
    flex: 1,
    marginTop: '20%',
    marginLeft: '5%'
  }
});
