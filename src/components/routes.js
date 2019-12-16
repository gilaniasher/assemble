import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
		
const navigator = createStackNavigator(
	{
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
		}
	},
	{
		initialRouteName: 'Login'
	}
);

export default createAppContainer(navigator);
