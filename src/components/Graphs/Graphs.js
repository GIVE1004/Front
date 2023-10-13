import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Heading } from '../Typography/Typography';
import * as Color from '../Colors/colors';
import { Spacer } from '../Typography/Spacer';

export const Graph = (props) => {
  return (
    <View style={{ margin: 5 }}>
      <Heading fontSize={22}>{props.title}</Heading>
      <Spacer space={6} />
      {props.data && props.data.length != 0 ? (
        <LineChart
          data={{
            labels: props.labels,
            datasets: [
              {
                data: props.data || [Math.random() * 100],
              },
            ],
          }}
          propsForBackgroundLines={{ stroke: 'transparent' }}
          width={Dimensions.get('window').width}
          height={props.height || 220}
          withInnerLines={false} // 내부 라인 숨기기
          withVerticalLines={false}
          withHorizontalLines={false}
          chartConfig={{
            backgroundColor: props.backgroundColor || Color.White_100,
            backgroundGradientFrom: props.backgroundGradientFrom || Color.White_100,
            backgroundGradientTo: props.backgroundGradientTo || Color.White_100,
            decimalPlaces: 0,
            color: () => props.color || Color.Black_80,
            labelColor: () => props.labelColor || Color.Black_50,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
            },
          }}
        />
      ) : (
        <View style={{ borderRadius: 16, backgroundColor: Color.Black_20, height: props.height || 220, alignItems: 'center', justifyContent: 'center' }}>
          <Heading fontSize={20} color={Color.Black_40}>
            * 정보를 불러오지 못했습니다.
          </Heading>
        </View>
      )}
    </View>
  );
};