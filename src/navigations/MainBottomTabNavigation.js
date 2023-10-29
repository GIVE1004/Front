import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import * as Color from '../components/Colors/colors';
import * as IconName from '../components/Icons/IconName';
import { Badge } from '../components/Icons/Badge';
import { Icon } from '../components/Icons/Icons';
import MainScreen from '../screens/mainBottomTabs/MainScreen';
import SearchScreen from '../screens/mainBottomTabs/SearchScreen';
import UserScreen from '../screens/mainBottomTabs/UserScreen';
import ChatScreen from '../screens/mainBottomTabs/ChatScreen';
import ReportScreen from '../screens/mainBottomTabs/ReportScreen';
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
            if (route.name === 'main') {
              return IconName.HOME;
            } else if (route.name === 'chat') {
              return IconName.CHAT;
            } else if (route.name === 'report') {
              return IconName.CHART;
            } else if (route.name === 'search') {
              return IconName.SEARCH;
            } else if (route.name === 'user') {
              return IconName.USER;
            }
          };
          const iconName = getIconName();
          return (
            <Badge badgeBackGroudColor={focused ? Color.Black_80 : Color.White_100}>
              <Icon name={iconName} size={22} iconColor={focused ? Color.Primary_50 : Color.Black_60} />
            </Badge>
          );
        },
      })}
    >
      <Tabs.Screen name='main' component={MainScreen}></Tabs.Screen>
      <Tabs.Screen name='chat' component={ChatScreen}></Tabs.Screen>
      <Tabs.Screen name='report' component={ReportScreen}></Tabs.Screen>
      <Tabs.Screen name='search' component={SearchScreen}></Tabs.Screen>
      <Tabs.Screen name='user' component={UserScreen}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
export default MainBottomTabNavigation;
