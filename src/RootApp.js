import { useRecoilState } from 'recoil';
import { goMainPageState } from './util/recoil/Atoms';
import MainStack from './stacks/MainStack';
import AuthStack from './stacks/AuthStack';

export const RootApp = () => {
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);

  if (!goMainPage) {
    return <AuthStack />;
  }
  return <MainStack />;
};
