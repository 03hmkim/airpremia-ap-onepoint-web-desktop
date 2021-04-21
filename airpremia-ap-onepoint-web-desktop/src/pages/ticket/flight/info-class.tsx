import { useState } from 'react';
import styled, { css } from 'styled-components';
import { map } from 'lodash';

import { ECabinClassType } from '@airpremia/core/stores/models/bookingSession';
import {
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import EconomyImage from 'public/images/ticket/illust_economy.png';
import PremiumEconomyImage from 'public/images/ticket/illust_premium_economy.png';

export interface IProps {}

const data = {
  [ECabinClassType.EY]: {
    title: 'ECONOMY CLASS',
    description:
      '이코노미 클래스의 새로운 기준을 제안합니다.\n충분한 간격의 좌석으로 이코노미의 새로운 좌석 기준을 경험해보세요.',
    image: EconomyImage,
    seatInfo: {
      airline: '에어프레미아 이코노미',
      seatWidth: '35 inch (약 89cm)',
    },
    luggage: '23KG 1개',
    wifi: '10MB',
  },

  [ECabinClassType.PE]: {
    title: 'PREMIUM ECONOMY CLASS',
    description:
      '합리적인 가격으로 편안함을 누릴 수 있는 프리미엄 이코노미\n클래스를 소개합니다.',
    image: PremiumEconomyImage,
    seatInfo: {
      airline: '에어프레미아 프리미엄 이코노미',
      seatWidth: '42 inch (약 106m)',
    },
    luggage: '23KG 2개',
    wifi: '500MB',
  },
};

function InfoClassGrade() {
  const { EY, PE } = ECabinClassType;
  const [cabinClass, setCabinClass] = useState(EY);

  return (
    <S.container>
      <S.title>
        <h2 className="font-bold">클래스안내</h2>
      </S.title>
      <S.classNavigatorWrapper
        className="font-bold"
        cabinClass={cabinClass}
      >
        <button onClick={() => setCabinClass(EY)}>
          이코노미
        </button>
        <button onClick={() => setCabinClass(PE)}>
          프리미엄 이코노미
        </button>
      </S.classNavigatorWrapper>

      <S.body>
        <div className="main-info">
          <div>
            <h3 className="font-premia-bold">
              {data[cabinClass].title}
            </h3>
            {map(
              data[cabinClass].description.split('\n'),
              (item, i) => (
                <p key={`cabinClassDesc${i.toString()}`}>
                  {item}
                </p>
              ),
            )}
          </div>
          <div>
            <img src={data[cabinClass].image} alt="" />
          </div>
        </div>
        <div className="sub-info">
          <div className="seat">
            <div className="left">
              <h4>좌석 정보</h4>
            </div>
            <div className="table">
              <div className="title-row">
                <p className="font-bold column1">항공사</p>
                <p className="font-bold column2">
                  좌석 길이
                </p>
              </div>
              <div className="body-row">
                <p className="column1">
                  <em>
                    {data[cabinClass].seatInfo.airline}
                  </em>
                </p>
                <p className="column2">
                  <em>
                    {data[cabinClass].seatInfo.seatWidth}
                  </em>
                </p>
              </div>
              <div className="body-row">
                <p className="column1">대형 항공사(FSC)</p>
                <p className="column2">
                  31-32 inch (약 78-91cm)
                </p>
              </div>
              <div className="body-row">
                <p className="column1">저가 항공사(LCC)</p>
                <p className="column2">
                  29-31 inch (약 73-78cm)
                </p>
              </div>
            </div>
          </div>
          <div className="luggage">
            <div className="left">
              <h4>위탁 수하물 정보</h4>
            </div>
            <div className="right">
              <p>
                위탁 수하물은{' '}
                <em>{data[cabinClass].luggage}</em>까지
                무료로 제공합니다. 단, 각 수하물은 최대
                158cm (가로, 세로, 높이의 합) 로 제한됩니다.
              </p>
            </div>
          </div>
          <div className="wifi">
            <div className="left">
              <h4>기내 와이파이 정보</h4>
            </div>
            <div className="right">
              <p>
                에어프레미아 앱에서 구매 시 기내 와이파이
                <em>{data[cabinClass].wifi}</em>를 무료로
                제공해 드립니다. 기내에서도 편리하게
                인터넷을 사용해보세요.
              </p>
              <p>
                <em>*</em> 미주 노선의 경우 23KG 2개 무료
                제공
              </p>
            </div>
          </div>
          <div className="service">
            <div className="left">
              <h4>서비스 용품</h4>
            </div>
            <div className="right">
              <p>
                안대, 귀마개, 필기도구, 간단한 의약품이 상시
                준비되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </S.body>
    </S.container>
  );
}

InfoClassGrade.defaultProps = {};

const S = {
  container: styled.div`
    width: 1360px;
    padding: 0 80px;
    margin: 60px auto 160px;

    h2 {
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.72px;
    }
  `,

  title: styled.div`
    margin-bottom: 100px;
  `,

  classNavigatorWrapper: styled.div<{
    cabinClass: ECabinClassType;
  }>`
    height: 32px;
    font-size: 15px;
    line-height: 40px;
    letter-spacing: -0.3px;
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    button {
      margin-right: 20px;
    }

    ${({ cabinClass }) => {
      if (cabinClass === ECabinClassType.EY) {
        return css`
          & > button:nth-child(1) {
            color: ${ORANGE1};
            text-decoration: underline;
          }
        `;
      }
      return css`
        & > button:nth-child(2) {
          color: ${ORANGE1};
          text-decoration: underline;
        }
      `;
    }}
  `,

  body: styled.div`
    .main-info {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      & > div:first-of-type {
        margin-top: 43px;
      }
      h3 {
        margin-top: 10px;
        font-size: 30px;
        line-height: 28px;
        letter-spacing: -0.6px;
        margin-bottom: 20px;
      }

      p {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.28px;
      }

      img {
        width: 360px;
        height: 232px;
        object-fit: contain;
      }
    }

    .sub-info {
      border-top: solid 2px ${DARK_GRAY1};
      border-bottom: solid 2px ${DARK_GRAY1};
      padding: 80px 0 64px;
      margin-top: 53px;

      em {
        color: ${ORANGE1};
      }

      .left {
        width: 320px;
        font-weight: 600;

        h4 {
          font-size: 22px;
          line-height: 38px;
          letter-spacing: -0.44px;
        }
      }

      .right {
        margin-top: 10px;
      }

      & > div {
        display: flex;
        /* align-items: center; */
        &:not(:last-of-type) {
          margin-bottom: 121px;
        }
      }

      .table {
        width: calc(100% - 320px);
        & > div {
          display: flex;
          align-items: center;
        }

        .column1 {
          width: 359px;
          margin-right: 100px;
        }
        .column2 {
          width: 421px;
        }
      }

      .title-row {
        font-size: 14px;
        line-height: 26px;
        letter-spacing: -0.28px;
        padding-bottom: 15px;
        margin-bottom: 30px;
        border-bottom: solid 1px ${LIGHT_GRAY6};
      }

      .body-row {
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .wifi .right p {
      margin-bottom: 15px;
    }
  `,
};

export default InfoClassGrade;
