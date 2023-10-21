import { View, TouchableOpacity } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { ImageLoader } from '../../components/Images/ImageLoader';
import React, { useState } from 'react';
import { Spacer } from '../../components/Basic/Spacer';

export const StarGroupCard = (props) => {
  console.log(props);
  if (props.selectedLabel == '지금뜨는') {
    //fetch(주소)
  } else {
    // fetch(다른 주소)
  }
  const tmpdata = [
    {
      source: 'https://picsum.photos/300',
      groupId: '1',
      groupName: '사회복지법인 굿네이버스1',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: '2',
      groupName: '사회복지법인 굿네이버스2',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: '3',
      groupName: '사회복지법인 굿네이버스3',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
    },
    {
      source: 'https://picsum.photos/300',
      groupId: '4',
      groupName: '사회복지법인 굿네이버스4',
      groupTag: '사회복지',
      groupLabel: '지정기부금단체',
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {tmpdata.map((values, index) => (
        <StarCard data={values} />
      ))}
    </View>
  );
};

export const StarCard = ({ data }) => {
  const [isStar, setStar] = useState(true);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 30, marginVertical: 20 }}>
      <View>
        <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
      </View>
      <View>
        <View style={{ marginRight: 30 }}>
          <Heading fontSize={18}>{data.groupName}</Heading>
          <Spacer space={5}></Spacer>
          <Caption fontSize={14}>
            {data.groupTag} | {data.groupLabel}
          </Caption>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            if (isStar == true) {
              setStar(false);
            } else {
              setStar(true);
            }
          }}
        >
          <Icon name={isStar ? IconName.FILLSTAR : IconName.STAR} size={22} iconColor={Color.Primary_50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
