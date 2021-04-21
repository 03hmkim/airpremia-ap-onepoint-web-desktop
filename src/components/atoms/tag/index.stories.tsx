import React, { FC } from 'react';
import Tag from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / Tag',
  component: Tag,
  parameters: {
    componentSubtitle: 'Tag 컴포넌트 Docs',
  },
};

export const 태그: FC = () => {
  return (
    <S.container>
      <Tag>환불불가</Tag>
    </S.container>
  );
};

const S = {
  container: styled.div``,
};
