import { Plugins } from '@capacitor/core';

const { Storage, Device } = Plugins;

const getDeviceInfo = async () => await Device.getInfo();

const clearStorage = async () => await Storage.clear();

export const initToken = async () => {
  const { platform } = await getDeviceInfo();

  if (platform === 'web') {
    localStorage.clear();
    sessionStorage.clear();
    return;
  } else {
    return await clearStorage();
  }
};

const checkClientSide = (): boolean => {
  return (
    typeof localStorage !== 'undefined' &&
    typeof sessionStorage !== 'undefined'
  );
};

const deleteKey = (
  obj: { [propName: string]: any } | undefined,
  ...args: any[]
) => {
  if (!obj) {
    return {};
  }
  const _obj = { ...obj };
  args.forEach((item) => delete _obj[item]);

  return _obj;
};

const getOriginStorageData = () => {
  if (checkClientSide()) {
    const _localStorage = { ...localStorage };
    const _sessionStorage = { ...sessionStorage };

    return {
      ..._localStorage,
      ..._sessionStorage,
    };
  }
};

/** mobile token setup start */
export const setObjectItem = async (
  key: string,
  value: { [x: string]: any },
) => {
  await Storage.set({
    key,
    value: JSON.stringify(value),
  });
};

export const getObjectItem = async (key: string) => {
  const obj = await Storage.get({ key });
  return obj.value ? JSON.parse(obj.value) : '';
};

export const setItem = async (
  key: string,
  value: string,
) => {
  await Storage.set({
    key,
    value,
  });
};

export const getItem = async (key: string) => {
  const { value } = await Storage.get({ key });
  return value;
};

export const removeItem = async (key: string) =>
  await Storage.remove({ key });

export const getStorageKeys = async () =>
  await Storage.keys();

/** mobile token setup end */

const setTokenWeb = async (
  accessToken: string,
  email?: string,
  isStay?: boolean,
) => {
  const original = deleteKey(
    getOriginStorageData(),
    'accessToken',
    'holdingOnSession',
  );
  const isOpen = original.isOpen || false;
  // await initToken();

  if (isStay) {
    localStorage.setItem('accessToken', accessToken);
    if (email) {
      localStorage.setItem('email', email);
    }
  } else {
    if (email) {
      sessionStorage.setItem('email', email);
    }
    sessionStorage.setItem('accessToken', accessToken);
  }

  sessionStorage.setItem('holdingOnSession', 'true');
  sessionStorage.setItem('isOpen', isOpen);
};

const setTokenMobile = async (
  accessToken: string,
  email?: string,
) => {
  email && (await setItem('email', email));
  await setItem('accessToken', accessToken);
};

export const setToken = async (
  accessToken: string,
  email?: string,
  isStay?: boolean,
) => {
  const { platform } = await getDeviceInfo();

  if (platform === 'web') {
    return setTokenWeb(accessToken, email, isStay);
  }
  return setTokenMobile(accessToken, email);
};

export const getToken = async () => {
  const { platform } = await getDeviceInfo();

  if (platform === 'web') {
    if (checkClientSide()) {
      return await (localStorage.getItem('accessToken') ||
        sessionStorage.getItem('accessToken'));
    }
    return null;
  } else {
    return await getItem('accessToken');
  }
};

const _checkLoginWeb = () => {
  let longToken: string | null = '';
  let shortToken: string | null = '';
  let longEmail: string | null = '';
  let shortEmail: string | null = '';
  if (checkClientSide() && localStorage && sessionStorage) {
    longToken = localStorage.getItem('accessToken');
    shortToken = sessionStorage.getItem('accessToken');
    longEmail = localStorage.getItem('email');
    shortEmail = sessionStorage.getItem('email');
  }

  return (
    (longEmail || shortEmail) && (longToken || shortToken)
  );
};

const _checkLoginMobile = async () => {
  const longToken = await getItem('accessToken');
  const longEmail = await getItem('email');

  return longEmail || longToken;
};

export const checkLogin = async () => {
  const { platform } = await getDeviceInfo();

  if (platform === 'web') {
    return _checkLoginWeb();
  }
  return _checkLoginMobile();
};

export const getSavedUserEmail = (): string => {
  let email;
  if (checkClientSide()) {
    email =
      localStorage.getItem('email') ||
      sessionStorage.getItem('email');
  }
  return email || '';
};
