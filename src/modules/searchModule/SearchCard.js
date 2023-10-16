import { useState} from 'react';
import {Caption} from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, ScrollView  } from 'react-native';
import { BasicButton } from '../../components/Buttons/Buttons';
import { ImageLoader } from '../../components/Images/ImageLoader';


export const SearchGroupCard = () => {
  const tmpdata = [
    { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체', groupScore:'80', groupNumber:'1234', groupNumberPm:'12', groupStar:'1234', gruopStarPm: '12'},
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체', groupScore:'80', groupNumber:'1234', groupNumberPm:'12', groupStar:'1234', gruopStarPm: '12' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체', groupScore:'80', groupNumber:'1234', groupNumberPm:'12', groupStar:'1234', gruopStarPm: '12' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체', groupScore:'80', groupNumber:'1234', groupNumberPm:'12', groupStar:'1234', gruopStarPm: '12' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체', groupScore:'80', groupNumber:'1234', groupNumberPm:'12', groupStar:'1234', gruopStarPm: '12' },
  ];
    return (
      <View style={{ flex: 1, marginTop:3, alignItems: 'center'}}>
        <ScrollView >
        {tmpdata.map((data, index) => (
          <SearchCard source={data.source} groupId={data.groupId} groupName={data.groupName} groupTag={data.groupTag} groupLabel={data.groupLabel} groupScore={data.groupScore} groupNumber={data.groupNumber} groupNumberPm={data.groupNumberPm} groupStar={data.groupStar} gruopStarPm={data.gruopStarPm} />
        ))}
      </ScrollView>
      </View>
    );
  };

export const SearchCard = (props) => {
    return (
      <View style={{ backgroundColor: Color.White_100, borderColor: Color.Black_20, borderWidth:1, borderRadius: 8, flexDirection: 'column',  marginVertical:6, width:375}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{paddingLeft:10, paddingRight:15}}>
                  {/* 이미지위치 */}
                  <ImageLoader source={props.source} style={{ width: 45, height: 45, borderRadius: 100 }} />
                </View>
                <View>
                  {/* 이름 */}
                  <Caption fontWeight={'bold'} fontSize={16}>{props.groupName}</Caption>
                  {/*  기부단체 종류*/}
                  <Caption style={{paddingTop:4}}>{props.groupTag}|{props.groupLabel}</Caption>
                </View>
            </View>
            {/* 상세페이지이동버튼 */}
            <BasicButton 
            onPress={() => {
              navigation.navigate('GroupDetailScreen', { groupId: props.groupId });
            }}>
              <Caption>상세보기</Caption>
            </BasicButton>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{alignItems:'center'}}>
              {/* 평점란 */}
                <View><Caption color={Color.Black_80}>리뷰 평점</Caption></View>
                  <Caption>{props.groupScore}/ 100</Caption>
            </View>
            <View style={{alignItems:'center'}}>
              {/* 기부자 */}
                <View><Caption color={Color.Black_80}>기부자(월 단위 증감)</Caption></View>
                  <Caption>{props.groupNumber} 명 {props.groupNumberPm}</Caption>
            </View>
            <View style={{alignItems:'center'}}>
              {/* 관심지수 */}
                <View><Caption color={Color.Black_80}>관심지수</Caption></View>
                  <Caption>{props.groupStar} 점 {props.gruopStarPm}</Caption>
            </View>
        </View>
      </View>
    );
  };