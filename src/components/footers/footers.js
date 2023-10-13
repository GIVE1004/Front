import { View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Color from '../Colors/colors';

export const Footer = (props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: Color.Black_20, paddingVertical: 10 }}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          borderBottomColor: Color.Black_20,
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};
