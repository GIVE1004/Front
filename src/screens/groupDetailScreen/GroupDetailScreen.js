import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Color from '../../components/Colors/colors';
import { StarHeader } from '../../components/Headers/Headers';
import { Spacer } from '../../components/Basic/Spacer';
import { GroupDetailInfoCard, GroupGraph, GroupInfoCard } from '../../modules/groupDetailModule/GroupBasicModule';
import { FooterAndModalView } from '../../modules/groupDetailModule/GroupModalModule';

const GroupDetailScreen = (props) => {
  // 내가 누른 자선단체의 아이디를 props로 가져와야함.
  const charityId = props.route.params.charityId;

  return (
    <View style={styles.container}>
      <StarHeader charityId={charityId} />
      <KeyboardAwareScrollView>
        <GroupInfoCard charityId={charityId} />
        <Spacer space={6} />
        <GroupGraph charityId={charityId} />
        <Spacer space={10} />
        <GroupDetailInfoCard charityId={charityId} />
        <Spacer space={6} />
      </KeyboardAwareScrollView>
      <FooterAndModalView charityId={charityId} />
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
