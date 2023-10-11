import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabNavigation from '../navigations/MainBottomTabNavigation';
import GroupDetailScreen from '../screens/GroupDetailScreen/GroupDetailScreen';
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
    </Stack.Navigator>
  );
};

export default MainStack;
