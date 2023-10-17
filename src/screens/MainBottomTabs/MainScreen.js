import { View, StyleSheet, RefreshControl } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MainGraphCard, MainIncreaseGroupCard, MainRecomentGroupCard } from '../../modules/mainModule/MainCard';
import { Spacer } from '../../components/Basic/Spacer';
import { useCallback, useState } from 'react';

const MainScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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
