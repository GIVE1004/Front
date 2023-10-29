import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Color from '../components/Colors/colors';
import { ChartGroupView, ChartMoneyView, ChartMyDonationView, ChartTotalView } from '../modules/chartModule/ChartTopTabModule';

const ChartTopTabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          pressColor: Color.White_100,
          activeTintColor: Color.Black_80,
          inactiveTintColor: Color.Black_40,
          indicatorStyle: {
            backgroundColor: Color.Success_50,
          },
        }}
      >
        <Tab.Screen name='종합' component={ChartTotalView} />
        <Tab.Screen name='기부단체' component={ChartGroupView} />
        <Tab.Screen name='기부내역' component={ChartMyDonationView} />
        <Tab.Screen name='새액공제' component={ChartMoneyView} />
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

export default ChartTopTabNavigation;
