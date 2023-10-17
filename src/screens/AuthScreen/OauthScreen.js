import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useWindowDimensions, View } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Spacer } from '../../components/Basic/Spacer';
import { Heading } from '../../components/Typography/Typography';
import { BasicButton, LoginButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { useRecoilState } from 'recoil';
import { goMainPageState } from '../../util/recoil/Atoms';
import { LocalImageLoader } from '../../components/Images/ImageLoader';

const OauthScreen = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);
  const { width } = useWindowDimensions();

  return (
    <SafeAreaProvider style={{ backgroundColor: Color.White_100 }}>
      <MainHeader width={140} height={28} />
      <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
        <Spacer space={30} />
      </View>
      <LocalImageLoader source={require('../../../assets/giveSplash.png')} style={{ width, height: undefined, aspectRatio: 4 / 3 }} resizeMode='contain' />
      <View style={{ padding: 14 }}>
        <LoginButton backgroundColor={Color.logo_google} onPress={() => {}} source={require('../../../assets/google_logo.png')}>
          <Heading color={Color.White_100} fontSize={16}>
            {' '}
            구글로 로그인
          </Heading>
        </LoginButton>
        <Spacer space={6} />

        <LoginButton backgroundColor={Color.logo_kakao} onPress={() => {}} source={require('../../../assets/kakao_logo.png')}>
          <Heading fontSize={16}> 카카오로 로그인</Heading>
        </LoginButton>
        <Spacer space={6} />

        <LoginButton backgroundColor={Color.logo_naver} onPress={() => {}} source={require('../../../assets/naver_logo.png')}>
          <Heading color={Color.White_100} fontSize={16}>
            {' '}
            네이버로 로그인
          </Heading>
        </LoginButton>
        <Spacer space={6} />

        <BasicButton
          borderColor={Color.Black_20}
          onPress={() => {
            setGoMainPage(true);
          }}
        >
          <Heading fontSize={16}>임시: 메인화면으로 가기</Heading>
        </BasicButton>
      </View>
    </SafeAreaProvider>
  );
};

export default OauthScreen;
