import { View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';
import { SearchHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Caption} from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SwiftLabel } from '../../components/Labels/Labels';

const SearchScreen = () => {

  const labels = ['지금 뜨는', '높은 신뢰도', '작은 기부단위', '활발한 활동'];
  const [isFocus, setIsFocus] = useState([true, false]);

  return (
    <View style={styles.container}>
      <SearchHeader
        onSubmitEditing={() => {
          console.log('press Search');
        }}
      />
      <View style={styles.searchcontainer}>
        <Spacer space={10}/>
        <Body fontWeight={'bold'}>기부단체 검색</Body>
        <Spacer space={10}/>
        <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} />
        <KeyboardAwareScrollView>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
    alignItems:'center',
  },
  searchcontainer:{
    width:'90%',
  },
});

export default SearchScreen;
