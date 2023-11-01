import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { Divider } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';
import { openURL } from '../../util/linkUtil';
import { checkIfImage } from '../../util/util';
import { getCharityNews } from '../../util/fetch/fetchUtil';
import { useEffect, useState } from 'react';

export const NewsView = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getNewsData = async () => {
      await getCharityNews(props.charityId).then((data) => {
        if (data.dataHeader.successCode == 0) {
          setData(data.dataBody.news);
        }
      });
    };
    getNewsData();
  }, []);

  return (
    <View>
      <NewsCommentCard />
      {data != null ? data.map((value, index) => <NewsCard data={value} key={index} />) : <ActivityIndicator />}
    </View>
  );
};

export const NewsCommentCard = () => {
  const data = {
    newsAIData:
      "굿네이버스와 협력하는 지역 후원회가 아동과 가정을 돕기 위한 다양한 노력을 기사에서 다루고 있습니다.\n\n1. '굿네이버스 경기2본부'와 협력하는 라라케이크에서 '굿네이버스 경기2본부 지역후원회' 위촉식과 '좋은이웃가게' 현판 전달식이 개최되었습니다. 이 지역후원회는 국내외 사업 후원과 나눔 문화 확산을 위한 봉사자 모임으로 굿네이버스의 사회 봉사 활동을 지원합니다.\n\n2. 라라케이크 대표 문정아가 '지역후원회' 위원으로 위촉되었으며, 아이들을 위한 '좋은이웃가게'를 통해 소외된 어린이들의 건강한 성장을 촉진하고자 노력할 것이라고 밝혔습니다.\n\n3. 씨알유치원은 '아나바다 프리마켓' 수익금을 굿네이버스 경기2본부에 기부하였습니다. 이 프리마켓은 지속가능발전교육의 일환으로, 굿네이버스는 나눔 문화 확산을 촉진하는 활동을 통해 아동들의 건강한 성장을 지원합니다.\n\n4. 굿네이버스는 모로코에서 발생한 6.8 규모의 지진 피해를 위해 100만달러 규모의 긴급구호 활동을 진행하고 있으며, 피해 지역의 아동들을 위한 아동친화공간과 심리사회적지원 프로그램을 제공합니다.\n\n5. 굿네이버스는 충북도내에서 집중호우로 피해를 입은 가정 12가구를 선정하여 주거환경 개선사업을 추진하고 있으며, 이를 통해 아동의 권리와 이익을 증진하는 다양한 사회사업을 진행합니다.",
  };
  return (
    <View style={{ padding: 8 }}>
      <Heading>언론 보도</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 언론 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Body fontSize={14}>{data.newsAIData}</Body>
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
