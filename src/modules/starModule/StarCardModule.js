import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { ImageLoader } from '../../components/Images/ImageLoader';
import React, { useState } from 'react';
import { Spacer } from '../../components/Basic/Spacer';
import { Divider } from 'react-native-paper';

export const StarGroupCard = () => {
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
      <Spacer space={12} />
      {tmpdata.map((values, index) => (
        <View>
          <StarCard data={values} />
          <Divider />
        </View>
      ))}
    </View>
  );
};

export const StarCard = ({ data }) => {
  const [isStar, setStar] = useState(true);
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        borderColor: Color.Black_40,
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
        width: width * 0.94,
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
        <Spacer space={16} horizontal={true} />
        <View>
          <Heading fontSize={16}>{data.groupName}</Heading>
          <Spacer space={8} />
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
    </TouchableOpacity>
  );
};
