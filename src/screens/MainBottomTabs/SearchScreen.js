import { View, StyleSheet } from 'react-native';
import { SearchHeader } from '../../components/Headers/Headers';
import { MultiLineInput } from '../../components/Inputs/Inputs';
import * as Color from '../../components/Colors/colors';
import { Body, Caption } from '../../components/Typography/Typography';
import FourDigitCodeInput from '../../components/Inputs/FourDigitCodeInput';
import React, { useState } from 'react';
import { BasicButton, GraphSwiftButton, SwiftButton } from '../../components/Buttons/Buttons';

const SearchScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const onChangeText = (newCode) => {
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <SearchHeader
        onSubmitEditing={() => {
          console.log('press Search');
        }}
      />
      <Body>SearchScreen</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default SearchScreen;
