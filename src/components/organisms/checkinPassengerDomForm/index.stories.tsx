import React, { FC, useState } from 'react';
import PassengerForm2 from '.';
import styled from 'styled-components';
import { passenger } from 'src/components/templates/checkin/checkinDetailInfo/dummy';

export default {
  title: 'desktop / Organisms / PassengerForm2',
  component: PassengerForm2,
  parameters: {
    componentSubtitle: 'PassengerForm2 컴포넌트 Docs',
  },
};

export const 탑승객_폼_2: FC = () => {
  const [formFilled, setFormFilled] = useState([false]);
  return (
    <S.container>
      <PassengerForm2
        idx={0}
        data={passenger}
        formFilled={formFilled}
        onChangeFilledStatus={setFormFilled}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 880px;
  `,
};
