import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { View } from 'react-native';
import { Spacer } from '../../components/Typography/Spacer';
import { Graph } from '../../components/Graphs/Graphs';
import { GraphSwiftButton, SwiftButton } from '../../components/Buttons/Buttons';

// selected = 기부액/기부자
// pmGive = 증감기부액
export const MainGraphCard = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ marginHorizontal: 14 }}>
        <Heading fontSize={18}>오늘 {props.selected}</Heading>
        <Spacer space={4} />
        <Heading>{props.give}</Heading>
        <Spacer space={4} />
        <Body fontSize={16} color={Color.Danger_50}>
          {props.pmGive} ({props.percentPmGive}%)
        </Body>
      </View>
      <Graph data={props.data} color={Color.Danger_40} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <GraphSwiftButton borderRadius={15} width={160} isFocus={true}>
          <Body color={Color.White_100}>test1</Body>
        </GraphSwiftButton>
        <GraphSwiftButton borderRadius={15} width={160}>
          <Body>test2</Body>
        </GraphSwiftButton>
      </View>
    </View>
  );
};
