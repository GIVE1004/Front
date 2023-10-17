import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Heading, Caption } from '../../components/Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { ImageLoader } from '../../components/Images/ImageLoader';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserInfoScreen = () => {

  return (
    <View style={styles.container}>
      <BackWithLogoHeader />
      <View style={styles.titlecontainer}>
      <Heading>내 정보</Heading>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
  titlecontainer: {
    marginLeft: 20,
    marginTop: 10,

  },
});

export default UserInfoScreen;
