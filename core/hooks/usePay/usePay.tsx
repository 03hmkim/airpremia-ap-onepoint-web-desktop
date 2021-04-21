import { useCallback } from 'react';
import { snakeCase } from 'lodash';
// import { flow, get } from 'lodash/fp';
import queryString from 'query-string';
import {
  getApgQueries,
  guid,
} from '@airpremia/core/lib/util';
import {
  useLoading,
  // useBooking,
} from '@airpremia/core/hooks';
import { 
  postBookingSessionCommitWithApgPayment,
  postBookingChangeSessionCommitWithApgPayment,
} from '@airpremia/core/api/booking/session';
import { IApgParameter } from './types';
import {
  apgAppId,
  apgCallbackParameters,
  apgFallbackParameters,
} from './dataset';

const popupOptions = 'width=390,height=460';

const usePay = () => {
  const { showLoading, hideLoading } = useLoading();
  // const { onLoadCommitWithApgPayment } = useBooking();

  const onPaySuccess = useCallback(
    // @next-router 이슈 router 각 플렛폼에 맞게 던져주기
    async (payload: any, isChangeSellProcess: boolean, router = { push: () => {} }) => {
      try {
        let res;
        if(isChangeSellProcess) {
          res = await postBookingChangeSessionCommitWithApgPayment(
            { infos: payload },
          );  
        } else {
          res = await postBookingSessionCommitWithApgPayment(
            { infos: payload },
          );  
        }

        // const recordLocator = flow(
        //   get('data.recordLocator'),
        // )(res);

        if (res.message != null) {
          if (
            res.message == 'nsk:Booking:NoBookingInState'
          ) {
            alert(
              '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
            );
          }
          window.location.replace('/');
        } else {

          const {
            recordLocator,
            firstName,
            lastName,
          } = res.data;

          await router.push(
            `/ticket/pay/complete?recordLocator=${recordLocator}&firstName=${firstName}&lastName=${lastName}`,
          );
        }

        /*
        // smartpor.mhh CommitWithApgPayment async 로 변경
        const res = await onLoadCommitWithApgPayment({
          infos: payload,
        });
        console.log('usePay res => ', res);
        await router.push('/ticket/pay/complete');
        hideLoading();
        */

      } catch (e) {
        console.error('onPaySuccess', e);
        const message = e.response.data.message;
        if (message == 'nsk:Booking:NoBookingInState') {
          alert(
            '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
          );
          window.location.replace('/');
        } else {
          alert(e.response.data.message);
          window.location.replace('/');
        }
      }
    },
    [],
  );

  const _getAPGUrl = useCallback(
    ({
      methodType,
      cardCode,
      queries,
    }: {
      methodType: string;
      cardCode: string;
      queries: string;
    }) => {
      const apgUrl = `${process.env.PROTOCOL}://${process.env.APG_HOST}/v1/apps/${apgAppId}/authentications`;
      // const apgUrl = `http://localhost:9080/payment/v1/apps/${apgAppId}/authentications`; 
      // const apgUrl = `http://localhost:9085/v1/apps/${apgAppId}/authentications`; 
      switch (methodType) {
        case 'credit':
          return `${apgUrl}/cards/${cardCode}?${queries}`;
        case 'creditNational':
          return `${apgUrl}/eximbay/cards/${cardCode}?${queries}`; //해외카드 추가
        case 'bank':
          return false; //`${apgUrl}/bankpay?${queries}`;
        case 'kakaoPay':
          //return false; //`${apgUrl}/kakaopay/?${queries}`;  //임시로 막음
          return `${apgUrl}/kakaopay/?${queries}`;
        default:
          return false;
      }
    },
    [],
  );

  const openPopup = useCallback(
    async ({
      methodType,
      cardCode,
      title,
      currency,
      totalAmount,
      taxAmount,
      productName,
      installments,
      buyer,
      email,
    }: IApgParameter) => {
      const externalKey = guid();
      const callbackUri = `${location.origin}/ticket/pay/redirect`;
      const callbackQuery = getApgQueries(
        apgCallbackParameters,
      );
      const fallbackQuery = getApgQueries(
        apgFallbackParameters,
      );
      const callbackUrl = encodeURIComponent(
        `${callbackUri}?${callbackQuery}`,
      );
      const fallbackUrl = encodeURIComponent(
        `${callbackUri}?${fallbackQuery}`,
      );
      const queries = {
        title,
        currency,
        [snakeCase('totalAmount')]: totalAmount,
        [snakeCase('taxAmount')]: taxAmount,
        [snakeCase('productName')]: productName,
        installments: installments,
        [snakeCase('externalKey')]: externalKey,
        [snakeCase('callbackUrl')]: callbackUrl,
        [snakeCase('failUrl')]: fallbackUrl,
        international: false, // TODO backend mapping
        buyer: buyer,
        email: email,
      };

      const apgUrl = _getAPGUrl({
        methodType,
        cardCode,
        queries: queryString.stringify(queries),
      });

      if (!apgUrl) return false;

      await showLoading();
      // showLoading().then(() => {
      const myWindow = window.open(
        apgUrl,
        '',
        popupOptions,
      );
      // });
      const timer = setInterval(() => { 
        if (myWindow?.closed) {
          clearInterval(timer);
          window.postMessage(
            { message: 'windowClosed' },
            window.location.href,
          );
        }
      }, 1000);
    },
    [],
  );

  return {
    onPaySuccess,
    openPopup,
    showLoading,
    hideLoading,
  };
};

export default usePay;
