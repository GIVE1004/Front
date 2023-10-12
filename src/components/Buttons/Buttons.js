import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Color from '../../components/Colors/colors';

export const BasicButton = (props) => {
  return (
    <View style={{ width: props.width, height: props.height, margin: 5 }}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={[
            { backgroundColor: props.backgroundColor, borderRadius: props.borderRadius || 20, borderWidth: 2, borderColor: props.borderColor || Color.White_100 },
            styles.BasicBtnView,
          ]}
        >
          {props.children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SwiftButton = (props) => {
  return (
    <View style={{ width: props.width, height: props.height, margin: 2 }}>
      <Pressable onPress={props.onPress}>
        <View backgroundColor={props.isFocus ? Color.Black_80 : Color.Black_20} borderRadius={props.borderRadius || 20} style={styles.SwiftBtnView}>
          {props.children}
        </View>
      </Pressable>
    </View>
  );
};

export const GraphSwiftButton = (props) => {
  return (
    <View style={{ width: props.width, height: props.height, margin: 2 }}>
      <Pressable onPress={props.onPress}>
        <View backgroundColor={props.isFocus ? Color.Black_80 : Color.White_100} borderRadius={props.borderRadius || 20} style={styles.GraphSwiftBtnView}>
          {props.children}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  BasicBtnView: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  SwiftBtnView: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  GraphSwiftBtnView: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
