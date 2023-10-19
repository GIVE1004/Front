import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
import * as Color from '../Colors/colors';
import { Heading } from '../Typography/Typography';
import { Text } from 'react-native';

export const ProgressBar = (props) => {
  return (
    <Progress.Bar
      progress={props.progress}
      width={props.width}
      color={props.color}
      unfilledColor={props.unfilledColor || Color.Black_20}
      height={props.height}
      borderRadius={props.borderRadius}
    />
  );
};

export const ProgressPie = (props) => {
  return (
    <ProgressCircle percent={props.value} radius={40} borderWidth={8} color={props.color || Color.Primary_50} shadowColor={Color.Black_20} bgColor={Color.White_100}>
      <Heading fontSize={props.fontSize || 18}>
        {props.value}
        {props.type == 'score' ? '점' : '%'}
      </Heading>
    </ProgressCircle>
  );
};
