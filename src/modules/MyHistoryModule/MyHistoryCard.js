import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { ScrollView, TouchableOpacity, View} from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';

export const UserHistory = (props) => {

    return (
        <View style={{paddingHorizontal:20}}>
            <Heading fontSize={20}>"{props.UserNickname}" 님의 기부 내역</Heading>
            <View style={{paddingLeft:10}}>
                <Spacer space={10}/>
                <Body fontWeight={'bold'} fontSize={12}>월 기부금</Body>
                <Body fontWeight={'bold'} fontSize={16}>{props.UserMonthlyDonation} 원</Body>
                <Spacer space={3}/>
                <View style={{flexDirection:'row'}}>
                    <Caption fontWeight={'bold'}>또래 평균보다</Caption>
                    <Caption color={Color.Danger_80} fontWeight={'bold'}>{props.UserMonthlyDonationPm} 원</Caption>
                </View>
                <Spacer space={15}></Spacer>
                <Body fontWeight={'bold'} fontSize={12}>총 기부금</Body>
                <Body fontWeight={'bold'} fontSize={16}>{props.UserTotlaDonation} 원</Body>
                <Spacer space={3}/>
                <View style={{flexDirection:'row'}}>
                    <Caption fontWeight={'bold'}>또래 평균보다</Caption>
                    <Caption color={Color.Success_80}>{props.UserTotlaDonationPm} 원</Caption>
                </View>
                <Spacer space={15}></Spacer>
                <Body fontWeight={'bold'} fontSize={12}>보유 뱃지</Body>
                <Body fontWeight={'bold'} fontSize={16}>{props.Badge} 개</Body>
                <Spacer space={3}/>
                <View style={{flexDirection:'row'}}>
                    <Caption fontWeight={'bold'}>또래 평균보다</Caption>
                    <Caption color={Color.Success_80} fontWeight={'bold'}>{props.BadgePm}</Caption>
                    <Caption fontWeight={'bold'}>개</Caption>
                </View>
            </View>
            <Spacer space={20}></Spacer>
        </View>
    );
  };

export const DonationNowGroupCard = () => {
    const tmpdata = [
      { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
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
            <GroupCard source={data.source} groupId={data.groupId} groupName={data.groupName} groupTag={data.groupTag} groupLabel={data.groupLabel} />
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export const HistoryGroupCard = () => {
    const tmpdata = [
      { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
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
            <GroupCard source={data.source} groupId={data.groupId} groupName={data.groupName} groupTag={data.groupTag} groupLabel={data.groupLabel} />
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export const GroupCard = (props) => {
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
          navigation.navigate('GroupDetailScreen', { groupId: props.groupId });
        }}
      >
        <ImageLoader source={props.source} style={{ width: 60, height: 60, borderRadius: 100 }} />
        <Spacer space={10} />
        <Heading fontSize={props.fontSize || 18}>{props.groupName}</Heading>
        <Caption fontSize={props.fontSize || 16}>
          {props.groupTag} | {props.groupLabel}
        </Caption>
      </TouchableOpacity>
    );
  };