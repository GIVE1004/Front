import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DonationNowGroupCard, HistoryGroupCard, UserHistory } from '../../modules/myHistoryModule/MyHistoryCard';

const ChartScreen = () => {
  const data = {
    UserNickname: '킹받은 짱구',
    UserMonthlyDonation: '12000',
    UserMonthlyDonationPm: '-3584',
    UserTotlaDonation: '212000',
    UserTotlaDonationPm: '56256',
    Badge: '4',
    BadgePm: '1',
  };

  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <UserHistory
          UserNickname={data.UserNickname}
          UserMonthlyDonation={data.UserMonthlyDonation}
          UserMonthlyDonationPm={data.UserMonthlyDonationPm}
          UserTotlaDonation={data.UserTotlaDonation}
          UserTotlaDonationPm={data.UserTotlaDonationPm}
          Badge={data.Badge}
          BadgePm={data.BadgePm}
        />
        <DonationNowGroupCard />
        <HistoryGroupCard />
      </KeyboardAwareScrollView>
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
