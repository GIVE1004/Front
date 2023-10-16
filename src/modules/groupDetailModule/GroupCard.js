import { useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel, SwiftLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';
import { ImageLoader } from '../../components/Images/ImageLoader';

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
export const GroupGraphCard = () => {
  const give = Math.random() * 10000000 + 1;
  const pmGive = Math.random() * 10000000 + 1;
  const percentPmGive = Math.random();
  const data = [
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
  ];
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
        <Heading fontSize={26}>{AddComma(Math.floor(give))}</Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {AddComma(Math.floor(pmGive))} ({Math.floor(percentPmGive * 100) / 100}%)
        </Body>
      </View>
      <Graph selectedLabel={selectedLabel} labels={graphlabel} data={data} color={selectedLabel == '기부액' ? Color.Danger_40 : Color.Success_50} />
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
        {selectedLabel == '리뷰' && <ReviewCommentCard />}
      </View>
    </View>
  );
};

export const ReviewCommentCard = () => {
  const data = {
    high: '매달 기부금이 어떻게 쓰였는지 알려주고, 직접 봉사도 할 수 있게 연결도 시켜주며 기부자의 세액공제도 할 수 있도록 친절하게 도와줍니다. 유명한 기부 단체이기 때문에 괜찮은 선택이 될 수 있습니다.',
    low: '기부금이 어디에 쓰였는지 잘 모르겠다는 의견이 있습니다. 또한 특정 종교 단체의 입김이 너무 강해서 불만스럽다는 의견도 있습니다.',
  };
  return (
    <View style={{ padding: 8 }}>
      <Heading>리뷰</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 리뷰 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 10, paddingVertical: 14 }}>
        <Heading fontSize={16}> 👍 높은 평점 요약</Heading>
        <Body fontSize={14}>{data.high}</Body>
        <Spacer space={6} />
        <Heading fontSize={16}> 👎 낮은 평점 요약</Heading>
        <Body fontSize={14}>{data.low}</Body>
      </View>
    </View>
  );
};
