import { View, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import * as IconName from '../../components/Icons/IconName';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { Icon } from '../../components/Icons/Icons';
import { Logo } from '../../components/Images/Logo';
import { Divider } from 'react-native-paper';
import { goMainPageState, memberInfoState } from '../../util/recoil/Atoms';
import { useRecoilState } from 'recoil';
import { getTokens, removeTokens } from '../../util/token/tokenUtil';
import { useEffect } from 'react';
import { PlusGroupCard, StarGroupCard, TypeTestCard, UserCard } from '../../modules/userModule/UserCardModule';
/**
 * TO-DO
 * 이 페이지가 마이페이지로 바뀔 가능성이 농후합니다.
 * 관심 기부단체는 다른 페이지로 옮겨 갔으며, 세금계산기 및 기부단체 추가하기는
 * 현재로써 할 수 없다 판단되어 빼게 될 예정이므로 나중에 다시 확인할 예정입니다.
 * @returns
 */
const UserScreen = () => {
  const navigation = useNavigation();
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [goMainPage, setGoMainPage] = useRecoilState(goMainPageState);

  const pressLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말 로그아웃 하시겠습니까?',
      [
        { text: '취소', onPress: () => {}, style: 'cancle' },
        {
          text: '로그아웃',
          onPress: () => {
            removeTokens();
            setMemberInfo(null);
            setGoMainPage(false);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView style={{ padding: 8 }}>
        <Spacer space={14} />
        <UserCard />
        <Spacer space={14} />
        <StarGroupCard />
        <Divider />
        <PlusGroupCard />
        <Divider />
        <TypeTestCard />
        <Divider />

        <TouchableOpacity onPress={pressLogout} style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}>
          <Icon name={IconName.EXIT} size={22} iconColor={Color.Danger_50} />
          <Spacer space={14} horizontal={true} />
          <Body color={Color.Danger_50}>로그아웃</Body>
        </TouchableOpacity>
        <Divider />

        <View style={styles.footcontainer}>
          <Logo style={{ height: 32, aspectRatio: 5 / 1 }} />
          <Caption>Version 1.0.0.</Caption>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
  titlecontainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  footcontainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default UserScreen;
