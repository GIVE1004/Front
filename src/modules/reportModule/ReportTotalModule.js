import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { useState } from 'react';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';

export const ReportPandaCard = (props) => {
  return (
    <TouchableOpacity style={{ width: '46%' }} disabled={!props.disabled} onPress={props.onPress}>
      <ImageBackground
        source={require('../../../assets/panda.png')}
        resizeMode='cover'
        style={{ width: '100%', aspectRatio: 1, borderColor: props.borderColor || Color.Success_50, borderWidth: 2, borderRadius: 30 }}
      >
        <View style={{ margin: 14 }}>
          <Heading fontSize={18}>{props.title}</Heading>
          <Spacer space={4} />
          <Heading fontSize={22}>{props.body}</Heading>
          <Spacer space={4} />
          <Body color={Color.Success_80} fontSize={14}>
            {props.caption}
          </Body>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const ReportCard = (props) => {
  return (
    <TouchableOpacity
      disabled={!props.disabled}
      onPress={props.onPress}
      style={{ width: '46%', aspectRatio: 1, backgroundColor: props.backgroundColor, borderColor: props.borderColor || props.backgroundColor, borderWidth: 2, borderRadius: 30 }}
    >
      <View style={{ margin: 14 }}>
        <Heading fontSize={18}>{props.title}</Heading>
        <Spacer space={4} />
        <Heading fontSize={22}>{props.body}</Heading>
        <Spacer space={4} />
        <Body color={Color.Success_80} fontSize={14}>
          {props.caption}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

export const ReportMyReviewView = (props) => {
  const data = [
    {
      reviewTitle: '최고의 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 80,
      groupName: '사회복지 법인 굿 네이버스',
    },
    {
      reviewTitle: '그냥 그런 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 50,
      groupName: '사회복지 법인 쏘쏘 네이버스',
    },
    {
      reviewTitle: '최악의 자선 단체입니다.',
      reviewContent:
        '1. 매달 기부금이 어떻게 쓰였는지 알려줍니다.\n2. 단순 기부만 할 수 있는 것이 아닌 직접 봉사도 할 수 있도록 도와줍니다.\n3. 기부급 새액 공제도 가능해요!\n\n지금까지 기부한 기부단체 중에 최고인거 같아요. 추천드립니다.',
      reviewScore: 40,
      groupName: '사회복지 법인 사회복지 법인 베드 네이버스',
    },
  ];
  return (
    <View style={{ margin: 12 }}>
      <Heading fontSize={20}>내가 쓴 리뷰</Heading>
      <Spacer space={6} />
      {data.map((value, index) => (
        <ReportMyReviewCard key={index} data={value} />
      ))}
    </View>
  );
};

export const ReportMyReviewCard = (props) => {
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
          <View style={{ width: '60%', marginHorizontal: 2 }}>
            <Heading numberOfLines={1} fontSize={14}>
              {data.groupName}
            </Heading>
          </View>
          <View style={{ marginLeft: 4 }}>
            <Icon size={22} name={isOpen ? IconName.UPALLOW : IconName.DOWNALLOW} iconColor={Color.Black_40} />
          </View>
        </View>
        {isOpen && (
          <View style={{ padding: 12, margin: 4 }}>
            <Heading fontSize={14}>[{data.groupName}]</Heading>
            <Spacer space={12} />
            <Heading fontSize={14}>"{data.reviewTitle}"</Heading>
            <Spacer space={10} />
            <Body fontSize={12}>{data.reviewContent}</Body>
          </View>
        )}
      </View>
    </BasicButton>
  );
};
