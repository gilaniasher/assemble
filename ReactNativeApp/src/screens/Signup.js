import * as userRequest from '../services/HandleUserRequest';
import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import TextIconForm from '../components/TextIconForm';
import SpinnerButton from 'react-native-spinner-button';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Signup extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			password: '',
			googleLoading: false,
			githubLoading: false,
			linkedinLoading: false,
			normalSignupLoading: false
		}
	}

	handleGoogleLogin = async () => {
		console.log('Doing Google signup. UNIMPLEMENTED');
		this.setState({ googleLoading: true });

		setTimeout( () => {
			this.setState({ googleLoading: false});
		}, 3000);
	}

	handleGithubLogin = async () => {
		console.log('Doing GitHub signup. UNIMPLEMENTED');
		this.setState({ githubLoading: true });

		setTimeout( () => {
			this.setState({ githubLoading: false});
		}, 3000);
	}

	handleLinkedinLogin = async () => {
		console.log('Doing LinkedIn signup. UNIMPLEMENTED');
		this.setState({ linkedinLoading: true });

		setTimeout( () => {
			this.setState({ linkedinLoading: false});
		}, 3000);
	}

	handleNormalSignup = async () => {
		console.log('Doing normal signup. UNIMPLEMENTED');
		this.setState({ normalSignupLoading: true });

		const res = await userRequest.createUser(
			this.state.name, 
			this.state.email, 
			this.state.password
		);

		this.setState({ normalSignupLoading: false });

		if (res === '200') {
			this.props.navigation.navigate('Home', { username: this.state.username });
		} else {
			console.log('Toast message: ' + res);
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
				<View style={styles.alternateSignin}>
					<SpinnerButton 
						buttonStyle={styles.alternateSigninButton}
						isLoading={this.state.googleLoading}
						onPress={this.handleGoogleLogin}
						indicatorCount={10}
					>
						<Icon name='google' size={30} color='rgba(255, 255, 255, 0.7)' />
					</SpinnerButton>

					<SpinnerButton 
						buttonStyle={styles.alternateSigninButton}
						isLoading={this.state.githubLoading}
						onPress={this.handleGithubLogin}
						indicatorCount={10}
					>
						<Icon name='github' size={30} color='rgba(255, 255, 255, 0.7)' />
					</SpinnerButton>

					<SpinnerButton 
						buttonStyle={styles.alternateSigninButton}
						isLoading={this.state.linkedinLoading}
						onPress={this.handleLinkedinLogin}
						indicatorCount={10}
					>
						<Icon name='linkedin-square' size={30} color='rgba(255, 255, 255, 0.7)'/>
					</SpinnerButton>
				</View>

				<Text style={styles.signinDivider}> ────────  OR  ────────</Text>

				<View style={styles.normalSignin}>
					<TextIconForm
						iconName='account'
						label='Name'
						onChangeText={(text) => this.setState({name: text})}
					/>
					<TextIconForm
						iconName='email'
						label='email'
						onChangeText={(text) => this.setState({email: text})}
					/>
					<TextIconForm
						iconName='lock'
						label='Password'
						secureTextEntry={true}
						onChangeText={(text) => this.setState({password: text})}
					/>

					<SpinnerButton
						buttonStyle={styles.signupButton}
						isLoading={this.state.normalSignupLoading}
						onPress={this.handleNormalSignup}
						indicatorCount={10}
					>
						<Text style={styles.signupButtonText}>Sign up!</Text>
					</SpinnerButton>
				</View>
			</View>
			</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(114, 90, 193, 0.8)'
	},
	container: {
		flex: 1,
		padding: 20
	},
	alternateSignin: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 30
	},
	alternateSigninButton: {
		borderRadius: 30,
		backgroundColor: '#5636E9',
		width: 100,
		opacity: 0.8
	},
	signinDivider: {
		flex: 1,
		textAlign: 'center',
		color: 'rgba(255, 255, 255, 0.8)',
		fontSize: 20,
		paddingTop: 40
	},
	normalSignin: {
		flex: 5
	},
	signupButton: {
		borderRadius: 30,
		backgroundColor: '#5636E9',
		opacity: 0.8,
		marginTop: 90
	},
	signupButtonText: {
		color: '#FFF',
		opacity: 0.8,
		fontSize: 18
	}
});
