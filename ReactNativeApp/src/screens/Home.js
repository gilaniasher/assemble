import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Profile from '../components/ProfilePicture';

export default class Home extends React.Component {
	render() {
		return (
			<ImageBackground
				source={require('../images/home_backdrop.jpg')}
				style={{width: '100%', height: '100%'}}
			>
			<View style={styles.overlay}>
				<Text>Home text</Text>
				<Profile source={require('../images/sample_profile.jpg')} />
			</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(114, 90, 193, 0.8)',
	}
});
