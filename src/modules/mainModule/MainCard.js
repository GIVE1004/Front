import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { ScrollView, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';

// selected = 기부액/기부자
// pmGive = 증감기부액
export const MainGraphCard = () => {
  const give = Math.random() * 10000000 + 1;
  const pmGive = Math.random() * 10000000 + 1;
  const percentPmGive = Math.random();
  const data = graphData;
  // useEffect로 selectedLabel 검사해서 바뀐다면 fetch 날릴 듯
  // 처음 useEffect로 기부액 가져오기
  const graphlabel = [1, 5, 10, 15, 20, 25];
  const labels = ['기부액', '기부자'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14 }}>
        <Heading fontSize={18}>오늘 {selectedLabel}</Heading>
        <Spacer space={4} />
        <Heading>{AddComma(Math.floor(give))}</Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {AddComma(Math.floor(pmGive))} ({Math.floor(percentPmGive * 100) / 100}%)
        </Body>
      </View>
      <Graph labels={graphlabel} data={data} color={Color.Danger_40} />
      <GraphLabel width={160} isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
    </View>
  );
};

export const MainRecomentGroupCard = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Heading fontSize={20}>추천 재단</Heading>
        <Heading color={Color.Secondary_60} fontSize={18}>
          GIVE가 추천해드립니다.
        </Heading>
      </View>
      <ScrollView horizontal={true}>
        <GroupCard />
      </ScrollView>
    </View>
  );
};

export const GroupCard = (props) => {
  return (
    <View style={{ backgroundColor: Color.Black_20, borderRadius: 8, flexDirection: 'column' }}>
      <Body fontSize={18}>hello</Body>
      <Caption fontSize={16}>hello</Caption>
    </View>
  );
};

const graphData = [
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
  Math.random() * 50 + 1,
];
