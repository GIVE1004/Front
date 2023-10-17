import { View, useWindowDimensions } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { ProgressBar, ProgressPie } from '../../components/ProgressStatus/ProgressStatus';

export const AIReportView = () => {
  return (
    <View>
      <AIReportCommentCard />
      <GroupScoreCard />
      <GroupRealGiveCntCard />
      <GroupReportCard />
    </View>
  );
};

export const AIReportCommentCard = () => {
  // API로 이 데이터 한번에 묶어서 주면 아마 글씨 크기 조정은 안 될 겁니당~, 이건 나중가서 생각하죵
  const data = {
    summary:
      '굿네이버스(Good Neighbors)는 한국에서 설립된 국제구호단체로, 굶주림 없는 세상과 더불어 사는 세상을 만들기 위한 활동을 수행하는 글로벌 아동권리 전문 NGO입니다. 아래는 굿네이버스에 대한 평가 및 주요 특징에 대한 요약입니다.',
    good: '1. 미션과 목적: 굿네이버스의 목적은 굶주림을 없애는 것과 더불어 사는 세상을 만드는 것으로, 사회적 문제를 해결하고 사람들의 삶을 개선하기 위한 미션을 가지고 있습니다.\n2. 재무 현황: 굿네이버스의 재무 현황은 안정적으로 보입니다. 총 자산과 순자산의 크기가 상당하며, 부채 비율이 낮아 재무 건전성을 나타냅니다.\n3. 수익 다양성: 다양한 수익원을 보유하고 있으며, 이를 통해 지속적으로 프로젝트와 프로그램을 지원할 수 있습니다.\n4. 독립적인 평가: 굿네이버스는 한국 가이드스타의 공익법인 투명성 및 재무 효율성 평가에서 우수한 평가를 받아 투명성과 효율성을 강조하는 공익법인 중 하나로 인정받았습니다.',
    warn: "1. 종교적 연관성: 굿네이버스와 관련하여 종교적 색채와 논란이 있으며, 선교와 봉사활동의 경계가 모호하다는 비판이 있습니다. 이러한 종교적 연관성은 기부자에게 중요한 이슈일 수 있습니다.\n2. 광고 논란: 기부 독려와 기부금을 모으기 위해 사용되는 폭력적인 광고 기법인 '빈곤 포르노'를 사용한 적이 있어서 비판을 받은 적이 있습니다. 광고 캠페인과 이미지 관리에 주의가 필요합니다.",
    total:
      '종합적으로 굿네이버스는 아동권리와 굶주림 문제에 대한 미션을 가지고 활동하며, 재무 현황과 투명성 측면에서 양호한 성과를 보입니다. 그러나 종교적 연관성과 광고 관련 논란에 대해 고려하여 기부 결정을 내리는 것이 중요할 것입니다. 또한, 독립적인 기부 단체 평가 기관의 평가를 참고하여 결정하는 것도 도움이 될 수 있습니다.',
  };
  return (
    <View style={{ padding: 8, marginVertical: 6 }}>
      <Heading>분석</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 종합 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Heading fontSize={16}> 📋 요약</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.summary}</Body>
        <Spacer space={8} />

        <Heading fontSize={16}> 👍 긍정적인 점</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.good}</Body>
        <Spacer space={8} />

        <Heading fontSize={16}> 👎 주의할 점</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.warn}</Body>
        <Spacer space={8} />

        <Heading fontSize={16}> ✨ 종합</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.total}</Body>
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
        {Object.keys(data).map((key) => (
          <View style={{ alignItems: 'center' }}>
            <ProgressPie value={data[key]} color={Color.Success_50} type='socre' />
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
      {Object.keys(data).map((key) => (
        <View>
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
