import { TouchableOpacity, View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { Divider } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink';
import { openURL } from '../../util/linkUtil';

export const NewsView = () => {
  const data = [
    {
      newsTitle: "굿네이버스 인천서부지부•지역후원회 '두 손 가득 희망키트'",
      newsDate: '4:14 PM',
      newsCompany: '뉴시스',
      newsPhotoUri: 'https://picsum.photos/400',
      newsUrl: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202310160154&t=NT',
    },
    {
      newsTitle: '원주시 보건소, 굿네이버스 강원지역본부와 업무협약 체결',
      newsDate: '9:20 AM',
      newsCompany: '스포츠서울',
      newsPhotoUri: 'https://picsum.photos/400',
      newsUrl: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202310160154&t=NT',
    },
    {
      newsTitle: '씨알유치원 원아들 굿네이버스에 성금',
      newsDate: '11:04 AM',
      newsCompany: '고양신문',
      newsPhotoUri: 'https://picsum.photos/400',
      newsUrl: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202310160154&t=NT',
    },
  ];
  return (
    <View>
      <NewsCommentCard />
      {data.map((value, index) => (
        <NewsCard data={value} />
      ))}
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
      <TouchableOpacity onPress={() => openURL(data.newsUrl)}>
        <View style={{ padding: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '70%', justifyContent: 'space-between' }}>
            <Heading fontSize={14}>{data.newsTitle}</Heading>
            <Caption fontSize={12}>
              {data.newsDate}•{data.newsCompany}
            </Caption>
          </View>
          <View>
            <ImageLoader source={data.newsPhotoUri} style={{ width: 60, height: 60, borderRadius: 6 }} />
          </View>
        </View>
        <Divider />
      </TouchableOpacity>
    </Hyperlink>
  );
};
