import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	componentDidMount() {
		//console.log('mounted2');
		firebase.initializeApp({
		    apiKey: "AIzaSyAladppvCSBIJVnWoYaBTOco-Kq8MPE0Ks",
		    authDomain: "authentication-3906f.firebaseapp.com",
		    databaseURL: "https://authentication-3906f.firebaseio.com",
		    projectId: "authentication-3906f",
		    storageBucket: "authentication-3906f.appspot.com",
		    messagingSenderId: "593216415525"
	  });

	}

	render() {
		return (
			<View>
				<Header headerText="Authentication"/>
				<LoginForm />
			</View>
		);
	}
}

export default App;
