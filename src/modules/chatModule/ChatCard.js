import { View } from 'react-native';
import { LocalImageLoader } from '../../components/Images/ImageLoader';
import { Body } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';

export const ChatFinCard = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 8, justifyContent: props.isBot ? 'flex-start' : 'flex-end' }}>
      {props.isBot && (
        <View style={{ borderWidth: 0.5, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          <LocalImageLoader source={require('../../../assets/giveIcon.png')} style={{ height: 40, aspectRatio: 1 / 1 }} />
        </View>
      )}
      <View
        style={{
          backgroundColor: props.isBot ? Color.Success_50 : Color.Black_20,
          padding: 10,
          paddingHorizontal: 14,
          margin: 10,
          borderRadius: 20,
          borderTopLeftRadius: props.isBot ? 4 : 20,
          borderTopRightRadius: props.isBot ? 20 : 4,
          maxWidth: '60%',
        }}
      >
        <Body fontSize={16} color={props.isBot ? Color.White_100 : Color.Black_80}>
          {props.text}
        </Body>
      </View>
    </View>
  );
};

export const ChatWaitCard = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', margin: 8 }}>
      <View style={{ borderWidth: 0.5, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
        <LocalImageLoader source={require('../../../assets/giveIcon.png')} style={{ height: 40, aspectRatio: 1 / 1 }} />
      </View>
      <View
        style={{
          backgroundColor: Color.Success_50,
          padding: 14,
          margin: 10,
          borderRadius: 20,
          borderTopLeftRadius: 4,
          maxWidth: '60%',
          flexDirection: 'row',
        }}
      >
        <View style={{ borderRadius: 100, height: 8, width: 8, backgroundColor: Color.Black_60, margin: 2 }} />
        <View style={{ borderRadius: 100, height: 8, width: 8, backgroundColor: Color.Black_50, margin: 2 }} />
        <View style={{ borderRadius: 100, height: 8, width: 8, backgroundColor: Color.Black_40, margin: 2 }} />
      </View>
    </View>
  );
};
