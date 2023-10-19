import { StyleSheet, View } from 'react-native';
import ViewSlider from 'react-native-view-slider';
import * as Color from '../Colors/colors';

export const ViewSliders = (props) => {
  return (
    <View>
      <ViewSlider
        renderSlides={<>{props.children}</>}
        style={styles.slider}
        slideCount={props.slideCount || 4}
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor={Color.Secondary_40}
        dotInactiveColor={Color.Black_40}
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    backgroundColor: 'transparent',
  },
});
