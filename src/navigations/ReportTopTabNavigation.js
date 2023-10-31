import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Color from '../components/Colors/colors';
import { ReportGroupView, ReportMoneyView, ReportMyDonationView, ReportTotalView } from '../modules/reportModule/ReportTopTabModule';

const ReportTopTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: Color.White_100,
          tabBarActiveTintColor: Color.Black_80,
          tabBarInactiveTintColor: Color.Black_40,
          tabBarIndicatorStyle: {
            backgroundColor: Color.Success_50,
          },
        }}
      >
        <Tab.Screen name='종합' component={ReportTotalView} />
        <Tab.Screen name='기부단체' component={ReportGroupView} />
        <Tab.Screen name='기부내역' component={ReportMyDonationView} />
        <Tab.Screen name='세액공제' component={ReportMoneyView} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ReportTopTabNavigation;
