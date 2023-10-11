import { View, Text, SafeAreaView } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { StyleSheet } from 'react-native';
import * as Color from '../../components/Colors/colors';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <Text>MainScreen</Text>
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
