import { NextPage } from 'next';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import { useUrl } from 'src/hooks';

interface IProps {}

function sendParentPostMessage(data: any) {
  if (!window.opener) return;
  try {
    window.opener.postMessage(
      data,
      window.opener.location.href,
    );
    window.close();
  } catch {
    window.close();
  }
}

const Index: NextPage<IProps> = () => {
  const { queries } = useUrl();

  useEffect(() => {
    sendParentPostMessage(queries);
  }, []);

  return <S.container />;
};

const S = {
  container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    background-color: ${WHITE1};
  `,
};

export default Index;
