import React from 'react';
import styled from 'styled-components';
import {
  BLUE1,
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { ListGlobal } from 'src/components';
import Link from 'next/link';

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
        <U.wrap>
          <U.title>
            항공 위험물 안내
          </U.title>
          <U.content className="notBd">
            <div className="listWrap">
              <ListGlobal level="fst" body={
                <p>폭발물, 압축가스, 인화성 물질, 부식성 물질, 자극성 물질, 자기성 물질, 방사성 물질 등 항공기 및 개인의 재산에 위험을 가져올 수 있는 항공위험물은 수하물로 운송 될 수 없습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>[항공보안법] 제44조에 따라 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의 벌금에 처할 수 있으니 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>무기로 사용될 수 있는 물품은 기내 휴대하실 수 없습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>보조배터리, 전자담배, 라이터 등 위탁운송이 금지된 물품을 수하물로 위탁하여 적발된 경우 해당 물품은 폐기됩니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>자세한 사항은 <Link href="/support/baggage/prohibition"><a target="_blank" className="link">운송제한물품</a></Link>을 확인해 주시기 바랍니다.</p>
              }/>
            </div>
          </U.content>
        </U.wrap>
        <U.wrap>
          <U.title>
            항공기 반입금지 물품
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
                      <th>폭팔물류</th>
                      <td>
                        수류탄, 다이너마이트, 화약류, 연막탄, 조명탄, 폭죽, 지뢰,뇌관,신관,도화선, 발파캡 등 폭발장치
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
                      <th>인화성 물질</th>
                      <td>
                        성냥, 라이터, 부탄가스 등 인화성가스, 휘발유 ·페인트 등 인화성 액체, 70% 이상의 알코올성 음료 등<br /><br />
                        <span className="gray">(단, 소형안전성냥 및 휴대용라이터는 각 1개에 한해 객실 반입 가능)</span>
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
                      <th>방사성 ·전염성·독성 물질</th>
                      <td>
                        염소, 표백제, 산화제, 수은, 하수구 청소재제, 독극물, 의료용 ·상업용 방사성 동위원소, 전염성 ·생물학적 위험물질 등
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
                      <th>기타 위험물질</th>
                      <td>
                        소화기, 드라이아이스, 최루가스 등<br /><br />
                        <span className="gray">(단, 드라이아이스는 1인당 2.5kg에 한해 이산화탄소 배출이 용이하도록 안전하게 포장된 경우 항공사 승인 하에 반입이 가능)</span>
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

    &.notBd {
      border-top: 0;
    }

    .link {
      color: ${BLUE1};
      border-bottom: 1px solid ${BLUE1};
    }

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

        .gray {
          color: ${LIGHT_GRAY8};
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
