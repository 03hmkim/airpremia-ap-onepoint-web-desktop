import styled, { css } from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  BLUE1,
  ORANGE1,
  WHITE1,
  LIGHT_GRAY6,
  PALE_BLUE1,
  PALE_RED1,
} from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';
import { addComma } from '@airpremia/core/lib/service';
import { IFlightTicketSearchProductClass } from '@airpremia/core/api/ticket/types';

enum ECabinClassTypeWithPSS {
  EY = 'Y',
  PE = 'W',
}

export enum EChangeType {
  FREE,
  FEE,
  IMPOSSIBLE,
}

export enum ERefundType {
  FREE,
  NOTFREE,
}

interface IStyle {
  classType?: string;
  isSelected?: boolean;
}

export interface IProps extends IStyle {
  onClick: (fareAvailabilityKey: string) => void;
  title?: string;
  remainingSeat?: number;
  changeType?: EChangeType;
  refundType?: ERefundType;
  mileage?: number;
  price?: number;
  text?: string;
  available?: number;
  productClass: IFlightTicketSearchProductClass;
}

const convertChangeType = (type?: EChangeType) => {
  const { FREE, FEE, IMPOSSIBLE } = EChangeType;
  if (type === FREE) return '무료';
  else if (type === FEE) return '수수료 부과';
  else if (type === IMPOSSIBLE) return '불가';
  return '';
};

const convertRefundType = (type?: ERefundType) => {
  const { FREE, NOTFREE } = ERefundType;
  if (type === FREE) return '무료';
  else if (type === NOTFREE) return '수수료 부과';
  return '';
};

function CabinClassTicketCard({
  mileage,
  productClass,
  onClick,
  ...props
}: IProps) {
  const {
    text,
    available,
    fareAvailabilityKey,
    price,
  } = productClass;
  // @TODO: 수수료 환불 형태가 금액 -> 형태로 변경 되어 이부분 수정되면 반영할 예정
  const changeText = convertChangeType(EChangeType.FEE);
  const refundText = convertRefundType(ERefundType.FREE);

  const onClickItem = () => onClick(fareAvailabilityKey);

  return (
    <S.container
      {...props}
      isSoldOut={!available}
      onClick={onClickItem}
    >
      <S.top>
        <h5>{text}</h5>
        {!!available && available < 10 && (
          <sub>잔여 {available}</sub>
        )}
      </S.top>
      <S.bottom>
        <S.wrapper>
          <div>
            <p>변경</p>
            <p>{changeText}</p>
          </div>
          <div>
            <p>환불</p>
            <p>{refundText}</p>
          </div>
          <div>
            <p>포인트</p>
            <p>{mileage}pp 적립</p>
          </div>
        </S.wrapper>
        <S.priceButton {...props} isSoldOut={!available}>
          {available
            ? `${addComma(price || 0)} 원`
            : '매진'}
        </S.priceButton>
      </S.bottom>
    </S.container>
  );
}

const flex = `
  display: flex;
  justify-content: space-between;
`;

const S = {
  container: styled.div<
    IStyle & {
      isSoldOut: boolean;
    }
  >`
    ${flex};
    cursor: pointer;
    color: ${DARK_GRAY1};
    padding: 30px;
    box-sizing: border-box;
    height: 100%;
    flex-direction: column;
    width: 100%;

    transition: background-color 0.2s linear;

    background-color: ${ifProp(
      { classType: ECabinClassTypeWithPSS.EY },
      ifProp('isSelected', PALE_BLUE1, WHITE1),
      ifProp('isSelected', PALE_RED1, WHITE1),
    )};

    ${({ isSoldOut }) =>
      isSoldOut &&
      css`
        button {
          pointer-events: none;
          cursor: default;
        }
      `
    }

    @media only screen and (max-width: 1059px) { 
      padding: 30px 10px;
    }
  `,

  top: styled.div`
    padding: 0 10px;
    h5 {
      font-size: 21px;
      line-height: 27px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }

    sub {
      color: ${LIGHT_GRAY8};
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.26px;
    }

    @media only screen and (max-width: 767px) { 
      h5 {
        font-size: 15px;
      }

      sub {
        font-size: 13px;
      }
    }
  `,

  bottom: styled.div``,

  wrapper: styled.div`
    padding: 0 10px;

    div {
      ${flex};
      align-items: center;
      p {
        &:nth-child(1) {
          color: ${LIGHT_GRAY8};
          font-size: 18px;
          line-height: 19px;
          letter-spacing: -0.26px;
        }
        &:nth-child(2) {
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.28px;
        }
      }
    }

    @media only screen and (max-width: 767px) { 
      margin-top: 2vw;

      div {
        p {
          &:nth-child(1) {
            color: ${DARK_GRAY1};
            font-size: 11px;
          }
          &:nth-child(2) {
            font-size: 12px;
          }
        }
      }
    }
  `,

  priceButton: styled.button<
    IStyle & {
      isSoldOut: boolean;
    }
  >`
    height: 50px;
    font-size: 21px;
    line-height: 24px;
    letter-spacing: -0.32px;
    border-radius: 8px;
    width: 100%;
    margin-top: 30px;
    font-weight: 600;

    color: ${ifProp(
      { classType: ECabinClassTypeWithPSS.EY },
      ifProp('isSelected', WHITE1, BLUE1),
      ifProp('isSelected', WHITE1, ORANGE1),
    )};

    border: solid 1px
      ${ifProp(
        { classType: ECabinClassTypeWithPSS.EY },
        BLUE1,
        ORANGE1,
      )};

    background-color: ${ifProp(
      { classType: ECabinClassTypeWithPSS.EY },
      ifProp('isSelected', BLUE1, WHITE1),
      ifProp('isSelected', ORANGE1, WHITE1),
    )};

    ${({ isSoldOut }) => {
      if (isSoldOut) {
        return css`
          background-color: ${LIGHT_GRAY6};
          color: ${WHITE1};
          border: 0;
        `;
      }
    }}

    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 479px) {
      margin-top: 10px;
    }
  `,
};

export default CabinClassTicketCard;
