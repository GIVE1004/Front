import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { MainHeader } from '../../components/Headers/Headers';

const QuestionScreen = () => {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: Color.White_100 }}>
      <MainHeader />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Heading>test</Heading>
      </View>
    </SafeAreaProvider>
  );
};

export default QuestionScreen;
