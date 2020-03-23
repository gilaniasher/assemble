import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BannerPage from '../components/BannerPage';
import { SegmentedControls } from 'react-native-radio-buttons';
import MultiSelect from 'react-native-multiple-select';

const techTags = [
    {
        id: '92iijs7yta',
        name: 'Git',
    }, 
    {
        id: 'a0s0a8ssbsd',
        name: 'Python',
    },
    {
        id: '16hbajsabsd',
        name: 'Java',
    }, 
    {
        id: 'nahs75a5sg',
        name: 'SQL',
    }, 
    {
        id: '667atsas',
        name: 'Django',
    }, 
    {
        id: 'hsyasajs',
        name: 'Crypto',
    }, 
    {
        id: 'djsjudksjd',
        name: 'OCaml',
    }, 
    {
        id: 'sdhyaysdj',
        name: 'Ruby',
    }, 
    {
        id: 'suudydjsjd',
        name: 'Node',
    }
];

export default class Login extends React.Component {
    constructor(props) {
		super(props)

		this.state = {
			selectedItems: []
		}
	}

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };
    
    render() {
        return (
            <BannerPage bannerText="Search">
            <View style={styles.searchContainer}>
                <SegmentedControls options={['Projects', 'People']} />

                <ScrollView>
                    <Text style={styles.techText}>Technologies</Text>
                    <MultiSelect
                        items={techTags}
                        uniqueKey="id"
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={this.state.selectedItems}
                        altFontFamily="ProximaNova-Light"
                    />
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
        paddingTop: 30,
        paddingBottom: 20
    }
});
