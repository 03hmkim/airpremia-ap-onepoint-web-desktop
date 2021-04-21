import React from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

const U = {
  wrap: styled.div`
    margin-top: 60px;
    &:first-child {
      margin-top: 0;
    }
  `,
  title: styled.p`
    margin-bottom: 20px;
    color: ${DARK_GRAY1};
    font-size: 18px;
    font-weight: bold;
    line-height: 1.9;
    letter-spacing: -0.4px;
  `,
  text: styled.div`
    margin-bottom: 30px;
    color: ${LIGHT_GRAY8};
    font-size: 14px;
    line-height: 1.9;
    letter-spacing: -0.3px;
  `,
  content: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    ul {
      li {
        padding: 30px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
  `
}


//★국내선 알림 추가
export const CustomerAlert = [
  {
    title: '국내선 알림',
    text: (
      <div>
        <U.text>
          인터넷 국내선 항공권 구입시에는 예약과 동시에 구매하셔야합니다.
          구매하지 않으시면 예약이 완료되지 않습니다.
        </U.text>
        <U.text className='changeColor'>

        </U.text>
      </div>
    ),
  }
];
