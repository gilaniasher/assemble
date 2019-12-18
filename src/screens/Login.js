import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import * as userService from '../services/UserService'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	goToSignup = async () => {
		console.log('Going to Signup Page');
		console.log(this.state.username);
		console.log(this.state.password);

		const response = await userService.authenticateUser(
			this.state.username,
			this.state.password
		);

		if (response.resp) {
			console.log('Invalid Credentials');
		} else {
			this.props.navigation.navigate('Home', {
				username: this.state.username, 
				password: this.state.password
			});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../images/logo.png')}
					/>

					<Text style={styles.title}>An app testing react native</Text>
				</View>

				<View style={styles.formContainer}>
					<TextInput 
						placeholder="Username or Email"
						placeholderTextColor="rgba(255, 255, 255, 0.7)"
						style={styles.input}
						onChangeText={(text) => this.setState({username: text})}
					/>
					<TextInput 
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor="rgba(255, 255, 255, 0.7)"
						style={styles.input}
						onChangeText={(text) => this.setState({password: text})}
					/>
					<Button
						style={styles.button}
						title="Log in"
						onPress={this.goToSignup}
					/>
				</View>

				<Button
					title="Sign up"
					onPress={this.goToSignup}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#725AC1'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: '#FFF',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.8
	},
	formContainer: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		marginBottom: 20,
		color: '#FFF',
		paddingHorizontal: 18
	},
	button: {
		width: 20
	}
});