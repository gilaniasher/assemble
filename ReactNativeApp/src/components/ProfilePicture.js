import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProfilePicture extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={this.props.source}
                        style={styles.profileImage} 
                    />                    
                </View>
                <Icon
                    name='camera'
                    size={45}
                    color='rgba(255, 255, 255, 0.8)'
                    style={styles.cameraIcon}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 160,
        borderRadius: 80
    },
    profileImageContainer: {
		justifyContent: 'center',
		width: 160,
		height: 160,
		borderRadius: 80,
		borderColor: '#00A9A5',
        borderWidth: 1.5,
        overflow: 'hidden'
	},
	profileImage: {
		width: 160,
		height: 160,
		borderRadius: 80
	},
	cameraIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0
	}    
});
