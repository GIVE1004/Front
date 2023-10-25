import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Body } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { Badge } from '../../components/Icons/Badge';
import { createRef } from 'react';
import { ChatFinCard } from '../../modules/chatModule/ChatCard';

/*
  생각 중인 방향
  
  recoil에 이전 대화들 모두 가져다 놓기.
  recoil의 형식은 배열 내에 key, value
  key값이 bot이면 isBot = true, value는 그냥 띄우기

  onChangeText를 이용하고 badgeIcon을 클릭 시 api쏘기 + recoil에 저장 => 리랜더링으로 화면 갈아끼우기
  api쏘면 fetch 기다리는 시간 동안 ... 띄워주기
*/
const ChatScreen = () => {
  const scrollViewRef = createRef();

  // 함수를 호출하여 스크롤 위치를 맨 아래로 설정
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  // 메시지를 추가할 때 스크롤을 맨 아래로 이동
  const addMessage = (message) => {
    // 메시지를 추가하는 로직 구현
    // ...

    // 스크롤을 맨 아래로 이동
    scrollToBottom();
  };

  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom} // 콘텐츠 크기가 변경될 때 스크롤을 맨 아래로 이동
        style={{ flex: 1 }}
      >
        <ChatFinCard isBot={true} text='안녕하세요 GIVE천사 봇입니다. 궁금한 점을 도와드리겠습니다.' />
      </KeyboardAwareScrollView>
      <View
        style={{
          margin: 10,
          borderWidth: 1,
          borderColor: Color.Black_20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <SingleLineInput width='80%' placeholder='입력해주세요.' />
        <TouchableOpacity>
          <Badge badgeBackGroudColor={Color.Primary_50}>
            <Icon name={IconName.SEND} size={22} iconColor={Color.Black_40} />
          </Badge>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ChatScreen;
