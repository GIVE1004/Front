import { Alert, View } from 'react-native';
import * as Color from '../../components/Colors/colors';
import { Spacer } from '../../components/Basic/Spacer';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import { AddComma, Scaleing } from '../../util/util';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useEffect, useState } from 'react';
import { getAssetData, getGraphFinancialData, getPublicProfitsData, getRevenueData } from '../../util/fetch/fetchUtil';

export const GroupFinancialView = (props) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      Alert.alert('데이터를 불러오는데 실패했습니다.');
    }
  }, [isError]);

  return (
    <View>
      <FinancialCommentCard charityId={props.charityId} setIsError={setIsError} />
      <FinancialCard charityId={props.charityId} setIsError={setIsError} />
      <RevenueCard charityId={props.charityId} setIsError={setIsError} />
      <AssetCard charityId={props.charityId} setIsError={setIsError} />
      <RevenueDetailCard charityId={props.charityId} setIsError={setIsError} />
    </View>
  );
};

export const FinancialCommentCard = (props) => {
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

export const FinancialCard = (props) => {
  const tableTitle = ['자산', '부채', '사업수익', '기부금품', '사업비용', '분배비용'];
  const [data, setData] = useState(null);
  const [tableDataWithUnit, setTableDataWithUnit] = useState(null);
  useEffect(() => {
    const getGraphFinancial = async () => {
      try {
        const responseData = await getGraphFinancialData(props.charityId);
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupFinancialModule.js > FinancialCard: responseData가 없습니다.');
          props.setIsError(true);
        }
      } catch (error) {
        console.error('GroupFinancialModule.js > FinancialCard: ' + error);
        props.setIsError(true);
      }
    };
    getGraphFinancial();
  }, []);

  useEffect(() => {
    if (data != null) {
      const reverseTable = data.table_data[0].map((_, columnIndex) => data.table_data.map((row) => row[columnIndex]));
      const tableDataWithUnit = reverseTable.map((row) => row.map((value) => Scaleing(value)));
      setTableDataWithUnit(tableDataWithUnit);
    }
  }, [data]);

  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null && tableDataWithUnit != null ? (
        <>
          <Heading fontSize={18}>재무 현황</Heading>
          <Spacer space={14} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>총 가산가액 (원)</Body>
              <Heading fontSize={14}>{AddComma(data.total_asset)}</Heading>
            </View>
            <Spacer space={4} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>부채 (원)</Body>
              <Heading fontSize={14}>{AddComma(data.debt)}</Heading>
            </View>
            <Spacer space={4} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Body fontSize={14}>순자산 (원)</Body>
              <Heading fontSize={14}>{AddComma(data.net_asset)}</Heading>
            </View>
          </View>
          <Spacer space={12} />
          <View>
            <View style={{ flex: 1, marginVertical: 10 }}>
              <Table borderStyle={{ borderWidth: 1, borderColor: Color.Black_60 }} style={{ backgroundColor: Color.Black_20 }}>
                <Row data={data.table_head} flexArr={[1, 1, 1, 1]} style={{ height: 40, backgroundColor: Color.Black_40 }} textStyle={{ textAlign: 'center' }} />
                <TableWrapper style={{ flexDirection: 'row' }}>
                  <Col data={tableTitle} style={{ flex: 1, backgroundColor: Color.Black_40 }} heightArr={[40, 40, 40, 40, 40, 40]} textStyle={{ textAlign: 'center' }} />
                  <Rows data={tableDataWithUnit} flexArr={[1, 1, 1]} style={{ height: 40 }} textStyle={{ textAlign: 'center' }} />
                </TableWrapper>
              </Table>
            </View>
          </View>
        </>
      ) : (
        <>
          <Heading fontSize={18}>재무 현황</Heading>
          <Spacer space={14} />
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
    </View>
  );
};

export const RevenueCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getRevenue = async () => {
      try {
        const responseData = await getRevenueData(props.charityId);
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupFinancialModule.js > RevenueCard: responseData가 없습니다.');
          props.setIsError(true);
        }
      } catch (error) {
        console.error('GroupFinancialModule.js > RevenueCard: ' + error);
        props.setIsError(true);
      }
    };
    getRevenue();
  }, []);

  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null ? (
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
      ) : (
        <>
          <Heading fontSize={18}>수익 현황</Heading>
          <Spacer space={14} />
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
    </View>
  );
};

export const AssetCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getAsset = async () => {
      try {
        const responseData = await getAssetData(props.charityId);
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupFinancialModule.js > AssetCard: responseData가 없습니다.');
          props.setIsError(true);
        }
      } catch (error) {
        console.error('GroupFinancialModule.js > AssetCard: ' + error);
        props.setIsError(true);
      }
    };
    getAsset();
  }, []);
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null ? (
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
      ) : (
        <>
          <Heading fontSize={18}>자산 현황</Heading>
          <Spacer space={14} />
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
    </View>
  );
};

export const RevenueDetailCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getPublicProfits = async () => {
      try {
        const responseData = await getPublicProfitsData(props.charityId);
        if (responseData.dataHeader && responseData.dataHeader.successCode == 0) setData(responseData.dataBody);
        else {
          console.error('GroupFinancialModule.js > RevenueDetailCard: responseData가 없습니다.');
          props.setIsError(true);
        }
      } catch (error) {
        console.error('GroupFinancialModule.js > RevenueDetailCard: ' + error);
        props.setIsError(true);
      }
    };
    getPublicProfits();
  }, []);
  return (
    <View style={{ flex: 1, padding: 8, marginVertical: 6 }}>
      {data != null ? (
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
      ) : (
        <>
          <Heading fontSize={18}>공익목적사업의 수익세부현황</Heading>
          <Spacer space={14} />
          <Caption fontSize={16}>* 데이터를 불러오는데 실패했습니다 :(</Caption>
        </>
      )}
    </View>
  );
};
