import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import { useModal } from 'src/hooks';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  BLUE1,
  ORANGE2,
  WHITE1,
  DARK_BLUE1,
  DARK_BLUE2,
  DARK_BLUE3,
} from '@airpremia/cdk/styles/colors';
import { 
  SpeechBubble,
  ListGlobal,
  NewModal,
  PopupTitle,
  TaskButton,
} from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';
import { SupportStyle } from 'src/styles/common';
import Link from 'next/link'
import Airport from 'public/images/support/ico_airport_white.png'
import Bag from 'public/images/support/ico_bag_white.png'
import Seat from 'public/images/support/ico_seat_white.png'
import Security from 'public/images/support/ico_security_white.png'
import Ticket from 'public/images/support/ico_ticket_white.png'
import Check from 'public/images/support/ico_check_white.png'
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import DeclarationTab from './declarationTab';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.content>
            <T.table>
              <div className="tbWrap vtc">
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 01
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.airport /></div>
                                  <div className="txt">공항도착</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                          <ListGlobal level="fst td" body={
                              <p>탑승수속 카운터 오픈 시간 및 마감 시간을 확인하시어 도착하여 주시기 바랍니다.</p>
                          }/>
                          <ListGlobal level="scd td" body={
                              <p>오픈시간 : 항공기 출발 2시간 전</p>
                          }/>
                          <ListGlobal level="scd td" body={
                              <p>마감시간 : 항공기 출발 30분 전</p>
                          }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 02
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.ticket /></div>
                                  <div className="txt">탑승권발급</div>
                              </div>
                          </div>
                      </th>
                      <td className="taL">
                        1)
                        <C.linkm>
                          <Link href="#">
                              <a>온라인 체크인</a>
                          </Link>
                        </C.linkm>
                      </td>
                      <td className="taL">2) KIOSK</td>
                      <td className="taL">3) 탑승수속 카운터</td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 03
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.bag /></div>
                                  <div className="txt">수하물 위탁</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>에어프레미아 카운터에서 신분증과 탑승권을 제시하신 후 수하물을 위탁하여 주시기 바랍니다.</p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 04
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.security /></div>
                                  <div className="txt">보안검색</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>출발장 입구에서 신분증과 탑승권을 제시하신 후 보안 검색대를 통과하여 탑승구로 이동해 주시기 바랍니다.</p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 05
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.seat /></div>
                                  <div className="txt">항공기 탑승</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>원활한 탑승을 위하여, 신분증 및 탑승권은 개인별로 소지하여 주시기 바랍니다.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p><C.orange>출발 10분 전</C.orange>에 탑승이 마감되오니 탑승시간에 맞추어 해당 탑승구에서 대기하여 주시기 바랍니다.</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else {
      const {
        onShowNewModal,
        UIStore: { newModal },
      } = useModal();
    
      const auto_immigration = () =>
        onShowNewModal('auto_immigration');
      const declaration = () =>
        onShowNewModal('declaration');
    
      const { onHideNewModal } = useModal();

        const onClickModal = () => {
          switch (newModal.target) {
              case 'auto_immigration':
              return (
                <NewModal
                  className="max"
                  type={EScrollType.TYPE1}
                  title={
                    <S.modalTitle>
                      <PopupTitle>자동출입국심사 이용가능대상</PopupTitle>
                    </S.modalTitle>
                  }
                  body={
                    <>
                      <S.textArea className="auto">
                        <T.table>
                          <div className="tbWrap">
                            <table>
                              <colgroup>
                                <col width="50%"></col>
                                <col width="50%"></col>
                              </colgroup>
                              <thead>
                                <tr>
                                  <td colSpan={2}>이용방법 및 대상</td>
                                </tr>
                                <tr>
                                  <td colSpan={2}>국민</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="db">만 19세 이상</th>
                                  <th className="db">만 7세 ~ 만 18세 이하</th>
                                </tr>
                                <tr>
                                  <td>
                                    사전등록 절차 없이 바로 이용<br></br>
                                    <C.orange>※ 단, 개명 등 인적사항 변경 및 주민등록증 발급 후 30년이 경과된 국민 사전등록 후 이용</C.orange>
                                  </td>
                                  <td>
                                    사전등록 후 이용<br></br>
                                    <C.orange>※ 7세 이상 ~ 14세 미만은 부모 동반 및 가족관계 확인서류 제출 필요</C.orange>
                                  </td>
                                </tr>
                              </tbody>
                              <thead>
                                <tr>
                                  <td colSpan={2}>외국인</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="db">만 17세 이상 등록외국인</th>
                                  <th className="db">17세 이상 단기체류 외국인</th>
                                </tr>
                                <tr>
                                  <td>사전등록 없이 바로 이용</td>
                                  <td>
                                    사전등록 없이 출국심사장에서 바로 이용<br></br>
                                    <C.orange>※ 입국 시 바이오정보 미제공자는 이용 불가</C.orange>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </T.table>
                      </S.textArea>
                    </>
                  }
                  button={
                    <S.btnArea>
                      <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                    </S.btnArea>
                  }
                />
              );         
              case 'declaration':
              return (
                <NewModal
                  className="max"
                  type={EScrollType.TYPE1}
                  title={
                    <S.modalTitle>
                      <PopupTitle>세관/병무/검역신고 안내</PopupTitle>
                    </S.modalTitle>
                  }
                  body={
                    <>
                      <S.textArea className="auto">
                        <DeclarationTab />
                      </S.textArea>
                    </>
                  }
                  button={
                    <S.btnArea>
                      <TaskButton onClick={onHideNewModal}>확인</TaskButton>
                    </S.btnArea>
                  }
                />
              );         
            default:
              return null;
          };
        };

    return (
      <C.wrap className="bdN">
        {onClickModal()}
        <C.body>
          <C.content>
            <T.table>
              <div className="tbWrap vtc">
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        <div className="step-wrap">
                            <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                STEP 01
                            </SpeechBubble>
                            <div className="step-value">
                              <div className="ico"><C.airport /></div>
                              <div className="txt">공항도착</div>
                            </div>
                        </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>탑승수속 카운터 오픈 시간 및 마감 시간을 확인하시어 도착하여 주시기 바랍니다.</p>
                        }/>
                        <ListGlobal level="scd td" body={
                          <p>오픈시간 : 항공기 출발 2시간 전</p>
                        }/>
                        <ListGlobal level="scd td" body={
                          <p>마감시간 : 항공기 출발 30분 전</p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 02
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.ticket /></div>
                                  <div className="txt">탑승권발급</div>
                              </div>
                          </div>
                      </th>
                      <td className="taL">
                        1)
                        <C.linkm>
                          <Link href="#">
                              <a>온라인 체크인</a>
                          </Link>
                        </C.linkm>
                      </td>
                      <td className="taL">2) KIOSK</td>
                      <td className="taL">3) 탑승수속 카운터</td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 03
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.bag /></div>
                                  <div className="txt">수하물 위탁</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>에어프레미아 카운터에서 신분증과 탑승권을 제시하신 후 수하물을 위탁하여 주시기 바랍니다.</p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 04
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.check /></div>
                                  <div className="txt">출발장 입장</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>보안검색: 여행객 및 소지품을 대상으로 보안 검색을 실시합니다.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p>
                            출국심사: 유효한 여권을 소지하고 있는지를 확인합니다.
                            <C.linkm2 onClick={auto_immigration}>
                              <Link href="#">
                                <a>자동출입국심사 이용가능대상<Linkblue /></a>
                              </Link>
                            </C.linkm2>  
                          </p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 05
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.seat /></div>
                                  <div className="txt">항공기 탑승</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>원활한 탑승을 위하여, 신분증 및 탑승권은 개인별로 소지하여 주시기 바랍니다.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p><C.orange>출발 10분 전</C.orange>에 탑승이 마감되오니 탑승시간에 맞추어 해당 탑승구에서 대기하여 주시기 바랍니다.</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
          <C.content>            
            <ListGlobal level="ball gray" body={
              <div>
                <p>출국 전 세관/병무/검역 신고가 필요한 손님은 사전에 각 기관에 신고하여 주시기 바랍니다.</p>                
                <C.linkm2 onClick={declaration}>
                  <Link href="#">
                    <a>세관/병무/검역신고 안내<Linkblue /></a>
                  </Link>
                </C.linkm2>  
              </div>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } 
}

