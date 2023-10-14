import { useState, Image } from 'react';
import {Caption} from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { BasicButton } from '../../components/Buttons/Buttons';


export const SearchGroupCard = () => {
    return (
      <View style={{ flex: 1}}>
        <View style={{ marginVertical:5, alignItems: 'center'}}>
        </View>
          <SearchCard />
      </View>
    );
  };

export const SearchCard = (props) => {
    return (
      <View style={{ backgroundColor: Color.White_100, borderColor: Color.Black_20, borderWidth:1, borderRadius: 8, flexDirection: 'column' }}>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{paddingHorizontal:10}}>
                  {/* 이미지위치 */}
                  <Caption>hi</Caption>
                </View>
                <View>
                    {/* 이름 */}
                    <Caption fontWeight={'bold'} fontSize={16}>props.</Caption>
                    <View style={{flexDirection: 'row'}}>
                        {/*  기부단체 종류*/}
                        <Caption>hello</Caption>
                        <Caption>|</Caption>
                        {/* 기부단체 어..그것 */}
                        <Caption>hello</Caption>
                    </View>
                </View>
            </View>
            {/* 상세페이지이동버튼 */}
            <BasicButton><Caption>상세보기</Caption></BasicButton>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{alignItems:'center'}}>
              {/* 평점란 */}
                <View><Caption color={Color.Black_80}>리뷰 평점</Caption></View>
                <View style={{flexDirection:'row'}}>
                  <Caption>hi</Caption><Caption> / 100</Caption>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
              {/* 기부자 */}
                <View><Caption color={Color.Black_80}>기부자(월 단위 증감)</Caption></View>
                <View style={{flexDirection:'row'}}>
                  <Caption>hi</Caption>
                  <Caption> 명 </Caption>
                  <Caption>hi</Caption>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
              {/* 관심지수 */}
                <View><Caption color={Color.Black_80}>관심지수</Caption></View>
                <View style={{flexDirection:'row'}}>
                  <Caption>hi</Caption>
                  <Caption> 점 </Caption>
                  <Caption>hi</Caption>
                </View>
            </View>
        </View>
      </View>
    );
  };