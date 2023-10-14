import { useState, Image } from 'react';
import {Caption} from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { BasicButton } from '../../components/Buttons/Buttons';


export const SearchGroupCard = () => {
    return (
      <View style={{ flex: 1}}>
        <View style={{ marginVertical:5, alignItems: 'center', justifyContent: 'space-between' }}>
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
                <View style={{paddingHorizontal:10}}><Caption>hi</Caption></View>
                <View>
                    <Caption fontWeight={'bold'} fontSize={16}>props.</Caption>
                    <View style={{flexDirection: 'row'}}>
                        <Caption>hello</Caption>
                        <Caption>|</Caption>
                        <Caption>hello</Caption>
                    </View>
                </View>
            </View>
            <BasicButton><Caption>상세보기</Caption></BasicButton>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{alignItems:'center'}}>
                <View><Caption>hi</Caption></View>
                <View style={{flexDirection:'row'}}>
                  <Caption>hi</Caption><Caption>/100</Caption>
                </View>
            </View>
            <View>
                <View><Caption>hi</Caption></View>
                <View><Caption>hi</Caption></View>
            </View>
            <View>
                <View><Caption>hi</Caption></View>
                <View><Caption>hi</Caption></View>
            </View>
        </View>
      </View>
    );
  };