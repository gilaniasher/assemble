import React from 'react';
import { StyleSheet, View, Image, Text, Button, ImageBackground } from 'react-native';
import * as userService from '../services/HandleUserRequest';
import TextIconForm from '../components/TextIconForm';

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

					<Text style={styles.title}>Find the right partners for your next project</Text>
				</View>

				<View style={styles.formContainer}>
					<TextIconForm
						iconName='email'
						label='Email'
						onChangeText={(text) => this.setState({username: text})}
					/>

					<TextIconForm
						label='Password'
						secureTextEntry={true}
						onChangeText={(text) => this.setState({password: text})}
					/>
				</View>

				<Button
					style={styles.button}
					title="Log in"
					onPress={this.goToSignup}
				/>

				<Button
					style={styles.button}
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
		backgroundColor: 'rgba(114, 90, 193, 0.8)',
	},
	container: {
		flex: 1,
		padding: 20
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
		flex: 3,
		padding: 20
	},
	button: {
		width: 20,
		marginVertical: 10
	}
});
