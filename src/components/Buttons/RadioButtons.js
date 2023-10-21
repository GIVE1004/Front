import { useState } from 'react';
import { Pressable } from 'react-native';
import * as Color from '../Colors/colors';
import { Body } from '../Typography/Typography';
import { Icon } from '../Icons/Icons';
import { View } from 'react-native';

export const MyRadioButton = (props) => {
  const [checked, setChecked] = useState();
  return (
    <View>
      {props.values.map((value) => (
        <Pressable
          onPress={() => {
            props.setChecked(value);
            setChecked(value);
          }}
          style={{ flexDirection: 'row', marginVertical: 8, marginHorizontal: 8 }}
        >
          <Icon name={checked == value ? 'radio-button-on' : 'radio-button-off'} size={26} iconColor={checked == value ? props.color : Color.Black_20} />
          <Body> {value}</Body>
        </Pressable>
      ))}
    </View>
  );
};
