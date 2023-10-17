import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Body } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <Body>UserScreen</Body>
        <BasicButton
          onPress={() => {
            navigation.navigate('StarScreen');
          }}
        >
          <Body>hhh</Body>
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

export default UserScreen;
