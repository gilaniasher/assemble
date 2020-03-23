import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BannerPage from '../components/BannerPage';

export default class Login extends React.Component {
    render() {
        return (
            <BannerPage bannerText="Search">
                <View style={styles.searchContainer}>
                    <Text style={{textAlign: 'center'}}>Hello</Text>
                </View>
            </BannerPage>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopStartRadius: 10,
        borderTopRightRadius: 10,
        padding: 15
    }
});
