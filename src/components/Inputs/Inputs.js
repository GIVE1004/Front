import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import * as Color from '../Colors/colors';
import { Icon } from '../Icons/Icons';
import * as IconName from '../Icons/IconName';

export const SingleLineInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [eye, setEye] = useState(true);
  const borderColor = focused ? Color.Black_60 : Color.White_100;

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginVertical: 4,
        borderRadius: 10,
        borderWidth: 1,
        height: props.height,
        margin: 4,
        borderColor: borderColor,
        backgroundColor: props.basic ? undefined : Color.Black_20,
      }}
    >
      <TextInput
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder ?? 'input'}
        style={[props.style, { width: props.width || '100%', margin: 6, fontSize: props.fontSize ?? 16 }]}
        onFocus={() => {
          setFocused(true);
          props.onFocus && props.onFocus();
        }}
        onBlur={() => {
          setFocused(false);
          props.onBlur && props.onBlur();
        }}
        editable={props.editable}
        // 페스워드일 시에만 secureTextEntry를 true로 줄 것
        secureTextEntry={props.secureTextEntry && eye}
        // 키보드 엔터키를 눌렀을 때 호출되는 함수
        // true로 하고 싶다면 onSubmitEditing(onPress) 함께 보낼 것
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.onSubmitEditing ? 'done' : 'next'}
      />
      {props.secureTextEntry && (
        <TouchableOpacity
          onPress={() => {
            setEye(!eye);
          }}
        >
          <Icon name={eye ? IconName.EYE : IconName.EYECLOSE} size={16} iconColor={Color.Black_40} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const MultiLineInput = (props) => {
  const [focused, setFocused] = useState(false);
  const borderColor = focused ? Color.Black_60 : Color.White_100;

  return (
    <View
      style={{
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginVertical: 4,
        borderRadius: 10,
        borderWidth: 1,
        margin: 4,
        borderColor: borderColor,
        backgroundColor: props.basic ? undefined : Color.Black_20,
      }}
    >
      <TextInput
        multiline
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder ?? 'input'}
        style={[props.style, { flex: 1, margin: 6, fontSize: props.fontSize ?? 18, height: props.height ?? 200 }]}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        editable={props.editable}
        // 키보드 엔터키를 눌렀을 때 호출되는 함수
        // true로 하고 싶다면 onSubmitEditing(onPress) 함께 보낼 것
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.onSubmitEditing ? 'done' : 'next'}
      />
    </View>
  );
};
