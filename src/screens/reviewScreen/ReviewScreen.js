import { View, StyleSheet, useWindowDimensions, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Heading } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { MultiLineInput, SingleLineInput } from '../../components/Inputs/Inputs';
import { Footer } from '../../components/Footers/Footers';
import { MyModal } from '../../components/Modals/Modals';
import { useEffect, useState } from 'react';
import { MySlider } from '../../components/Sliders/Sliders';
import { Caption } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ReviewScreen = ({ groupId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [bottom, setBottom] = useState(false);
  const tmpdata = [{ groupId: 1 }];

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <BackWithLogoHeader />
      <Spacer space={10} />

      <KeyboardAwareScrollView
        style={{ padding: 8 }}
        onKeyboardWillShow={() => {
          setBottom(true);
        }}
        onKeyboardWillHide={() => {
          setBottom(false);
        }}
      >
        <Heading>평점 입력</Heading>
        <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
          <Spacer space={4} horizontal={true} />
          <MySlider />
        </View>
        <View style={{ marginLeft: 6 }}>
          <Heading>리뷰 작성</Heading>
        </View>
        <Spacer space={10} />
        <SingleLineInput placeholder={'리뷰 제목'} />
        <Spacer space={10}></Spacer>
        <MultiLineInput placeholder={'내용을 작성해 주세요'} />
      </KeyboardAwareScrollView>

      <Footer bottom={bottom}>
        <BasicButton
          onPress={() => {
            setIsVisible(true);
          }}
          width='100%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>등록하기</Heading>
        </BasicButton>
      </Footer>

      <MyModal height='50%' isVisible={isVisible} setIsVisible={setIsVisible}>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Spacer space={30} />
          <Image source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
          <Spacer space={20} />
          <Heading fontSize={28}>리뷰 등록 성공!</Heading>
          <Spacer space={5} />
          <Caption>기부자님의 소중한 리뷰를 등록했어요!</Caption>
        </View>
        <Footer>
          <BasicButton
            onPress={() => {
              setIsVisible(false);
              navigation.goBack();
            }}
            width='100%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>등록완료</Heading>
          </BasicButton>
        </Footer>
      </MyModal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ReviewScreen;
