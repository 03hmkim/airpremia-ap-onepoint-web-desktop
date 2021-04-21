import React from 'react';
import styled from 'styled-components';
import { RoundedButton2 } from 'src/components';
import { ERoundedButtonType } from 'src/components/atoms/roundedButton2';

import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  ORANGE2,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { Arrow } from 'src/components';
import { Checkbox, SubTitle } from 'src/components';
import { commaNumber } from '@airpremia/core/lib/util';
import SvgInfo from 'public/images/btn_info.svg';

interface IStyleProps {}

interface IProps extends IStyleProps {
  /** 남아있는 포인트 */
  remainedMileage?: number;
  /** 결제상품이 없는경우 */
  isNoProduct?: boolean;
  /** 회원 구매시 */
  isMember?: boolean;
}

/** @deprecated */
function Mileage({
  remainedMileage,
  isNoProduct,
  isMember,
}: IProps) {
  // TODO 충전
  const onCharge = () => {};

  // TODO 사용
  const onUse = () => {};

  // TODO '보유 포인트를 최대로 사용' checkbox
  const checkboxProps = {
    isActive: false,
    onChange: () => {},
  };

  const isGeneral: boolean = !!isMember && !isNoProduct;

  return (
    <S.container>
      <div className="subTitleWrapper">
        <SubTitle>포인트</SubTitle>
      </div>
      {!isMember && (
        <div className="nonMemberWrapper">
          <div className="description">
            에어프레미아 회원 가입 후 포인트를 적립해보세요.
            적립된 포인트는
            <br />
            포인트 항공권 구매, 부가서비스 구매에 사용 할 수
            있어요.
          </div>
          <div className="loginButton">
            <a href="#">
              로그인 / 회원가입
              <div className="arrowWrapper">
                <Arrow
                  color={BLUE1}
                  scale={0.4}
                  borderWidth="3px"
                />
              </div>
            </a>
          </div>
        </div>
      )}
      {isNoProduct && (
        <div className="noProductWrapper">
          <div className="SvgInfoWrapper">
            <SvgInfo />
          </div>
          <div className="description">
            포인트로 구매 가능한 상품이 없습니다.
            <br />
            회원님의 현재 보유 포인트는&nbsp;
            <span>
              {commaNumber(remainedMileage)} pp
            </span>{' '}
            입니다.
          </div>
        </div>
      )}
      {isGeneral && (
        <div className="mileageWrapper">
          <div className="row">
            <div className="label">보유 포인트</div>
            <div className="valueWrapper">
              <div className="value">
                {commaNumber(remainedMileage)} pp
              </div>
              <div className="buttonWrapper">
                <RoundedButton2
                  colorType={ERoundedButtonType.BLACK}
                  onClick={onCharge}
                >
                  충전
                </RoundedButton2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="label">
              부가서비스에 사용할 포인트
            </div>
            <div className="valueWrapper">
              <div className="value">0 pp</div>
              <div className="buttonWrapper">
                <RoundedButton2
                  colorType={ERoundedButtonType.BLUE}
                  onClick={onUse}
                >
                  사용
                </RoundedButton2>
              </div>
            </div>
          </div>
          <div className="checkboxWrapper">
            <Checkbox {...checkboxProps}>
              <div className="label">
                보유 포인트를 최대한 사용
              </div>
            </Checkbox>
          </div>
        </div>
      )}
    </S.container>
  );
}

Mileage.defaultProps = {
  isNoProduct: false,
};

const S = {
  container: styled.div<IStyleProps>`
    position: relative;
    .subTitleWrapper {
      border-top: 2px solid ${DARK_GRAY1};
      padding-top: 30px;
    }
    .description {
      padding-top: 15px;
      font-size: 15px;
      line-height: 1.73;
      letter-spacing: -0.3px;
      color: ${LIGHT_GRAY7};
      span {
        color: ${ORANGE2};
      }
    }
    .nonMemberWrapper {
      .loginButton {
        padding-top: 15px;
        a {
          display: inline-flex;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.6;
          letter-spacing: -0.3px;
          color: ${BLUE1};
          .arrowWrapper {
            position: relative;
            left: -5px;
          }
        }
      }
    }

    .noProductWrapper {
      .SvgInfoWrapper {
        position: absolute;
        top: 39px;
        left: 85px;
      }
    }
    .mileageWrapper {
      padding-top: 50px;
      .row {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        .label {
          font-size: 15px;
          line-height: 2;
          letter-spacing: -0.3px;
          color: ${DARK_GRAY1};
        }
      }
      .valueWrapper {
        display: flex;
        align-items: center;
        .value {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.36px;
          color: ${DARK_GRAY1};
        }
        .buttonWrapper {
          padding-left: 15px;
        }
      }
      .checkboxWrapper {
        margin-top: 5px;
        padding-top: 20px;
        border-top: 1px solid ${LIGHT_GRAY6};
        .label {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.3px;
          color: ${DARK_GRAY1};
        }
      }
    }
  `,
};

export default Mileage;
