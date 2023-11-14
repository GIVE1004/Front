import { View, useWindowDimensions } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Heading } from '../../components/Typography/Typography';
import { ProgressBar, ProgressPie } from '../../components/ProgressStatus/ProgressStatus';
import { useEffect, useState } from 'react';
import { getGIVEAICommentData, getReportAICommentData } from '../../util/fetch/fetchUtil';

export const AIReportView = (props) => {
  return (
    <View>
      <AIReportCommentCard charityId={props.charityId} />
      <GroupScoreCard charityId={props.charityId} />
      <GroupRealGiveCntCard charityId={props.charityId} />
      <GroupReportCard charityId={props.charityId} />
    </View>
  );
};

export const AIReportCommentCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getGIVEAIComment = async () => {
      try {
        const responseData = await getGIVEAICommentData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupAIReportModule.js > AIReportCommentCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupAIReportModule.js > AIReportCommentCard: ' + error);
      }
    };
    getGIVEAIComment();
  }, []);
  return (
    <View style={{ padding: 8, marginVertical: 6 }}>
      <Heading>분석</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 종합 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        {data != null && !isError ? <Body fontSize={14}>{data}</Body> : <Body fontSize={14}>* 데이터를 불러오는데 실패했습니다 :(</Body>}
      </View>
    </View>
  );
};

export const GroupScoreCard = (props) => {
  const data = {
    사용자매칭: 80,
    신뢰점수: 60,
    관심점수: 90,
    활동점수: 90,
  };
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>단체 분석 점수</Heading>
      <Spacer space={14} />
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
        {Object.keys(data).map((key, index) => (
          <View style={{ alignItems: 'center' }} key={index}>
            <ProgressPie value={data[key]} color={Color.Success_50} type='score' />
            <Spacer space={4} />
            <Heading fontSize={14}>{key}</Heading>
          </View>
        ))}
      </View>
    </View>
  );
};

export const GroupRealGiveCntCard = (props) => {
  const { width } = useWindowDimensions();
  const data = {
    group: 67,
    all: 52,
  };
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>기부액 대비 실제 기부금 사용률</Heading>
      <Spacer space={14} />
      {Object.keys(data).map((key, index) => (
        <View key={index}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <ProgressBar progress={data[key] / 100} color={Color.Secondary_50} unfilledColor={Color.White_100} width={width * 0.64} height={12} borderRadius={10} />
            <Heading fontSize={12}>
              {key}({data[key]}%)
            </Heading>
          </View>
          <Spacer space={6} />
        </View>
      ))}
    </View>
  );
};

export const GroupReportCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getReportAIComment = async () => {
      try {
        const responseData = await getReportAICommentData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupAIReportModule.js > GroupReportCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupAIReportModule.js > GroupReportCard: ' + error);
      }
    };
    getReportAIComment();
  }, []);
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>기부액 대비 실제 기부금 사용률</Heading>
      <Spacer space={14} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        {data != null && !isError ? <Body fontSize={14}>{data}</Body> : <Body fontSize={14}>* 데이터를 불러오는데 실패했습니다 :(</Body>}
      </View>
    </View>
  );
};
