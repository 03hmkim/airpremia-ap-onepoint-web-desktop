import React from 'react';
import styled from 'styled-components';

const U = {
  text: styled.div`
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
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
      </div>
    ),
  }
];
