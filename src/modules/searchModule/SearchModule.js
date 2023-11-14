import { useState, useEffect } from 'react';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { formatNumberWithSign } from '../../util/util';
import {
  getTrendingGroupInfoData,
  getActivityGroupInfoData,
  getTrustGroupInfoData,
  getMatchingGroupInfoData,
  getInterestingroupInfoData,
  getSearchData,
} from '../../util/fetch/fetchUtil';

export const SearchGroupCard = (props) => {
  const [data, setData] = useState(null);
  console.log(props.selectedLabel);

  useEffect(() => {
    if (props.searchPress) {
      //fetch
      console.log('유즈');
      console.log(props.searchInput);
      const getSearchResult = async () => {
        try {
          const sendData = {
            search_word: props.searchInput,
          };
          const responseData = await getSearchData(sendData);
          console.log(responseData.dataBody);

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchModule.js > SearchGroupCard: ' + error);
        }
      };
      getSearchResult();
      props.setSearchPress(false);
    }
  }, [props.searchPress]);

  useEffect(() => {
    if (props.selectedLabel == '🔥 지금 뜨는') {
      const getTrendingGroupInfo = async () => {
        try {
          const responseData = await getTrendingGroupInfoData();

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchMoudle.js > SearchGroupCard: ' + error);
        }
      };
      getTrendingGroupInfo();
    } else if (props.selectedLabel == '활발한 활동') {
      const getActivityGroupInfo = async () => {
        try {
          const responseData = await getActivityGroupInfoData();

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchMoudle.js > SearchGroupCard: ' + error);
        }
      };
      getActivityGroupInfo();
    } else if (props.selectedLabel == '높은 신뢰도') {
      const getTrustGroupInfo = async () => {
        try {
          const responseData = await getTrustGroupInfoData();

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchMoudle.js > SearchGroupCard: ' + error);
        }
      };
      getTrustGroupInfo();
    } else if (props.selectedLabel == '나와 맞는') {
      const getMatchingGroupInfo = async () => {
        try {
          const responseData = await getMatchingGroupInfoData();

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchMoudle.js > SearchGroupCard: ' + error);
        }
      };
      getMatchingGroupInfo();
    } else if (props.selectedLabel == '인기') {
      const getInterestingGroupInfo = async () => {
        try {
          const responseData = await getInterestingroupInfoData();

          if (responseData.dataHeader && responseData.dataHeader.successCode == 0) {
            setData(responseData.dataBody);
          } else {
            console.error('SearchModule.js > SearchGroupCard: responseData가 없습니다.');
          }
        } catch (error) {
          console.error('SearchMoudle.js > SearchGroupCard: ' + error);
        }
      };
      getInterestingGroupInfo();
    }
  }, [props.selectedLabel]);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {/* {console.log(data)} */}
      {data != null ? (
        data.map((values, index) => <SearchCard data={values} key={index} />)
      ) : (
        <>
          <View style={{ marginHorizontal: 8 }}></View>
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :</Caption>
        </>
      )}
    </View>
  );
};

export const SearchCard = (props) => {
  const data = props.data;
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: Color.White_100,
        borderColor: Color.Black_40,
        borderBottomWidth: 2,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'column',
        marginVertical: 4,
        width: width * 0.94,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GroupDetailScreen', { charityId: data.groupId });
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 4, paddingHorizontal: 6 }}>
          <ImageLoader source={data.source} style={{ width: 40, height: 40, borderRadius: 100 }} />
          <Spacer space={16} horizontal={true} />
          <View>
            <Heading fontSize={14} color={Color.Black_80}>
              {data.group_name}
            </Heading>
            <Spacer space={4}></Spacer>
            <Caption fontSize={12}>
              {data.group_tag}|{data.group_label}
            </Caption>
          </View>
        </View>
        <Spacer space={14} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            {/* 평점란 */}
            <Body fontSize={12}>리뷰 평점</Body>
            <Spacer space={4} />
            <Heading fontSize={12}>{data.group_score} / 100</Heading>
          </View>
          <View style={{ alignItems: 'center' }}>
            {/* 기부자 */}
            <Body fontSize={12}>기부자(월 단위 증감)</Body>
            <Spacer space={4} />
            <Heading fontSize={12} color={data.group_number_pm >= 0 ? Color.Success_50 : Color.Danger_50}>
              {data.group_number} 명 ({formatNumberWithSign(data.group_number_pm)})
            </Heading>
          </View>
          <View style={{ alignItems: 'center' }}>
            {/* 관심지수 */}
            <Body fontSize={12}>관심지수</Body>
            <Spacer space={4} />
            <Heading fontSize={12} color={data.gruop_star_pm >= 0 ? Color.Success_50 : Color.Danger_50}>
              {data.group_star} 점 ({formatNumberWithSign(data.group_star_pm)})
            </Heading>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
