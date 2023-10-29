import { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, View } from 'react-native';
import { Caption, Divider } from 'react-native-paper';
import { Spacer } from '../../components/Basic/Spacer';
import { MyRadioButton } from '../../components/Buttons/RadioButtons';
import { ImageLoader, LocalImageLoader } from '../../components/Images/ImageLoader';
import { SingleLineInput } from '../../components/Inputs/Inputs';
import { SwiftLabel } from '../../components/Labels/Labels';
import { HelpTooltip } from '../../components/Tooltip/MyTooltip';
import { Body, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import { Footer } from '../../components/Footers/Footers';
import { BasicButton } from '../../components/Buttons/Buttons';
import { AddComma } from '../../util/util';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const DoDonation = (props) => {
  const data = props.data;
  const labels = ['1개월', '3개월', '6개월', '1년'];
  const [isFocus, setIsFocus] = useState([true, false]);
  const selectedLabel = labels[isFocus.indexOf(true)];
  const values = ['네', '아니오'];
  const [checked, setChecked] = useState();
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
        <Heading>기부하기</Heading>
      </View>
      <Spacer space={10} />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={height * 0.2 - insets.bottom}>
        <ScrollView>
          <View style={{ flexDirection: 'col', paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <ImageLoader source={data.source} style={{ width: 60, height: 60, borderRadius: 100 }} />
              </View>
              <Spacer space={10} />
              <View style={{ marginLeft: 15 }}>
                <Heading fontSize={18}>{data.groupName}</Heading>
                <Caption fontSize={16}>
                  {data.groupTag} | {data.groupLabel}
                </Caption>
              </View>
            </View>
            <Spacer space={13} />
            <Heading fontSize={20}>기부액(월단위)</Heading>
            <Spacer space={13} />
            <SingleLineInput
              placeholder={'금액을 입력하세요'}
              onChangeText={(text) => {
                setPrice(text);
              }}
            />
            <Spacer space={13} />
            <Heading fontSize={20}>기부자</Heading>
            <Spacer space={13} />
            <SingleLineInput
              placeholder={'원하시는 성함을 입력하세요'}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Spacer space={13} />
            <View style={{ flexDirection: 'row' }}>
              <Heading fontSize={20}>기간 선택 </Heading>
              <HelpTooltip content={'기부금은 매달 1일에 기부됩니다.'} />
            </View>
            <Spacer space={13} />
            <View style={{ width: '100%', paddingHorizontal: 15 }}>
              <SwiftLabel isFocus={isFocus} setIsFocus={setIsFocus} labels={labels} width={90} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Heading fontSize={20}>증명서가 필요한가요? </Heading>
              <HelpTooltip content={'증명서는 가입한 메일로 갑니다.'} />
            </View>
            <Spacer space={13} />
            <MyRadioButton values={values} setChecked={setChecked} color={Color.Secondary_50} />
          </View>
        </ScrollView>
        <Footer>
          <BasicButton
            onPress={() => {
              props.setIsVisible(false);
              props.setIsVisibleCheck(true);
            }}
            width='100%'
            backgroundColor={Color.Primary_50}
            borderColor={Color.Primary_50}
          >
            <Heading fontSize={16}>기부하기</Heading>
          </BasicButton>
        </Footer>
      </KeyboardAvoidingView>
    </View>
  );
};

export const DonationCheck = (props) => {
  const data = props.data;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
        <Heading>확인할게요</Heading>
      </View>
      <Spacer space={10} />
      <ScrollView>
        <View style={{ marginHorizontal: 20, padding: 10, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
            <View style={{ marginHorizontal: 15 }}>
              <Heading fontSize={16}>{data.groupName}</Heading>

              <Spacer space={4} />
              <Caption fontSize={14}>
                {data.groupTag} | {data.groupLabel}
              </Caption>
            </View>
          </View>
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>이메일</Body>
            <Body fontSize={14}>{data.userEmail}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부자 명</Body>
            <Body fontSize={14}>{data.donatorName}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부시작일</Body>
            <Body fontSize={14}>{data.donnationStartdate}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <Divider />
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>월 기부 금액</Body>
            <Body fontSize={14}>{AddComma(data.monthlyDonationbudget)} 원</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>예상 기부 횟수</Body>
            <Body fontSize={14}>{data.expectedDonationCount} 회</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              예상 기부금 합계
            </Body>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              {AddComma(data.expectedDonationTotal)} 원
            </Body>
          </View>
        </View>
      </ScrollView>
      <Footer>
        <BasicButton onPress={() => props.setIsVisibleCheck(false)} width='50%' borderColor={Color.Primary_50} backgroundColor={Color.White_100}>
          <Heading fontSize={16}>뒤로가기</Heading>
        </BasicButton>
        <BasicButton
          onPress={() => {
            props.setIsVisibleCheck(false);
            props.setIsVisibleSucess(true);
          }}
          width='50%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>확인</Heading>
        </BasicButton>
      </Footer>
    </View>
  );
};

export const DonnationSuccess = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Spacer space={30} />
          <LocalImageLoader source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
          <Spacer space={20} />
          <Heading fontSize={28}>기부 성공!</Heading>
          <Spacer space={5} />
          <Caption fontSize={14}>기부자님의 소중한 마음으로 놀라운 변화가 일어났어요.</Caption>
        </View>
      </ScrollView>
      <Footer>
        <BasicButton
          onPress={() => {
            props.setIsVisibleSucess(false);
            navigation.goBack();
          }}
          width='100%'
          backgroundColor={Color.Primary_50}
          borderColor={Color.Primary_50}
        >
          <Heading fontSize={16}>등록완료</Heading>
        </BasicButton>
      </Footer>
    </View>
  );
};

export const DonationStopCheck = (props) => {
  const data = props.data;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
        <Heading>확인할게요</Heading>
      </View>
      <Spacer space={10} />
      <ScrollView>
        <View style={{ marginHorizontal: 20, padding: 10, backgroundColor: Color.Black_20, borderRadius: 10, paddingBottom: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ImageLoader source={data.source} style={{ width: 50, height: 50, borderRadius: 100 }} />
            <View style={{ marginHorizontal: 15 }}>
              <Heading fontSize={16}>{data.groupName}</Heading>

              <Spacer space={4} />
              <Caption fontSize={14}>
                {data.groupTag} | {data.groupLabel}
              </Caption>
            </View>
          </View>
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>이메일</Body>
            <Body fontSize={14}>{data.userEmail}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부자 명</Body>
            <Body fontSize={14}>{data.donatorName}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>기부시작일</Body>
            <Body fontSize={14}>{data.donnationStartdate}</Body>
          </View>
          <Spacer space={16}></Spacer>
          <Divider />
          <Spacer space={16} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>월 기부 금액</Body>
            <Body fontSize={14}>{AddComma(data.monthlyDonationbudget)} 원</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontSize={14}>예상 기부 횟수</Body>
            <Body fontSize={14}>{data.expectedDonationCount} 회</Body>
          </View>
          <Spacer space={16}></Spacer>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              예상 기부금 합계
            </Body>
            <Body fontWeight={'bold'} fontSize={16} color={Color.Secondary_50}>
              {AddComma(data.expectedDonationTotal)} 원
            </Body>
          </View>
        </View>
      </ScrollView>
      <Footer>
        <BasicButton
          onPress={() => {
            props.setIsVisibleStopCheck(false);
            props.setIsVisibleStopSucess(true);
          }}
          width='100%'
          backgroundColor={Color.Secondary_50}
          borderColor={Color.Secondary_50}
        >
          <Heading fontSize={16} color={Color.White_100}>
            확인
          </Heading>
        </BasicButton>
      </Footer>
    </View>
  );
};

export const DonnationStopSuccess = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Spacer space={30} />
          <LocalImageLoader source={require('../../../assets/success.gif')} style={{ width: 200, height: 200 }} />
          <Spacer space={20} />
          <Heading fontSize={28}>감사합니다.</Heading>
          <Spacer space={5} />
          <Caption fontSize={14}>지금까지 기부자님의 도움으로 세상이 더 밝아졌습니다.</Caption>
        </View>
      </ScrollView>

      <Footer>
        <BasicButton
          onPress={() => {
            props.setIsVisibleStopSucess(false);
            navigation.goBack();
          }}
          width='100%'
          backgroundColor={Color.Secondary_50}
          borderColor={Color.Secondary_50}
        >
          <Heading fontSize={16} color={Color.White_100}>
            완료
          </Heading>
        </BasicButton>
      </Footer>
    </View>
  );
};
