import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useWindowDimensions, View } from 'react-native';
import { LocalImageLoader } from '../../components/Images/ImageLoader';
import { Logo } from '../../components/Images/Logo';
import { Header } from '../../components/Headers/Headers';
import { Spacer } from '../../components/Basic/Spacer';
import { Heading } from '../../components/Typography/Typography';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { useRecoilState } from 'recoil';
import { goMainPageState } from '../../util/recoil/Atoms';
import { useNavigation } from '@react-navigation/native';
import { getTokens, setTokens } from '../../util/token/tokenUtil';
import { getRefreshFetch } from '../../util/fetch/fetchUtil';

const SplashScreen = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const getRefreshData = async () => {
    try {
      const response = await getRefreshFetch(accessToken, refreshToken);
      const data = await response.json();
      setAccessToken('');
      setRefreshToken('');
      if (data.dataHeader.successCode == 0) {
        setTokens(data.dataBody.accessToken, data.dataBody.refreshToken);
        // TO-DO
        // API달라졌을 때, memberInfo 오게되는 경우 처리하기
        setGoMainPage(true);
      } else {
        navigation.navigate('OauthScreen');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (accessToken !== null && refreshToken !== null && accessToken !== '' && refreshToken !== '') {
      getRefreshData();
    } else if (accessToken == null && refreshToken == null) {
      navigation.navigate('OauthScreen');
      setAccessToken('');
      setRefreshToken('');
    }
  }, [accessToken, refreshToken]);

  return (
    <SafeAreaProvider style={{ flex: 1, padding: 14, backgroundColor: Color.White_100 }}>
      <Header />
      <Logo style={{ height: 36, aspectRatio: 5 / 1 }} />
      <Spacer space={20} />
      <LocalImageLoader source={require('../../../assets/giveSplash.png')} style={{ width, height: undefined, aspectRatio: 4 / 3 }} resizeMode='contain' />
      <Spacer space={34} />
      <View style={{ alignItems: 'center' }}>
        <Heading>기부를 더 쉽게 더 똑똑하게,</Heading>
      </View>
      <Spacer space={20} />
      <BasicButton
        backgroundColor={Color.Primary_50}
        borderColor={Color.Primary_50}
        onPress={() => {
          getTokens(setAccessToken, setRefreshToken);
        }}
      >
        <Heading fontSize={16}>시작하기</Heading>
      </BasicButton>
    </SafeAreaProvider>
  );
};

export default SplashScreen;
