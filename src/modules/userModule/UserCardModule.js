import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import * as IconName from '../../components/Icons/IconName';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { Icon } from '../../components/Icons/Icons';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { Alert, TouchableOpacity } from 'react-native';

const preparing = () => {
  Alert.alert('죄송합니다', '현재 컨텐츠 준비중입니다.', [{ text: '확인', onPress: () => {}, style: 'cancle' }], { cancelable: true });
};

export const UserCard = () => {
  const tmpdata = [{ source: 'https://picsum.photos/300', userId: 1, userName: '킹받은 짱구', userEmail: 'give1004', userEmailDomain: 'give.com' }];
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Color.White_100,
        borderColor: Color.Black_40,
        borderWidth: 0.5,
        borderBottomWidth: 4,
        borderRadius: 12,
        flexDirection: 'column',
        minWidth: 220,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 16,
      }}
      onPress={() => {
        navigation.navigate('UserInfoScreen', { userId: tmpdata[0].userId });
      }}
    >
      <ImageLoader source={tmpdata[0].source} style={{ width: 60, height: 60, borderRadius: 100 }} />
      <Spacer space={10} />
      <Heading fontSize={18}>{tmpdata[0].userName}</Heading>
      <Spacer space={5} />
      <Caption fontSize={16} color={Color.Black_80}>
        {tmpdata[0].userEmail}@{tmpdata[0].userEmailDomain}
      </Caption>
    </TouchableOpacity>
  );
};

export const StarGroupCard = () => {
  const navigation = useNavigation();
  return (
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
  );
};

export const PlusGroupCard = () => {
  return (
    <TouchableOpacity onPress={preparing} style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}>
      <Icon name={IconName.DUPLICATE} size={22} />
      <Spacer space={14} horizontal={true} />
      <Body> 기부단체 추가하기</Body>
    </TouchableOpacity>
  );
};

export const TypeTestCard = () => {
  return (
    <TouchableOpacity onPress={preparing} style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 20, alignItems: 'center' }}>
      <Icon name={IconName.TEST} size={22} />
      <Spacer space={14} horizontal={true} />
      <Body> 기부 유형 테스트하기</Body>
    </TouchableOpacity>
  );
};
