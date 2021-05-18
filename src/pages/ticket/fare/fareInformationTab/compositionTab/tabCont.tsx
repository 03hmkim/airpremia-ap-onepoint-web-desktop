import { useState } from 'react';
import styled, { css } from 'styled-components';
import { map } from 'lodash';
import { ECabinClassType } from '@airpremia/core/stores/models/bookingSession';
import {
  ORANGE2,
  DARK_GRAY1,
  LIGHT_GRAY6,
  DARK_BLUE1,
  WHITE1,
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
      '합리적인 가격으로 편안함을 누릴 수 있는 프리미엄 이코노미 클래스를 소개합니다.',
    image: PremiumEconomyImage,
    seatInfo: {
      airline: '에어프레미아 프리미엄 이코노미',
      seatWidth: '42 inch (약 106m)',
    },
    luggage: '23KG 2개',
    wifi: '500MB',
  },
};

function TabContentComposition() {
  const { EY, PE } = ECabinClassType;
  const [cabinClass, setCabinClass] = useState(EY);

  return (
    <S.container>
      <S.wrapper>
        <S.classNavigatorWrapper
          className="font-bold"
          cabinClass={cabinClass}
        >
          <button onClick={() => setCabinClass(EY)}>
            이코노미 35"
          </button>
          <button onClick={() => setCabinClass(PE)}>
            프레미아 42"
          </button>
        </S.classNavigatorWrapper>

        <S.body>
          <div className="main-info">
            <div className="info-cont">
              <h3>
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
            <div className="info-pic">
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
            {/* <div className="luggage">
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
            </div> */}
            <div className="wifi">
              <div className="left">
                <h4>기내 와이파이 정보</h4>
              </div>
              <div className="right">
                <p>
                  기내 와이파이 
                  <em>{data[cabinClass].wifi}</em>를 무료로
                  제공해 드립니다. 기내에서도 편리하게
                  인터넷을 사용해보세요.
                </p>
                <p>
                  <em>*</em> 국제선 노선에 적용
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
      </S.wrapper>
    </S.container>
  );
}

TabContentComposition.defaultProps = {};

const S = {
  container: styled.div``,

  wrapper: styled.div`
  `,

  title: styled.div`
    margin-bottom: 100px;

    @media only screen and (max-width: 1059px) { 
      margin-bottom: 80px;
    }

    @media only screen and (max-width: 767px) { 
      margin-bottom: 60px;
    }
  `,

  classNavigatorWrapper: styled.div<{
    cabinClass: ECabinClassType;
  }>`
    display: flex;
    align-items: center;

    button {
      padding: 0 17px;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: -0.26px;
    }

    @media only screen and (max-width: 767px) { 
      button {
        font-size: 14px;
        line-height: 18px;
        padding: 4px 17px;
      }
    }

    ${({ cabinClass }) => {
      if (cabinClass === ECabinClassType.EY) {
        return css`
          & > button:nth-child(1) {
            position: relative;
            background-color: ${DARK_BLUE1};
            border-radius: 60px;
            color: ${WHITE1};
          }
        `;
      }
      return css`
        & > button:nth-child(2) {
          position: relative;
          background-color: ${DARK_BLUE1};
          border-radius: 60px;
          color: ${WHITE1};
        }
      `;
    }}
  `,

  body: styled.div`
    .main-info {
      display: flex;
      justify-content: space-between;
      
      & > div:first-of-type {
        margin-top: 43px;
      }

      h3 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-family: 'premia';
        font-weight: 700;
        font-size: 40px;
        line-height: 1.8em;
        letter-spacing: -0.6px;
      }

      p {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1.8em;
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
      margin-top: 53px;

      & > div {
        padding: 60px 0;
        display: flex;
        
        &:not(:last-of-type) {
          border-bottom: solid 1px ${LIGHT_GRAY6};
        }
      }

      em {
        color: ${ORANGE2};
      }

      .left {
        width: 25%;
        font-weight: 600;

        h4 {
          font-size: 22px;
          line-height: 1.8em;
          letter-spacing: -0.44px;
        }
      }

      .right {
        width: 75%;
        margin-top: 4px;
        font-size: 18px;
        line-height: 1.8em;
      }

      .table {
        width: 75%;

        & > div {
          display: flex;
        }

        .column1 {
          width: calc(50% - 10px);
          margin-right: 20px;
        }
        .column2 {
          width: calc(50% - 10px);
        }
      }

      .title-row {
        font-size: 18px;
        line-height: 1.8em;
        letter-spacing: -0.28px;
        padding-bottom: 15px;
        margin-bottom: 30px;
        border-bottom: solid 1px ${LIGHT_GRAY6};
      }

      .body-row {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 600;
      }
    }


    @media only screen and (max-width: 767px) { 
      .main-info{
        display:block;

        h3 {
          font-size: 26px;
        }

        p {
          margin-bottom: 0;
          font-size: 14px;
        }

        .info-pic{
          width: 100%;
          text-align: center;
          margin-top: 10px;

          img{
            max-width: 100%;
          }
        }
      }
      .sub-info {
        margin-top: 0px;

        & > div {
          padding: 25px 0;
          display: block;
        } 

        .table {
          width: 100%;

          & > div {
            padding-top: 25px;
            margin-bottom: 0;
            display: flex;
          }
        }

        .title-row {
          padding: 25px 0;
          font-size: 14px;
        }
        
        .body-row {
          font-size: 14px;
        }

        .left {
          width:100%;
          h4 {
            font-size: 18px;
          }
        }

        .right {
          width: 100%;
          font-size: 14px;
        }

        .service{
          display:block;
        }

        .seat{
          display:block;  
        } 
      }
    }
  `,
};

export default TabContentComposition;
