import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Body } from '../../components/Typography/Typography';

const GroupDetailScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StarHeader />
      <KeyboardAwareScrollView>
        <Body>GroupDetailScreen</Body>
        <BasicButton onPress={() => setIsVisible(true)} borderRadius={14} width={160} borderColor={Color.Primary_50} backgroundColor={Color.White_100}>
          <Body>모달켜기</Body>
        </BasicButton>
        <MyModal height='50%' isVisible={isVisible} setIsVisible={setIsVisible} />
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
