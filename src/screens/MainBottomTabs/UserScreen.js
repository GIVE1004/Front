import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
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

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView style={{ padding: 8 }}>
        <View style={{ paddingHorizontal: 12 }}>
          <Heading>Settings</Heading>
        </View>
        <Spacer space={14} />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserInfoScreen');
          }}
          style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}
        >
          <Icon name={IconName.USER} size={22} />
          <Spacer space={14} horizontal={true} />
          <Body> 계정정보</Body>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StarScreen');
          }}
          style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}
        >
          <Icon name={IconName.STAR} size={22} />
          <Spacer space={14} horizontal={true} />
          <Body> 관심 기부단체</Body>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PlusScreen');
          }}
          style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}
        >
          <Icon name={IconName.DUPLICATE} size={22} />
          <Spacer space={14} horizontal={true} />
          <Body> 기부단체 추가하기</Body>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CalScreen');
          }}
          style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}
        >
          <Icon name={IconName.CALCULATOR} size={22} />
          <Spacer space={14} horizontal={true} />
          <Body> 세금 계산기</Body>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}>
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
