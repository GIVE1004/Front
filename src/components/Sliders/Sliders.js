import { Slider } from '@rneui/themed';
import * as Color from '../Colors/colors';
import {Heading} from '../Typography/Typography';
import React, {value, onValueChange, useState} from "react";
import { View} from 'react-native';
export const MySlider = () => {

  const [sliderValue, setSliderValue] = useState(50);

  const onValueChange = (value) => {
    console.log('onValueChange()', value);
    setSliderValue(value); // 상태 값을 업데이트합니다.
  };

  return (
    <Slider
      animateTransitions
      animationType='timing'
      maximumTrackTintColor={Color.Black_40}
      maximumValue={100}
      minimumTrackTintColor={Color.Success_60}
      minimumValue={0}
      onSlidingComplete={() => console.log('onSlidingComplete()')}
      onSlidingStart={() => console.log('onSlidingStart()')}
      onValueChange={onValueChange}
      orientation='horizontal'
      step={1}
      style={{ width: '100%' }}
      thumbStyle={{ height: 24, width: 40, backgroundColor: 'transparent' }}
      thumbProps={{
        children: <View style={{ height:'100%', backgroundColor: Color.Success_60, borderRadius: 10, flexDirection: 'row', alignItems: 'center',  justifyContent:'center'}}><Heading fontSize={12} color={Color.White_100}>{sliderValue}점</Heading></View>
      }}
      thumbTintColor={Color.Black_20}
      thumbTouchSize={{ width: 30, height: 30 }}
      trackStyle={{ height: 10, borderRadius: 10 }}
      value={50}
    />
  );
};
