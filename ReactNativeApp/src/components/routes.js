import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tabs from '../components/TabNavigator';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
		
const navigator = createStackNavigator(
	{
		Tabs: { 
			screen: Tabs,
			navigationOptions: {
				header: null
			}
		},
		Login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		Signup: {
			screen: Signup,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'Login'
	}
);

export default createAppContainer(navigator);
