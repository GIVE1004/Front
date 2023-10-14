import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Body, Heading } from '../../components/Typography/Typography';

const GroupDetailScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStar, setIsStar] = useState(false);
  return (
    <View style={styles.container}>
      <StarHeader isStar={isStar} setIsStar={setIsStar} />

      <KeyboardAwareScrollView>
        <Body>GroupId: {props.route.params.groupId}</Body>
      </KeyboardAwareScrollView>

      <Footer>
        <BasicButton onPress={() => setIsVisible(true)} width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
          <Body>기부하기</Body>
        </BasicButton>
      </Footer>

      <MyModal height='80%' isVisible={isVisible} setIsVisible={setIsVisible}>
        <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Heading fontSize={20}>기부하기</Heading>
        </View>
        <Footer>
          <BasicButton width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
            <Body>기부하기</Body>
          </BasicButton>
        </Footer>
      </MyModal>
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
