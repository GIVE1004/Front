import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Heading, Caption, Body } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { GroupDetailInfoCard, GroupGraph, GroupInfoCard } from '../../modules/groupDetailModule/GroupBasicModule';
import { DoDonation, DonationCheck, DonationStopCheck, DonnationStopSuccess, DonnationSuccess } from '../../modules/groupDetailModule/GroupModalModule';

const GroupDetailScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCheck, setIsVisibleCheck] = useState(false); //확인 모달
  const [isVisibleStopCheck, setIsVisibleStopCheck] = useState(false); //기부멈추기 확인 모달
  const [isVisibleSucess, setIsVisibleSucess] = useState(false); //성공 모달
  const [isVisibleStopSucess, setIsVisibleStopSucess] = useState(false); //기부멈추기 성공 모달

  // fetch 받을 데이터(내가 관심 등록한 단체인지) + onPress시 관심단체 선택/해제 넣기
  const [isStar, setIsStar] = useState(false);
  // To-do
  // fetch 받을 데이터(내가 기부하고 있는 단체인지) -> 기부하기 모달에 띄울 페이지도 다름.
  const [isGive, setIsGive] = useState(true);

  const tmpdata = {
    source: 'https://picsum.photos/300',
    charityId: 1,
    groupName: '사회복지법인 굿네이버스1',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
    userEmail: 'give1004@mail.com',
    donatorName: '홍길동',
    donnationStartdate: '2023.10.14',
    monthlyDonationbudget: '5000',
    expectedDonationCount: 12,
    expectedDonationTotal: '60000',
  };

  return (
    <View style={styles.container}>
      <StarHeader isStar={isStar} setIsStar={setIsStar} />
      <KeyboardAwareScrollView>
        <GroupInfoCard />
        <Spacer space={6} />
        <GroupGraph />
        <Spacer space={10} />
        <GroupDetailInfoCard charityId={tmpdata.charityId} />
        <Spacer space={6} />
      </KeyboardAwareScrollView>
      {/* 그룹 디테일 Footer */}
      <Footer>
        <BasicButton
          onPress={() => {
            isGive ? setIsVisible(true) : setIsVisibleStopCheck(true);
          }}
          width='100%'
          backgroundColor={isGive ? Color.Primary_50 : Color.Secondary_50}
          borderColor={isGive ? Color.Primary_50 : Color.Secondary_50}
        >
          <Heading fontSize={16} color={isGive || Color.White_100}>
            {isGive ? '기부하기' : '기부 그만하기'}
          </Heading>
        </BasicButton>
      </Footer>

      {/* 기부하기 모달 */}
      <MyModal height='80%' isVisible={isVisible} setIsVisible={setIsVisible}>
        <DoDonation data={tmpdata} setIsVisible={setIsVisible} setIsVisibleCheck={setIsVisibleCheck} />
      </MyModal>

      {/* 확인 모달(기부하기->기부확인) */}
      <MyModal height='60%' isVisible={isVisibleCheck} setIsVisible={setIsVisibleCheck}>
        <DonationCheck data={tmpdata} setIsVisibleCheck={setIsVisibleCheck} setIsVisibleSucess={setIsVisibleSucess} />
      </MyModal>

      {/* 성공 모달 */}
      <MyModal height='50%' isVisible={isVisibleSucess} setIsVisible={setIsVisibleSucess}>
        <DonnationSuccess setIsVisibleSucess={setIsVisibleSucess} />
      </MyModal>

      {/* 기부 멈추기 확인 모달 */}
      <MyModal height='60%' isVisible={isVisibleStopCheck} setIsVisible={setIsVisibleStopCheck}>
        <DonationStopCheck data={tmpdata} setIsVisibleStopCheck={setIsVisibleStopCheck} setIsVisibleStopSucess={setIsVisibleStopSucess} />
      </MyModal>

      {/* 기부 멈추기 성공 모달 */}
      <MyModal height='50%' isVisible={isVisibleStopSucess} setIsVisible={setIsVisibleStopSucess}>
        <DonnationStopSuccess setIsVisibleStopSucess={setIsVisibleStopSucess} />
      </MyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default GroupDetailScreen;
