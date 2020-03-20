import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Profile from '../components/ProfilePicture';

export default class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	changeProfilePicture = async () => {
		console.log("Changing profile picture. UNIMPLEMENTED");
	}

	render() {
		return (
			<ImageBackground
				source={require('../images/home_backdrop.jpg')}
				style={{width: '100%', height: '100%'}}
			>
			<View style={styles.overlay}>
				<Profile source={require('../images/sample_profile.jpg')} />
				<View style={styles.horizontalLine} />
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
	},
	horizontalLine: {
		alignSelf: 'stretch',
		borderBottomColor: '#42426A',
		borderBottomWidth: StyleSheet.hairlineWidth + 1,
		margin: 30,
	}
});
