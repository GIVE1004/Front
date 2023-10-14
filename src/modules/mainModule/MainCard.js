import { useState } from 'react';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel } from '../../components/Labels/Labels';

// selected = 기부액/기부자
// pmGive = 증감기부액
export const MainGraphCard = () => {
  const give = Math.random() * 10000000 + 1;
  const pmGive = Math.random() * 10000000 + 1;
  const percentPmGive = Math.random();
  const data = [
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
    Math.random() * 50 + 1,
  ];
  const graphlabel = ['월', '화', '수', '목', '금', '토', '일'];
  const labels = ['기부액', '기부자'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14 }}>
        <Heading fontSize={18}>오늘 {selectedLabel}</Heading>
        <Spacer space={4} />
        <Heading>{Math.floor(give)}</Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {Math.floor(pmGive)} ({Math.floor(percentPmGive * 100) / 100}%)
        </Body>
      </View>
      <Graph labels={graphlabel} data={data} color={Color.Danger_40} />
      <GraphLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
    </View>
  );
};
