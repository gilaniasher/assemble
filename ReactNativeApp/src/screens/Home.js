import React from 'react';
import { Text, View } from 'react-native';

export default class Home extends React.Component {
	render() {
		const { navigation } = this.props;

		return (
			<View>
				<Text>Home text</Text>
				<Text>
					username: {navigation.getParam('username')}
				</Text>
			</View>
		);
	}
}
