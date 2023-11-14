import { setAsync, getAsync, removeAsync } from '../async/asyncUtil';

export const getTokens = async (setAccessToken, setRefreshToken) => {
  getAsync('accessToken').then((res) => {
    setAccessToken(JSON.parse(res));
  });
  getAsync('refreshToken').then((res) => {
    setRefreshToken(JSON.parse(res));
  });
};

export const getAccessToken = async () => {
  let accessToken = null;
  await getAsync('accessToken').then((res) => {
    accessToken = JSON.parse(res);
  });
  return accessToken;
};

export const setTokens = async (accessToken, refreshToken) => {
  if (accessToken != null && refreshToken != null) {
    setAsync('accessToken', accessToken);
    setAsync('refreshToken', refreshToken);
  }
};

export const removeTokens = async () => {
  removeAsync('accessToken');
  removeAsync('refreshToken');
};
