import React from "react";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";

import MyDataScreen from "./MyDataScreen";
import SecurityScreen from "./SecurityScreen";
import AdjustmentScreen from "./AdjustmentScreen";
import HelpScreen from "./HelpScreen";
  

  const TabNavigatorSetting = createMaterialTopTabNavigator(
  {
    MyData: { screen: MyDataScreen, navigationOptions : { tabBarLabel: 'Mis datos' } },
    Security: { screen: SecurityScreen, navigationOptions : { tabBarLabel: 'Seguridad' } },
    Adjustment: { screen: AdjustmentScreen, navigationOptions : { tabBarLabel: 'Ajustes' } },
    Help: { screen: HelpScreen, navigationOptions : { tabBarLabel: 'Salir' } },
  },
  {
    initialRouteName: 'MyData',
    activeTintColor: '#F44336',
    lazy : true,
    tabBarOptions : {
        style: { backgroundColor: '#5620E4' },
    }
  },
);

export default createAppContainer(TabNavigatorSetting);
