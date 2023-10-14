import React from 'react';
import { Image, View } from 'react-native';

export const ImageLoader = (props) => {
  return (
    <View>
      <Image source={{ uri: props.source }} style={props.style} />
    </View>
  );
};
