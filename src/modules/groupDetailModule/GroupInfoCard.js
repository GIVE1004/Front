import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { AddComma } from '../../util/util';
import { openURL } from '../../util/linkUtil';
import Hyperlink from 'react-native-hyperlink';

export const InfoView = () => {
  return (
    <View>
      <InfoCommentCard />
      <IntroduceCard />
      <InfoCard />
    </View>
  );
};

export const InfoCommentCard = () => {
  const data = {
    infoAIData:
      '굿네이버스(Good Neighbors)는 글로벌 아동권리와 사회복지에 초점을 맞춘 국제 비정부기구입니다. 이 단체는 아동들과 가정, 지역사회의 발전을 촉진하고 어려움을 겪는 곳에서 도움을 주는 사회적 기부 활동을 실시하고 있습니다.\n\n굿네이버스의 주요 활동 분야와 목표는 다음과 같습니다.\n\n1. **아동권리**: 굿네이버스는 아동들의 권리와 이익을 보호하고 증진하는 활동을 펼치며, 아동학대 방지 및 아동권리 옹호에 기여합니다.\n\n2. **국제개발**: 전 세계에서 어려움을 겪는 지역 사회의 발전을 지원합니다. 이를 통해 교육, 의료, 긴급 구호, 인프라 구축 등을 실시하며 지역사회의 삶의 질을 향상시킵니다.\n\n3. **사회복지**: 굿네이버스는 취약 계층과 다양한 사회적 문제에 대한 지원을 제공합니다. 이를 통해 사회의 공정성과 평등성을 촉진하고, 어려움을 겪는 사람들에게 필요한 도움을 제공합니다.\n\n4. **환경 보호**: 환경 보호와 지속 가능한 발전에도 신경을 쓰며, 생태계 보전과 지구 환경 문제에 대한 인식을 높이고 이에 기여합니다.\n\n굿네이버스는 전 세계에서 다양한 사업을 진행하며 사람들의 선한 마음과 기부로 아동들과 지역사회에 긍정적인 영향을 끼치고자 노력하고 있습니다. 이를 통해 아동들의 미래와 희망을 키우고, 어려움을 겪는 지역사회의 발전을 돕는 중요한 역할을 하고 있습니다.',
  };
  return (
    <View style={{ padding: 8 }}>
      <Heading>단체 정보 보기</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 단체 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Body fontSize={14}>{data.infoAIData}</Body>
      </View>
    </View>
  );
};

export const IntroduceCard = () => {
  const data = {
    introduce: '굿네이버스는 한국에서 설립되어굶주림 없는 세상, 더불어 사는 세상을 만들기 위해전문사회복지사업과 국제개발협력사업을 활발히 수행하는글로벌 아동권리 전문 NGO입니다.',
  };
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>회사 소개</Heading>
      <Spacer space={14} />
      <Body fontSize={14}>{data.introduce}</Body>
    </View>
  );
};

export const InfoCard = () => {
  // 밑의 데이터만 오면 됩니다.
  // 형식은 꼭 이렇게는 아니어도 돼용... 폼 수정하면 되니까!
  const data = {
    공익법인명: '사회복지법인 굿네이버스',
    사업연도: '2022.01 ~ 2024.12',
    대표자: '이***',
    설립연월일: '1996-03-13',
    설립유형: '기타단체',
    소재지: '서울특별시 영등포구 버드나루로 13',
    공익사업유형: '사회복지',
    전화번호: '0265241317',
    팩스: '026123454',
    홈페이지_주소: 'http://gnk.or.kr',
    전자우편_주소: 'accountancy@gnk.or.kr',
    이사수: 7,
    기부금_유형: '지정기부금단체',
    자원봉사자_연인원_수: 18334,
    주무관청: '보건복지부(영등포구)',
    고용직원_수: 1060,
  };
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>단체정보</Heading>
      <Spacer space={14} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>공익법인명</Body>
          <Heading fontSize={14}>{data.공익법인명}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>사업연도</Body>
          <Heading fontSize={14}>{data.사업연도}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>대표자</Body>
          <Heading fontSize={14}>{data.대표자}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>설립연월일</Body>
          <Heading fontSize={14}>{data.설립연월일}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>설립유형</Body>
          <Heading fontSize={14}>{data.설립유형}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>소재지</Body>
          <Heading fontSize={14}>{data.소재지}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>공익사업유형</Body>
          <Heading fontSize={14}>{data.공익사업유형}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>전화번호/팩스</Body>
          <Heading fontSize={14}>
            {data.전화번호}/{data.팩스}
          </Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>홈페이지 주소</Body>
          <Hyperlink>
            <TouchableOpacity
              onPress={() => {
                openURL(data.홈페이지_주소);
              }}
            >
              <Heading fontSize={14} color={Color.Purple_80}>
                {data.홈페이지_주소}
              </Heading>
            </TouchableOpacity>
          </Hyperlink>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>전자우편 주소</Body>
          <Heading fontSize={14}>{data.전자우편_주소}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>이사수</Body>
          <Heading fontSize={14}>{data.이사수}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>기부금(단체) 유형</Body>
          <Heading fontSize={14}>{data.기부금_유형}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>자원봉사자 연인원 수</Body>
          <Heading fontSize={14}>{AddComma(data.자원봉사자_연인원_수)}명</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>주무관청</Body>
          <Heading fontSize={14}>{data.주무관청}</Heading>
        </View>
        <Spacer space={6} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>고용직원 수</Body>
          <Heading fontSize={14}>{AddComma(data.고용직원_수)}명</Heading>
        </View>
      </View>
    </View>
  );
};
