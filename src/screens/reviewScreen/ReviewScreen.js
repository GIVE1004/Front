import { View, StyleSheet } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Heading } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { BasicButton } from '../../components/Buttons/Buttons';
import { MultiLineInput, SingleLineInput } from '../../components/Inputs/Inputs';
import { Footer } from '../../components/Footers/Footers';
const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <BackWithLogoHeader />
      <Spacer space={10} />
      <HeartSlider />
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ marginLeft: 6 }}>
          <Heading>리뷰 작성</Heading>
        </View>
        <Spacer space={10} />
        <SingleLineInput placeholder={'리뷰 제목'} />
        <MultiLineInput placeholder={'내용을 작성해 주세요'} />
      </View>

      <Footer>
        <BasicButton width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
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
