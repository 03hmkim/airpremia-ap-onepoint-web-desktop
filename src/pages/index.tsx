import { NextPage } from 'next';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import styled from 'styled-components';
import {
  Hero,
  EventNavigation,
  Home,
  NoticeNavigation,
  PromotionalCardEvent,
} from 'src/components';
import randomIMG from './randomImage';

import {
  useAccident,
  useScroll,
} from '@airpremia/core/hooks';
import { dummyNoticeNavigation } from 'src/components/organisms/noticeNavigation/dummy';
// import { getInfoAccidentsStatus } from '@airpremia/core/api';

interface IProps {
  isDarksite?: boolean;
}

const randomBG = randomIMG();

const randomEvent = PromotionalCardEvent({});

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
      <div className="mainWrap">
        <Home
          hero={<Hero />}
          eventNavigation={<EventNavigation />}
          noticeNavigation={
            <NoticeNavigation {...dummyNoticeNavigation} />
          }
        />
        <div className="eventWrap">
          {randomEvent}
        </div>
        <div className="mainBg" />
      </div>
    </S.container>
  );
};

const S = {
  container: styled.div`

    .mainWrap {
      max-width: 100% !important;
      padding: 80px 0 0 !important;
      margin-top: 0 !important;
      position: relative;
    }

    .mainBg {
      width: 100%;
      height: 800px;
      position: absolute;
      top: 80px;
      left: 0;
      background-image: url(${randomBG});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
    }

    .eventWrap {
      position: absolute;
      top: 60px;
      right: 80px;
    }

    @media only screen and (max-width: 1440px) {
      .mainBg {
        height: 600px;
      }
    }

    @media only screen and (max-width: 1059px) {
      .mainWrap {
        padding-top: 40px !important;
      }

      .mainBg {
        top: 40px;
      }

      .eventWrap {
        display: none;
      }
    }

    @media only screen and (max-width: 767px) {
      .mainBg {
        top: 10px;
      }

      .mainWrap {
        padding-top: 10px !important;
      }
    }
    @media only screen and (max-width: 599px) {
      .mainBg {
        height: 470px;
      }
    }
  `,
};

export default Index;
