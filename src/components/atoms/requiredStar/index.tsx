import React, { FC } from 'react';
import styled from 'styled-components';
import { ORANGE1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const RequiredStar: FC<IProps> = ({}) => {
  return <S.container>*</S.container>;
};

RequiredStar.defaultProps = {};

const S = {
  container: styled.div`
    color: ${ORANGE1};
  `,
};

export default RequiredStar;
