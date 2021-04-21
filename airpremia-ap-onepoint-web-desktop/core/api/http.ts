import axios from 'axios';
import { getToken } from '../lib/storage';
import initializeStore from '../stores';

const http = axios.create({
  baseURL: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`,
  headers: {
    'Content-Type': 'application/json',
    'AP-Client-Ver': 'v0.1',
    'AP-Client-OS': 'pc/web',
  },
});

/** 테스트를 위해 더미로 요청하고 싶은 URL을 urlCheckList에 추가해서 사용 */
const checkTestUrl = (config: any): boolean => {
  const urlCheckList: string[] = ['events/1'];

  if (!urlCheckList.length) {
    return false;
  }

  return urlCheckList.reduce(
    (acc, url) => acc || config.url?.includes(url),
    false,
  );
};

http.interceptors.request.use(
  async (config) => {
    const configureStore = initializeStore();
    const stores = configureStore.getState();
    const { common: commonStore } = stores;
    const { language } = commonStore;

    const token = await getToken();
    const isTestUrl = checkTestUrl(config);

    if (process.env.STAGE === 'dev') {
      config.headers['DUMMY'] = isTestUrl;
    }

    if (token) {
      config.headers['AP-Access-Token'] = token;
    }

    config.headers['Accept-Language'] = language.code;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (resp) => {
    const { data } = resp;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
