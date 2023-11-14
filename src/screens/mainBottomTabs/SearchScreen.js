import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { SearchHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SwiftLabel } from '../../components/Labels/Labels';
import { SearchGroupCard } from '../../modules/searchModule/SearchModule';
import { postSearchData } from '../../util/fetch/fetchUtil';

const SearchScreen = () => {
  const labels = ['🔥 지금 뜨는', '활발한 활동', '높은 신뢰도', '나와 맞는', '인기'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  const [searchInput, setSearchInput] = useState('');
  const [searchPress, setSearchPress] = useState(false);

  return (
    <View style={styles.container}>
      <SearchHeader
        onChangeText={setSearchInput}
        onSubmitEditing={() => {
          console.log(searchInput);
          setSearchPress(true);
        }}
      />
      <View style={{ width: '100%', paddingHorizontal: 15 }}>
        <Spacer space={10} />
        <Body fontWeight={'bold'}>기부단체 검색</Body>
        <Spacer space={10} />
        <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
      </View>
      <KeyboardAwareScrollView>
        <SearchGroupCard selectedLabel={selectedLabel} searchPress={searchPress} setSearchPress={setSearchPress} searchInput={searchInput} />
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
