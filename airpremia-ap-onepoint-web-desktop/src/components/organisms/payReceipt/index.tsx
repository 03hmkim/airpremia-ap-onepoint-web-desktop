import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  DARK_GRAY1,
  ORANGE2,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';

export enum EPayReceiptType {
  /** 항목  */
  ITEM,
  /** 합 */
  SUM,
}

export interface IPayReceipt {
  type: EPayReceiptType;
  label: string;
  price: number;
  currencyLabel?: string;
  minus?: string;
}

export interface IProps {
  /** 영수증 dataset */
  dataset: IPayReceipt[];
  /** 적립될 포인트 */
  accruedMileage?: number;
  /** 결제 검증 실패시 버튼 비활성화 */
  disabled?: boolean;
  /** dataset이 없을 경우 나오는 설명 */
  emptyDescription?: string;
  buttonLabel?: string;
  /** 버튼 클릭 */
  onClick?: () => void;
}

function PayReceipt({
  dataset,
  accruedMileage,
  disabled,
  buttonLabel,
  emptyDescription,
  onClick,
}: IProps) {
  const ssrReceiptItems = dataset.filter(
    (receipt: IPayReceipt) =>
      receipt.type === EPayReceiptType.ITEM,
  );
  const ssrReceiptSums = dataset.filter(
    (receipt: IPayReceipt) =>
      receipt.type === EPayReceiptType.SUM,
  );
  const valueStr = (
    price: number,
    currencyLabel: string,
    minus: string,
  ) => {
    if (price == 0) return '-';

    return `${minus} ${commaNumber(price)} ${currencyLabel}`;
  };
  const isEmpty = !dataset.length;

  const getSsrReceiptList = (
    ssrReceipts: IPayReceipt[],
  ) => {
    return ssrReceipts.map(
      (receipt: IPayReceipt, index: number) => {
        return (
          <div key={index} className="row">
            <div className="label">{receipt.label}</div>
            <div className="value">
              {valueStr(
                get(receipt, 'price', 0),
                get(receipt, 'currencyLabel', '원'),
                get(receipt, 'minus', ''),
              )}
            </div>
          </div>
        );
      },
    );
  };

  return (
    <S.container>
      <S.title className="font-bold">결제 금액</S.title>
      <div className="expressionWrapper">
        <div className="itemsWrapper">
          {!isEmpty ? (
            getSsrReceiptList(ssrReceiptItems)
          ) : (
            <div className="emptyDescription">
              {emptyDescription}
            </div>
          )}
        </div>
        <div className="sumsWrapper">
          {!isEmpty ? (
            getSsrReceiptList(ssrReceiptSums)
          ) : (
            <div className="row">
              <div className="label">총 결제 금액</div>
              <div className="value">0 원</div>
            </div>
          )}
        </div>
        {accruedMileage && (
          <div className="mileage">
            탑승 후 {accruedMileage} pp 적립 예정
          </div>
        )}
      </div>
      <div className="buttonWrapper">
        <TaskButton onClick={onClick} disabled={disabled}>
          {buttonLabel ? buttonLabel : '결제'}
        </TaskButton>
      </div>
    </S.container>
  );
}

PayReceipt.defaultProps = {
  emptyDescription: '추가한 유료 부가서비스 없음',
};

const S = {
  container: styled.div`
    width: 373px;
    border-radius: 12px;
    border: solid 2px #222222;
    background-color: #ffffff;
    padding: 30px;
    box-sizing: border-box;
    .expressionWrapper {
      padding-top: 49px;
      .itemsWrapper {
        .row + .row {
          padding-top: 15px;
        }
      }
      .sumsWrapper {
        margin-top: 26px;
        padding-top: 23px;
        border-top: 2px solid ${DARK_GRAY1};
        .row {
          .label {
            font-weight: 600;
          }
          .value {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.33;
            letter-spacing: -0.36px;
            color: ${ORANGE2};
          }
        }
      }
      .emptyDescription {
        padding: 32px 0 74px;
        font-size: 14px;
        text-align: center;
        color: ${LIGHT_GRAY7};
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          font-size: 13px;
          line-height: 1.54;
          letter-spacing: -0.26px;
          color: ${DARK_GRAY1};
        }
        .value {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.71;
          letter-spacing: -0.28px;
          color: ${DARK_GRAY1};
        }
      }
    }
    .buttonWrapper {
      width: 100%;
      padding-top: 60px;
      font-size: 15px;
    }
    .mileage {
      padding-top: 5px;
      font-size: 13px;
      line-height: 1.85;
      letter-spacing: -0.26px;
      text-align: right;
      color: ${LIGHT_GRAY7};
    }
  `,
  title: styled.div`
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: -0.36px;
    color: ${DARK_GRAY1};
  `,
};

export default PayReceipt;
