import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, useWindowDimensions, Text, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import * as Color from '../Colors/colors';
import * as IconName from '../Icons/IconName';
import { Icon } from '../Icons/Icons';
import { Logo } from '../Images/Logo';
import { useNavigation } from '@react-navigation/native';
import { SingleLineInput } from '../Inputs/Inputs';

export const Header = (props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: Color.White_100, paddingTop: insets.top }}>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          height: Platform.OS === 'android' ? 56 : 50,
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

export const StarHeader = (props) => {
  const navigation = useNavigation();
  return (
    <Header>
      <View style={{ size: 24 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={IconName.BACK} size={22} />
        </TouchableOpacity>
      </View>
      <View style={{ size: 24 }}>
        <TouchableOpacity
          onPress={() => {
            props.setIsStar(!props.isStar);
          }}
        >
          <Icon name={props.isStar ? IconName.FILLSTAR : IconName.STAR} size={22} iconColor={Color.Primary_50} />
        </TouchableOpacity>
      </View>
    </Header>
  );
};

export const MainHeader = () => {
  return (
    <Header>
      <View style={{ width: 22 }}></View>
      <View>
        <Logo style={{ height: 20, width: 130 }} />
      </View>
      <View style={{ width: 22 }}></View>
    </Header>
  );
};

export const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <Header>
      <View style={{ size: 24 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={IconName.BACK} size={22} />
        </TouchableOpacity>
      </View>
      <View style={{ width: 24 }}></View>
    </Header>
  );
};

export const BackWithLogoHeader = () => {
  const navigation = useNavigation();
  return (
    <Header>
      <View style={{ size: 24 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={IconName.BACK} size={22} />
        </TouchableOpacity>
      </View>
      <View>
        <Logo style={{ height: 22, width: 130 }} />
      </View>
      <View style={{ width: 24 }}></View>
    </Header>
  );
};

export const CloseHeader = (props) => {
  return (
    <Header>
      <View style={{ width: 24 }}>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name={IconName.CLOSE} size={22} />
        </TouchableOpacity>
      </View>
      <View>
        <Logo style={{ height: 22, width: 130 }} />
      </View>
      <View style={{ width: 22 }}></View>
    </Header>
  );
};

export const SearchHeader = (props) => {
  return (
    <Header>
      <SingleLineInput placeholder='🔍 Search' onSubmitEditing={props.onSubmitEditing} onChangeText={props.onChangeText} />
    </Header>
  );
};
