import { RefreshControl, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Color from '../../components/Colors/colors';
import { useCallback, useState } from 'react';
import { ReportCard, ReportMyReviewView, ReportPandaCard } from './ReportTotalModule';
import { Spacer } from '../../components/Basic/Spacer';
import { useNavigation } from '@react-navigation/native';
import { ReportGroupInfoView } from './ReportDonationGroupModule';
import { ReportMonthMyDonationView } from './ReportMyDonationModule';
import { ReportmyTaxView } from './ReportTaxModule';

export const ReportTotalView = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Spacer space={10} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <ReportCard backgroundColor={Color.Primary_60} title='총 기부금' body='210,000원' caption='상위 30%' />
        <ReportCard borderColor={Color.Primary_60} title='추정 월 기부금' body='35,000원' caption='상위 40%' />
      </View>
      <Spacer space={6} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <ReportPandaCard title='기부횟수' body='52회' caption='상위 20%' />
        <ReportCard
          backgroundColor={Color.Success_50}
          title='내 관심단체'
          body='12 개'
          caption={'관심단체에서\n기부를 해보세요'}
          disabled={true}
          onPress={() => {
            navigation.navigate('StarScreen');
          }}
        />
      </View>
      <Spacer space={20} />
      <ReportMyReviewView />
      <Spacer space={6} />
    </KeyboardAwareScrollView>
  );
};

export const ReportGroupView = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  const [nowDonationData, setNowDonationData] = useState([
    { source: 'https://picsum.photos/300', charityId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ]);

  const [finDonationData, setFinDonationData] = useState([
    { source: 'https://picsum.photos/300', charityId: 6, groupName: '사회복지법인 굿네이버스6', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 7, groupName: '사회복지법인 굿네이버스7', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 8, groupName: '사회복지법인 굿네이버스8', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 9, groupName: '사회복지법인 굿네이버스9', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', charityId: 10, groupName: '사회복지법인 굿네이버스10', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ]);

  return (
    <KeyboardAwareScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <ReportGroupInfoView type='nowDonation' data={nowDonationData} />
      <Spacer space={20} />
      <ReportGroupInfoView type='finDonation' data={finDonationData} />
      <Spacer space={6} />
    </KeyboardAwareScrollView>
  );
};

export const ReportMyDonationView = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <ReportMonthMyDonationView />
    </KeyboardAwareScrollView>
  );
};

export const ReportMoneyView = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <ReportmyTaxView />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: Color.White_100,
  },
});
