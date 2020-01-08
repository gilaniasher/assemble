import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TextFormWithIcon extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.icon}
                    name={this.props.iconName ? this.props.iconName : 'email'}
                    size={this.props.iconSize ? this.props.iconSize : 30}
                    color={this.props.iconColor ? this.props.iconColor : 'rgba(255, 255, 255, 0.7)'}
				/>

                <TextField
                    label={this.props.label}
                    textColor={this.props.textColor ? this.props.textColor : 'rgba(255, 255, 255, 0.7)'}
                    tintColor={this.props.tintColor ? this.props.tintColor : 'rgba(0, 225, 121, 1.0)'}
                    baseColor={this.props.baseColor ? this.props.baseColor : 'rgba(255, 255, 255, 0.7)'}
                    secureTextEntry={Boolean(this.props.secureTextEntry)}
                    onChangeText={this.props.onChangeText}
                    containerStyle={{ paddingLeft: 43 }}
				/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    icon: {
        position: 'absolute',
        top: 25,
        left: 0
    }
})