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
      <Body>{props.value}점</Body>
    </View>
  );
};
