import { useEffect, useState } from 'react';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { getReviewCommentData } from '../../util/fetch/fetchUtil';

export const ReviewView = (props) => {
  const data = [
    {
      reviewTitle: '최고의 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 80,
      userNick: '귀여운 뽀삐',
    },
    {
      reviewTitle: '최고의 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 50,
      userNick: '귀여운 뽀삐',
    },
    {
      reviewTitle: '최고의 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 40,
      userNick: '귀여운 뽀삐',
    },
  ];
  return (
    <View>
      <ReviewCommentCard charityId={props.charityId} />
      <ReviewTotalCard charityId={props.charityId} />
      {data.map((value, index) => (
        <ReviewCard data={value} key={index} />
      ))}
    </View>
  );
};

export const ReviewCommentCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getReviewComment = async () => {
      try {
        const responseData = await getReviewCommentData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupReviewModule.js > ReviewCommentCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupReviewModule.js > ReviewCommentCard: ' + error);
      }
    };
    getReviewComment();
  }, []);

  return (
    <View style={{ padding: 8 }}>
      <Heading>리뷰</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 리뷰 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        {data != null && !isError ? <Body fontSize={14}>{data}</Body> : <Body fontSize={14}>* 데이터를 불러오는데 실패했습니다 :(</Body>}
      </View>
    </View>
  );
};

export const ReviewTotalCard = () => {
  const data = {
    reviewAvg: 88,
    givePersonCnt: 57084,
    givePersonIncrease: -1185,
    interestScore: 198,
    interestIncrease: 1,
  };
  return (
    <View
      style={{
        borderColor: Color.Black_40,
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 12,
        margin: 6,
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Body fontSize={12}>평점 평균</Body>
        <Spacer space={2} />
        <Heading fontSize={12}>{data.reviewAvg} / 100</Heading>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Body fontSize={12}>기부자(월 단위 증감)</Body>
        <Spacer space={2} />
        <Heading fontSize={12} color={data.givePersonIncrease < 0 ? Color.Danger_50 : data.givePersonIncrease == 0 ? Color.Black_20 : Color.Success_50}>
          {data.givePersonCnt}({data.givePersonIncrease > 0 && '+'}
          {data.givePersonIncrease})
        </Heading>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Body fontSize={12}>관심지수</Body>
        <Spacer space={2} />
        <Heading fontSize={12} color={data.interestIncrease < 0 ? Color.Danger_50 : data.interestIncrease == 0 ? Color.Black_20 : Color.Success_50}>
          {data.interestScore}({data.interestIncrease > 0 && '+'}
          {data.interestIncrease})
        </Heading>
      </View>
    </View>
  );
};

export const ReviewCard = (props) => {
  const data = props.data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BasicButton borderColor={Color.Black_20} borderRadius={10} onPress={() => setIsOpen(!isOpen)}>
      <View style={{ flexDirection: 'column', minWidth: '92%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ marginHorizontal: 4 }}>
            <Heading color={data.reviewScore < 50 ? Color.Danger_50 : data.reviewScore == 50 ? Color.Black_50 : Color.Success_50} fontSize={16}>
              {data.reviewScore}점
            </Heading>
          </View>
          <View style={{ width: '50%', marginHorizontal: 2 }}>
            <Body numberOfLines={1} fontSize={12}>
              "{data.reviewTitle}"
            </Body>
          </View>
          <View style={{ marginHorizontal: 2 }}>
            <Heading fontSize={14}>{data.userNick}</Heading>
          </View>
          <View style={{ marginLeft: 4 }}>
            <Icon size={22} name={isOpen ? IconName.UPALLOW : IconName.DOWNALLOW} iconColor={Color.Black_40} />
          </View>
        </View>
        {isOpen && (
          <View style={{ padding: 12, margin: 4 }}>
            <Heading fontSize={14}>"{data.reviewTitle}"</Heading>
            <Spacer space={10} />
            <Body fontSize={12}>{data.reviewContent}</Body>
          </View>
        )}
      </View>
    </BasicButton>
  );
};
