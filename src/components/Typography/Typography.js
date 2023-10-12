import { Text } from 'react-native';
import * as Color from '../Colors/colors';

export const Body = (props) => {
  return (
    <Text
      style={{
        color: props.color || Color.Black_80,
        fontSize: props.fontSize || 18,
        fontWeight: props.fontWeight,
      }}
    >
      {props.children}
    </Text>
  );
};

export const Heading = (props) => {
  return (
    <Text
      style={{
        color: props.color || Color.Black_80,
        fontSize: props.fontSize || 24,
        fontWeight: 'bold',
      }}
    >
      {props.children}
    </Text>
  );
};

export const Caption = (props) => {
  return (
    <Text
      style={{
        color: props.color || Color.Black_60,
        fontSize: props.fontSize || 10,
        fontWeight: props.fontWeight,
      }}
    >
      {props.children}
    </Text>
  );
};
