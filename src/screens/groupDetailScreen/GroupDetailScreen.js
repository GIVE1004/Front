import { useState } from 'react';
import { View, StyleSheet, Platform, ScrollView,  Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Heading, Caption, Body } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { GroupDetailInfoCard, GroupGraphCard, GroupInfoCard } from '../../modules/groupDetailModule/GroupBasicCard';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { MyRadioButton } from '../../components/Buttons/RadioButtons';
import { SwiftLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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
  
  const navigation = useNavigation();

  const tmpdata = {
    source: 'https://picsum.photos/300',
    groupId: '1',
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
        <GroupGraphCard />
        <Spacer space={10} />
        <GroupDetailInfoCard />

        {/* footer만큼의 크기를 임의로 넣었다. */}
        <Spacer space={Platform.OS == 'android' ? 100 : 120} />
      </KeyboardAwareScrollView>
      {/* 그룹 디테일 Footer */}
      <Footer>
        <BasicButton
          onPress={() => {
            setIsVisible(true);
            // setIsVisibleStopCheck(true);
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
        <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Heading>기부하기</Heading>
        </View>
        <Spacer space={10} />
        <DoDonation data={tmpdata} />
        <Footer>
          <BasicButton
            onPress={() => {
              setIsVisible(false);
              setIsVisibleCheck(true);

            }}
            width='100%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>기부하기</Heading>
          </BasicButton>
        </Footer>
      </MyModal>

      {/* 확인 모달(기부하기->기부확인) */}
      <MyModal height='60%' isVisible={isVisibleCheck} setIsVisible={setIsVisibleCheck}>
        <View style={{height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
          <Heading>확인할게요</Heading>
        </View>
        <Spacer space={10}/>
        <DonationCheck data={tmpdata}/>
        <Footer>
          <BasicButton
            onPress={() => setIsVisibleCheck(false)}
            width='50%'
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>뒤로가기</Heading>
            
          </BasicButton>
          <BasicButton
            onPress={() => {
              setIsVisibleCheck(false);
              setIsVisibleSucess(true);
            }}
            width='50%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>확인</Heading>
          </BasicButton>
        </Footer>
      </MyModal>

      {/* 성공 모달 */}
      <MyModal height='50%' isVisible={isVisibleSucess} setIsVisible={setIsVisibleSucess}>
        <DonnationSuccess />
        <Footer>
        <BasicButton
          onPress={() => {
            setIsVisibleSucess(false);
            navigation.goBack();
          }}
          width='100%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>등록완료</Heading>
        </BasicButton>
      </Footer>
      </MyModal>

      {/* 기부 멈추기 확인 모달 */}
      <MyModal height='60%' isVisible={isVisibleStopCheck} setIsVisible={setIsVisibleStopCheck}>
        <View style={{height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
          <Heading>확인할게요</Heading>
        </View>
        <Spacer space={10}/>
        <DonationStopCheck data={tmpdata}/>
        <Footer>
          <BasicButton
            onPress={() => {
              setIsVisibleStopCheck(false);
              setIsVisibleStopSucess(true);
            }}
            width='100%'
            backgroundColor={Color.Secondary_50}
            borderColor={Color.Secondary_50}
            
          >
            <Heading fontSize={16} color={Color.White_100}>확인</Heading>
          </BasicButton>
        </Footer>
      </MyModal>

      {/* 기부 멈추기 성공 모달 */}
      <MyModal height='50%' isVisible={isVisibleStopSucess} setIsVisible={setIsVisibleStopSucess}>
        <DonnationStopSuccess />
        <Footer>
        <BasicButton
          onPress={() => {
            setIsVisibleStopSucess(false);
            navigation.goBack();
          }}
          width='100%'
          backgroundColor={Color.Secondary_50}
          borderColor={Color.Secondary_50}
        >
          <Heading fontSize={16} color={Color.White_100}>완료</Heading>
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
  console.log(data);
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
        <Heading fontSize={20}>기간 선택</Heading>
        <Spacer space={13} />
        <View style={{ width: '100%', paddingHorizontal: 15 }}>
          <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} width={90} />
        </View>
        <Heading fontSize={20}>증명서가 필요한가요?</Heading>
        <Spacer space={13} />

        <MyRadioButton values={values} setChecked={setChecked} color={Color.Secondary_50} />
      </View>
      
    </ScrollView>
  );
};

export const DonationCheck = ({ data }) => {
  return(
    <ScrollView>
      <View style={{ marginHorizontal: 20, padding: 10, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <View style={{ marginHorizontal: 15 }}>
            <Heading fontSize={16}>{data.groupName}</Heading>

            <Spacer space={4} />
            <Caption fontSize={14}>
              {data.groupTag} | {data.groupLabel}
            </Caption>
          </View>
        </View>
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>이메일</Body>
          <Body fontSize={14}>{data.userEmail}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>기부자 명</Body>
          <Body fontSize={14}>{data.donatorName}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>기부시작일</Body>
          <Body fontSize={14}>{data.donnationStartdate}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <Divider />
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>월 기부 금액</Body>
          <Body fontSize={14}>{AddComma(data.monthlyDonationbudget)} 원</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>예상 기부 횟수</Body>
          <Body fontSize={14}>{data.expectedDonationCount} 회</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            예상 기부금 합계
          </Body>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            {AddComma(data.expectedDonationTotal)} 원
          </Body>
        </View>
      </View>
      

    </ScrollView>
  )
}

export const DonnationSuccess = () => {
  
  return (
    <View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Spacer space={30} />
        <Image source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
        <Spacer space={20} />
        <Heading fontSize={28}>기부 성공!</Heading>
        <Spacer space={5} />
        <Caption fontSize={14}>기부자님의 소중한 마음으로 놀라운 변화가 일어났어요.</Caption>
      </View>
      
    </View>
  );
};

export const DonationStopCheck = ({ data }) => {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20, padding: 10, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <View style={{ marginHorizontal: 15 }}>
            <Heading fontSize={16}>{data.groupName}</Heading>

            <Spacer space={4} />
            <Caption fontSize={14}>
              {data.groupTag} | {data.groupLabel}
            </Caption>
          </View>
        </View>
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>이메일</Body>
          <Body fontSize={14}>{data.userEmail}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>기부자 명</Body>
          <Body fontSize={14}>{data.donatorName}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>기부시작일</Body>
          <Body fontSize={14}>{data.donnationStartdate}</Body>
        </View>
        <Spacer space={16}></Spacer>
        <Divider />
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>월 기부 금액</Body>
          <Body fontSize={14}>{AddComma(data.monthlyDonationbudget)} 원</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontSize={14}>예상 기부 횟수</Body>
          <Body fontSize={14}>{data.expectedDonationCount} 회</Body>
        </View>
        <Spacer space={16}></Spacer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            예상 기부금 합계
          </Body>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            {AddComma(data.expectedDonationTotal)} 원
          </Body>
        </View>
      </View>
      

    </ScrollView>
  );
};

export const DonnationStopSuccess = () => {
  
  return (
    <View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Spacer space={30} />
        <Image source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
        <Spacer space={20} />
        <Heading fontSize={28}>감사합니다.</Heading>
        <Spacer space={5} />
        <Caption fontSize={14}>지금까지 기부자님의 도움으로 세상이 더 밝아졌습니다.</Caption>
      </View>
      
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
