import React from 'react';
import { Image, View } from 'react-native';

export const Logo = (props) => {
  return (
    <View>
      <Image source={require('../../../assets/logo.png')} style={props.style} />
    </View>
  );
};
