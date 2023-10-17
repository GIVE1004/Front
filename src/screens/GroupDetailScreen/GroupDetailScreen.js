import { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { StarHeader } from '../../components/Headers/Headers';
import { MyModal } from '../../components/Modals/Modals';
import { Heading } from '../../components/Typography/Typography';
import { Spacer } from '../../components/Basic/Spacer';
import { GroupDetailInfoCard, GroupGraphCard, GroupInfoCard } from '../../modules/groupDetailModule/GroupBasicCard';

const GroupDetailScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStar, setIsStar] = useState(false);
  return (
    <View style={styles.container}>
      <StarHeader isStar={isStar} setIsStar={setIsStar} />
      <KeyboardAwareScrollView>
        <GroupInfoCard />
        <Spacer space={6} />
        <GroupGraphCard />
        <Spacer space={10} />
        <GroupDetailInfoCard />

        {/* footer만큼의 크기를 임의로 넣었다. */}
        <Spacer space={Platform.OS == 'android' ? 100 : 120} />
      </KeyboardAwareScrollView>
      {/* 그룹 디테일 Footer */}
      <Footer>
        <BasicButton onPress={() => setIsVisible(true)} width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
          <Heading fontSize={16}>기부하기</Heading>
        </BasicButton>
      </Footer>

      {/* 기부하기 모달 */}
      <MyModal height='80%' isVisible={isVisible} setIsVisible={setIsVisible}>
        <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Heading fontSize={20}>기부하기</Heading>
        </View>
        <Footer>
          <BasicButton width='100%' backgroundColor={Color.Primary_50} borderColor={Color.Primary_50}>
            <Heading fontSize={16}>기부하기</Heading>
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
