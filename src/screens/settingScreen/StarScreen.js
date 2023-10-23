import { View, StyleSheet } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Heading } from '../../components/Typography/Typography';
import React from 'react';
import { StarGroupCard } from '../../modules/starModule/StarCardModule';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StarScreen = () => {
  return (
    <View style={styles.container}>
      <BackWithLogoHeader />
      <View style={{ paddingHorizontal: 30 }}>
        <Heading>응원하는단체</Heading>
      </View>
      <KeyboardAwareScrollView>
        <StarGroupCard />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default StarScreen;
