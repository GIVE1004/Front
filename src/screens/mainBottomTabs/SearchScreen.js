import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { SearchHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SwiftLabel } from '../../components/Labels/Labels';
import { SearchCard, SearchGroupCard } from '../../modules/searchModule/SearchCard';

const SearchScreen = () => {
  const labels = ['지금 뜨는', '높은 신뢰도', '작은 기부단위', '활발한 활동'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];

  return (
    <View style={styles.container}>
      <SearchHeader
        onSubmitEditing={() => {
          console.log('press Search');
        }}
      />
      <View style={{ width: '100%', paddingHorizontal: 15 }}>
        <Spacer space={10} />
        <Body fontWeight={'bold'}>기부단체 검색</Body>
        <Spacer space={10} />
        <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
      </View>
      <KeyboardAwareScrollView>
        <SearchGroupCard selectedLabel={selectedLabel} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
    alignItems: 'center',
  },
});

export default SearchScreen;
