import React, { FC } from 'react';
import styled from 'styled-components';

export interface IProps {
  src: string;
  alt?: string;
}

const RatioImage: FC<IProps> = (props) => {
  return <S.container {...props} />;
};

RatioImage.defaultProps = {};

const S = {
  container: styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  `,
};

export default RatioImage;
