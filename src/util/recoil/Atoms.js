import { atom } from 'recoil';

export const goMainPageState = atom({
  key: 'goMainPageState',
  default: false,
});

export const memberInfoState = atom({
  key: 'memberInfoState',
  default: null,
});

export const chatbotState = atom({
  key: 'chatbotState',
  default: [{ bot: '안녕하세요. GIVE천사 봇입니다. 궁금한 점을 도와드리겠습니다.' }, { user: '저는 기부를 처음해봐요. 어떤 업체가 좋을까요?' }],
});
