import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabNavigation from '../navigations/MainBottomTabNavigation';
import GroupDetailScreen from '../screens/groupDetailScreen/GroupDetailScreen';
import StarScreen from '../screens/settingScreen/StarScreen';
import UserInfoScreen from '../screens/settingScreen/UserInfoScreen';
import CalScreen from '../screens/settingScreen/CalScreen';
import PlusScreen from '../screens/settingScreen/PlusScreen';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='MainBottomTab' component={MainBottomTabNavigation} />
      <Stack.Screen name='GroupDetailScreen' component={GroupDetailScreen} />
      <Stack.Screen name='StarScreen' component={StarScreen} />
      <Stack.Screen name='UserInfoScreen' component={UserInfoScreen} />
      <Stack.Screen name='CalScreen' component={CalScreen} />
      <Stack.Screen name='PlusScreen' component={PlusScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
