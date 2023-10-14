import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Heading } from '../Typography/Typography';
import * as Color from '../Colors/colors';
import { Spacer } from '../Basic/Spacer';
import { AddComma } from '../../util/util';

export const Graph = (props) => {
  const formatYLabel = (value) => {
    return AddComma(value);
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Heading fontSize={22}>{props.title}</Heading>
      {props.title && <Spacer space={6} />}
      {props.data && props.data.length !== 0 ? (
        <LineChart
          data={{
            labels: props.labels,
            datasets: [
              {
                data: props.data,
              },
            ],
          }}
          width={Dimensions.get('window').width - 10}
          height={props.height || 200}
          withDots={false} // 데이터 포인트를 숨김
          withInnerLines={false} // 내부 라인 숨김
          formatYLabel={formatYLabel}
          yAxisSuffix={props.selectedLabel == '기부자' ? '명' : ''}
          xAxisLabel={'일'}
          chartConfig={{
            backgroundColor: props.backgroundColor || Color.White_100,
            backgroundGradientFrom: props.backgroundGradientFrom || Color.White_100,
            backgroundGradientTo: props.backgroundGradientTo || Color.White_100,
            color: () => props.color || Color.Black_80,
            labelColor: () => Color.Black_50,
            decimalPlaces: 0,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <View
          style={{
            width: '95%',
            borderRadius: 16,
            margin: 8,
            backgroundColor: Color.Black_20,
            height: props.height || 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Heading fontSize={20} color={Color.Black_40}>
            * 정보를 불러오지 못했습니다.
          </Heading>
        </View>
      )}
    </View>
  );
};
