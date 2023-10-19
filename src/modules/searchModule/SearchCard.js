import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';

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
      gruopStarPm: '12',
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
      gruopStarPm: '12',
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
      gruopStarPm: '12',
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
        <SearchCard data={values} />
      ))}
    </View>
  );
};

export const SearchCard = (props) => {
  const data = props.data;
  const navigation = useNavigation();
    return (
      <View style={{ backgroundColor: Color.White_100, borderColor: Color.Black_20, borderWidth:1, borderRadius: 8, flexDirection: 'column', paddingBottom:10,  marginVertical:6, width:375}}>
        <TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{paddingLeft:10, paddingRight:15}}>
                  {/* 이미지위치 */}
                  <ImageLoader source={props.source} style={{ width: 45, height: 45, borderRadius: 100 }} />
                </View>
                <View>
                  {/* 이름 */}
                  <Caption fontWeight={'bold'} fontSize={16} color={Color.Black_80}>{props.groupName}</Caption>
                  {/*  기부단체 종류*/}
                  <Spacer space={3}></Spacer>
                  <Caption color={Color.Black_80}>{props.groupTag}|{props.groupLabel}</Caption>
                </View>
            </View>
            {/* 상세페이지이동버튼 */}
            <BasicButton 
            onPress={() => {
              navigation.navigate('GroupDetailScreen', { groupId: props.groupId });
            }}>
              <Caption color={Color.Black_60}>상세보기</Caption>
            </BasicButton>
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
            <Heading fontSize={12} color={Color.Danger_50}>
              {data.groupNumber} 명 {data.groupNumberPm}
            </Heading>
          </View>
          <View style={{ alignItems: 'center' }}>
            {/* 관심지수 */}
            <Body fontSize={12}>관심지수</Body>
            <Spacer space={4} />
            <Heading fontSize={12} color={Color.Success_50}>
              {data.groupStar} 점 {data.gruopStarPm}
            </Heading>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
