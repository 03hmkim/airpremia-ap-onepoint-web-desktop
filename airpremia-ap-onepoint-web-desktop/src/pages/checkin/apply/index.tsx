import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

interface IProps {}

const Index: NextPage<IProps> = () => {
  return (
    <S.container>
      <div>checkin apply</div>
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default Index;
