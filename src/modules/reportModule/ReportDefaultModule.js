import { View } from 'react-native';
import { LocalImageLoader } from '../../components/Images/ImageLoader';

export const ReportDefaultMsgCard = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <LocalImageLoader source={require('../../../assets/giffycanvas.gif')} style={{ width: '100%', aspectRatio: 390 / 116 }} />
    </View>
  );
};
