import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Heading } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { Footer } from '../../components/footers/footers';

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
        <BasicButton>
          <Body>footer</Body>
        </BasicButton>
        <BasicButton>
          <Body>footer</Body>
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
