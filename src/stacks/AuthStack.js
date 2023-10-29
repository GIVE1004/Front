import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/authScreen/SplashScreen';
import OauthScreen from '../screens/authScreen/OauthScreen';
import QuestionScreen from '../screens/questionScreen/QuestionScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='OauthScreen' component={OauthScreen} options={{ headerShown: false }} />
      <Stack.Screen name='QuestionScreen' component={QuestionScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default AuthStack;
