import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { formatNumberWithSign } from '../../util/util';

export const SearchGroupCard = (props) => {
  console.log(props);
  if (props.selectedLabel == '지금뜨는') {
    //fetch(주소)
  } else {
    // fetch(다른 주소)
  }
  const tmpdata = [
    {
      source: 'https://picsum.photos/300',
      groupId: 1,
      groupName: '사회복지법인 굿네이버스1',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      groupScore: '80',
      groupNumber: '1234',
      groupNumberPm: '12',
      groupStar: '1234',
      gruopStarPm: '-12',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: 2,
      groupName: '사회복지법인 굿네이버스2',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      groupScore: '80',
      groupNumber: '1234',
      groupNumberPm: '12',
      groupStar: '1234',
      gruopStarPm: '-12',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: 3,
      groupName: '사회복지법인 굿네이버스3',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      groupScore: '80',
      groupNumber: '1234',
      groupNumberPm: '12',
      groupStar: '1234',
      gruopStarPm: '-12',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: 4,
      groupName: '사회복지법인 굿네이버스4',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      groupScore: '80',
      groupNumber: '1234',
      groupNumberPm: '12',
      groupStar: '1234',
      gruopStarPm: '12',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: 5,
      groupName: '사회복지법인 굿네이버스5',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
      groupScore: '80',
      groupNumber: '1234',
      groupNumberPm: '12',
      groupStar: '1234',
      gruopStarPm: '12',
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {tmpdata.map((values, index) => (
        <SearchCard data={values} key={index} />
      ))}
    </View>
  );
};

export const SearchCard = (props) => {
  const data = props.data;
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: Color.White_100,
        borderColor: Color.Black_40,
        borderBottomWidth: 2,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'column',
        marginVertical: 4,
        width: width * 0.94,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GroupDetailScreen', { charityId: data.groupId });
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 4, paddingHorizontal: 6 }}>
          <ImageLoader source={data.source} style={{ width: 40, height: 40, borderRadius: 100 }} />
          <Spacer space={16} horizontal={true} />
          <View>
            <Heading fontSize={14} color={Color.Black_80}>
              {data.groupName}
            </Heading>
            <Spacer space={4}></Spacer>
            <Caption fontSize={12}>
              {data.groupTag}|{data.groupLabel}
            </Caption>
          </View>
        </View>
        <Spacer space={14} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            {/* 평점란 */}
            <Body fontSize={12}>리뷰 평점</Body>
            <Spacer space={4} />
            <Heading fontSize={12}>{data.groupScore} / 100</Heading>
          </View>
          <View style={{ alignItems: 'center' }}>
            {/* 기부자 */}
            <Body fontSize={12}>기부자(월 단위 증감)</Body>
            <Spacer space={4} />
            <Heading fontSize={12} color={data.groupNumberPm >= 0 ? Color.Success_50 : Color.Danger_50}>
              {data.groupNumber} 명 ({formatNumberWithSign(data.groupNumberPm)})
            </Heading>
          </View>
          <View style={{ alignItems: 'center' }}>
            {/* 관심지수 */}
            <Body fontSize={12}>관심지수</Body>
            <Spacer space={4} />
            <Heading fontSize={12} color={data.gruopStarPm >= 0 ? Color.Success_50 : Color.Danger_50}>
              {data.groupStar} 점 ({formatNumberWithSign(data.gruopStarPm)})
            </Heading>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
