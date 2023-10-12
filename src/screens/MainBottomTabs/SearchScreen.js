import { View, StyleSheet } from 'react-native';
import { SearchHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body } from '../../components/Typography/Typography';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchHeader
        onSubmitEditing={() => {
          console.log('press Search');
        }}
      />
      <Body>SearchScreen</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
});

export default SearchScreen;
