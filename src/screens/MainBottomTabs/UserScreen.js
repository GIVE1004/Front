import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Body } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <Body>UserScreen</Body>
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
