import React ,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView, SafeAreaView} from 'react-native';
import {createStackNavigator, createAppContainer ,createDrawerNavigator, DrawerItems, createSwitchNavigator} from 'react-navigation';

//Screen
import LandingScreen from '../Main/landingScreen.js';
//import LoginScreen from './components/Auth/loginScreen.js';
//import RegistrationScreen from './components/Auth/registrationScreen.js';
import DashBoardScreen from '../Dashboard/dashboardScreen.js';
import AccountScreen from '../Account/account.js';


//static Screen
import PrivacyScreen from '../staticScreens/privacy_policy.js';


const MainNavigator = createStackNavigator({
   //Login: {screen: LoginScreen},
  //Register: {screen: RegistrationScreen},
  Dashboard: {screen: DashBoardScreen},
  Privacy: {screen: PrivacyScreen},
  Landing: {screen: LandingScreen},
  Account: {screen: AccountScreen}
});

const CustomDrawerComponent = (props) => (
	<SafeAreaView style = {{ flex:1}}>
	<ScrollView>
	<DrawerItems/>
	</ScrollView>
	</SafeAreaView>
	)

const DashboardDrawerNavigation = createDrawerNavigator({
	 //Register: {screen: RegistrationScreen},
  Account: {screen: AccountScreen},
  Dashboard: {screen: MainNavigator},
  Privacy: {screen: PrivacyScreen}
},{
	contenComponent: CustomDrawerComponent
})

const AppSwitchNavigator = createSwitchNavigator({
  Landing: { screen: LandingScreen },
  Dashboard: { screen: DashboardDrawerNavigation }
});

const App = createAppContainer(AppSwitchNavigator);

export default App;
