import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { Divider } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';
import { openURL } from '../../util/linkUtil';
import { checkIfImage } from '../../util/util';
import { getCharityNews, getNewsCommentData } from '../../util/fetch/fetchUtil';
import { useEffect, useState } from 'react';

export const NewsView = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getNewsData = async () => {
      try {
        const responseData = await getCharityNews(props.charityId);
        if (responseData.dataHeader.successCode === 0) setData(responseData.dataBody.news);
        else {
          console.error('GroupNewsModule.js > NewsView: responseData가 없습니다.');
        }
      } catch (error) {
        console.error('GroupNewsModule.js > NewsView: ' + error);
        setIsError(true);
      }
    };
    getNewsData();
  }, []);

  return (
    <View>
      <NewsCommentCard charityId={props.charityId} />
      {data != null ? (
        data.map((value, index) => <NewsCard data={value} key={index} />)
      ) : isError ? (
        <Caption fontSize={16}>* 뉴스 데이터를 불러오는데 실패했습니다 :(</Caption>
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Caption fontSize={14}>뉴스 데이터를 불러오고 있습니다. </Caption>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export const NewsCommentCard = (props) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getNewsComment = async () => {
      try {
        const responseData = await getNewsCommentData(props.charityId);
        if (responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupNewsModule.js > NewsCommentCard: responseData가 없습니다.');
          setIsError(true);
        }
      } catch (error) {
        console.error('GroupNewsModule.js > NewsCommentCard: ' + error);
      }
    };
    getNewsComment();
  }, []);
  return (
    <View style={{ padding: 8 }}>
      <Heading>언론 보도</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 언론 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        {data != null && !isError ? <Body fontSize={14}>{data}</Body> : <Body fontSize={14}>* 데이터를 불러오는데 실패했습니다 :(</Body>}
      </View>
    </View>
  );
};

export const NewsCard = (props) => {
  const data = props.data;
  return (
    <Hyperlink>
      <TouchableOpacity onPress={() => openURL(data.link)}>
        <View style={{ padding: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '70%', justifyContent: 'space-between' }}>
            <Heading fontSize={14}>{data.title}</Heading>
            <Caption fontSize={12}>
              {data.pubDate}•{data.publisher}
            </Caption>
          </View>
          <View>
            {data.thumbnail == null || data.thumbnail == '' || !checkIfImage(data.thumbnail) ? (
              <LocalImageLoader source={require('../../../assets/giveIcon.png')} style={{ width: 60, height: 60, borderRadius: 6 }} />
            ) : (
              <ImageLoader source={data.thumbnail} style={{ width: 60, height: 60, borderRadius: 6 }} />
            )}
          </View>
        </View>
        <Divider />
      </TouchableOpacity>
    </Hyperlink>
  );
};
