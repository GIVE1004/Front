import { Platform } from 'react-native';
import axios from 'axios';

const _ANDROID_AVD_API_HOST = 'http://10.0.2.2:8080';
const _IOS_API_HOST = 'http://localhost:8080';
export default getAPIHost = () => {
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
/// oauth/{oAuthServerType}
// oauth 페이지 호출
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

// /login/{kakao}?code=인증코드
// token + memberInfo 받아오기
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

// /oauth/refresh
// token 상태 확인 및 memberInfo 받아오기
export const getRefreshFetch = async (accessToken, refreshToken) => {
  const baseUrl = `${url}/oauth/refresh`;
  if (accessToken != null && refreshToken != null) {
    accessToken = accessToken.slice(1, -1);
    refreshToken = refreshToken.slice(1, -1);
  }

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

// /charities/{charityId}/news
export const getCharityNews = async (charityId) => {
  const baseUrl = `${url}/charities/${charityId}/news`;
  const response = await axios.get(baseUrl);
  return response.data;
};
