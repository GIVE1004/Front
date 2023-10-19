import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert, useWindowDimensions, View } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Spacer } from '../../components/Basic/Spacer';
import { Heading } from '../../components/Typography/Typography';
import { BasicButton, LoginButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { useRecoilState } from 'recoil';
import { goMainPageState, goQuestionPageState } from '../../util/recoil/Atoms';
import { LocalImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';
import { getAuthRedirectFetch, getLoginFetch } from '../../util/fetch/fetchUtil';
import WebView from 'react-native-webview';

const OauthScreen = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [oAuthServerType, setOAuthServerType] = useState('');
  const [url, setUrl] = useState('');
  const [webViewState, setWebViewState] = useState({ url: '' });
  const [code, setCode] = useState('');

  const handleNavigationStateChange = (newState) => {
    // 여기에서 newState.url을 기반으로 리다이렉트 여부를 판단하고 처리
    if (newState.url.includes('/oauth/redirected/' + oAuthServerType + '?code')) {
      const match = newState.url.match(/[?&]code=([^&]+)/);
      if (match) {
        const code = match[1];
        setCode(code);
      } else {
        Alert.alert('로그인 실패!!!');
      }
      setUrl('');
    }

    setWebViewState(newState);
  };

  const getServerRedirectUrlData = async () => {
    try {
      const response = await getAuthRedirectFetch(oAuthServerType);
      if (response.status == 200) setUrl(response.url);
      else Alert.alert('실패');
    } catch (e) {
      console.log(e);
    }
  };

  const getLoginData = async () => {
    try {
      const response = await getLoginFetch(oAuthServerType, code);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (code != '') {
      getLoginData();
    }
  }, [code]);

  useEffect(() => {
    if (oAuthServerType != '') {
      getServerRedirectUrlData();
    }
  }, [oAuthServerType]);

  return (
    <SafeAreaProvider style={{ backgroundColor: Color.White_100 }}>
      <MainHeader width={140} height={28} />
      {url != '' ? (
        <WebView source={{ uri: url }} onNavigationStateChange={handleNavigationStateChange} />
      ) : (
        <View>
          <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
            <Spacer space={30} />
          </View>
          <LocalImageLoader source={require('../../../assets/giveSplash.png')} style={{ width, height: undefined, aspectRatio: 4 / 3 }} resizeMode='contain' />
          <View style={{ padding: 14 }}>
            <LoginButton
              backgroundColor={Color.logo_google}
              onPress={() => {
                setOAuthServerType('google');
              }}
              source={require('../../../assets/google_logo.png')}
            >
              <Heading color={Color.White_100} fontSize={16}>
                {' '}
                구글로 로그인
              </Heading>
            </LoginButton>

            <LoginButton
              backgroundColor={Color.logo_kakao}
              onPress={() => {
                setOAuthServerType('kakao');
              }}
              source={require('../../../assets/kakao_logo.png')}
            >
              <Heading fontSize={16}> 카카오로 로그인</Heading>
            </LoginButton>

            <LoginButton
              backgroundColor={Color.logo_naver}
              onPress={() => {
                setOAuthServerType('naver');
              }}
              source={require('../../../assets/naver_logo.png')}
            >
              <Heading color={Color.White_100} fontSize={16}>
                {' '}
                네이버로 로그인
              </Heading>
            </LoginButton>

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
          </View>
        </View>
      )}
    </SafeAreaProvider>
  );
};

export default OauthScreen;
