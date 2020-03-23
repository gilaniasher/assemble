import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class BannerPage extends React.Component {
    render() {
        return (
            <>
                <LinearGradient colors={['#CAA8F5', '#725AC1']} style={styles.topBackground}>
                    <Text style={styles.bannerText}>{ this.props.bannerText }</Text>
                </LinearGradient>

                <View style={styles.bottomBackground} />

                <View style={styles.children}>
                    {this.props.children}
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    topBackground: {
        flex: 1,
        padding: 20
    },
    bannerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        top: '15%'
    },
    bottomBackground: {
        flex: 6,
        backgroundColor: 'rgb(200,200,200)'
    },
    children: {
        position: 'absolute',
        paddingHorizontal: '3%',
        top: '14%',
        paddingBottom: '14%',
        width: '100%',
        height: '100%',
        
    }
});
