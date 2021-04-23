import React from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}

function TabContent({currIdxCont}: IProps) {

  if ( currIdxCont === 0 ) {
    return (
      <S.container>
        <U.wrap>
          <U.title>
            변경 수수료
          </U.title>
          <U.text>
            변경 수수료는 편도당 한 명의 승객에게 부과되는 비용입니다. 날짜 변경으로 발생하는<span className="block" />항공권 금액의 차이는 수수료와 별도로 결제하셔야 합니다.​
          </U.text>
          <U.content>
            <ul>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="190px"></col>
                      <col width="117px"></col>
                      <col width="117px"></col>
                      <col width="116px"></col>
                    </colgroup>
                    <tr>
                      <th>성인, 소아</th>
                      <td>
                        <strong>운임 1</strong>
                        <div className="txt">
                          <p>30,000원</p>
                          <p>/ 30$</p>
                        </div>
                      </td>
                      <td>
                        <strong>운임 2</strong>
                        <div className="txt">
                          <p>15,000원</p>
                          <p>/ 15$</p>
                        </div>
                      </td>
                      <td>
                        <strong>운임 3</strong>
                        <div className="txt">
                          <p>무료</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="190px"></col>
                      <col width="117px"></col>
                      <col width="117px"></col>
                      <col width="116px"></col>
                    </colgroup>
                    <tr>
                      <th>유아</th>
                      <td>
                        <strong>무료</strong>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </T.table>
              </li>
            </ul>
          </U.content>
        </U.wrap>
        <U.wrap>
          <U.title>
            취소 수수료
          </U.title>
          <U.text>
            취소 수수료는 편도당 한 명의 승객에게 부과되는 비용입니다. ​
          </U.text>
          <U.content>
            <ul>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="190px"></col>
                      <col width="270px"></col>
                      <col width="270px"></col>
                    </colgroup>
                    <tr>
                      <th>성인 항공권</th>
                      <td>
                        <strong>미사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                      <td>
                        <strong>일부사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="190px"></col>
                      <col width="270px"></col>
                      <col width="270px"></col>
                    </colgroup>
                    <tr>
                      <th>소아 항공권</th>
                      <td>
                        <strong>미사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                      <td>
                        <strong>일부사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="190px"></col>
                      <col width="270px"></col>
                      <col width="270px"></col>
                    </colgroup>
                    <tr>
                      <th>유아 항공권</th>
                      <td>
                        <strong>미사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                      <td>
                        <strong>일부사용</strong>
                        <div className="txt">
                          <p>출발 전 : 112,069원</p>
                          <p>출발 후 : 163,794원</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
            </ul>
          </U.content>
        </U.wrap>
      </S.container>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <S.container>
        <U.wrap>
          <U.title>
            인천에서 하노이
          </U.title>
          <U.content>
            <ul>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="170px"></col>
                      <col width="560px"></col>
                    </colgroup>
                    <tr>
                      <th>성인/소아<br />항공권</th>
                      <td>
                        <strong>기내 반입 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 10KG</p>
                          <p className="iLine">각 수하물은 삼변의 합 115CM(45”)로 제한합니다.</p>
                        </div>
                        <strong>위탁 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 23KG</p>
                          <p className="iLine">각 수하물은 최대 158CM (가로, 세로, 높이의 합)로 제한됩니다.</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="170px"></col>
                      <col width="560px"></col>
                    </colgroup>
                    <tr>
                      <th>유아<br />항공권</th>
                      <td>
                        <strong>위탁 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 10KG</p>
                          <p className="iLine">각 수하물은 삼변의 합 158CM(가로, 세로, 높이의 합)로 제한합니다.</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
            </ul>
          </U.content>
        </U.wrap>
        <U.wrap>
          <U.title>
            하노이에서 인천
          </U.title>
          <U.content>
            <ul>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="170px"></col>
                      <col width="560px"></col>
                    </colgroup>
                    <tr>
                      <th>성인/소아<br />항공권</th>
                      <td>
                        <strong>기내 반입 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 10KG</p>
                          <p className="iLine">각 수하물은 삼변의 합 115CM(45”)로 제한합니다.</p>
                        </div>
                        <strong>위탁 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 23KG</p>
                          <p className="iLine">각 수하물은 최대 158CM (가로, 세로, 높이의 합)로 제한됩니다.</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
              <li>
                <T.table>
                  <table>
                    <colgroup>
                      <col width="170px"></col>
                      <col width="560px"></col>
                    </colgroup>
                    <tr>
                      <th>유아<br />항공권</th>
                      <td>
                        <strong>위탁 수하물</strong>
                        <div className="txt">
                          <p className="iLine">인당 1개, 개당 10KG</p>
                          <p className="iLine">각 수하물은 삼변의 합 158CM(가로, 세로, 높이의 합)로 제한합니다.</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </T.table>
              </li>
            </ul>
          </U.content>
        </U.wrap>
      </S.container>
    )
  } else if ( currIdxCont === 2 ) {
    return (
      <S.container>
        항공 위험물품 안내
      </S.container>
    )
  } else {
    return (
      <S.container>
        국제 운송 약관
      </S.container>
    )
  }
}

const U = {
  wrap: styled.div`
    margin-top: 60px;
    &:first-child {
      margin-top: 0;
    }
  `,
  title: styled.p`
    margin-bottom: 20px;
    color: ${DARK_GRAY1};
    font-size: 21px;
    font-weight: bold;
    line-height: 1.8em;
    letter-spacing: -0.4px;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  text: styled.div`
    margin-bottom: 30px;
    color: ${LIGHT_GRAY8};
    font-size: 18px;
    line-height: 1.8em;
    letter-spacing: -0.3px;

    .block {
      display: block;
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      font-weight: 300;

      .block {
        margin-left: 4px;
        display: inline-block;
      }
    }
  `,
  content: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    ul {
      li {
        padding: 30px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }

    @media only screen and (max-width: 767px) {
      ul {
        li {
          padding: 20px 0;
        }
      }
    }
  `
}

const S = {
  container: styled.div`
    height: calc(100% - 60px);
    margin-top: 30px;
    padding-top: 40px;
    overflow-y: auto;
    border-top: 1px solid ${LIGHT_GRAY5};
    box-sizing: border-box;
  `,

};
  
const T = {
  table: styled.div`
    table {
      width: 100%;

      font-size: 18px;
      line-height: 1.36em;

      th,
      td,
      td strong {
        color: ${DARK_GRAY1};
        letter-spacing: -0.3px;
      }

      td strong {
        margin-top: 30px;
        display: block;

        &:first-of-type {
          margin-top: 0;
        }
      }

      th {
        padding: 0 3px;
        font-weight: 700;

        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }

      td {
        padding: 0 3px;

        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }

        .txt {
          margin-top: 10px;
          p {
            position: relative;
            color: ${LIGHT_GRAY8};
            font-weight: 400;
            letter-spacing: -0.3px;
            &.iLine{
              padding-left: 8px;
            }
            &.iLine::after{
              content: "-";
              position: absolute;
              left: 0;
              top: 0;
              display: block;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 767px) {
      table {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.36em;
      }
    }
  `,
}

export default TabContent;
