import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { Badge } from '../../components/Icons/Badge';
import { createRef, useEffect, useState } from 'react';
import { ChatFinCard, ChatWaitCard } from '../../modules/chatModule/ChatModule';
import { chatbotState } from '../../util/recoil/Atoms';
import { useRecoilState } from 'recoil';

const ChatScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [chatbot, setChatbot] = useRecoilState(chatbotState);
  const scrollViewRef = createRef();

  const [userChatting, setUserChatting] = useState('');
  const [botChatting, setBotChatting] = useState('');
  const [waitTime, setWaitTime] = useState(false);

  // 함수를 호출하여 스크롤 위치를 맨 아래로 설정
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const getData = () => {
    setTimeout(() => {
      setBotChatting('hello!');
      setWaitTime(false);
    }, 2500);
  };

  useEffect(() => {
    if (botChatting != '') {
      setChatbot([...chatbot, ['bot', botChatting]]);
      setBotChatting('');
    }
  }, [botChatting]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? (keyboardHeight == 0 ? 'padding' : 'height') : keyboardHeight == 0 ? 'padding' : ''}
      keyboardVerticalOffset={keyboardHeight}
    >
      <MainHeader />
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom} // 콘텐츠 크기가 변경될 때 스크롤을 맨 아래로 이동
        style={{ flex: 1 }}
      >
        {chatbot.map((chat, index) => (
          <ChatFinCard isBot={chat[0] == 'bot'} text={chat[1]} key={index} />
        ))}
        {waitTime && <ChatWaitCard />}
      </ScrollView>
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
        <SingleLineInput
          width='80%'
          placeholder={userChatting == '' ? '입력 후 사용가능합니다.' : ''}
          value={userChatting}
          onChangeText={(text) => {
            setUserChatting(text);
            setKeyboardHeight(1);
          }}
          onFocus={() => setKeyboardHeight(1)}
          onBlur={() => setKeyboardHeight()}
        />
        <TouchableOpacity
          onPress={() => {
            if (userChatting != '' && !waitTime) {
              setChatbot([...chatbot, ['user', userChatting]]);
              setUserChatting('');
              scrollToBottom();
              setWaitTime(true);
              getData();
            }
          }}
          disabled={userChatting == '' || waitTime}
        >
          <Badge badgeBackGroudColor={userChatting == '' || waitTime ? Color.Black_40 : Color.Primary_50}>
            <Icon name={IconName.SEND} size={22} iconColor={userChatting == '' || waitTime ? Color.White_100 : Color.Black_40} />
          </Badge>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ChatScreen;
