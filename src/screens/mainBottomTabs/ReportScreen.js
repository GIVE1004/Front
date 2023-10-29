import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ReportDefaultMsgCard } from '../../modules/reportModule/ReportDefaultModule';
import ReportTopTabNavigation from '../../navigations/ReportTopTabNavigation';

const ReportScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <MainHeader />
      <ReportDefaultMsgCard />
      <ReportTopTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ReportScreen;
