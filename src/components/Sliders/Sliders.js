import Slider from '@react-native-community/slider';
import { View } from 'react-native';
import * as Color from '../Colors/colors';
import { Body } from '../Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
export const MySlider = () => {
  return (
    <Slider
      animateTransitions
      animationType='timing'
      maximumTrackTintColor='#ccc'
      maximumValue={100}
      minimumTrackTintColor='#222'
      minimumValue={0}
      onSlidingComplete={() => console.log('onSlidingComplete()')}
      onSlidingStart={() => console.log('onSlidingStart()')}
      onValueChange={(value) => console.log('onValueChange()', value)}
      orientation='horizontal'
      step={1}
      style={{ width: '90%' }}
      thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
      thumbProps={{
        children: <Icon name={IconName.FILLSTAR} size={20} color={Color.Black_20} />,
      }}
      thumbTintColor='#0c0'
      thumbTouchSize={{ width: 40, height: 40 }}
      trackStyle={{ height: 20, borderRadius: 20 }}
      value={50}
    />
  );
};
