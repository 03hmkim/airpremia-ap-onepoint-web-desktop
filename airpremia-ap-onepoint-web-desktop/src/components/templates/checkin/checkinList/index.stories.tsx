import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CheckinListTemplate from '.';
import { OnlineCheckinCard } from 'src/components';
import { dummyOnlineCheckinCard } from 'src/components/organisms/onlineCheckinCard/dummy';
import styled from 'styled-components';

export default {
  title: 'desktop / Templates / CheckinListTemplate',
  component: CheckinListTemplate,
  decorators: [withKnobs],
};

export const 온라인체크인신청_리스트있음: FC = () => {
  return (
    <CheckinListTemplate
      title="온라인 체크인 신청"
      description="온라인 체크인을 신청할 여정을 선택해주세요."
      onlineCheckinCard={dummyOnlineCheckinCard.map(
        (item, i) => (
          <S.wrapper key={i.toString()}>
            <OnlineCheckinCard {...item} />
          </S.wrapper>
        ),
      )}
    />
  );
};

export const 온라인체크인신청_리스트없음: FC = () => {
  return (
    <CheckinListTemplate
      title="온라인 체크인 신청"
      onlineCheckinCard={dummyOnlineCheckinCard.map(
        (item, i) => (
          <S.wrapper key={i.toString()}>
            <OnlineCheckinCard {...item} />
          </S.wrapper>
        ),
      )}
    />
  );
};

const S = {
  wrapper: styled.div`
    margin-bottom: 10px;
  `,
};
