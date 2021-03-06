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
                                  <div className="txt">????????????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                          <ListGlobal level="fst td" body={
                              <p>???????????? ????????? ?????? ?????? ??? ?????? ????????? ??????????????? ???????????? ????????? ????????????.</p>
                          }/>
                          <ListGlobal level="scd td" body={
                              <p>???????????? : ????????? ?????? 2?????? ???</p>
                          }/>
                          <ListGlobal level="scd td" body={
                              <p>???????????? : ????????? ?????? 30??? ???</p>
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
                                  <div className="txt">???????????????</div>
                              </div>
                          </div>
                      </th>
                      <td className="taL">
                        1)
                        <C.linkm>
                          <Link href="#">
                              <a>????????? ?????????</a>
                          </Link>
                        </C.linkm>
                      </td>
                      <td className="taL">2) KIOSK</td>
                      <td className="taL">3) ???????????? ?????????</td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 03
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.bag /></div>
                                  <div className="txt">????????? ??????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>?????????????????? ??????????????? ???????????? ???????????? ???????????? ??? ???????????? ???????????? ????????? ????????????.</p>
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
                                  <div className="txt">????????????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>????????? ???????????? ???????????? ???????????? ???????????? ??? ?????? ???????????? ???????????? ???????????? ????????? ????????? ????????????.</p>
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
                                  <div className="txt">????????? ??????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>????????? ????????? ?????????, ????????? ??? ???????????? ???????????? ???????????? ????????? ????????????.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p><C.orange>?????? 10??? ???</C.orange>??? ????????? ??????????????? ??????????????? ????????? ?????? ??????????????? ???????????? ????????? ????????????.</p>
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
                      <PopupTitle>????????????????????? ??????????????????</PopupTitle>
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
                                  <td colSpan={2}>???????????? ??? ??????</td>
                                </tr>
                                <tr>
                                  <td colSpan={2}>??????</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="db">??? 19??? ??????</th>
                                  <th className="db">??? 7??? ~ ??? 18??? ??????</th>
                                </tr>
                                <tr>
                                  <td>
                                    ???????????? ?????? ?????? ?????? ??????<br></br>
                                    <C.orange>??? ???, ?????? ??? ???????????? ?????? ??? ??????????????? ?????? ??? 30?????? ????????? ?????? ???????????? ??? ??????</C.orange>
                                  </td>
                                  <td>
                                    ???????????? ??? ??????<br></br>
                                    <C.orange>??? 7??? ?????? ~ 14??? ????????? ?????? ?????? ??? ???????????? ???????????? ?????? ??????</C.orange>
                                  </td>
                                </tr>
                              </tbody>
                              <thead>
                                <tr>
                                  <td colSpan={2}>?????????</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="db">??? 17??? ?????? ???????????????</th>
                                  <th className="db">17??? ?????? ???????????? ?????????</th>
                                </tr>
                                <tr>
                                  <td>???????????? ?????? ?????? ??????</td>
                                  <td>
                                    ???????????? ?????? ????????????????????? ?????? ??????<br></br>
                                    <C.orange>??? ?????? ??? ??????????????? ??????????????? ?????? ??????</C.orange>
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
                      <TaskButton onClick={onHideNewModal}>??????</TaskButton>
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
                      <PopupTitle>??????/??????/???????????? ??????</PopupTitle>
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
                      <TaskButton onClick={onHideNewModal}>??????</TaskButton>
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
                              <div className="txt">????????????</div>
                            </div>
                        </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>???????????? ????????? ?????? ?????? ??? ?????? ????????? ??????????????? ???????????? ????????? ????????????.</p>
                        }/>
                        <ListGlobal level="scd td" body={
                          <p>???????????? : ????????? ?????? 2?????? ???</p>
                        }/>
                        <ListGlobal level="scd td" body={
                          <p>???????????? : ????????? ?????? 30??? ???</p>
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
                                  <div className="txt">???????????????</div>
                              </div>
                          </div>
                      </th>
                      <td className="taL">
                        1)
                        <C.linkm>
                          <Link href="#">
                              <a>????????? ?????????</a>
                          </Link>
                        </C.linkm>
                      </td>
                      <td className="taL">2) KIOSK</td>
                      <td className="taL">3) ???????????? ?????????</td>
                    </tr>
                    <tr>
                      <th>
                          <div className="step-wrap">
                              <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                                  STEP 03
                              </SpeechBubble>
                              <div className="step-value">
                                  <div className="ico"><C.bag /></div>
                                  <div className="txt">????????? ??????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>?????????????????? ??????????????? ???????????? ???????????? ???????????? ??? ???????????? ???????????? ????????? ????????????.</p>
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
                                  <div className="txt">????????? ??????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>????????????: ????????? ??? ???????????? ???????????? ?????? ????????? ???????????????.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p>
                            ????????????: ????????? ????????? ???????????? ???????????? ???????????????.
                            <C.linkm2 onClick={auto_immigration}>
                              <Link href="#">
                                <a>????????????????????? ??????????????????<Linkblue /></a>
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
                                  <div className="txt">????????? ??????</div>
                              </div>
                          </div>
                      </th>
                      <td colSpan={3}>
                        <ListGlobal level="fst td" body={
                          <p>????????? ????????? ?????????, ????????? ??? ???????????? ???????????? ???????????? ????????? ????????????.</p>
                        }/>
                        <ListGlobal level="fst td" body={
                          <p><C.orange>?????? 10??? ???</C.orange>??? ????????? ??????????????? ??????????????? ????????? ?????? ??????????????? ???????????? ????????? ????????????.</p>
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
                <p>?????? ??? ??????/??????/?????? ????????? ????????? ????????? ????????? ??? ????????? ???????????? ????????? ????????????.</p>                
                <C.linkm2 onClick={declaration}>
                  <Link href="#">
                    <a>??????/??????/???????????? ??????<Linkblue /></a>
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

    /* ????????? ?????? css */
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
    /* ????????? ?????? css ??? */




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
