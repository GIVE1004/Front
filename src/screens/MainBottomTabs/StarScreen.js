import { View, Text, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StarScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <Body>StarScreen</Body>
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
