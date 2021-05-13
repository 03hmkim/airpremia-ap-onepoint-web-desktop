import React from 'react';
import styled from 'styled-components';
import {
  // PromotionalCardEvent,
  // PromotionalCardHanoi,
  // PromotionalCardPalmTree,
  TicketSearchVertical,
} from 'src/components';
import ImgAngle from 'public/images/angle_a.svg';
import ImgVtcBg from 'public/images/home/main_vtc_bg_people_s.svg';
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY7,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

function Hero({}: IProps) {
  return (
    <S.container>
      <S.homeTicketSearchWrapper>
        <div className="angleWrapper">
          <span className="left">
            <ImgAngle />
          </span>
          <span className="right x-rotate">
            <ImgAngle />
          </span>
          <span className="bottom left y-rotate">
            <ImgAngle />
          </span>
          <span className="bottom right xy-rotate">
            <ImgAngle />
          </span>
        </div>
        <div className="verticalWrapper">
          <TicketSearchVertical />
          <div className="imgVtcBg">
            <ImgVtcBg />
          </div>
        </div>
      </S.homeTicketSearchWrapper>
      {/* <div className="cardScrollWrapper">
        <div className="event row">
          <PromotionalCardEvent />
        </div>
        <div className="hanoi row">
          <PromotionalCardHanoi />
        </div>
        <div className="palmtree row">
          <PromotionalCardPalmTree />
        </div>
      </div> */}
    </S.container>
  );
}

Hero.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;

    .cardScrollWrapper {
      position: relative;
      margin-top: -20px;
      .row {
        display: flex;
        flex-direction: column;
      }
      .row + .row {
        margin-top: 140px;
      }
      .event{
        align-items: flex-end;
      }
      .hanoi {
        align-items: flex-end;
        display: none;
      }
      .palmtree {
        padding-left: 216px;
        align-items: flex-start;
        display: none;
      }
    }

    @media only screen and (max-width: 1059px) {
      .cardScrollWrapper {
        .event{
          display: none;
        }
      }
    }
  `,

  homeTicketSearchWrapper: styled.div`
    width: 496px;
    height: 600px;
    position: relative;
    box-sizing: border-box;

    .angleWrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      span {
        position: absolute;
        display: grid;
        & > svg > path {
          fill: ${WHITE1};
          opacity: 1;
        }
      }
      .left {
        left: -30px;
      }
      .right {
        right: -30px;
      }
      .bottom {
        bottom: 0;
      }
      .x-rotate {
        transform: scaleX(-1);
      }
      .y-rotate {
        transform: scaleY(-1);
      }
      .xy-rotate {
        transform: scale(-1);
      }
    }
    .verticalWrapper {
      height: 100%;
      padding: 0 59px;
      background-color: ${WHITE1};

      .imgVtcBg{
        position: absolute;
        top: 106px;
        right: 50px;
      }
    }
    .destinationWrapper {
      position: absolute;
      top: 0;
      right: -400px;
      width: 400px;
      height: 600px;
      padding: 15px 0;
      box-sizing: border-box;
      border-radius: 16px;
      box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, 0.03);
      border: solid 1px ${DARK_GRAY1};
      background-color: ${WHITE1};
      z-index: 1;
      ul {
        overflow-y: auto;
        li {
          display: flex;
          justify-content: space-between;
          padding: 15px 25px;
          cursor: pointer;
          .label--destination__item {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.28px;
            color: ${DARK_GRAY1};
            &.inactive {
              color: ${LIGHT_GRAY7};
            }
          }
          &.inactive {
            .label--destination__item {
              color: ${LIGHT_GRAY7};
            }
            .coming_soon {
              display: block;
            }
          }
          .coming_soon {
            display: none;
            font-family: 'Premia', sans-serif;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: -0.28px;
            text-align: right;
            color: ${ORANGE1};
          }
        }
      }
    }
    .passengerWrapper {
      position: absolute;
      top: 0;
      right: -440px;
      width: 440px;
      height: 600px;
      padding-top: 32px;
      box-sizing: border-box;
      border-radius: 16px;
      box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, 0.03);
      border: solid 1px ${DARK_GRAY1};
      background-color: ${WHITE1};
      z-index: 1;
    }
    .datePickerRangeWrapper {
      position: absolute;
      top: 0;
      left: 440px;
      z-index: 1;
    }

    @media only screen and (max-width: 1440px) {
      width: 440px;
      height: 600px;

      .verticalWrapper{
        padding: 0 30px;

        .imgVtcBg{
          top: 60px;
          right: 30px;

          svg {
            width: 100px;
            height: 120px;
          }
        }
      }
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (max-width: 599px) {
      height: 470px;

      .verticalWrapper{
        .imgVtcBg{
          top: 0;
        }
      }
    }

    @media only screen and (max-width: 479px) {
      .verticalWrapper {
        .imgVtcBg {
          right: 15px;
          svg {
            width: 80px;
            height: 100px;
          }
        }
      }
    }

    @media only screen and (max-width: 399px) {
      .verticalWrapper {
        .imgVtcBg {
          display: none;
        }
      }
    }
  `,
};

export default Hero;
