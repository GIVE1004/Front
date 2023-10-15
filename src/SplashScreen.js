import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useWindowDimensions, View } from 'react-native';
import { LocalImageLoader } from './components/Images/ImageLoader';
import { Logo } from './components/Images/Logo';
import { Header } from './components/Headers/Headers';
import { Spacer } from './components/Basic/Spacer';
import { Body, Heading } from './components/Typography/Typography';
import { BasicButton } from './components/Buttons/Buttons';
import * as Color from './components/Colors/colors';
import { useRecoilState } from 'recoil';
import { goMainPageState } from './util/recoil/Atoms';

const SplashScreen = () => {
  const { width } = useWindowDimensions();
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);

  return (
    <SafeAreaProvider style={{ flex: 1, padding: 14, backgroundColor: Color.White_100 }}>
      <Header />
      <Logo style={{ height: 36, aspectRatio: 5 / 1 }} />
      <Spacer space={20} />
      <LocalImageLoader source={require('../assets/giveSplash.png')} style={{ width, height: undefined, aspectRatio: 4 / 3 }} resizeMode='contain' />
      <Spacer space={34} />
      <View style={{ alignItems: 'center' }}>
        <Heading>기부를 더 쉽게 더 똑똑하게,</Heading>
      </View>
      <Spacer space={20} />
      <BasicButton
        backgroundColor={Color.Primary_50}
        borderColor={Color.Primary_50}
        onPress={() => {
          setGoMainPage(true);
        }}
      >
        <Body fontSize={16}>시작하기</Body>
      </BasicButton>
    </SafeAreaProvider>
  );
};

export default SplashScreen;
