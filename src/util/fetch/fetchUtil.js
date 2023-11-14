import { Platform } from 'react-native';
import axios from 'axios';
import { getAccessToken } from '../token/tokenUtil';

const _ANDROID_AVD_API_HOST = 'http://10.0.2.2:8080';
const _IOS_API_HOST = 'http://localhost:8080';
export const getAPIHost = () => {
  if (Platform.OS === 'ios') {
    return _IOS_API_HOST;
  } else if (Platform.OS === 'android') {
    return _ANDROID_AVD_API_HOST;
  } else {
    throw 'Platform not supported';
  }
};
const url = getAPIHost();

export const makeQueryStringForGet = (baseUrl, queryParams) => {
  const queryString = Object.keys(queryParams)
    .filter((key) => queryParams[key] !== undefined)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');

  const fullUrl = `${baseUrl}?${queryString}`;
  return fullUrl;
};

//********* AuthFetch **********/
// 작업 JS: OauthScreen.js
// URI: oauth/{oAuthServerType}
// 요약: oauth 페이지 호출
export const getAuthRedirectFetch = async (oAuthServerType) => {
  const baseUrl = `${url}/oauth/${oAuthServerType}`;

  return await fetch(baseUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// 작업 JS: OauthScreen.js
// URI: /login/{kakao}?code=인증코드
// 요약: token + memberInfo 받아오기
export const getLoginFetch = async (oAuthServerType, code) => {
  const baseUrl = `${url}/oauth/login/${oAuthServerType}?code=${code}`;

  return await fetch(baseUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// 작업 JS: SplashScreen.js
// URI: /oauth/refresh
// 요약: token 상태 확인 및 memberInfo 받아오기
export const getRefreshFetch = async (accessToken, refreshToken) => {
  const baseUrl = `${url}/oauth/refresh`;
  return await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    }),
  });
};

//********* GroupDetail(charityDetail) **********/
/////////////NEWS/////////////
// 작업 JS: GroupNewsModule.js
// URI: /charities/{charityId}/news
// 요약: 언론보도 내 뉴스의 정보를 크롤링하여 뿌려준다.
export const getCharityNews = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/news`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupNewsModule.js > NewsCommentCard
// URI: /charities/{charityId}/news/analysis
// 요약: 언론보도 내 뉴스의 종합 AI Comment를 가져온다.
export const getNewsCommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/news/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};

/////////////FINANCIAL/////////////
// 작업 JS: GroupFinancialModule.js > RevenueCard
// URI: /charities/{charityId}/profits/current
// 요약: 재무재표 내 수익현황을 뿌려준다.
export const getRevenueData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/profits/current`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupFinancialModule.js > AssetCard
// URI: /charities/{charityId}/assets/current
// 요약: 재무재표 내 자산현황을 뿌려준다.
export const getAssetData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/assets/current`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupFinancialModule.js > RevenueDetailCard
// URI: /charities/{charityId}/profits/public
// 요약: 재무재표 내 공익목적사업의 수익 세부현황 뿌려준다.
export const getPublicProfitsData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/profits/public-current`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupFinancialModule.js > FinancialCard
// URI: /charities/{charityId}/finance
// 요약: 재무재표 내 표 정보를 뿌려준다.
export const getGraphFinancialData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/finance`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupFinancialModule.js > FinancialCommentCard
// URI: /charities/{charityId}/finance/analysis
// 요약: 재무재표 내 AI Comment를 가져온다.
export const getFinancialAICommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/finance/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};

/////////////INFO/////////////
// 작업 JS: GroupInfoModule.js > InfoCard
// URI: /charities/{charityId}
// 요약: 단체정보 내 기부단체의 기본정보를 가져온다.
export const getGroupDetailInfoData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupInfoModule.js > InfoCommentCard
// URI: /charities/{chairtyId}/profile/analysis
// 요약: 단체정보 내 기부단체의 AI Comment를 가져온다.
export const getGroupDetailAICommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/profile/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};
//

/////////////GIVE AI/////////////
// 작업 JS: GroupAIReportModule.js > AIReportCommentCard
// URI: /charities/{charityId}/overall/analysis
// 요약: 단체정보 내 GIVE AI 분석 코맨트를 가져온다.
export const getGIVEAICommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/overall/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};

// 작업 JS: GroupAIReportModule.js > GroupReportCard
// URI: /charities/{charityId}/audit/analysis
// 요약: 단체정보 내 감사 분석 AI 코맨트를 가져온다.
export const getReportAICommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/audit/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};

////////////REVIEW///////////////
// 작업 JS: GroupReviewModule.js > ReviewCommentCard
// URI: /charities/{charityId}/review/analysis
// 요약: 리뷰 내 AI Comment를 가져온다.
export const getReviewCommentData = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/review/analysis`;
  const response = await axios.get(baseUrl);
  return response.data;
};

//********* question **********/
// 작업 JS: QuestionScreen.js
// URI: /members/me/surveys
// 요약: 취향조사 답변 전송
export const postQuestionData = async (sendData) => {
  const accessToken = await getAccessToken();
  const baseUrl = `${url}/members/me/surveys`;
  const response = await axios({
    method: 'post',
    url: baseUrl,
    headers: { Authorization: `Bearer ${accessToken}` },
    data: sendData,
  });
  return response.data;
};

// 작업 JS: SplashScreen.js, OauthScreen.js
// URI: /members/me/surveys/check
// 요약: 시작 시 question 대답에 대한 여부 가져오기
export const getIsAnswerQuestionData = async () => {
  const accessToken = await getAccessToken();
  const baseUrl = `${url}/members/me/surveys/check`;
  const response = await axios.get(baseUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
  return response.data;
};
