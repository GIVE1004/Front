import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert, ScrollView, useWindowDimensions, View } from 'react-native';
import { LocalImageLoader } from '../../components/Images/ImageLoader';
import { Logo } from '../../components/Images/Logo';
import { Header } from '../../components/Headers/Headers';
import { Spacer } from '../../components/Basic/Spacer';
import { Heading } from '../../components/Typography/Typography';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { useRecoilState } from 'recoil';
import { goMainPageState, memberInfoState } from '../../util/recoil/Atoms';
import { useNavigation } from '@react-navigation/native';
import { getTokens, setTokens } from '../../util/token/tokenUtil';
import { getIsAnswerQuestionData, getRefreshFetch } from '../../util/fetch/fetchUtil';

const SplashScreen = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [isAnswer, setIsAnswer] = useState(null);

  const onPressStart = async () => {
    if (accessToken == null || refreshToken == null) {
      navigation.navigate('OauthScreen');
    } else {
      await getRefreshData();
    }
  };

  const getRefreshData = async () => {
    try {
      const response = await getRefreshFetch(accessToken, refreshToken);
      const data = await response.json();
      if (data.dataHeader.successCode == 0) {
        await setTokens(data.dataBody.tokens.accessToken, data.dataBody.tokens.refreshToken);
        setMemberInfo(data.dataBody.memberInfo);

        const responseData = await getIsAnswerQuestionData(accessToken);
        setIsAnswer(responseData.dataBody);
      } else {
        navigation.navigate('OauthScreen');
      }
    } catch (e) {
      console.error('SplashScreen.js > getRefreshData: ' + e);
      navigation.navigate('OauthScreen');
    }
  };

  useEffect(() => {
    if (isAnswer != null) {
      if (!isAnswer) {
        navigation.reset({ routes: [{ name: 'QuestionScreen' }] });
      } else {
        setGoMainPage(true);
      }
    }
  }, [isAnswer]);

  useEffect(() => {
    const getToken = async () => {
      await getTokens(setAccessToken, setRefreshToken);
    };
    getToken();
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, padding: 14, backgroundColor: Color.White_100 }}>
      <ScrollView>
        <Header />
        <Logo style={{ height: 36, aspectRatio: 5 / 1 }} />
        <Spacer space={20} />
        <LocalImageLoader source={require('../../../assets/giveSplash.png')} style={{ width, height: undefined, aspectRatio: 4 / 3 }} resizeMode='contain' />
        <Spacer space={34} />
        <View style={{ alignItems: 'center' }}>
          <Heading>기부를 더 쉽게 더 똑똑하게,</Heading>
        </View>
        <Spacer space={20} />
        <BasicButton backgroundColor={Color.Primary_50} borderColor={Color.Primary_50} onPress={onPressStart}>
          <Heading fontSize={16}>시작하기</Heading>
        </BasicButton>

        <BasicButton
          borderColor={Color.Black_20}
          onPress={() => {
            setGoMainPage(true);
          }}
        >
          <Heading fontSize={16}>임시: 메인화면으로 가기</Heading>
        </BasicButton>
        <BasicButton
          borderColor={Color.Black_20}
          onPress={() => {
            navigation.reset({ routes: [{ name: 'QuestionScreen' }] });
          }}
        >
          <Heading fontSize={16}>임시: 질문화면으로 가기</Heading>
        </BasicButton>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default SplashScreen;
