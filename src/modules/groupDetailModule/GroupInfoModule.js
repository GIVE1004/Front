import { Alert, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { AddComma } from '../../util/util';
import { openURL } from '../../util/linkUtil';
import Hyperlink from 'react-native-hyperlink';
import { getGroupDetailAICommentData, getGroupDetailInfoData } from '../../util/fetch/fetchUtil';
import { useEffect, useState } from 'react';

export const InfoView = (props) => {
  return (
    <View>
      <InfoCommentCard charityId={props.charityId} />
      <IntroduceCard charityId={props.charityId} />
      <InfoCard charityId={props.charityId} />
    </View>
  );
};

export const InfoCommentCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getGroupDetailAIComment = async () => {
      try {
        const responseData = await getGroupDetailAICommentData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupAIReportModule.js > GroupReportCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupAIReportModule.js > GroupReportCard: ' + error);
      }
    };
    getGroupDetailAIComment();
  }, []);
  return (
    <View style={{ padding: 8 }}>
      <Heading>단체 정보 보기</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 단체 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        {data != null && !isError ? <Body fontSize={14}>{data}</Body> : <Body fontSize={14}>* 데이터를 불러오는데 실패했습니다 :(</Body>}
      </View>
    </View>
  );
};

export const IntroduceCard = (props) => {
  // TO-DO
  // 얘 없다는데 어떻게 처리할까요?
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

export const InfoCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getGroupDetailInfo = async () => {
      try {
        const responseData = await getGroupDetailInfoData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupInfoModule.js > InfoCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupInfoModule.js > InfoCard: ' + error);
      }
    };
    getGroupDetailInfo();
  }, []);

  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null && !isError ? (
        <>
          <Heading fontSize={18}>단체정보</Heading>
          <Spacer space={14} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>공익법인명</Body>
              <Heading fontSize={14}>{data.name}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>대표자</Body>
              <Heading fontSize={14}>{data.representative}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>설립연월일</Body>
              <Heading fontSize={14}>{data.establishment_date}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>설립유형</Body>
              <Heading fontSize={14}>{data.establishment_date_type}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>소재지</Body>
              <Heading fontSize={14}>{data.location}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>전화번호</Body>
              <Heading fontSize={14}>{data.tel}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>홈페이지 주소</Body>
              <Hyperlink>
                <TouchableOpacity
                  onPress={() => {
                    openURL(data.homepage);
                  }}
                >
                  <Heading fontSize={14} color={Color.Purple_80}>
                    {data.homepage}
                  </Heading>
                </TouchableOpacity>
              </Hyperlink>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>전자우편 주소</Body>
              <Heading fontSize={14}>{data.email}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>이사수</Body>
              <Heading fontSize={14}>{data.director_count}명</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금(단체) 유형</Body>
              <Heading fontSize={14}>{data.contribution_type}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>자원봉사자 연인원 수</Body>
              <Heading fontSize={14}>{AddComma(data.yearly_volunteer_count)}명</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>주무관청</Body>
              <Heading fontSize={14}>{data.competent_authority}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>고용직원 수</Body>
              <Heading fontSize={14}>{AddComma(data.employee_count)}명</Heading>
            </View>
          </View>
        </>
      ) : (
        <>
          <Heading fontSize={18}>단체정보</Heading>
          <Spacer space={14} />
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
    </View>
  );
};
