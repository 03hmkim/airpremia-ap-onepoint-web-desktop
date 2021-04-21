import React, { FC } from 'react';
import styled from 'styled-components';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const VersionPopup: FC<IProps> = ({}) => {
  return (
    <S.container className="font-premia-bold">
      {process.env.STAGE} {process.env.VERSION}
    </S.container>
  );
};

VersionPopup.defaultProps = {};

const S = {
  container: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10000;
  `,
};

export default VersionPopup;
