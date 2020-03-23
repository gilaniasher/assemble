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
        flex: 1
    },
    bannerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        top: '25%'
    },
    bottomBackground: {
        flex: 4,
        backgroundColor: 'rgb(240,240,240)'
    },
    children: {
        position: 'absolute',
        top: '13%',
        paddingHorizontal: '3%',
        paddingBottom: '13%',
        width: '100%',
        height: '100%',
        
    }
});
