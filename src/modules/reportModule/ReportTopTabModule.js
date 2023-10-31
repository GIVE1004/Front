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

  return (
    <KeyboardAwareScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <ReportGroupInfoView type='nowDonation' />
      <Spacer space={20} />
      <ReportGroupInfoView type='finDonation' />
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
