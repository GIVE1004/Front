import { useState } from 'react';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';

export const ReviewView = () => {
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
      <ReviewCommentCard />
      <ReviewTotalCard />
      {data.map((value, index) => (
        <ReviewCard data={value} key={index} />
      ))}
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
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Heading fontSize={16}> 👍 높은 평점 요약</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.high}</Body>
        <Spacer space={8} />
        <Heading fontSize={16}> 👎 낮은 평점 요약</Heading>
        <Spacer space={4} />
        <Body fontSize={14}>{data.low}</Body>
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
