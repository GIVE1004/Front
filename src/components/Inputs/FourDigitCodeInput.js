import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import * as Color from '../../components/Colors/colors';

const FourDigitCodeInput = ({ value, onChangeText }) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (text, index) => {
    const newCode = [...value]; // 새로운 코드 배열을 생성
    newCode[index] = text; // 해당 인덱스의 값을 업데이트
    onChangeText(newCode); // 부모 컴포넌트에 새로운 코드 배열 전달

    if (text !== '') {
      if (index < 3) {
        inputRefs[index + 1].current.focus(); // 다음 입력란으로 이동
      }
    } else {
      if (index > 0) {
        inputRefs[index - 1].current.focus(); // 이전 입력란으로 이동
      }
    }
  };

  return (
    <View style={styles.container}>
      {inputRefs.map((inputRef, index) => (
        <TextInput
          key={index}
          ref={inputRef}
          style={styles.input}
          value={value[index]}
          onChangeText={(text) => handleInputChange(text, index)}
          maxLength={1}
          keyboardType='numeric'
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 60, // 각 입력란의 너비 조절
    height: 60,
    marginHorizontal: 5,
    borderColor: Color.Black_60,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default FourDigitCodeInput;
