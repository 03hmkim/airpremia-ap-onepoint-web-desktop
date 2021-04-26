import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { commaNumber } from '@airpremia/core/lib/util';
import React from 'react';
import { ISsrHistoryContentListItem } from '@airpremia/core/stores/models/ssr';

interface IStyleProps {}
interface IProps extends IStyleProps {
  title: string;
  /** 선택된 각 항목의 리스트 */
  list: ISsrHistoryContentListItem[];
}

function SsrExpansionPanelContent({ title, list }: IProps) {
  return (
    <S.container>
      <div className="title font-bold">{title}</div>
      <div className="itemWrapper">
        {list.map(
          (
            item: ISsrHistoryContentListItem,
            index: number,
          ) => {
            return (
              <div className="row" key={index}>
                {item.productLabel && (
                  <div className="productLabel">
                    {item.productLabel} × {item.count} 개
                  </div>
                )}
                <div className="passengerName">
                  {item.passengerName}
                </div>
                <div className="price">
                  {item.price
                    ? `${commaNumber(item.price)} 원`
                    : ''}
                </div>
              </div>
            );
          },
        )}
      </div>
    </S.container>
  );
}

SsrExpansionPanelContent.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    width: 100%;
    .title {
      font-weight: 600;
      letter-spacing: -0.32px;
      font-size: 18px;
    }
    .itemWrapper {
      flex: 1;
      max-width: 586px;
      padding-left: 31px;
      .row + .row {
        padding-top: 20px;
      }
      .row {
        display: flex;
        font-weight: 600;
        letter-spacing: -0.32px;
        font-size: 16px;
        &:first-of-type .productLabel {
          position: relative;
          &:before {
            content: '';
            position: absolute;
            top: 3px;
            left: -15px;
            width: 1px;
            height: 11px;
            background-color: ${LIGHT_GRAY6};
          }
        }
        .productLabel {
          padding-right: 30px;
        }
        .passengerName {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: ${LIGHT_GRAY7};
        }
        .price {
          font-size: 15px;
          padding-left: 48px;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      .title {
        font-size: 16px;
      }
    }
  `,
};

export interface ISsrExpansionPanelContent extends IProps {}
export default SsrExpansionPanelContent;
