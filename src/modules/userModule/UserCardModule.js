import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import * as IconName from '../../components/Icons/IconName';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { Icon } from '../../components/Icons/Icons';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { Alert, TouchableOpacity, View } from 'react-native';
import { memberInfoState } from '../../util/recoil/Atoms';
import { useRecoilValue } from 'recoil';

const preparing = () => {
  Alert.alert('죄송합니다', '현재 컨텐츠 준비중입니다.', [{ text: '확인', onPress: () => {}, style: 'cancle' }], { cancelable: true });
};

export const UserCard = () => {
  const memberInfo = useRecoilValue(memberInfoState);
  return (
    <View
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
    >
      {memberInfo ? (
        <>
          <ImageLoader source={memberInfo.profileImg} style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 0.5, borderColor: Color.Black_50 }} />
          <Spacer space={10} />
          <Heading fontSize={18}>{memberInfo.nickname}</Heading>
          <Spacer space={5} />
          <Caption fontSize={16}>{memberInfo.email}</Caption>
        </>
      ) : (
        <>
          <LocalImageLoader source={require('../../../assets/giveIcon.png')} style={{ width: 60, height: 60, borderRadius: 100, borderWidth: 0.5, borderColor: Color.Black_50 }} />
          <Spacer space={10} />
          <Heading fontSize={18} color={Color.Secondary_50}>
            {'유저 정보를 불러오는데 실패했습니다.'}
          </Heading>
          <Spacer space={5} />
          <Caption fontSize={16}>{'다시 시도해주세요.'}</Caption>
        </>
      )}
    </View>
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
