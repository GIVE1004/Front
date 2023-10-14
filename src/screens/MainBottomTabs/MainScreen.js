import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { MainGraphCard, MainIncreaseGroupCard, MainRecomentGroupCard } from '../../modules/mainModule/MainCard';
import { Spacer } from '../../components/Basic/Spacer';

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <MainGraphCard />
        <Spacer space={22} />

        <MainRecomentGroupCard />
        <Spacer space={22} />

        <MainIncreaseGroupCard />
        <Spacer space={22} />
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

export default MainScreen;
