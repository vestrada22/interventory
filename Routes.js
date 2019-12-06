
import * as React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LoginScreen from './screens/Login'
import TabsSettingScreen from "./screens/Tabs/Setting";



import SideBar from "./components/SideBar";


const tabBarIcon = (name) => ({
  tintColor,
  horizontal,
}) => (
    <Icon name={name} color={tintColor} size={horizontal ? 17 : 24} />
);

const AppNavigator  = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: { 
    screen : DetailsScreen
  },
},
{
    initialRouteName: 'Home',
});


const AppDrawer = createBottomTabNavigator(
  {
    // Drawer : AppNavigator,
    Home: {
        screen: HomeScreen,
        showIcon : true,
        navigationOptions : {
            tabBarIcon : tabBarIcon('home'),
            drawerIcon : ({ tintColor }) => <Icon name='home' size={16} color={tintColor} />
        }
    },
    Details: { 
      screen : DetailsScreen,
      navigationOptions : {
        tabBarIcon : tabBarIcon('list'),
        drawerIcon : ({ tintColor }) => <Icon name='list' size={16} color={tintColor} />
      }
    },
    Tabs: { 
      screen : TabsSettingScreen,
      navigationOptions : {
        title : 'Configuración',
        tabBarIcon : tabBarIcon('cog'),
        drawerIcon : ({ tintColor }) => <Icon name='cog' size={16} color={tintColor} />
      },
    },
  },
  {
    contentComponent : props => <SideBar {...props} />,
    drawerWidth : Dimensions.get('window').width * 0.7,
    hideStatusBar : true,
    contentOptions : {
      activeBackgroundColor : 'rgba(51, 161, 255, 0.4)',
      activeTintColor : '#0A82E8',
      itemsContainerStyle : {
        marginTop : 16,
        marginHorizontal : 8
      },
      itemStyle : {
        borderRadius : 4
      }

    }
  }
)


const AppStack = createStackNavigator({AppDrawer : AppDrawer})
const LoginStack = createStackNavigator({Login : LoginScreen})

const App = createSwitchNavigator({
    // Login : {
    //   screen : LoginScreen
    // } ,
    LoginStack : LoginStack,
    AppStack : AppStack
  },{
    initialRouteName: 'LoginStack'
  }
)

export default createAppContainer(App);