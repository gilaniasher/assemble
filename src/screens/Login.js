import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
	goToSignup = () => {
		console.log('Going to Signup Page');
		this.props.navigation.navigate('Signup', {});
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
					/>
					<TextInput 
						placeholder="Password"
						placeholderTextColor="rgba(255, 255, 255, 0.7)"
						style={styles.input}
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