import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import * as Color from '../components/Colors/colors';
import * as IconName from '../components/Icons/IconName';
import { Badge } from '../components/Icons/Badge';
import { Icon } from '../components/Icons/Icons';
import MainScreen from '../screens/MainBottomTabs/MainScreen';
import SearchScreen from '../screens/MainBottomTabs/SearchScreen';
import ChartScreen from '../screens/MainBottomTabs/ChartScreen';
import UserScreen from '../screens/MainBottomTabs/UserScreen';
import ChatScreen from '../screens/MainBottomTabs/ChatScreen';
const Tabs = createBottomTabNavigator();

const MainBottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarIcon: ({ focused }) => {
          const getIconName = () => {
            if (route.name === 'Main') {
              return IconName.HOME;
            } else if (route.name === 'chat') {
              return IconName.CHAT;
            } else if (route.name === 'chart') {
              return IconName.CHART;
            } else if (route.name === 'search') {
              return IconName.SEARCH;
            } else if (route.name === 'user') {
              return IconName.USER;
            }
          };
          const iconName = getIconName();
          return (
            <Badge badgeBackGroudColor={focused ? Color.Black_60 : Color.White_100}>
              <Icon name={iconName} size={22} iconColor={focused ? Color.Primary_50 : Color.Black_40} />
            </Badge>
          );
        },
      })}
    >
      <Tabs.Screen name='Main' component={MainScreen}></Tabs.Screen>
      <Tabs.Screen name='chat' component={ChatScreen}></Tabs.Screen>
      <Tabs.Screen name='chart' component={ChartScreen}></Tabs.Screen>
      <Tabs.Screen name='search' component={SearchScreen}></Tabs.Screen>
      <Tabs.Screen name='user' component={UserScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
export default MainBottomTabNavigation;
