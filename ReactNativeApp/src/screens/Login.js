import * as userRequest from '../services/HandleUserRequest';
import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import TextIconForm from '../components/TextIconForm';
import SpinnerButton from 'react-native-spinner-button';

export default class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			defaultLoading: false
		}
	}

	userLogin = async () => {
		this.setState({ defaultLoading: true});
			
		console.log('Verifying user login');
		console.log(this.state.email);
		console.log(this.state.password);

		const res = await userService.validateUser(
			this.state.email,
			this.state.password
		);

		this.setState({ defaultLoading: false});

		if (res === '200') {
			this.props.navigation.navigate('Home', {
				email: this.state.email
			});
		} else {
			console.log('Toast message: ' + res);
		}
	}

	goToSignup = async () => {
		console.log('Going to Signup page');

		this.props.navigation.navigate('Signup', {
			email: this.state.email
		});

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

					<Text style={styles.title}>Assemble your team today</Text>
				</View>

				<View style={styles.formContainer}>
					<TextIconForm
						iconName='email'
						label='Email'
						onChangeText={(text) => this.setState({email: text})}
					/>

					<TextIconForm
						iconName='lock'
						label='Password'
						secureTextEntry={true}
						onChangeText={(text) => this.setState({password: text})}
					/>
				</View>

				<SpinnerButton
					buttonStyle={styles.button}
					isLoading={this.state.defaultLoading}
					onPress={this.userLogin}
					indicatorCount={10}
				>
					<Text style={styles.buttonText}>Log in!</Text>
				</SpinnerButton>

				<Text style={styles.signupTextContainer}>
					<Text>Don't have an account? </Text>
					<Text style={styles.signupText} onPress={this.goToSignup}>Sign up!</Text>
				</Text>
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
		opacity: 0.8,
		fontSize: 16
	},
	formContainer: {
		flex: 3,
		padding: 20
	},
	button: {
		marginVertical: 10,
		borderRadius: 30,
		backgroundColor: '#5636E9',
		opacity: 0.8
	},
	buttonText: {
		color: '#FFF',
		opacity: 0.8,
		fontSize: 18
	},
	signupTextContainer: {
		color: '#FFF',
		opacity: 0.8,
		textAlign: 'center',
		marginTop: 10
	},
	signupText: {
		color: 'rgba(0, 225, 121, 1.0)'
	}

});
