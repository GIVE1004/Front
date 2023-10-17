import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { BackWithLogoHeader } from '../../components/Headers/Headers';
import * as Color from '../../components/Colors/colors';
import { Body, Heading, Caption } from '../../components/Typography/Typography';
import { Icon } from '../../components/Icons/Icons';
import * as IconName from '../../components/Icons/IconName';
import { ImageLoader } from '../../components/Images/ImageLoader';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DATA = [
  {
    id: '1',
    groupname: '사회복지법인 굿네이버스dddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇdddd',
    info: '사회복지',
    groupinfo: '지정기부금단체',
    isBookmarked: false, // 각 항목에 대한 북마크 상태
  },
  {
    id: '2',
    groupname: '사회복지법인 굿네이버스',
    info: '사회복지',
    groupinfo: '지정기부금단체',
    isBookmarked: false,
  },
  {
    id: '3',
    groupname: '사회복지법인 굿네이버스',
    info: '사회복지',
    groupinfo: '지정기부금단체',
    isBookmarked: false,
  },
  {
    id: '4',
    groupname: '사회복지법인 굿네이버스',
    info: '사회복지',
    groupinfo: '지정기부금단체',
    isBookmarked: false,
  },
];

const StarScreen = (props) => {
  const toggleBookmark = (itemId) => {
    const updatedData = DATA.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
        };
      }
      return item;
    });
  };

  return (
    <View style={styles.container}>
      <BackWithLogoHeader />
      <View style={styles.titlecontainer}>
      <Heading>응원하는단체</Heading>

      </View>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.headbox}>
              <View style={styles.imgbox}>
                <Icon name={IconName.STAR} iconColor={Color.Primary_50} />
              </View>
              <View style={styles.textbox}>
                <Body numberOfLines={1}>{item.groupname}</Body>
                <View style={styles.textinfo}>
                  <Caption>{item.info}</Caption>
                  <Caption>|</Caption>
                  <Caption>{item.groupinfo}</Caption>
                </View>
              </View>
            </View>
            <View style={styles.footbox}>
              <TouchableOpacity onPress={() => {
                props.setIsStar(!props.isStar);
              }}>
                <Icon name={props.isStar ? IconName.FILLSTAR : IconName.STAR} size={22} iconColor={Color.Primary_50} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  headbox: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 16,
  },
  imgbox: {
    justifyContent: 'center',
  },
  textbox: {
    width: '90%',
    flexDirection: 'column',
  },
  textinfo: {
    flexDirection: 'row',
    columnGap: 2,
  },
  footbox: {
    marginLeft: 16,
    marginRight: 20,
    justifyContent: 'flex-end',
  },
});

export default StarScreen;
