import { View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Color from '../Colors/colors';
import { BasicButton } from '../Buttons/Buttons';

export const Footer = (props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: Color.Black_20, paddingTop: insets.top }}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          height: Platform.OS === 'android' ? 68 : 60,
          borderBottomColor: Color.Black_20,
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};
