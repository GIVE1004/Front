import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Heading } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { MultiLineInput, SingleLineInput } from '../../components/Inputs/Inputs';
import { Footer } from '../../components/Footers/Footers';
import { MyModal } from '../../components/Modals/Modals';
import { useState } from 'react';
import { MySlider } from '../../components/Sliders/Sliders';
const ReviewScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <BackWithLogoHeader />
      <Spacer space={10} />

      <View style={{ padding: 8 }}>
        <View style={{ marginLeft: 6 }}>
          <Heading>리뷰 작성</Heading>
        </View>
        <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
          <Heading fontSize={20}>점수</Heading>
          <Spacer space={4} horizontal={true} />
          <MySlider />
        </View>
        <Spacer space={10} />
        <SingleLineInput placeholder={'리뷰 제목'} />
        <MultiLineInput placeholder={'내용을 작성해 주세요'} />
      </View>

      <Footer>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default ReviewScreen;
