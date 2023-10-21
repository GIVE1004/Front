import { setAsync, getAsync, removeAsync } from '../async/asyncUtil';

export const getTokens = async (setAccessToken, setRefreshToken) => {
  getAsync('accessToken').then((res) => {
    setAccessToken(res);
  });
  getAsync('refreshToken').then((res) => {
    setRefreshToken(res);
  });
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
