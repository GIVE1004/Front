import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { AddComma } from '../../util/util';
import { Spacer } from '../../components/Basic/Spacer';
import { SingleLineInput } from '../../components/Inputs/Inputs';

export const ReportmyTaxView = () => {
  return (
    <View>
      <ReportMyTaxCard />
      <ReportMyDonationDetailCard />
      <Spacer space={10} />
    </View>
  );
};

export const ReportMyTaxCard = () => {
  const [isWrite, setIsWrite] = useState(false);
  const [myTaxMoney, setMyTaxMoney] = useState(Math.floor(Math.random() * 100000000));

  return (
    <View style={{ borderWidth: 1, borderColor: Color.Black_40, padding: 20, margin: 10, borderRadius: 14 }}>
      {isWrite ? (
        <ReportMyTaxWriteView setIsWrite={setIsWrite} setMyTaxMoney={setMyTaxMoney} myTaxMoney={myTaxMoney} />
      ) : (
        <ReportMyTaxShowView setIsWrite={setIsWrite} setMyTaxMoney={setMyTaxMoney} myTaxMoney={myTaxMoney} />
      )}
    </View>
  );
};

export const ReportMyTaxWriteView = (props) => {
  const [myTaxMoney, setMyTaxMoney] = useState(props.myTaxMoney);
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading fontSize={20}>내 소득금액</Heading>
        <TouchableOpacity
          onPress={() => {
            props.setIsWrite(false);
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={IconName.BACK} size={18} iconColor={Color.Black_40} />
            <Body fontSize={16}> 돌아가기</Body>
          </View>
        </TouchableOpacity>
      </View>
      <Spacer space={8} />
      <SingleLineInput
        onChangeText={(text) => {
          setMyTaxMoney(text);
        }}
      />
      <Spacer space={7} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Body fontSize={14} color={Color.Success_50}>
          입력한 금액으로 소득액 저장하기
        </Body>
        <View style={{ margin: 2 }}>
          <TouchableOpacity
            onPress={() => {
              props.setMyTaxMoney(myTaxMoney);
              props.setIsWrite(false);
            }}
          >
            <View style={{ backgroundColor: Color.Black_80, padding: 8, borderRadius: 12 }}>
              <Body fontSize={14} color={Color.White_100}>
                저장하기
              </Body>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const ReportMyTaxShowView = (props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading fontSize={20}>내 소득금액</Heading>
        <TouchableOpacity
          onPress={() => {
            props.setIsWrite(true);
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Body fontSize={16}>직접 수정하기 </Body>
            <Icon name={IconName.FORWARD} size={18} iconColor={Color.Black_40} />
          </View>
        </TouchableOpacity>
      </View>
      <Spacer space={12} />
      <Heading>{AddComma(props.myTaxMoney)}원</Heading>
      <Spacer space={16} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Body fontSize={14} color={Color.Success_50}>
          홈텍스 API로 내 소득금액 불러오기
        </Body>
        <View style={{ margin: 2 }}>
          <TouchableOpacity
            onPress={() => {
              props.setMyTaxMoney(Math.floor(Math.random() * 100000000));
            }}
          >
            <View style={{ backgroundColor: Color.Black_80, padding: 8, borderRadius: 12 }}>
              <Body fontSize={14} color={Color.White_100}>
                불러오기
              </Body>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const ReportMyDonationDetailCard = () => {
  const [isWrite, setIsWrite] = useState(false);
  const [data, setData] = useState({
    정치자금기부금: 128000,
    법정기부금: 98000,
    종교기부금: 0,
    지정기부금: 12000,
    우리사주기부금: 5000,
  });

  return (
    <View style={{ borderWidth: 1, borderColor: Color.Black_40, padding: 20, margin: 10, borderRadius: 14 }}>
      {isWrite ? (
        <ReportMyDonationDetailWriteView setIsWrite={setIsWrite} setData={setData} data={data} />
      ) : (
        <ReportMyDonationDetailShowView setIsWrite={setIsWrite} setData={setData} data={data} />
      )}
    </View>
  );
};

export const ReportMyDonationDetailWriteView = (props) => {
  const [정치자금기부금, set정치자금기부금] = useState(props.data.정치자금기부금);
  const [법정기부금, set법정기부금] = useState(props.data.법정기부금);
  const [종교기부금, set종교기부금] = useState(props.data.종교기부금);
  const [지정기부금, set지정기부금] = useState(props.data.지정기부금);
  const [우리사주기부금, set우리사주기부금] = useState(props.data.우리사주기부금);
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading fontSize={20}>기부금</Heading>
        <TouchableOpacity
          onPress={() => {
            props.setIsWrite(false);
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={IconName.BACK} size={18} iconColor={Color.Black_40} />
            <Body fontSize={16}> 돌아가기</Body>
          </View>
        </TouchableOpacity>
      </View>

      <Spacer space={22} />
      <View>
        <ReportMyDonationInputCard title='정치자금 기부금' setItem={set정치자금기부금} curData={props.data.정치자금기부금} />
        <ReportMyDonationInputCard title='법정 기부금' setItem={set법정기부금} curData={props.data.법정기부금} />
        <ReportMyDonationInputCard title='종교 기부금' setItem={set종교기부금} curData={props.data.종교기부금} />
        <ReportMyDonationInputCard title='지정 기부금' setItem={set지정기부금} curData={props.data.지정기부금} />
        <ReportMyDonationInputCard title='우리사주 기부금' setItem={set우리사주기부금} curData={(props.data, 우리사주기부금)} />
      </View>
      <Spacer space={12} />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Body fontSize={14} color={Color.Success_50}>
          입력한 금액으로 내 기부금 등록하기
        </Body>
        <View style={{ margin: 2 }}>
          <TouchableOpacity
            onPress={() => {
              props.setData({
                정치자금기부금: 정치자금기부금,
                법정기부금: 법정기부금,
                종교기부금: 종교기부금,
                지정기부금: 지정기부금,
                우리사주기부금: 우리사주기부금,
              });
              props.setIsWrite(false);
            }}
          >
            <View style={{ backgroundColor: Color.Black_80, padding: 8, borderRadius: 12 }}>
              <Body fontSize={14} color={Color.White_100}>
                등록하기
              </Body>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const ReportMyDonationDetailShowView = (props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading fontSize={20}>기부금</Heading>
        <TouchableOpacity
          onPress={() => {
            props.setIsWrite(true);
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Body fontSize={16}>직접 수정하기 </Body>
            <Icon name={IconName.FORWARD} size={18} iconColor={Color.Black_40} />
          </View>
        </TouchableOpacity>
      </View>

      <Spacer space={22} />
      <View>
        <ReportMyDonationInfoCard title='정치자금 기부금' money={props.data.정치자금기부금} />
        <ReportMyDonationInfoCard title='법정 기부금' money={props.data.법정기부금} />
        <ReportMyDonationInfoCard title='종교 기부금' money={props.data.종교기부금} />
        <ReportMyDonationInfoCard title='지정 기부금' money={props.data.지정기부금} />
        <ReportMyDonationInfoCard title='우리사주 기부금' money={props.data.우리사주기부금} />
      </View>
      <Spacer space={12} />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Body fontSize={14} color={Color.Success_50}>
          GIVE API로 내 기부내역 불러오기
        </Body>
        <View style={{ margin: 2 }}>
          <TouchableOpacity
            onPress={() => {
              props.setData({
                정치자금기부금: Math.floor(Math.random() * 100000),
                법정기부금: Math.floor(Math.random() * 100000),
                종교기부금: Math.floor(Math.random() * 100000),
                지정기부금: Math.floor(Math.random() * 100000),
                우리사주기부금: Math.floor(Math.random() * 100000),
              });
            }}
          >
            <View style={{ backgroundColor: Color.Black_80, padding: 8, borderRadius: 12 }}>
              <Body fontSize={14} color={Color.White_100}>
                불러오기
              </Body>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const ReportMyDonationInfoCard = (props) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Body fontSize={16}>{props.title}</Body>
      <Spacer space={8} />
      <Heading fontSize={18}>{AddComma(props.money)} 원</Heading>
      <Spacer space={18} />
    </View>
  );
};

export const ReportMyDonationInputCard = (props) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Body fontSize={16}>{props.title}</Body>
      <Spacer space={3} />
      <SingleLineInput
        onChangeText={(text) => {
          props.setItem(text);
        }}
        placeholder={AddComma(props.curData) + ' 원'}
      />
      <Spacer space={4} />
    </View>
  );
};
