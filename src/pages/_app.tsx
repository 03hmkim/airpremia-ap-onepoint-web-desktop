import { useEffect, useState } from 'react';
import { NextComponentType } from 'next';
import {
  AppContext,
  AppInitialProps,
  AppProps,
} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import configureStore from '@airpremia/core/stores';
import {
  Footer,
  Modal,
  ToastPopup,
  Loading,
} from 'src/components';
import Head from 'next/head';
import { useModal } from 'src/hooks';
import {
  useAuth,
  useBooking,
  useLoading,
} from '@airpremia/core/hooks';
import HeaderGroup from 'src/components/organisms/headerGroup';
import {
  checkLogin,
  initToken,
  getToken,
} from '@airpremia/core/lib/storage';
import { EDefaultModalTable } from '@airpremia/core/stores/models/ui';
import {
  VersionPopup,
  // FeedbackButton,
} from 'src/components';
import { getUserInformation } from '@airpremia/core/api/user/me';
import styled from 'styled-components';

const AppMiddleWare = ({ Component, pageProps }: any) => {
  const [isInit, setInit] = useState(false);
  const {
    authStore,
    onGuestLogin,
    handleLoadUserInfoData,
  } = useAuth();
  const {
    bookingSessionStore,
    onLoadPrimaryData,
    resetBookingSession, //smartport.mhh bookingSession reset
  } = useBooking();
  const { isPrimaryDataSuccess } = bookingSessionStore;
  const { onShowModal } = useModal();
  const { hasToken } = authStore;
  const { isLoading } = useLoading();

  const checkValidToken = async () => {
    try {
      await getUserInformation();
      setInit(true);
      onShowModal({
        options: {
          target: EDefaultModalTable.SAVED_LOGIN_INFO,
        },
      });
    } catch (e) {
      if (e) {
        await initToken();
        onGuestLogin();
        alert(e.response.data.message);
      }
    }
  };

  const onClearToken = async () => {
    await initToken();
    onGuestLogin();
  };

  const _onLoadPrimaryData = async () => {
    if (
      (!isInit && hasToken) ||
      (!isInit && (await checkLogin()))
    ) {
      onLoadPrimaryData();
    }
  };

  const initLoad = async () => {
    // 로그인 정보 유무 확인
    if (await checkLogin()) {
      const isConnected = sessionStorage.getItem(
        'isConnected',
      );

      // 라우팅해서 오지 않음, 새로고침이나 처음 진입시
      if (!authStore.isLogIn) {
        if (Boolean(isConnected)) {
          // 사용자 로그인 정보 있으며, 브라우저는 꺼지지 않은 상태
          handleLoadUserInfoData();
          // onLoginSuccess();
        } else {
          // 사용자 로그인 정보 있음 (브라우저 session 초기화 된 상태)
          await checkValidToken();
        }
      }
    } else {
      if (!(await getToken())) {
        // Guest Token을 가지고 있지 않은경우
        await initToken();
        onGuestLogin();
      } else {
        // Guest Token을 가지고 있는 경우
        onLoadPrimaryData();
      }
    }
  };

  useEffect(() => {
    initLoad();
  }, []);

  useEffect(() => {
    _onLoadPrimaryData();
  }, [isInit, hasToken]);

  useEffect(() => {
    if (isPrimaryDataSuccess) {
      setTimeout(() => setInit(true), 0);
    }
  }, [isPrimaryDataSuccess]);

  // 정확한 테스트가 될때까진 주석 처리.
  // if (!isInit && !isPrimaryDataSuccess) {
  //   return <div>Setup Token....</div>;
  // }

  if (!isInit) {
    return <Loading />;
  }

  return (
    <div>
      <div
        style={{
          minWidth: '320px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Head>
            <title>AirPremia Onepoint</title>
          </Head>
          <HeaderGroup resetData={resetBookingSession} />
          <ToastPopup />
          <C.contWrap>
            <Component {...pageProps} />
          </C.contWrap>
        </div>
        <Footer />
      </div>
      <Modal onClearToken={onClearToken} />
      <VersionPopup />
      {/* <FeedbackButton to="https://beta-ap-portal2.premia.kr/board/post_list?board=1" /> */}
      {isLoading && <Loading />}
    </div>
  );
};

const MyApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps
> = ({ store, ...props }: any) => {
  return (
    <Provider store={store}>
      <AppMiddleWare {...props} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

const C = {
  contWrap: styled.div`
    &>div>div{
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 160px;
      padding-left: 25px;
      padding-right: 25px;

      &.mgReset{
        margin: 0;
        padding: 0;
        max-width: unset;
      }
    }
    
    @media only screen and (max-width: 1059px) {
      &>div>div {
        margin-bottom: 50px;
      }
    }
  `,
};

export default withRedux(configureStore)(MyApp);
