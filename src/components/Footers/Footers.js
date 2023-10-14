import { View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Color from '../Colors/colors';

export const Footer = (props) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: props.backgroundColor || Color.Black_20, paddingBottom: insets.bottom, position: 'absolute', bottom: 0 }}>
      <View
        style={{
          width: width,
          margin: 5,
          flexDirection: 'row',
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
