import React from 'react';
import styled from 'styled-components';
import { Arrow } from 'src/components';
import SvgClub from 'public/images/ico_club_orange.svg';
import SvgDiscount from 'public/images/ico_discount_orange.svg';
import SvgEvent from 'public/images/ico_event_orange.svg';
import SvgHotel from 'public/images/ico_hotel_orange.svg';
import {
  DARK_GRAY1,
  LIGHT_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

export interface IProps {}

function EventNavigation({}: IProps) {
  return (
    <S.container>
      <div className="title">이벤트/혜택</div>
      <ul>
        <li>
          <div className="left">
            <SvgEvent />
          </div>
          <div className="right">
            <div className="labelWrapper">
              <div className="label">이벤트</div>
              <Arrow
                color={DARK_GRAY1}
                scale={0.6}
                borderWidth="3px"
              />
            </div>
            <div className="description">
              에어프레미아의 특별한 이벤트를 확인해보세요.
            </div>
          </div>
        </li>
        <li>
          <div className="left">
            <SvgHotel />
          </div>
          <div className="right">
            <div className="labelWrapper">
              <div className="label">
                기업 우대 프로그램
              </div>
              <Arrow
                color={DARK_GRAY1}
                scale={0.6}
                borderWidth="3px"
              />
            </div>
            <div className="description">
              기업 고객에 가입하고 할인 혜택을 누려보세요.
            </div>
          </div>
        </li>
        <li>
          <div className="left">
            <SvgClub />
          </div>
          <div className="right">
            <div className="labelWrapper">
              <div className="label">에어프레미아 클럽</div>
              <Arrow
                color={DARK_GRAY1}
                scale={0.6}
                borderWidth="3px"
              />
            </div>
            <div className="description">
              클럽 회원에게만 주어지는 혜택을 확인해보세요.
            </div>
          </div>
        </li>
        <li>
          <div className="left">
            <SvgDiscount />
          </div>
          <div className="right">
            <div className="labelWrapper">
              <div className="label">카드 및 제휴 혜택</div>
              <Arrow
                color={DARK_GRAY1}
                scale={0.6}
                borderWidth="3px"
              />
            </div>
            <div className="description">
              추가 포인트를 얻을 수 있는 기회를 만나보세요.
            </div>
          </div>
        </li>
      </ul>
    </S.container>
  );
}

EventNavigation.defaultProps = {};

const S = {
  container: styled.div`
    .title {
      padding-bottom: 20px;
      border-bottom: 1px solid ${DARK_GRAY1};
      font-family: 'Premia-Bold',sans-serif;
      font-weight: 600;
      font-size: 22px;
      line-height: 1.27;
      letter-spacing: -0.44px;
      color: ${DARK_GRAY1};
    }
    ul {
      padding-top: 49px;
      li + li {
        padding-top: 45px;
      }
      li {
        display: flex;
        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 54px;
          height: 70px;
          border-radius: 28px;
          background-color: ${LIGHT_GRAY1};
        }
        .right {
          padding-left: 20px;
          cursor: pointer;
          .labelWrapper {
            display: flex;
            align-items: center;
            .label {
              font-size: 18px;
              font-weight: 600;
              line-height: 1.56;
              letter-spacing: -0.36px;
              color: ${DARK_GRAY1};
            }
          }
          .description {
            padding-top: 5px;
            font-size: 13px;
            line-height: 2.15;
            letter-spacing: -0.26px;
            color: ${LIGHT_GRAY7};
          }
        }
      }
    }
  `,
};

export default EventNavigation;
