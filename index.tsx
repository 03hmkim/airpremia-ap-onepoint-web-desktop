import { NextPage } from 'next';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import styled from 'styled-components';
import {
  Hero,
  EventNavigation,
  Home,
  NoticeNavigation,
} from 'src/components';

import {
  useAccident,
  useScroll,
} from '@airpremia/core/hooks';
import { dummyNoticeNavigation } from 'src/components/organisms/noticeNavigation/dummy';
// import { getInfoAccidentsStatus } from '@airpremia/core/api';

interface IProps {
  isDarksite?: boolean;
}

const Index: NextPage<IProps> = ({
  isDarksite,
}: IProps) => {
  const {
    onLoadAccidentOpenStatus,
    onAccidentLoad,
  } = useAccident();
  const { upScroll } = useScroll();

  const onLoadDarkSiteList = () => {
    onAccidentLoad();
  };

  useEffect(() => {
    smoothscroll.polyfill();

    onLoadAccidentOpenStatus();
    upScroll();
  }, []);

  useEffect(() => {
    if (isDarksite) {
      onLoadDarkSiteList();
    }
  }, []);

  return (
    <S.container>
      <Home
        hero={<Hero />}
        eventNavigation={<EventNavigation />}
        noticeNavigation={
          <NoticeNavigation {...dummyNoticeNavigation} />
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding-top: 50px;

    @media only screen and (max-width: 1059px) {
      padding-top: 40px;
    }

    @media only screen and (max-width: 767px) {
      padding-top: 10px;
    }
  `,
};

export default Index;
