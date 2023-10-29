import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChartGroupView, ChartMoneyView, ChartMyDonationView, ChartTotalView } from '../../modules/chartModule/ChartTopTabModule';
import { useState } from 'react';
import { ChartDefaultMsgCard } from '../../modules/chartModule/ChartDefaultModule';
import ChartTopTabNavigation from '../../navigations/ChartTopTabNavigation';

const ChartScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <MainHeader />
      <ChartDefaultMsgCard />
      <ChartTopTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ChartScreen;
