import { Divider } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { Heading, Caption, Body } from '../../components/Typography/Typography';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { MyModal } from '../../components/Modals/Modals';
import { Footer } from '../../components/Footers/Footers';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { AddComma } from '../../util/util';

export const ReportGroupInfoView = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [charityId, setCharityId] = useState(0);
  const data = props.data;

  return (
    <View style={{ flex: 1, margin: 10 }}>
      {props.type == 'nowDonation' ? (
        <Heading fontSize={20}>기부중인 단체</Heading>
      ) : (
        <Heading fontSize={20} numberOfLines={1}>
          기부한 단체
        </Heading>
      )}
      <Spacer space={6} />
      {data.map((value) => (
        <TouchableOpacity
          style={{ justifyContent: 'space-between' }}
          onPress={() => {
            setCharityId(value.charityId);
            setIsVisible(true);
          }}
          key={value.charityId}
        >
          <ReportGroupInfoCard groupData={value} />
          <Divider />
        </TouchableOpacity>
      ))}
      {props.type == 'nowDonation' ? (
        <NowDonationModal charityId={charityId} setIsVisible={setIsVisible} isVisible={isVisible} />
      ) : (
        <FinDonationModal charityId={charityId} setIsVisible={setIsVisible} isVisible={isVisible} />
      )}
    </View>
  );
};

export const ReportGroupInfoCard = (props) => {
  const groupData = props.groupData;
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 12, margin: 2 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <ImageLoader source={groupData.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
        </View>
        <Spacer horizontal={true} space={8} />
        <View style={{ justifyContent: 'center' }}>
          <Heading fontSize={16}>{groupData.groupName}</Heading>
          <Spacer space={4} />
          <Caption fontSize={14}>
            {groupData.groupTag} | {groupData.groupLabel}
          </Caption>
        </View>
      </View>
    </View>
  );
};

export const FinDonationModal = (props) => {
  const navigation = useNavigation();

  return (
    <MyModal isVisible={props.isVisible} setIsVisible={props.setIsVisible}>
      <FinDonationView charityId={props.charityId} />
      <Footer>
        <BasicButton
          onPress={() => {
            props.setIsVisible(false);
            navigation.navigate('ReviewScreen');
          }}
          width='100%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>리뷰쓰기</Heading>
        </BasicButton>
      </Footer>
    </MyModal>
  );
};

export const FinDonationView = (props) => {
  const charityId = props.charityId;
  console.log(props.charityId);
  const groupData = {
    source: 'https://picsum.photos/300',
    charityId: 1,
    groupName: '사회복지법인 굿네이버스1',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
    userEmail: 'test@give1004.com',
    donatorName: '김기부',
    donationStartdate: '2022.10.11',
    donationEnddate: '2023.10.11',
    monthlyDonationbudget: 10000,
    donnationCount: 10,
    groupDonationTotal: 50000,
  };
  return (
    <View>
      <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
        <Heading fontSize={20}>확인 할게요</Heading>
      </View>

      <View style={{ marginHorizontal: 20, paddingHorizontal: 20, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 10, marginBottom: 10 }}>
        <ReportGroupInfoCard groupData={groupData} />
        <Spacer space={16} />
        <DefaultDonationInput title='이메일' content={groupData.userEmail} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부자 명' content={groupData.donatorName} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부시작일' content={groupData.donationStartdate} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부종료일' content={groupData.donationEnddate} />
        <Spacer space={16} />
        <Divider />
        <Spacer space={16} />
        <DefaultDonationInput title='월 기부 금액' content={AddComma(groupData.monthlyDonationbudget) + ' 원'} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부 횟수' content={groupData.donnationCount + ' 회'} />
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            기부금 합계
          </Body>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            {AddComma(groupData.groupDonationTotal)} 원
          </Body>
        </View>
      </View>
    </View>
  );
};

export const NowDonationModal = (props) => {
  const navigation = useNavigation();

  return (
    <MyModal isVisible={props.isVisible} setIsVisible={props.setIsVisible}>
      <NowDonationView charityId={props.charityId} />
      <Footer>
        <BasicButton width='50%' backgroundColor={Color.Secondary_50} borderColor={Color.Secondary_50}>
          <Heading fontSize={16} color={Color.White_100}>
            기부 멈추기
          </Heading>
        </BasicButton>
        <BasicButton
          onPress={() => {
            props.setIsVisible(false);
            navigation.navigate('ReviewScreen');
          }}
          width='50%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>리뷰쓰기</Heading>
        </BasicButton>
      </Footer>
    </MyModal>
  );
};

export const NowDonationView = (props) => {
  const charityId = props.charityId;
  console.log(props.charityId);
  const groupData = {
    source: 'https://picsum.photos/300',
    charityId: 1,
    groupName: '사회복지법인 굿네이버스1',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
    userEmail: 'test@give1004.com',
    donatorName: '김기부',
    donationStartdate: '2022.10.11',
    monthlyDonationbudget: 10000,
    donnationCount: 10,
    groupDonationTotal: 50000,
    goalDonationbudget: 12,
    goalGroupDonationTotal: 60000,
  };

  return (
    <View>
      <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
        <Heading fontSize={20}>확인 할게요</Heading>
      </View>

      <View style={{ marginHorizontal: 20, paddingHorizontal: 20, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 10, marginBottom: 10 }}>
        <ReportGroupInfoCard groupData={groupData} />
        <Spacer space={16} />
        <DefaultDonationInput title='이메일' content={groupData.userEmail} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부자 명' content={groupData.donatorName} />
        <Spacer space={16} />
        <DefaultDonationInput title='기부시작일' content={groupData.donationStartdate} />
        <Spacer space={16} />
        <Divider />
        <Spacer space={16} />
        <DefaultDonationInput title='월 기부 금액' content={AddComma(groupData.monthlyDonationbudget) + ' 원'} />
        <Spacer space={16} />
        <DefaultDonationInput title='현재 기부 횟수' content={groupData.donnationCount + ' 회'} />
        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            현재 기부금 합계
          </Body>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            {AddComma(groupData.groupDonationTotal)} 원
          </Body>
        </View>
        <Spacer space={16} />
        <Divider />
        <Spacer space={16} />
        <DefaultDonationInput title='목표 기부 횟수' content={groupData.goalDonationbudget + ' 원'} />

        <Spacer space={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            목표 기부금 합계
          </Body>
          <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
            {AddComma(groupData.goalGroupDonationTotal)} 원
          </Body>
        </View>
      </View>
    </View>
  );
};

export const DefaultDonationInput = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Body fontSize={14}>{props.title}</Body>
      <Body fontSize={14}>{props.content}</Body>
    </View>
  );
};
