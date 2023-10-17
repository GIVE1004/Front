import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { ScrollView, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';

// selected = 기부액/기부자
// pmGive = 증감기부액
export const MainGraphCard = () => {
  const data = {
    give: Math.random() * 10000000 + 1,
    pmGive: (Math.random() - 0.5) * 100000,
    percentPmGive: (Math.random() - 0.5) * 2,
    graphData: [
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
      Math.random() * 1000000000 + 1,
    ],
  };
  const { width } = useWindowDimensions();
  // useEffect로 selectedLabel 검사해서 바뀐다면 fetch 날릴 듯
  // 처음 useEffect로 기부액 가져오기
  const graphlabel = [1, 5, 10, 15, 20, 25];
  const labels = ['기부액', '기부자'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14 }}>
        <Heading fontSize={20}>오늘의 {selectedLabel}</Heading>
        <Spacer space={4} />
        <Heading fontSize={26}>
          {AddComma(Math.floor(data.give))}
          {selectedLabel == '기부액' ? '원' : '명'}
        </Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {AddComma(Math.floor(data.pmGive))}
          {selectedLabel == '기부액' ? '원' : '명'} ({Math.floor(data.percentPmGive * 100) / 100}%)
        </Body>
      </View>
      <Graph selectedLabel={selectedLabel} labels={graphlabel} data={data.graphData} color={data.pmGive < 0 ? Color.Danger_40 : Color.Success_50} />
      <GraphLabel width={width / 2 - 40} isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
    </View>
  );
};

export const MainRecomentGroupCard = () => {
  const tmpdata = [
    { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 14 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Heading fontSize={20}>🌟 추천 재단</Heading>
        <Heading color={Color.Secondary_60} fontSize={18}>
          GIVE가 추천해드립니다.
        </Heading>
      </View>
      <Spacer space={12} />
      <ScrollView horizontal={true} style={{ paddingVertical: 10 }}>
        {tmpdata.map((data, index) => (
          <GroupCard source={data.source} groupId={data.groupId} groupName={data.groupName} groupTag={data.groupTag} groupLabel={data.groupLabel} />
        ))}
      </ScrollView>
    </View>
  );
};

export const MainIncreaseGroupCard = () => {
  const tmpdata = [
    { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
  ];
  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 14 }}>
      <Heading fontSize={20}>🔥 급상승 재단</Heading>
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
