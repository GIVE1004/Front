import { atom } from 'recoil';

export const goMainPageState = atom({
  key: 'goMainPageState',
  // to-do
  // 나중에 유저 로그인창 할 때 false로 바꿀 것
  default: false,
});
