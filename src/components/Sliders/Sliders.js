import Slider from '@react-native-community/slider';
import { View } from 'react-native';
import * as Color from '../Colors/colors';
import { Body } from '../Typography/Typography';

export const MySlider = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      <Slider
        style={{ height: 40, width: 300 }}
        value={props.value}
        onValueChange={(value) => props.setValue(value)}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor={Color.Black_20}
        minimumTrackTintColor={props.color || Color.Primary_50}
        step={1}
        tapToSeek={true}
        thumbTintColor={Color.Primary_50}
        disabled={props.disabled}
      />
      <Body>
        {props.value}
        {props.type == 'score' ? '점' : '%'}
      </Body>
    </View>
  );
};

export const HeartSlider = (props) => {
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
      style={{ width: '80%', height: 200 }}
      thumbStyle={{ height: 20, width: 20 }}
      thumbProps={{
        children: <Icon name='STAR' type='font-awesome' size={20} reverse containerStyle={{ bottom: 20, right: 20 }} color='#f50' />,
      }}
      thumbTintColor='#0c0'
      thumbTouchSize={{ width: 40, height: 40 }}
      trackStyle={{ height: 10, borderRadius: 20 }}
      value={50}
    />
  );
};
