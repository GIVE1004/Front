import { Caption, Divider } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Basic/Spacer';
import { ImageLoader } from '../../components/Images/ImageLoader';
import { Heading } from '../../components/Typography/Typography';

export const ReportGroupInfoView = (props) => {
  let data;
  if (props.type == 'nowDonation') {
    data = [
      { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스1', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스2', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스3', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스4', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스5', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    ];
  } else if (props.type == 'finDonation') {
    data = [
      { source: 'https://picsum.photos/300', groupId: 1, groupName: '사회복지법인 굿네이버스11', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 2, groupName: '사회복지법인 굿네이버스22', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 3, groupName: '사회복지법인 굿네이버스33', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 4, groupName: '사회복지법인 굿네이버스44', groupTag: '사회복지', groupLabel: '지정기부금단체' },
      { source: 'https://picsum.photos/300', groupId: 5, groupName: '사회복지법인 굿네이버스55', groupTag: '사회복지', groupLabel: '지정기부금단체' },
    ];
  }
  return (
    <View style={{ flex: 1, margin: 10 }}>
      {props.type == 'nowDonation' ? (
        <Heading fontSize={20}>기부중인 단체</Heading>
      ) : (
        <Heading fontSize={20} numberOfLines={1}>
          기부한 단체
        </Heading>
      )}
      <Spacer space={6} />
      {data.map((value, index) => (
        <TouchableOpacity
          disabled={props.type == 'nowDonation' ? false : true}
          style={{ justifyContent: 'space-between' }}
          onPress={() => {
            // props.type == 'nowDonation';
            // To-do
            // type이 nowDonation일 때만 review쓸 수 있는 모달 열기...
          }}
        >
          <ReportGroupInfoCard key={index} data={value} />
          <Divider />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const ReportGroupInfoCard = (props) => {
  const data = props.data;
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 8, padding: 4 }}>
      <View style={{ marginHorizontal: 8 }}>
        <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
      </View>
      <View style={{ marginHorizontal: 8 }}>
        <Heading fontSize={16}>{data.groupName}</Heading>
        <Spacer space={4} />
        <Caption fontSize={14}>
          {data.groupTag} | {data.groupLabel}
        </Caption>
      </View>
    </View>
  );
};
