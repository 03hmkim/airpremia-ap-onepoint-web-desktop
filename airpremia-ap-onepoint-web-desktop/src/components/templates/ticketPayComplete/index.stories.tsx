import { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import TicketPayComplete from '.';

export default {
  title: 'desktop / Templates / TicketPayComplete',
  component: TicketPayComplete,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'TicketPayComplete 컴포넌트 Docs',
  },
};

export const 결제화면: FC = () => {
  return (
    <S.container>
      <TicketPayComplete />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 1200px;
    margin: 0 auto;
  `,
};
