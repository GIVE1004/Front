import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { MyModal } from '../../components/Modals/Modals';
import { Body } from '../../components/Typography/Typography';

const GroupDetailScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStar, setIsStar] = useState(false);
  return (
    <View style={styles.container}>
      <StarHeader isStar={isStar} setIsStar={setIsStar} />
      <KeyboardAwareScrollView>
        <Body>GroupDetailScreen</Body>
        <BasicButton onPress={() => setIsVisible(true)} borderRadius={14} width={160} borderColor={Color.Primary_50} backgroundColor={Color.White_100}>
          <Body>모달켜기</Body>
        </BasicButton>
        <SingleLineInput height={55}></SingleLineInput>
        <MyModal height='50%' isVisible={isVisible} setIsVisible={setIsVisible}>
          <Footer>
            <BasicButton width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
              <Body>Modal Test</Body>
            </BasicButton>
          </Footer>
        </MyModal>
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

export default GroupDetailScreen;
