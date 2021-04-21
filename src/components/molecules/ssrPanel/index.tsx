import styled from 'styled-components';
import React, { useCallback } from 'react';
import Radio from '../radio';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  ORANGE2,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  id: string;
  title: string;
  defaultDescription: string;
  totalFeeRaw: number;
  totalFee: number;
  onClick?: (id: string) => void;
}

function SsrPanel({
  id,
  title,
  defaultDescription,
  totalFeeRaw,
  totalFee,
  onClick,
}: IProps) {
  const onClickLocal = useCallback(() => {
    if (typeof onClick != 'function') return false;
    onClick(id);
  }, []);

  return (
    <S.container>
      <S.left>
        <Radio isActive={false} onChange={() => {}} />
      </S.left>
      <S.right>
        <div
          className="titleWrapper"
          onClick={onClickLocal}
        >
          <div className="title">{title}</div>
          <div className="defaultDescription">
            {defaultDescription}
          </div>
        </div>
        <div className="totalFeeRawWrapper">
          <div className="totalFeeRaw">
            {commaNumber(totalFeeRaw)} 원
          </div>
          <div className="totalFee">
            {commaNumber(totalFee)} 원
          </div>
        </div>
      </S.right>
    </S.container>
  );
}

SsrPanel.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    width: 100%;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    text-align: left;
    cursor: pointer;
    min-height: 116px;
    padding: 30px;
    box-sizing: border-box;
    align-items: center;
  `,
  left: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    padding-right: 35px;
  `,
  right: styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleWrapper {
      box-sizing: border-box;
      div {
        padding-bottom: 3px;
      }
      &:hover {
        .title {
          text-decoration: underline;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.4px;
        color: ${DARK_GRAY1};
      }
      .defaultDescription {
        font-size: 15px;
        letter-spacing: -0.3px;
        color: ${LIGHT_GRAY6};
        padding-top: 5px;
      }
    }
    .totalFeeRaw {
      font-size: 14px;
      line-height: 2.14;
      letter-spacing: -0.28px;
      text-align: right;
      color: ${LIGHT_GRAY7};
      text-decoration: line-through;
    }
    .totalFee {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.65;
      letter-spacing: -0.32px;
      color: ${ORANGE2};
    }
  `,
};

export interface ISsrPanel extends IProps {}

export default SsrPanel;
