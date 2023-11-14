import { View, useWindowDimensions } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Heading } from '../../components/Typography/Typography';
import { ProgressBar, ProgressPie } from '../../components/ProgressStatus/ProgressStatus';
import { useEffect, useState } from 'react';
import { getGIVEAICommentData } from '../../util/fetch/fetchUtil';

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
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
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

export const GroupScoreCard = () => {
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

export const GroupRealGiveCntCard = () => {
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

export const GroupReportCard = () => {
  const data = {
    report:
      '이 감사 보고서는 재단법인 굿네이버스 의 재무 상태와 관련된 감사 결과를 설명하는 문서입니다. 감사 보고서는 다음을 다룹니다.\n\n1. 감사 목적: 이 보고서는 재단법인이 작성한 재무 보고서가 공정하게 표시되었는지를 확인하기 위해 감사를 수행한 것을 설명합니다.\n2. 감사 결과: 감사 결과로는 재단법인의 재무 보고서가 공익법인 회계 규정에 따라 공정하게 작성되었고 중요한 오류나 왜곡이 없다는 의견을 제시하고 있습니다.\n3. 감사 기준: 이 감사는 대한민국의 회계 감사 규정에 따라 수행되었으며, 감사인은 독립적이며 윤리적 요구 사항을 준수했다고 언급합니다.\n4. 책임: 재단법인은 자신의 재무 보고서를 공정하게 작성하고 중요한 왜곡이나 오류를 방지하는 책임이 있으며, 내부 통제 시스템을 유지해야 합니다. 또한, 재단의 경영진은 계속기업으로 남아있는 능력을 평가하고 이와 관련된 정보를 공개하는 역할을 가지고 있습니다. 감사인은 재단의 재무 정보를 확인하기 위한 역할을 하며, 감사 범위 내에서 중요한 문제가 없는지 확인합니다.\n5. 감사인의 역할: 감사인의 역할은 중요한 오류나 왜곡이 없는지 확인하고, 이를 확인한 뒤 감사 보고서를 작성하여 결과를 전달합니다.\n6. 감사 결과 전달: 감사 결과 및 관련된 중요 사항은 지배기구와 의사 소통됩니다.\n7. 감사 보고서 유효성: 이 보고서는 발행일 현재까지 유효하며, 그 이후에 중요한 사건이 발생하면 보고서가 수정될 수 있다고 설명합니다.\n8. 이 보고서는 재단법인의 재무 정보가 공정하게 표시되었고, 감사가 적절하게 수행되었다는 내용을 제공하고 있습니다.',
  };
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>기부액 대비 실제 기부금 사용률</Heading>
      <Spacer space={14} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Body fontSize={14}>{data.report}</Body>
      </View>
    </View>
  );
};
