import { useState, Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { map } from 'lodash';

import { Arrow } from 'src/components';
import { BannerDarksite } from 'src/components';
import { useAccident } from '@airpremia/core/hooks';
import {
  ORANGE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { EPosition } from 'src/components/atoms/arrow';
import bg from 'public/images/accident/bg-promo.png';

interface IProps {}

const data = {
  // 서버에서 정상 데이터 내려오면 수정해야함 현재는 api call해서 데이터 받아온것 까지 구현해뒀음
  type: 'notice',
  title: 'AP123편\n사고 경과 안내',
  subTitle: '심려를 끼쳐드려 죄송합니다.',
};

const Topbanner: NextPage<IProps> = () => {
  const { accidentStore } = useAccident();
  const { UP, DOWN } = EPosition;

  const [isShow, setShow] = useState(false);

  const onToggle = () => {
    sessionStorage.setItem(
      'isOpen',
      JSON.stringify(!isShow),
    );
    setShow(!isShow);
  };

  const onBannerStatusChange = () => {
    const _status = sessionStorage.getItem('isOpen');
    const status = _status ? JSON.parse(_status) : true;
    setShow(status);
  };

  const title = map(data.title.split('\n'), (item, i) => (
    <Fragment key={`title${i.toString()}`}>
      {item}
      {isShow ? <br /> : ' '}
    </Fragment>
  ));

  const titleTextContent = {
    children: <Fragment>{title}</Fragment>,
    fontWeight: 'bold',
    fontSize: '32px',
    letterSpacing: '-0.64px',
    lineHeight: '44px',
    textAlign: 'center',
  };
  const subtitleTextContent = {
    children: '심려를 끼쳐드려 죄송합니다.',
    fontSize: '16px',
    opacity: '0.9',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '-0.32px',
  };

  useEffect(() => {
    onBannerStatusChange();
  }, []);
  const [list] = accidentStore.accidentList;

  return (
    <S.container isShow={isShow}>
      <S.wrapper className="wrapper">
        <Link href="/dark/[id]" as={`/dark/${list?.id}`}>
          <a>
            <BannerDarksite
              titleTextContent={titleTextContent}
              subtitleTextContent={subtitleTextContent}
            />
          </a>
        </Link>
        <a href="/[id]" />
        <S.arrowWrapper>
          <Arrow
            color={WHITE1}
            position={isShow ? UP : DOWN}
            onClick={onToggle}
          />
        </S.arrowWrapper>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div<{ isShow: boolean }>`
    position: relative;
    ${({ isShow }) => {
      if (!isShow) {
        return css`
          .wrapper {
            transition: height 0.3s ease-in;
            height: 100px;
            .banner_darksite--badge {
              display: none;
            }
          }
          .banner_darksite--title-text-content {
            h1 {
              font-size: 18px;
              font-weight: 600;
            }
          }
          .banner_darksite--subtitle-text-content {
            display: none;
          }
        `;
      }
    }}
  `,
  wrapper: styled.div`
    transition: height 0.3s ease-in-out;
    height: 500px;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    /* min-width: 1440px; */
    cursor: pointer;

    & > a:first-of-type {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1,
    p {
      color: ${WHITE1};
    }

    p {
      font-size: 16px;
    }

    .type {
      width: 60px;
      height: 24px;
      border-radius: 12px;
      background-color: ${ORANGE1};
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
      text-align: center;
      margin-bottom: 13px;
    }

    .sub-title {
      font-weight: 600;
    }
  `,

  arrowWrapper: styled.div`
    position: absolute;
    bottom: 5px;
    left: calc(50% - 13px);
  `,
};

export default Topbanner;
