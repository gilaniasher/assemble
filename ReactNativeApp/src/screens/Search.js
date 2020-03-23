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

const friends = [
    {
        id: '92iijs7yta',
        name: 'Asher',
    }, 
    {
        id: 'a0s0a8ssbsd',
        name: 'Basher',
    },
    {
        id: '16hbajsabsd',
        name: 'Casher',
    }, 
    {
        id: 'nahs75a5sg',
        name: 'Aaron',
    }, 
    {
        id: '667atsas',
        name: 'Baron',
    }, 
    {
        id: 'hsyasajs',
        name: 'Caron',
    }, 
    {
        id: 'djsjudksjd',
        name: 'Daron',
    }, 
    {
        id: 'sdhyaysdj',
        name: 'Faron',
    }, 
    {
        id: 'suudydjsjd',
        name: 'Garon',
    }
];

export default class Login extends React.Component {
    constructor(props) {
		super(props)

		this.state = {
            selectedTags: [],
            selectedPeople: []
		}
	}

    onSelectedTagsChange = (selectedTags) => {
        this.setState({ selectedTags });
    };

    onSelectedPeopleChange = (selectedPeople) => {
        this.setState({ selectedPeople });
    };
    
    render() {
        return (
            <BannerPage bannerText="Search">
            <View style={styles.searchContainer}>
                <SegmentedControls options={['Projects', 'People']} />

                <ScrollView>
                    <Text style={styles.headerText}>Technologies</Text>
                    <MultiSelect
                        items={techTags}
                        uniqueKey="id"
                        onSelectedItemsChange={this.onSelectedTagsChange}
                        selectedItems={this.state.selectedTags}
                        altFontFamily="ProximaNova-Light"
                    />

                    <Text style={styles.headerText}>People</Text>
                    <MultiSelect
                        items={friends}
                        uniqueKey="id"
                        onSelectedItemsChange={this.onSelectedPeopleChange}
                        selectedItems={this.state.selectedPeople}
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
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 30,
        paddingBottom: 20
    }
});
