import React from 'react';
import styled from 'styled-components';
import {
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

const U = {
  text: styled.div`
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: ${ORANGE1};
      font-weight: 400; 
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
          2017년 7월 1일부터 국내선 신분증 미소지 승객은 항공기 탑승이 불가하오니, <strong>유효 신분증</strong>을 확인하시어 반드시 여행 시 지참해 주시기 바랍니다.
          <br /><br />
          국내선 이용 시, 사진이 부착된 신분증 미소지 승객 및 탑승권 성명과 신분증 성명의 언어가 다른 경우, 체크인 및 보안검색장 입장이 불가합니다.
          <br /><br />
          <strong>타인 신분증을 부정 사용하거나 도용 시 관계 법령에 의해 처벌 받을 수 있습니다.</strong>
        </U.text>
      </div>
    ),
  }
];
