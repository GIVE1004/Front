import { useState, useEffect } from 'react';
import { Divider } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { AddComma, getCurMonth } from '../../util/util';
import { ImageLoader } from '../../components/Images/ImageLoader';

export const ReportMonthMyDonationView = () => {
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const [curMonthIdx, setCurMonthIdx] = useState(getCurMonth());

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Heading fontSize={20}>월 기부 내역</Heading>
      <Spacer space={12} />
      <ReportMonthNaviBar setCurMonthIdx={setCurMonthIdx} curMonthIdx={curMonthIdx} month={month} />
      <ReportMyDonationView curMonthIdx={curMonthIdx} />
    </View>
  );
};

export const ReportMonthNaviBar = (props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Color.Black_20, padding: 14, borderRadius: 6 }}>
        <View style={{ minWidth: '30%' }}>
          <Body fontSize={16} color={Color.Secondary_50}>
            총 2건
          </Body>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              if (props.curMonthIdx > 0) props.setCurMonthIdx(props.curMonthIdx - 1);
            }}
          >
            <Icon name={IconName.BACK} size={24} iconColor={Color.Black_40} />
          </TouchableOpacity>
          <Spacer space={14} horizontal={true} />
          <Heading fontSize={20}>{props.month[props.curMonthIdx]}</Heading>
          <Spacer space={14} horizontal={true} />
          <TouchableOpacity
            onPress={() => {
              if (props.curMonthIdx < 11) props.setCurMonthIdx(props.curMonthIdx + 1);
            }}
          >
            <Icon name={IconName.FORWARD} size={24} iconColor={Color.Black_40} />
          </TouchableOpacity>
        </View>
        <View style={{ minWidth: '30%' }}></View>
      </View>
    </View>
  );
};

export const ReportMyDonationView = (props) => {
  console.log(props.curMonthIdx);
  const data = [
    { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스' + props.curMonthIdx, money: 5000, date: '2020.10.04' },
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스22', money: 5000, date: '2020.10.04' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스33', money: 5000, date: '2020.10.04' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스44', money: 5000, date: '2020.10.04' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스55', money: 5000, date: '2020.10.04' },
    { source: 'https://picsum.photos/300', groupId: 6, groupName: '사회복지법인 굿네이버스66', money: 5000, date: '2020.10.04' },
  ];

  return (
    <View style={{ flex: 1, margin: 10 }}>
      {data.map((value, index) => (
        <View key={index}>
          <ReportMyDonationCard data={value} />
          <Divider />
        </View>
      ))}
    </View>
  );
};

export const ReportMyDonationCard = (props) => {
  const data = props.data;
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <ImageLoader source={data.source} style={{ width: 46, height: 46, borderRadius: 100 }} />
        </View>
        <Spacer horizontal={true} space={8} />
        <View>
          <Heading fontSize={16}>{data.groupName}</Heading>
          <Spacer space={4} />
          <Caption fontSize={14}>{data.date}</Caption>
        </View>
      </View>
      <View>
        <Heading fontSize={16}>{AddComma(data.money)}원</Heading>
      </View>
    </View>
  );
};
