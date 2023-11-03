import { useEffect, useState } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphLabel, SwiftLabel } from '../../components/Labels/Labels';
import { AddComma } from '../../util/util';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { ReviewView } from './GroupReviewModule';
import { NewsView } from './GroupNewsModule';
import { AIReportView } from './GroupAIReportModule';
import { GroupFinancialView } from './GroupFinancialModule';
import { InfoView } from './GroupInfoModule';
import { getGroupDetailInfoData } from '../../util/fetch/fetchUtil';

export const GroupInfoCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getGroupDetailInfo = async () => {
      try {
        const responseData = await getGroupDetailInfoData(props.charityId);
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupBasicModule.js > GroupInfoCard: responseData가 없습니다.');
        }
      } catch (error) {
        console.error('GroupBasicModule.js > GroupInfoCard: ' + error);
      }
    };
    getGroupDetailInfo();
  }, []);

  // TO-DO
  // api에서 이미지가 없어서 안 온다면...?
  // source부분은 없다면 그냥 때려넣거나 해야할듯..?
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 8 }}>
      {data != null ? (
        <>
          <View style={{ marginHorizontal: 8 }}>
            <ImageLoader source={'https://picsum.photos/300'} style={{ width: 50, height: 50, borderRadius: 100 }} />
          </View>
          <View style={{ marginHorizontal: 8 }}>
            <Heading fontSize={16}>{data.name}</Heading>
            <Spacer space={4} />
            <Caption fontSize={14}>
              {data.establishment_date_type} | {data.contribution_type}
            </Caption>
          </View>
        </>
      ) : (
        <>
          <View style={{ marginHorizontal: 8 }}>
            <LocalImageLoader
              source={require('../../../assets/giveIcon.png')}
              style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 0.5, borderColor: Color.Black_50 }}
            />
          </View>
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
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

export const GroupDetailInfoCard = (props) => {
  const labels = ['리뷰', '언론보도', 'GIVE AI 분석', '재무재표', '단체정보'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ width: '100%', paddingHorizontal: 15 }}>
        <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
        <Spacer space={10} />
        {selectedLabel == '리뷰' && <ReviewView charityId={props.charityId} />}
        {selectedLabel == '언론보도' && <NewsView charityId={props.charityId} />}
        {selectedLabel == 'GIVE AI 분석' && <AIReportView charityId={props.charityId} />}
        {selectedLabel == '재무재표' && <GroupFinancialView charityId={props.charityId} />}
        {selectedLabel == '단체정보' && <InfoView charityId={props.charityId} />}
      </View>
    </View>
  );
};
