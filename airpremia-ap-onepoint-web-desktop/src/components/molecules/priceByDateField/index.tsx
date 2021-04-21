import styled, { css } from 'styled-components';
import moment from 'moment';
import {
  DARK_GRAY1,
  WHITE1,
  BLUE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';
import { ELanguageType } from '@airpremia/core/lib/constant';

export enum EPriceByDateFieldStatus {
  ACTIVE,
  INACTIVE,
  DISABLE,
}

export interface IStyleProps {
  /** 현재 상태 */
  status?: EPriceByDateFieldStatus;
}

export interface IProps extends IStyleProps {
  /** EY price */
  eyPrice?: number;
  /** PE price */
  pePrice?: number;
  /** Date */
  date?: moment.Moment;
  /** language */
  language?: ELanguageType;
  /** 클릭시 로드 이벤트 */
  onLoad?: (e: any) => void;
}

function PriceByDateField({
  language,
  date = PriceByDateField.defaultProps.date,
  eyPrice = PriceByDateField.defaultProps.eyPrice,
  pePrice,
  onLoad,
  ...props
}: IProps) {
  return (
    <S.container
      onClick={onLoad}
      data-target={date}
      {...props}
    >
      <div className="date">
        <h3>
          {moment(date)
            .locale(
              language ||
                PriceByDateField.defaultProps.language,
            )
            .format('M. D. (ddd)')}
        </h3>
      </div>

      <div className="eyPrice">
        <p>
          <span className="economy-color" />
          {eyPrice && addComma(eyPrice)}&nbsp;
          {'-'}
        </p>
      </div>
      <div className="pePrice">
        <p>
          <span className="premium-color" />
          {pePrice && addComma(pePrice)}&nbsp;
          {'-'}
        </p>
      </div>
    </S.container>
  );
}

PriceByDateField.defaultProps = {
  eyPrice: 0,
  pePrice: 0,
  date: moment(),
  onLoad: () => {},
  language: ELanguageType.KR,
};

const S = {
  container: styled.div<IStyleProps>`
    width: 150px;
    height: 98px;
    border-radius: 8px;
    background-color: ${WHITE1};
    padding: 12px 0 18px 37px;
    box-sizing: border-box;
    filter: opacity(0.5);
    border: 0;
    cursor: pointer;

    & > div {
      pointer-events: none;
    }

    ${({ status }) => {
      const { ACTIVE, DISABLE } = EPriceByDateFieldStatus;
      if (status === ACTIVE) {
        return css`
          box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
          border: solid 2px ${DARK_GRAY1};
          filter: unset;
        `;
      } else if (status === DISABLE) {
        return css`
          filter: opacity(0.2);
          pointer-events: none;
          cursor: default;
        `;
      }
    }}

    .date {
      margin-bottom: 7px;
      h3 {
        font-size: 18px;
        letter-spacing: -0.36px;
        line-height: 24px;
        font-weight: 600;
      }
    }

    span {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      top: 8px;
      left: -10px;
    }

    p {
      font-size: 14px;
      letter-spacing: -0.28px;
      line-height: 20px;
      margin-left: 10px;
      position: relative;
    }

    .economy-color {
      background-color: ${BLUE1};
    }
    .premium-color {
      background-color: ${ORANGE2};
    }
  `,
};

export default PriceByDateField;
