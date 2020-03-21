import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList, Text } from 'react-native';
import Profile from '../components/ProfilePicture';
import ProjectTile from '../components/ProjectTile';

const numColumns = 2;

const formatData = (data, numColumns) => {
	const numberOfFullRows = Math.floor(data.length / numColumns);
	let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

	while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    	data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
		numberOfElementsLastRow++;
	}

	return data;
};

const data = [
	{
		key: 1,
		title: 'Assemble',
		description: 'Find interesting CS projects to work on!',
		relation: 'OWNER',
		numViews: '2K'
	},
	{
		key: 2,
		title: 'Cosigner',
		description: 'Competitive productivity for better well-being',
		relation: 'CONTRIBUTOR',
		numViews: '1K'
	},
	{
		key: 3,
		title: 'Recap Bot',
		description: 'A Reddit bot that summarizes any article through the SMMRY API',
		relation: 'OWNER',
		numViews: '347'
	},
	{
		key: 4,
		title: 'Sample',
		description: 'test',
		relation: 'OWNER',
		numViews: '10'
	},
	{
		key: 5,
		title: 'Sample 2',
		description: 'test 2',
		relation: 'OWNER',
		numViews: '14'
	},
	{
		key: 6,
		title: 'Sample',
		description: 'test',
		relation: 'OWNER',
		numViews: '10'
	},
	{
		key: 7,
		title: 'Sample',
		description: 'test',
		relation: 'OWNER',
		numViews: '10'
	},
	{
		key: 8,
		title: 'Sample',
		description: 'test',
		relation: 'OWNER',
		numViews: '10'
	},
	{
		key: 9,
		title: 'Sample',
		description: 'test',
		relation: 'OWNER',
		numViews: '10'
	},
];

export default class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	changeProfilePicture = async () => {
		console.log("Changing profile picture. UNIMPLEMENTED");
	}

	renderTile = ({ item, index }) => {
		if (item.empty === true) {
			return <View/>;
		}

		return (
			<ProjectTile
				projectTitle={item.title}
				description={item.description}
				relation={item.relation}
				numViews={item.numViews}
			/>
		);
	};

	render() {
		return (
			<ImageBackground
				source={require('../images/home_backdrop.jpg')}
				style={{width: '100%', height: '100%'}}
			>
			<View style={styles.overlay}>
				<Profile source={require('../images/sample_profile.jpg')} />
				<View style={styles.horizontalLine} />

				<FlatList
					data={formatData(data, numColumns)}
					renderItem={this.renderTile}
					numColumns={numColumns}
				/>
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
		paddingTop: 15
	},
	horizontalLine: {
		alignSelf: 'stretch',
		borderBottomColor: '#42426A',
		borderBottomWidth: StyleSheet.hairlineWidth + 1,
		margin: 30,
	}
});
