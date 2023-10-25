import { View } from 'react-native';
import { LocalImageLoader } from '../../components/Images/ImageLoader';
import { Body } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';

export const ChatFinCard = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', margin: 8 }}>
      {props.isBot && (
        <View style={{ borderWidth: 0.5, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          <LocalImageLoader source={require('../../../assets/giveIcon.png')} style={{ height: 40, aspectRatio: 1 / 1 }} />
        </View>
      )}
      <View
        style={{
          backgroundColor: props.isBot ? Color.Success_50 : Color.Black_20,
          padding: 10,
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

export const ChatWaitCard = () => {};
