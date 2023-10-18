import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { MyModal } from '../../components/Modals/Modals';
import { Footer } from '../../components/Footers/Footers';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
export const UserHistory = (props) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Heading fontSize={20}>"{props.UserNickname}" 님의 기부 내역</Heading>
      <View style={{ paddingLeft: 10 }}>
        <Spacer space={10} />
        <Body fontWeight={'bold'} fontSize={12}>
          월 기부금
        </Body>
        <Body fontWeight={'bold'} fontSize={16}>
          {props.UserMonthlyDonation} 원
        </Body>
        <Spacer space={3} />
        <View style={{ flexDirection: 'row' }}>
          <Body fontWeight={'bold'} fontSize={10}>
            또래 평균보다
          </Body>
          <Body color={Color.Danger_50} fontWeight={'bold'} fontSize={10}>
            {props.UserMonthlyDonationPm} 원
          </Body>
        </View>
        <Spacer space={15}></Spacer>
        <Body fontWeight={'bold'} fontSize={12}>
          총 기부금
        </Body>
        <Body fontWeight={'bold'} fontSize={16}>
          {props.UserTotlaDonation} 원
        </Body>
        <Spacer space={3} />
        <View style={{ flexDirection: 'row' }}>
          <Body fontWeight={'bold'} fontSize={10}>
            또래 평균보다
          </Body>
          <Body color={Color.Success_50} fontSize={10}>
            {props.UserTotlaDonationPm} 원
          </Body>
        </View>
        <Spacer space={15}></Spacer>
        <Body fontWeight={'bold'} fontSize={12}>
          보유 뱃지
        </Body>
        <Body fontWeight={'bold'} fontSize={16}>
          {props.Badge} 개
        </Body>
        <Spacer space={3} />
        <View style={{ flexDirection: 'row' }}>
          <Body fontWeight={'bold'} fontSize={10}>
            또래 평균보다
          </Body>
          <Body fontSize={10} color={Color.Success_50} fontWeight={'bold'}>
            {props.BadgePm}
          </Body>
          <Body color={Color.Success_50} fontWeight={'bold'} fontSize={10}>
            개
          </Body>
        </View>
      </View>
      <Spacer space={20}></Spacer>
    </View>
  );
};

export const DonationNowGroupCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tmpdata = [
    {
      source: 'https://picsum.photos/300',
      groupId: 1,
      groupName: '사회복지법인 굿네이버스1',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      userEmail: 'give1004@mail.com',
      donatorName: '홍길동',
      donnationStartdate: '2023.10.14',
      donnationCount: '10',
      monthlyDonationbudget: '5000',
      groupDonationTotal: '50000',
      goalDonationCount: 12,
      goalBudgetTotal: '60000',
    },
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
      <Heading fontSize={20}>기부 중</Heading>
      <Spacer space={12} />
      <ScrollView horizontal={true} style={{ paddingVertical: 10 }}>
        {tmpdata.map((data, index) => (
          <GroupCard
            source={data.source}
            groupId={data.groupId}
            groupName={data.groupName}
            groupTag={data.groupTag}
            groupLabel={data.groupLabel}
            userEmail={data.userEmail}
            donatorName={data.donatorName}
            donnationStartdate={data.donnationStartdate}
            monthlyDonationbudget={data.monthlyDonationbudget}
            donnationCount={data.donnationCount}
            groupDonationTotal={data.groupDonationTotal}
            goalDonationCount={data.goalDonationCount}
            goalBudgetTotal={data.goalBudgetTotal}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const HistoryGroupCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tmpdata = [
    {
      source: 'https://picsum.photos/300',
      groupId: 1,
      groupName: '사회복지법인 굿네이버스1',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      userEmail: 'give1004@mail.com',
      donatorName: '홍길동',
      donnationStartdate: '2023.10.14',
      donnationCount: '10',
      monthlyDonationbudget: '5000',
      groupDonationTotal: '50000',
      goalDonationCount: 12,
      goalBudgetTotal: '60000',
    },
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
      <Heading fontSize={20}>기부 기록</Heading>
      <Spacer space={12} />
      <ScrollView horizontal={true} style={{ paddingVertical: 10 }}>
        {tmpdata.map((data, index) => (
          <GroupCard
            source={data.source}
            groupId={data.groupId}
            groupName={data.groupName}
            groupTag={data.groupTag}
            groupLabel={data.groupLabel}
            userEmail={data.userEmail}
            donatorName={data.donatorName}
            donnationStartdate={data.donnationStartdate}
            monthlyDonationbudget={data.monthlyDonationbudget}
            donnationCount={data.donnationCount}
            groupDonationTotal={data.groupDonationTotal}
            goalDonationCount={data.goalDonationCount}
            goalBudgetTotal={data.goalBudgetTotal}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const GroupCard = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Color.White_100,
        borderColor: props.color || Color.Black_40,
        borderWidth: 0.5,
        borderBottomWidth: 4,
        borderRadius: 12,
        flexDirection: 'column',
        minWidth: 220,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 16,
      }}
      onPress={() => {
        setIsVisible(true);
      }}
    >
      <ImageLoader source={props.source} style={{ width: 60, height: 60, borderRadius: 100 }} />

      <Spacer space={10} />
      <Heading fontSize={18}>{props.groupName}</Heading>
      <Caption fontSize={16}>
        {props.groupTag} | {props.groupLabel}
      </Caption>

      <MyModal height='70%' isVisible={isVisible} setIsVisible={setIsVisible}>
        <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Heading fontSize={20}>확인 할게요</Heading>
        </View>
        <View style={{ marginHorizontal: 20, padding: 10, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ImageLoader source={props.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
            <View style={{ marginHorizontal: 15 }}>
              <Heading fontSize={16}>{props.groupName}</Heading>

              <Spacer space={4} />
              <Caption fontSize={14}>
                {props.groupTag} | {props.groupLabel}
              </Caption>
            </View>
          </View>
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>이메일</Body>
            <Body fontSize={14}>{props.userEmail}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부자 명</Body>
            <Body fontSize={14}>{props.donatorName}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부시작일</Body>
            <Body fontSize={14}>{props.donnationStartdate}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <Divider />
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>월 기부 금액</Body>
            <Body fontSize={14}>{props.monthlyDonationbudget}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>현재 기부 횟수</Body>
            <Body fontSize={14}>{props.donnationCount} 회</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              현재 기부금 합계
            </Body>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              {props.groupDonationTotal} 원
            </Body>
          </View>
          <Spacer space={16}></Spacer>
          <Divider />
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body></Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>목표 기부 횟수</Body>
            <Body fontSize={14}>{props.goalDonationCount} 회</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              목표 기부금 합계
            </Body>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              {props.goalBudgetTotal} 원
            </Body>
          </View>
          <Spacer space={16}></Spacer>
        </View>
        <Footer>
          <BasicButton width='50%' backgroundColor={Color.Danger_50} borderColor={Color.Danger_50}>
            <Heading fontSize={16} color={Color.White_100}>
              기부 멈추기
            </Heading>
          </BasicButton>
          <BasicButton
            onPress={() => {
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
    </TouchableOpacity>
  );
};
