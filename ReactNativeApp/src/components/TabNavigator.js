import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';

const routeIcons = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Search') {
            iconName = focused ? 'file-search' : 'file-search-outline'
        }

        return <Icon name={iconName} size={25} color={color} />;
    }
});

const settingsPlaceholder = () => {
    return (
        <Text>Settings placeholder</Text>
    );
};

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#592E83'}}
            screenOptions={routeIcons}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Settings" component={settingsPlaceholder} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
