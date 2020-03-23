import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BannerPage from '../components/BannerPage';
import { SegmentedControls } from 'react-native-radio-buttons';

export default class Login extends React.Component {
    render() {
        return (
            <BannerPage bannerText="Search">
            <View style={styles.searchContainer}>
                <SegmentedControls 
                    options={['Projects', 'People']}
                />

                <ScrollView>
                    <Text style={styles.techText}>Technologies</Text>
                </ScrollView>
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
        padding: 20
    },
    techText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 30
    }
});
