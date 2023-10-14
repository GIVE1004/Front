import { View } from 'react-native';
import { GraphSwiftButton, SwiftButton } from '../Buttons/Buttons';
import { Body } from '../Typography/Typography';
import * as Color from '../Colors/colors';

export const GraphLabel = (props) => {
  const onPress = (index) => {
    const updatedIsFocus = Array.from({ length: props.labels.length }, (_, i) => i === index);
    props.setIsFocus(updatedIsFocus);
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      {props.labels.map((label, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <GraphSwiftButton
            borderRadius={10}
            width={160}
            isFocus={props.isFocus[index]}
            onPress={() => {
              onPress(index);
            }}
          >
            <Body fontSize={14} color={props.isFocus[index] ? Color.White_100 : Color.Black_80}>
              {label}
            </Body>
          </GraphSwiftButton>
        </View>
      ))}
    </View>
  );
};

export const SwiftLabel = (props) => {
  const onPress = (index) => {
    const updatedIsFocus = Array.from({ length: props.labels.length }, (_, i) => i === index);
    props.setIsFocus(updatedIsFocus);
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      {props.labels.map((label, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <SwiftButton
            borderRadius={10}
            width={160}
            isFocus={props.isFocus[index]}
            onPress={() => {
              onPress(index);
            }}
          >
            <Body fontSize={14} color={props.isFocus[index] ? Color.White_100 : Color.Black_80}>
              {label}
            </Body>
          </SwiftButton>
        </View>
      ))}
    </View>
  );
};
