import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel, SwiftLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { ReviewView } from './GroupReviewModule';
import { NewsView } from './GroupNewsModule';
import { AIReportView } from './GroupAIReportModule';
import { GroupFinancialView } from './GroupFinancialModule';
import { InfoView } from './GroupInfoModule';

export const GroupInfoCard = () => {
  const data = { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' };
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 8 }}>
      <View style={{ marginHorizontal: 8 }}>
        <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
      </View>
      <View style={{ marginHorizontal: 8 }}>
        <Heading fontSize={16}>{data.groupName}</Heading>
        <Spacer space={4} />
        <Caption fontSize={14}>
          {data.groupTag} | {data.groupLabel}
        </Caption>
      </View>
    </View>
  );
};

// selected = 기부액/기부자
// pmGive = 증감기부액
// percentPmGive = 증감기부액 퍼센트
export const GroupGraph = () => {
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
  const labels = ['추세', '기부액', '기부자', '평점'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14 }}>
        <Heading fontSize={26}>{AddComma(Math.floor(data.give))}</Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {AddComma(Math.floor(data.pmGive))} ({Math.floor(data.percentPmGive * 100) / 100}%)
        </Body>
      </View>
      <Graph selectedLabel={selectedLabel} labels={graphlabel} data={data.graphData} color={data.pmGive < 0 ? Color.Danger_40 : Color.Success_50} />
      <GraphLabel width={width / labels.length - 20} isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
    </View>
  );
};

export const GroupDetailInfoCard = () => {
  const labels = ['리뷰', '언론보도', 'GIVE AI 분석', '재무재표', '단체정보'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ width: '100%', paddingHorizontal: 15 }}>
        <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
        <Spacer space={10} />
        {selectedLabel == '리뷰' && <ReviewView />}
        {selectedLabel == '언론보도' && <NewsView />}
        {selectedLabel == 'GIVE AI 분석' && <AIReportView />}
        {selectedLabel == '재무재표' && <GroupFinancialView />}
        {selectedLabel == '단체정보' && <InfoView />}
      </View>
    </View>
  );
};
