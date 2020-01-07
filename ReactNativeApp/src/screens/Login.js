import React from 'react';
import { StyleSheet, View, Image, Text, Button, ImageBackground } from 'react-native';
import * as userService from '../services/HandleUserRequest';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

		const response = await userService.validateUser(
			this.state.username,
			this.state.password
		);

		console.log(response);

		if (response == null) {
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
			<ImageBackground
				source={require('../images/team_background.jpg')}
				style={{width: '100%', height: '100%'}}
			>
			<View style={styles.overlay}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../images/logo.png')}
					/>

					<Text style={styles.title}>An app testing react native</Text>
				</View>

				<Icon
					name='email'
					size={30}
					color='rgba(255, 255, 255, 0.7)'
				/>

				<View style={styles.formContainer}>
					<TextField
						label='Email'
						textColor='rgba(255, 255, 255, 0.7)'
						tintColor='rgba(255, 255, 255, 0.7)'
						onChangeText={(text) => this.setState({username: text})}
					/>
					<TextField
						label='Password'
						secureTextEntry={true}
						textColor='rgba(255, 255, 255, 0.7)'
						tintColor='rgba(255, 255, 255, 0.7)'
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
			</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(114, 90, 193, .8)',
	},
	container: {
		flex: 1,
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
	button: {
		width: 20
	}
});
