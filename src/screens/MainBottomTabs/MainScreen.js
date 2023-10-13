import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Heading } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Footer } from '../../components/Footers/Footers';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <Heading>MainScreen</Heading>
        <BasicButton>
          <Body>route test</Body>
        </BasicButton>
      </KeyboardAwareScrollView>
      <Footer>
        <BasicButton borderRadius={14} width={140} borderColor={Color.Primary_50} backgroundColor={Color.White_100}>
          <Body>취소</Body>
        </BasicButton>
        <BasicButton borderRadius={14} width={140} borderColor={Color.Primary_50} backgroundColor={Color.Primary_50}>
          <Body>확인</Body>
        </BasicButton>
      </Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default MainScreen;
