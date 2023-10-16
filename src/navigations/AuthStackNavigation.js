import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/AuthScreen/SplashScreen';
import OauthScreen from '../screens/AuthScreen/OauthScreen';

const Stack = createNativeStackNavigator();
const AuthStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='OauthScreen' component={OauthScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="SchoolEmail"
        component={SchoolEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FindPassWord"
        component={FindPassWordScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};
export default AuthStackNavigation;
