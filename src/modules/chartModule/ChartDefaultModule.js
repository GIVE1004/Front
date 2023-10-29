import { TouchableOpacity, View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import LinearGradient from 'react-native-linear-gradient';
import { Spacer } from '../../components/Basic/Spacer';
import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const ChartDefaultMsgCard = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={{ borderRadius: 20, marginHorizontal: 30, marginVertical: 10, alignItems: 'center' }}
      colors={[Color.Primary_60, Color.Success_40, Color.Success_60]}
      locations={[0.0, 0.5, 1.0]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={{ alignItems: 'center', margin: 24 }}>
        <Heading color={Color.White_100} fontSize={18}>
          "킹받은짱구"님 반갑습니다!
        </Heading>
        <Spacer space={8} />
        <Body color={Color.White_100} fontSize={14}>
          가입일: 2023.10.20. 18:26:52
        </Body>
      </View>
      <View style={{ width: '100%' }}>
        <Divider width={2} color={Color.White_100} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomWidth: 4,
          borderBottomColor: Color.Primary_80,
        }}
      >
        <TouchableOpacity style={{ flex: 1, padding: 14, borderBottomLeftRadius: 20, alignItems: 'center' }}>
          <Heading color={Color.White_100} fontSize={14}>
            유형 테스트 하기
          </Heading>
        </TouchableOpacity>
        <Divider width={2} orientation='vertical' color={Color.White_100} />
        <TouchableOpacity style={{ flex: 1, padding: 14, borderBottomRightRadius: 20, alignItems: 'center' }}>
          <Heading color={Color.White_100} fontSize={14}>
            기부내역 추가하기
          </Heading>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