const C = {
  ...SupportStyle.C1,

  airport: styled.div`
    background-image: url(${Airport});
  `,
  ticket: styled.div`
    background-image: url(${Ticket});
  `,
  bag: styled.div`
    background-image: url(${Bag});
  `,
  security: styled.div`
    background-image: url(${Security});
  `,
  seat: styled.div`
    background-image: url(${Seat});
  `,
  check: styled.div`
    background-image: url(${Check});
  `,
  linkm: styled.span`
    margin-left: 4px;
    border-bottom: 1px solid ${BLUE1};

    a {
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }
  `,
  linkm2: styled.div`
    margin-left: 2px;
    a{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }
  `,
  orange: styled.span`
    color: ${ORANGE2}
  `,
};


const T = {
  table: styled.div`

    /* 테이블 공통 css */
    .tbWrap {
      border-bottom: 1px solid ${DARK_BLUE1};

      &.noHead {
        border-top: 1px solid ${DARK_BLUE1};
      }

      &.vtc {
        border-top: 1px solid ${DARK_BLUE1};
      }
    }

    table {
      width: 100%;

      .taL {
        text-align: left !important;
      }
      .taR {
        text-align: right !important;
      }
      .taC {
        text-align: center !important;
      }

      thead th,
      thead td,
      tbody th,
      tbody td {
        padding: 18px 10px;
        color: ${DARK_GRAY1};
        font-size: 20px;
        font-weight: 300;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
        vertical-align: middle;
        word-break: break-all;

        &:last-child {
          border-right: 0;
        }

        &.vtcTop {
          vertical-align: top;
        }
      }

      thead th,
      thead td {
        color: ${WHITE1};
        font-weight: 700;
        background: ${DARK_BLUE1};
        border-right: 1px solid ${DARK_BLUE2};
      }

      thead th {
        border-right-color: ${DARK_BLUE3};
      }

      thead td {
        border-bottom: 1px solid ${DARK_BLUE2};
      }

      thead td.bdBN,
      thead tr:last-child th,
      thead tr:last-child td {
        border-bottom: 0;
      }

      tbody th {
        font-weight: 700;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        border-right: 1px solid ${DARK_BLUE1};

        &.sb {
          border-right-color: ${LIGHT_GRAY6};
        }

        &.db {
          border-bottom-color: ${DARK_BLUE1};
          border-right-color: ${LIGHT_GRAY6};
        }        
      }

      tbody td {
        border-bottom: 1px solid ${LIGHT_GRAY6};
        border-right: 1px solid ${LIGHT_GRAY6};
      }

      tbody tr:last-child td {
        border-bottom: 0;
      }
    }

    .tbWrap.vtc table {
      tbody th {
        padding-left: 10px;
        padding-right: 10px;
        color: ${WHITE1};
        background: ${DARK_BLUE1};
        border-bottom: 1px solid ${DARK_BLUE3};
      }

      tbody td {
        padding-left: 30px;
        padding-right: 10px;
        border-bottom: 1px solid ${LIGHT_GRAY6};
      }
      
      tbody tr:last-child th, 
      tbody tr:last-child td {
        border-bottom: 0;
      }
    }

    @media only screen and (max-width: 767px) {
      table {
        thead th,
        thead td {
          padding: 15px 5px;
          font-size: 14px;
        }

        tbody th,
        tbody td {
          padding: 15px 5px;
          font-size: 13px;
        }
      }

      .tbWrap.vtc table{
        tbody th,
        tbody td {
          padding-left: 5px;
        }
      }
    }
    /* 테이블 공통 css 끝 */




    .step-wrap {
      height: auto;
      margin-left: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .ico > div {
        width: 25px;
        height: 25px;
        background-size: cover;
      }
      
      .step-value {
        margin-left: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .txt{
          margin-left: 5px;
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      .step-wrap {
        margin-left: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .step-value {
          margin-top: 20px;
          margin-left: 0px;
        }
      }
    }

    @media only screen and (max-width: 499px) {
      table {
        col:nth-child(1) {
          width: 34%;
        }
        col:nth-child(2),
        col:nth-child(3),
        col:nth-child(4) {
          width: 22%;
        }
      }

      .step-wrap {
        .step-value {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  `,
}

const S = {
  modalTitle : styled.div`
  `,

  textArea: styled.div`
  `,

  btnArea: styled.div`
  `,

}


export default TabContent;
