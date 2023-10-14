import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Heading } from '../../components/Typography/Typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { MainGraphCard } from '../../modules/mainModule/mainCard';

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <MainGraphCard
          selected={'기부액'}
          give={55705604}
          pmGive={1115572}
          percentPmGive={-0.5}
          data={[
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
            Math.random() * 50 + 1,
          ]}
        />
        <BasicButton
          borderColor={Color.Secondary_50}
          onPress={() => {
            navigation.navigate('GroupDetailScreen');
          }}
        >
          <Body>route test</Body>
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
