import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { MainGraphCard, MainRecomentGroupCard } from '../../modules/mainModule/MainCard';
import { Spacer } from '../../components/Basic/Spacer';

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <MainGraphCard />
        <Spacer space={12} />

        <MainRecomentGroupCard />
        <Spacer space={12} />

        <BasicButton
          borderColor={Color.Primary_50}
          backgroundColor={Color.Primary_50}
          onPress={() => {
            navigation.navigate('GroupDetailScreen');
          }}
        >
          <Body>go group detail</Body>
        </BasicButton>
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
