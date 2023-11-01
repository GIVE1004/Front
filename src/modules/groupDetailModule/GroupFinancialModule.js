import { View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { AddComma, Scaleing } from '../../util/util';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useEffect, useState } from 'react';
import { getAssetData, getPublicProfitsData, getRevenueData } from '../../util/fetch/fetchUtil';

export const GroupFinancialView = (props) => {
  return (
    <View>
      <FinancialCommentCard charityId={props.charityId} />
      <FinancialCard charityId={props.charityId} />
      <RevenueCard charityId={props.charityId} />
      <AssetCard charityId={props.charityId} />
      <RevenueDetailCard charityId={props.charityId} />
    </View>
  );
};

export const FinancialCommentCard = () => {
  const data = {
    financialAIData: '굿네이버스의 재무 현황은 안정적으로 보입니다. 총 자산과 순자산의 크기가 상당하며, 부채 비율이 낮아 재무 건전성을 나타냅니다.',
  };
  return (
    <View style={{ padding: 8 }}>
      <Heading>재무 재표</Heading>
      <Spacer space={10} />
      <Heading fontSize={22}>👀 AI 재무재표 분석 코멘트</Heading>
      <Spacer space={10} />
      <View style={{ backgroundColor: Color.Black_20, borderRadius: 20, padding: 14, paddingVertical: 14 }}>
        <Body fontSize={14}>{data.financialAIData}</Body>
      </View>
    </View>
  );
};

export const FinancialCard = () => {
  const tableTitle = ['자산', '부채', '사업수익', '기부금품', '사업비용', '분배비용'];
  const data = {
    total: '32616498876',
    debt: '2905962004',
    netAsset: '29710536872',
    tableHead: ['PERIOD', '2020', '2021', '2022'],
    // 1. 년도별 자산
    // 2. 년도별 부채
    // 3. 년도별 사업수익..
    // ...
    tableData: [
      ['13916498876', '13916498876', '13916498876'],
      ['2116498876', '2116498876', '2116498876'],
      ['59516498876', '59516498876', '59516498876'],
      ['25216498876', '25216498876', '25216498876'],
      ['53916498876', '53916498876', '53916498876'],
      ['9716498876', '9716498876', '9716498876'],
    ],
  };
  const tableDataWithUnit = data.tableData.map((row) => row.map((value) => Scaleing(value)));

  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      <Heading fontSize={18}>재무 현황</Heading>
      <Spacer space={14} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>총 가산가액 (원)</Body>
          <Heading fontSize={14}>{AddComma(data.total)}</Heading>
        </View>
        <Spacer space={4} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>부채 (원)</Body>
          <Heading fontSize={14}>{AddComma(data.debt)}</Heading>
        </View>
        <Spacer space={4} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Body fontSize={14}>순자산 (원)</Body>
          <Heading fontSize={14}>{AddComma(data.netAsset)}</Heading>
        </View>
      </View>
      <Spacer space={12} />
      <View>
        <View style={{ flex: 1, marginVertical: 10 }}>
          <Table borderStyle={{ borderWidth: 1, borderColor: Color.Black_60 }} style={{ backgroundColor: Color.Black_20 }}>
            <Row data={data.tableHead} flexArr={[1, 1, 1, 1]} style={{ height: 40, backgroundColor: Color.Black_40 }} textStyle={{ textAlign: 'center' }} />
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={tableTitle} style={{ flex: 1, backgroundColor: Color.Black_40 }} heightArr={[40, 40, 40, 40, 40, 40]} textStyle={{ textAlign: 'center' }} />
              <Rows data={tableDataWithUnit} flexArr={[1, 1, 1]} style={{ height: 40 }} textStyle={{ textAlign: 'center' }} />
            </TableWrapper>
          </Table>
        </View>
      </View>
    </View>
  );
};

export const RevenueCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getRevenue = async () => {
      const responseData = await getRevenueData(props.charityId);
      if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
    };
    getRevenue();
  }, []);

  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null && (
        <>
          <Heading fontSize={18}>수익 현황</Heading>
          <Spacer space={14} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업수익 (소계)</Body>
              <Heading fontSize={14}>{AddComma(data.biz_sum)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업수익 (기부금품)</Body>
              <Heading fontSize={14}>{AddComma(data.biz_donation)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업수익 (보조금)</Body>
              <Heading fontSize={14}>{AddComma(data.biz_subsidy)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업수익 (회비수익)</Body>
              <Heading fontSize={14}>{AddComma(data.biz_membership)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업수익 (기타)</Body>
              <Heading fontSize={14}>{AddComma(data.biz_etc)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>사업 외 수익</Body>
              <Heading fontSize={14}>{AddComma(data.non_biz)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>고유목적사업 준비금 환입액</Body>
              <Heading fontSize={14}>{AddComma(data.reversal)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>총계</Body>
              <Heading fontSize={14}>{AddComma(data.total_sum)}</Heading>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export const AssetCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getAsset = async () => {
      const responseData = await getAssetData(props.charityId);
      if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
    };
    getAsset();
  }, []);
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null && (
        <>
          <Heading fontSize={18}>자산 현황</Heading>
          <Spacer space={14} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>총 자산가액</Body>
              <Heading fontSize={14}>{AddComma(data.total_sum)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>토지</Body>
              <Heading fontSize={14}>{AddComma(data.land)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>건물</Body>
              <Heading fontSize={14}>{AddComma(data.building)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>주식 및 출자지분</Body>
              <Heading fontSize={14}>{AddComma(data.stock)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>금융자산</Body>
              <Heading fontSize={14}>{AddComma(data.finance)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기타자산</Body>
              <Heading fontSize={14}>{AddComma(data.etc)}</Heading>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export const RevenueDetailCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getPublicProfits = async () => {
      const responseData = await getPublicProfitsData(props.charityId);
      console.log(responseData);
      if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
    };
    getPublicProfits();
  }, []);
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null && (
        <>
          <Heading fontSize={18}>공익목적사업의 수익세부현황</Heading>
          <Spacer space={10} />
          <Heading fontSize={16}>사업수익</Heading>
          <Spacer space={8} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금품(소계)</Body>
              <Heading fontSize={14}>{AddComma(data.donation_sum)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금품(개인기부금품)</Body>
              <Heading fontSize={14}>{AddComma(data.donation_individual)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금품(영리법인기부금품)</Body>
              <Heading fontSize={14}>{AddComma(data.donation_profit_corp)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금품(지원금품)</Body>
              <Heading fontSize={14}>{AddComma(data.donation_public_corp)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기부금품(기타기부금품)</Body>
              <Heading fontSize={14}>{AddComma(data.donation_etc)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>보조금</Body>
              <Heading fontSize={14}>{AddComma(data.subsidy)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>회비수익</Body>
              <Heading fontSize={14}>{AddComma(data.profit_membership)}</Heading>
            </View>
            <Spacer space={6} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>기타공익목적사업수익</Body>
              <Heading fontSize={14}>{AddComma(data.profit_public_business_etc)}</Heading>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
