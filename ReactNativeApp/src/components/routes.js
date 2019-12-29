import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppIntro from '../screens/AppIntro';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
		
const navigator = createStackNavigator(
	{
		AppIntro: {
			screen: AppIntro,
			navigationOptions: {
				header: null
			}
		},
		Home: { 
			screen: Home,
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
		initialRouteName: 'AppIntro'
	}
);

export default createAppContainer(navigator);
