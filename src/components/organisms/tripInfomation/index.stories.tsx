import React, { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import TripInfomation from '.';
import { NewModal, PopupTitle } from 'src/components';
import { LIGHT_GRAY8 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Organisms / TripInfomation',
  component: TripInfomation,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip Infomation',
  },
};

const legs = [
  {
    arrivalStation: 'ICN',
    arrivalTime: '2020-07-24T18:20:00',
    departureStation: 'HAN',
    departureTime: '2020-07-24T12:10:00',
    equipmentType: '789',
    flightTimeInMinute: 250,
    identifier: 'AP1234',
    carrierCodeText: '에어프레미아',
    isTransferAtNext: true,
    termToNextLegInMinute: 360,
  },
];

export const 여정정보팝업예시: FC = () => {
  return (
    <NewModal
      title={
        <S.header>
          <PopupTitle>여정 정보</PopupTitle>
          <S.description>
            모든 시간은 현지 시간 기준입니다.
          </S.description>
        </S.header>
      }
      body={<TripInfomation legs={legs} />}
    />
  );
};

export const 여정정보: FC = () => {
  return <TripInfomation legs={legs} />;
};

const S = {
  header: styled.div``,

  description: styled.div`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY8};
  `,
};
