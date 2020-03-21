import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const maxLength = 25;

export default class TextFormWithIcon extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>
                    { this.props.projectTitle }
                </Text>

                <View style={styles.horizontalLine}/>

                <Text style={styles.description} numberOfLines={1}>
                    { this.props.description }
                </Text>

                <View style={styles.infoContainer}>
                    <Text style={styles.relation}>{ this.props.relation }</Text>

                    <View style={styles.numViewContainer}>
                        <Icon name='eye' size={17}/>
                        <Text style={styles.numViews}>{ this.props.numViews }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(246, 244, 252, 0.7)',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: '45%'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    horizontalLine: {
		alignSelf: 'stretch',
		borderBottomColor: '#42426A',
		borderBottomWidth: StyleSheet.hairlineWidth + 1,
		margin: 5,
    },
    bottomHorizontalLine: {
        alignSelf: 'stretch',
        borderBottomColor: '#42426A',
        borderBottomWidth: StyleSheet.hairlineWidth + 1,
        marginVertical: 8
    },
    description:{
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    numViewContainer: {
        flexDirection: 'row',
    },
    relation: {
    },
    numViews: {
        marginHorizontal: 10
    }
})
