import { useRecoilState } from 'recoil';
import { goMainPageState } from './util/recoil/Atoms';
import MainStack from './stacks/MainStack';

export const RootApp = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);

  //   if (!goMainPage) {
  //     return <SplashView />;
  //   }
  return <MainStack />;
};
