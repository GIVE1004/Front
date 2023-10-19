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
    source: 'https://picsum.photos/300',
    groupId: '1',
    groupName: '사회복지법인 굿네이버스1',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',

  },
  {
    source: 'https://picsum.photos/300',
    groupId: '2',
    groupName: '사회복지법인 굿네이버스2',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
  },
  {
    source: 'https://picsum.photos/300',
    groupId: '3',
    groupName: '사회복지법인 굿네이버스3',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
  },
  {
    source: 'https://picsum.photos/300',
    groupId: '4',
    groupName: '사회복지법인 굿네이버스4',
    groupTag: '사회복지',
    groupLabel: '지정기부금단체',
  },
];

const StarScreen = () => {
  const toggleBookmark = (itemId) => {
    const updatedData = DATA.map((item) => {
      if (item.groupId === itemId) {
        return {
          ...item,
          
          
        };
      }
      return item;
    });
  };
  const [isStar, setStar] = useState(true);
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
                <ImageLoader source={item.source} style={{ width: 60, height: 60, borderRadius: 100 }}/>
              </View>
              <View style={styles.textbox}>
                <Body numberOfLines={1}>{item.groupName}</Body>
                <View style={styles.textinfo}>
                  <Caption>{item.groupTag}</Caption>
                  <Caption>|</Caption>
                  <Caption>{item.groupLabel}</Caption>
                </View>
              </View>
            </View>
            <View style={styles.footbox}>
              <TouchableOpacity 
                onPress={() => {
                  setStar(false);
                  
              }}
              >
                <Icon name={isStar ? IconName.FILLSTAR : IconName.STAR} size={22} iconColor={Color.Primary_50} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.groupId.toString()}
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
