import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import styled from 'styled-components';

import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  WHITE1,
  DARK_GRAY1,
  ORANGE2,
  LIGHT_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { commaNumber } from '@airpremia/core/lib/util';
import { SsrExpansionPanelContent } from 'src/components';
import { Triangle } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { ISsrHistoryContent } from '@airpremia/core/stores/models/ssr';

interface IProps {
  type?: string;
  left: React.ReactElement;
  /** 제목 */
  title: string;
  /** 기본 값 내용 */
  defaultDescription: string;
  count?: number;
  /** 총 비용 */
  totalFee?: number;
  /** 세부 내용 데이터 */
  contents?: ISsrHistoryContent[];
  /** click event */
  onClick?: (id: string) => void;
}

function ssrExpansionPanel({
  type,
  left,
  title,
  defaultDescription,
  totalFee,
  count,
  contents,
  onClick,
}: IProps) {
  const idLocal = type ? type : '';
  const hasContents = useMemo(() => {
    return Array.isArray(contents) && !!contents.length;
  }, [contents]);
  const [isShowContents, setIsShowContents] = useState(
    false,
  );
  const trianglePosition = isShowContents
    ? EPosition.UP
    : EPosition.DOWN;
  const toggleShowContents = () => {
    setIsShowContents(!isShowContents);
  };

  const onClickLocal = useCallback(() => {
    if (typeof onClick != 'function') return false;
    onClick(idLocal);
  }, []);

  return (
    <S.container>
      <S.summaryWrapper>
        <S.left>{left}</S.left>
        <S.right>
          <div
            className="titleWrapper"
            onClick={onClickLocal}
          >
            <div className="title">{title}</div>
            {!hasContents && (
              <div className="defaultDescription">
                {defaultDescription}
              </div>
            )}
          </div>
          {hasContents && (
            <div className="totalFeeWrapper">
              {totalFee && (
                <div className="totalFee">
                  {commaNumber(totalFee)} 원
                </div>
              )}
              <button
                className="detailButtonWrapper"
                onClick={toggleShowContents}
              >
                <div className="label">추가내역</div>
                <div className="count">{count}</div>
                <div className="triangleWrapper">
                  <Triangle position={trianglePosition} />
                </div>
              </button>
            </div>
          )}
        </S.right>
      </S.summaryWrapper>
      {isShowContents && (
        <div className="contentsWrapper">
          {contents?.map(
            (
              content: ISsrHistoryContent,
              index: number,
            ) => (
              <div className="contentWrapper" key={index}>
                <SsrExpansionPanelContent
                  title={content.tripLabel}
                  list={content.list}
                />
              </div>
            ),
          )}
        </div>
      )}
    </S.container>
  );
}

ssrExpansionPanel.defaultProps = {
  onClick: () => {},
};

const S = {
  container: styled.div`
    width: 100%;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    text-align: left;
    cursor: pointer;
    .rightWrapper {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
    }
    .contentsWrapper {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      border-top: 1.4px dashed ${LIGHT_GRAY6};
      background-color: ${LIGHT_GRAY1};
      .contentWrapper + .contentWrapper {
        border-top: 1px solid ${LIGHT_GRAY6};
      }

      .contentWrapper {
        display: flex;
        padding: 40px 0 45px;
        margin: 0 35px;
      }
    }
  `,
  summaryWrapper: styled.div`
    display: flex;
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
        color: ${LIGHT_GRAY7};
        padding-top: 5px;
      }
    }
    .totalFeeWrapper {
      .totalFee {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.65;
        letter-spacing: -0.32px;
        color: ${ORANGE2};
      }
      .detailButtonWrapper {
        padding-top: 7px;
        display: flex;
        margin-left: auto;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: -0.28px;
        color: ${DARK_GRAY1};
        .count {
          padding-left: 2px;
          color: ${ORANGE2};
        }
        .triangleWrapper {
          padding-left: 5px;
        }
      }
    }
  `,
};

export interface ISsrExpansionPanel extends IProps {}
export default ssrExpansionPanel;
