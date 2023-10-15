import { useRecoilState } from 'recoil';
import { goMainPageState } from './util/recoil/Atoms';
import MainStack from './stacks/MainStack';
import SplashScreen from './SplashScreen';

export const RootApp = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);

  if (!goMainPage) {
    return <SplashScreen />;
  }
  return <MainStack />;
};
