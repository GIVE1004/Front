import { atom } from 'recoil';

export const goMainPageState = atom({
  key: 'goMainPageState',
  default: false,
});

export const memberInfoState = atom({
  key: 'memberInfoState',
  default: null,
});
