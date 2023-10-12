import { View, Text, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';

const StarScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <Body>StarScreen</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default StarScreen;
