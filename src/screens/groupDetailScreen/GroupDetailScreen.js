import { useState } from 'react';
import { View, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Heading, Caption } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { GroupDetailInfoCard, GroupGraphCard, GroupInfoCard } from '../../modules/groupDetailModule/GroupBasicCard';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { MyRadioButton } from '../../components/Buttons/RadioButtons';
import { SwiftLabel } from '../../components/Labels/Labels';
import { HelpTooltip } from '../../components/Tooltip/MyTooltip';
import { useNavigation } from '@react-navigation/native';

const GroupDetailScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSuccess, setIsVisibleSuccess] = useState(false);

  // fetch 받을 데이터(내가 관심 등록한 단체인지) + onPress시 관심단체 선택/해제 넣기
  const [isStar, setIsStar] = useState(false);
  // To-do
  // fetch 받을 데이터(내가 기부하고 있는 단체인지) -> 기부하기 모달에 띄울 페이지도 다름.
  const [isGive, setIsGive] = useState(true);
  const tmpdata = {
    source: 'https://picsum.photos/300',
    groupId: '1',
    groupName: '사회복지법인 굿네이버스1',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
  };

  return (
    <View style={styles.container}>
      <StarHeader isStar={isStar} setIsStar={setIsStar} />
      <KeyboardAwareScrollView>
        <GroupInfoCard />
        <Spacer space={6} />
        <GroupGraphCard />
        <Spacer space={10} />
        <GroupDetailInfoCard />
        <Spacer space={6} />
      </KeyboardAwareScrollView>
      {/* 그룹 디테일 Footer */}
      <Footer>
        <BasicButton
          onPress={() => setIsVisible(true)}
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
        <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Heading fontSize={20}>기부하기</Heading>
        </View>
        <KeyboardAwareScrollView>
          <Spacer space={20} />
          <DoDonation data={tmpdata} />
        </KeyboardAwareScrollView>
        <Footer>
          <BasicButton
            onPress={() => {
              setIsVisible(false);
              setIsVisibleSuccess(true);
            }}
            width='100%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>기부하기</Heading>
          </BasicButton>
        </Footer>
      </MyModal>

      <MyModal height='50%' isVisible={isVisibleSuccess} setIsVisible={setIsVisibleSuccess}>
        <ScrollView>
          <DonnationSuccess />
        </ScrollView>

        <Footer>
          <BasicButton
            onPress={() => {
              setIsVisibleSuccess(false);
            }}
            width='100%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>기부완료</Heading>
          </BasicButton>
        </Footer>
      </MyModal>
    </View>
  );
};

export const DoDonation = ({ data }) => {
  const labels = ['1개월', '3개월', '6개월', '1년'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  const values = ['네', '아니오'];
  const [checked, setChecked] = useState();
  return (
    <ScrollView>
      <View style={{ flexDirection: 'col', paddingHorizontal: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <ImageLoader source={data.source} style={{ width: 60, height: 60, borderRadius: 100 }} />
          </View>
          <Spacer space={10} />
          <View style={{ marginLeft: 15 }}>
            <Heading fontSize={18}>{data.groupName}</Heading>
            <Caption fontSize={16}>
              {data.groupTag} | {data.groupLabel}
            </Caption>
          </View>
        </View>
        <Spacer space={13} />
        <Heading fontSize={20}>기부액(월단위)</Heading>
        <Spacer space={13} />
        <SingleLineInput placeholder={'금액을 입력하세요'} />
        <Spacer space={13} />
        <Heading fontSize={20}>기부자</Heading>
        <Spacer space={13} />
        <SingleLineInput placeholder={'원하시는 성함을 입력하세요'} />
        <Spacer space={13} />
        <View style={{ flexDirection: 'row' }}>
          <Heading fontSize={20}>기간 선택 </Heading>
          <HelpTooltip content={'기부금은 매달 1일에 기부됩니다.'} />
        </View>
        <Spacer space={13} />
        <View style={{ width: '100%', paddingHorizontal: 15 }}>
          <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} width={90} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Heading fontSize={20}>증명서가 필요한가요? </Heading>
          <HelpTooltip content={'증명서는 가입한 메일로 갑니다.'} />
        </View>
        <Spacer space={13} />
        <MyRadioButton values={values} setChecked={setChecked} color={Color.Secondary_50} />
      </View>
    </ScrollView>
  );
};

export const DonnationSuccess = (props) => {
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Spacer space={30} />
      <LocalImageLoader source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
      <Spacer space={20} />
      <Heading fontSize={28}>기부 성공!</Heading>
      <Spacer space={5} />
      <Caption>기부자님의 소중한 기부가 완료되었어요!</Caption>
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
