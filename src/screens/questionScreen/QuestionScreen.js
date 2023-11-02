import { useEffect, useState } from 'react';
import { Alert, Platform, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Color from '../../components/Colors/colors';
import { MainHeader } from '../../components/Headers/Headers';
import { ViewSliders } from '../../components/Sliders/ViewSliders';
import { Body, Heading } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Footer } from '../../components/Footers/Footers';
import { goMainPageState } from '../../util/recoil/Atoms';
import { useRecoilState } from 'recoil';
import { postQuestionData } from '../../util/fetch/fetchUtil';
import { getTokens } from '../../util/token/tokenUtil';

const QuestionScreen = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);
  const { width } = useWindowDimensions();
  const [answer, setAnswer] = useState([-1, -1, -1, -1]);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const questionData = [
    { questionId: '1', question: '추위에 떨고 있는 노인과 아이가 있다.\n누구부터 구할까?', answer1: '미안하지만 어르신부터 구해야겠어', answer2: '어린이부터 구해야할 것 같아' },
    { questionId: '2', question: '냉장고가 비었다! 어떻게 채울까?', answer1: '조금씩 매일', answer2: '하루에 잔뜩' },
    { questionId: '3', question: '아침에 등교를 한다. 어덯게 갈까?', answer1: '여러명과 활기차게 등교', answer2: '친구 한 명과 차분히 등교' },
    { questionId: '4', question: '당신은 비행기 티켓을 한 장 가지고 있다!\n어디로 갈까?', answer1: '한국의 아름다운 명소', answer2: '새로운 해외의 모험' },
  ];

  const pressGoMain = async () => {
    const sendData = {
      first: answer[0],
      second: answer[1],
      third: answer[2],
      fourth: answer[3],
    };
    try {
      const responseData = await postQuestionData(sendData, accessToken.slice(1, -1));
      if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
        setGoMainPage(true);
      } else {
        console.error('QuestionScreen.js > pressGoMain: ' + '데이터 삽입 의문 실패');
        Alert.alert('서버 통신 에러');
      }
    } catch (e) {
      console.error('QuestionScreen.js > pressGoMain: ' + e);
      Alert.alert('서버 통신 에러');
    }
  };

  useEffect(() => {
    getTokens(setAccessToken, setRefreshToken);
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: Color.White_100 }}>
      <MainHeader />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ViewSliders slideCount={questionData.length}>
          {questionData.map((value, index) => (
            <View style={{ width: width, justifyContent: 'center', padding: 20 }}>
              <Heading>✍ 기부 유형 테스트</Heading>
              <Spacer space={24} />

              <View style={{ paddingHorizontal: 14 }}>
                <Heading fontSize={16}>
                  {index + 1}. "{value.question}"
                </Heading>
              </View>
              <Spacer space={18} />

              <BasicButton
                borderColor={Color.Primary_50}
                backgroundColor={answer[index] == 0 ? Color.Primary_50 : Color.White_100}
                onPress={() => {
                  setAnswer((prevAnswers) => {
                    const updatedAnswers = [...prevAnswers];
                    updatedAnswers[index] = 0;
                    return updatedAnswers;
                  });
                }}
              >
                <Body fontSize={14}>{value.answer1}</Body>
              </BasicButton>
              <Spacer space={6} />

              <BasicButton
                borderColor={Color.Primary_50}
                backgroundColor={answer[index] == 1 ? Color.Primary_50 : Color.White_100}
                onPress={() => {
                  setAnswer((prevAnswers) => {
                    const updatedAnswers = [...prevAnswers];
                    updatedAnswers[index] = 1;
                    return updatedAnswers;
                  });
                }}
              >
                <Body fontSize={14}>{value.answer2}</Body>
              </BasicButton>
            </View>
          ))}
        </ViewSliders>
        <Spacer space={Platform.OS == 'android' ? 100 : 120} />
      </View>
      <Footer backgroundColor={Color.White_100} width={width}>
        {answer.every((value) => value >= 0) ? (
          <BasicButton backgroundColor={Color.Secondary_50} width='100%' onPress={pressGoMain}>
            <Body fontSize={14} color={Color.White_100}>
              메인으로 가기
            </Body>
          </BasicButton>
        ) : (
          <BasicButton backgroundColor={Color.Black_20} width='100%' disabled={true}>
            <Body fontSize={14}>모든 문항에 답해주세요.</Body>
          </BasicButton>
        )}
      </Footer>
    </SafeAreaProvider>
  );
};

export default QuestionScreen;
