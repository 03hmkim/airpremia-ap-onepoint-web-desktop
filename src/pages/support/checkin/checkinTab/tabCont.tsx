import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import { useModal } from 'src/hooks';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { 
  SpeechBubble,
  ListGlobal,
  NewModal,
  PopupTitle,
} from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';
import OneBaggage from 'public/images/support/onebaggage.png';
import TwoBaggage from 'public/images/support/twobaggage.png';
import NoBaggage from 'public/images/support/nobaggage.png';
import Stroller from 'public/images/support/stroller.png';
import BaggageStroller from 'public/images/support/baggageStroller.png';
import Link from 'next/link'
import Airport from 'public/images/support/ico_airport_black.png'
import Bag from 'public/images/support/ico_bag_black.png'
import Seat from 'public/images/support/ico_seat_black.png'
import Security from 'public/images/support/ico_security_black.png'
import Ticket from 'public/images/support/ico_ticket_black.png'
import Check from 'public/images/support/ico_check_black.png'
import Linkblue from 'public/images/support/btn_txt_link_blue.svg';
import DeclarationTab from './declarationTab';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.body>
          <T.table>
            <table>
              <colgroup>
                <col width="5%"></col>
                <col width="30%"></col>
                <col width=""></col>
              </colgroup>
              <tbody>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 01
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.airport></C.airport></div>
                              <div className="txt">공항도착</div>
                          </div>
                      </div>

                  </th>
                  <td>
                      <ListGlobal level="fst" body={
                          <p>탑승수속 카운터 오픈 시간 및 마감 시간을 확인하시어 도착하여 주시기 바랍니다.</p>
                      }/>
                      <ListGlobal level="scd" body={
                          <p>오픈시간 : 항공기 출발 2시간 전</p>
                      }/>
                      <ListGlobal level="scd" body={
                          <p>마감시간 : 항공기 출발 30분 전</p>
                      }/>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 02
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.ticket>&nbsp;</C.ticket></div>
                              <div className="txt">탑승권발급</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ul>
                        <li>
                            1)
                            <C.linkm>
                                <Link href="#">
                                    <a>온라인 체크인</a>
                                </Link>
                            </C.linkm>
                        </li>
                        <li>2)KIOSK</li>
                        <li>3)탑승수속 카운터</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 03
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.bag></C.bag></div>
                              <div className="txt">수하물 위탁</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>에어프레미아 카운터에서 신분증과 탑승권을 제시하신 후 수하물을 위탁하여 주시기 바랍니다.</p>
                    }/>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 04
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.security></C.security></div>
                              <div className="txt">보안검색</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>출발장 입구에서 신분증과 탑승권을 제시하신 후 보안 검색대를 통과하여 탑승구로 이동해 주시기 바랍니다.</p>
                    }/>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 05
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.seat></C.seat></div>
                              <div className="txt">항공기 탑승</div>
                          </div>
                      </div>
                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>원활한 탑승을 위하여, 신분증 및 탑승권은 개인별로 소지하여 주시기 바랍니다.</p>
                    }/>
                    <ListGlobal level="fst" body={
                      <p><C.orange>출발 10분 전</C.orange>에 탑승이 마감되오니 탑승시간에 맞추어 해당 탑승구에서 대기하여 주시기 바랍니다.</p>
                    }/>
                  </td>
                </tr>
              </tbody>
            </table>
          </T.table>
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
                              <tr>
                                <td>만 19세 이상</td>
                                <td>만 7세 ~ 만 18세 이하</td>
                              </tr>
                            </thead>
                            <tbody>
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
                              <tr>
                                <td>만 17세 이상 등록외국인</td>
                                <td>17세 이상 단기체류 외국인</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>사전등록 없이 바로 이용</td>
                                <td>
                                  사전등록 없이 출국심사장에서 바로 이용<br></br>
                                  <C.orange>※ 입국 시 바이오정보 미제공자는 이용 불가</C.orange>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </T.table>
                        
                      </S.textArea>
                    </>
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
                />
              );         
            default:
              return null;
          };
        };

    return (
      <C.wrap>
        {onClickModal()}
        <C.body>
        <T.table>
            <table>
              <colgroup>
                <col width="5%"></col>
                <col width="30%"></col>
                <col width=""></col>
              </colgroup>
              <tbody>
                <tr>
                  <th></th>
                  <th>
                    <div className="step-wrap">
                        <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                            STEP 01
                        </SpeechBubble>
                        <div className="step-value">
                          <div className="ico"><C.airport></C.airport></div>
                          <div className="txt">공항도착</div>
                        </div>
                    </div>
                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>탑승수속 카운터 오픈 시간 및 마감 시간을 확인하시어 도착하여 주시기 바랍니다.</p>
                    }/>
                    <ListGlobal level="scd" body={
                      <p>오픈시간 : 항공기 출발 2시간 전</p>
                    }/>
                    <ListGlobal level="scd" body={
                      <p>마감시간 : 항공기 출발 30분 전</p>
                    }/>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 02
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.ticket>&nbsp;</C.ticket></div>
                              <div className="txt">탑승권발급</div>
                          </div>
                      </div>

                  </th>
                  <td>
                      <ul>
                          <li>
                              1)
                              <C.linkm>
                                  <Link href="#">
                                      <a>온라인 체크인</a>
                                  </Link>
                              </C.linkm>
                          </li>
                          <li>2)KIOSK</li>
                          <li>3)탑승수속 카운터</li>
                      </ul>

                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 03
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.bag></C.bag></div>
                              <div className="txt">수하물 위탁</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>에어프레미아 카운터에서 신분증과 탑승권을 제시하신 후 수하물을 위탁하여 주시기 바랍니다.</p>
                    }/>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 04
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.check></C.check></div>
                              <div className="txt">출발장 입장</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>보안검색: 여행객 및 소지품을 대상으로 보안 검색을 실시합니다.</p>
                    }/>
                    <ListGlobal level="fst" body={
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
                  <th></th>
                  <th>
                      <div className="step-wrap">
                          <SpeechBubble backgroundColor={BLUE1} arrowPosition="right">
                              STEP 05
                          </SpeechBubble>
                          <div className="step-value">
                              <div className="ico"><C.seat></C.seat></div>
                              <div className="txt">항공기 탑승</div>
                          </div>
                      </div>

                  </th>
                  <td>
                    <ListGlobal level="fst" body={
                      <p>원활한 탑승을 위하여, 신분증 및 탑승권은 개인별로 소지하여 주시기 바랍니다.</p>
                    }/>
                    <ListGlobal level="fst" body={
                      <p><C.orange>출발 10분 전</C.orange>에 탑승이 마감되오니 탑승시간에 맞추어 해당 탑승구에서 대기하여 주시기 바랍니다.</p>
                    }/>
                  </td>
                </tr>
              </tbody>
            </table>
          </T.table>
          <C.ntg>
            ※ 출국 전 세관/병무/검역 신고가 필요한 손님은 사전에 각 기관에 신고하여 주시기 바랍니다.
            <C.linkm2 onClick={declaration}>
              <Link href="#">
                <a>세관/병무/검역신고 안내<Linkblue /></a>
              </Link>
            </C.linkm2>  
          </C.ntg>
        </C.body>
      </C.wrap>
    )
  } 
}


// const S = {
//   container: styled.div``,
//   ul: styled.ul`
//     padding-bottom: 30px;
//   `,
//   li: styled.li`
//     margin-left: 10px;
//     margin-bottom: 15px;
//     padding-left: 10px;
//     position: relative;
//     font-size: 15px;
//     &::before{
//       content:"";
//       width: 4px;
//       height: 4px;
//       top: 5px;
//       left: 0px;
//       text-indent: -9999px;
//       display: block;
//       position: absolute;
//       background-color: ${DARK_GRAY1};
//       border-radius: 50%
//     }
//     &:first-child{
//       margin-top: 20px;
//     }
//     &:last-child{
//       margin-bottom: 0px;
//     }
//   `,

// };


const C = {
  airport: styled.div`
    background-image: url(${Airport});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  ticket: styled.div`
    background-image: url(${Ticket});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  bag: styled.div`
    background-image: url(${Bag});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  security: styled.div`
    background-image: url(${Security});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  seat: styled.div`
    background-image: url(${Seat});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  check: styled.div`
    background-image: url(${Check});
    width:20px;
    height: 20px;
    background-size: cover;
  `,
  oneBaggage: styled.div`
    margin: 0 auto;
    width: 58px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${OneBaggage});
  `,
  oneBText:styled.span`
    margin-top: 15px;
  `,
  twoBaggage: styled.div`
    margin: 0 auto;
    width: 127px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${TwoBaggage});
  `,
  twoBText:styled.span`
    margin-top: 15px;
    margin-left: -68px;
  `,
  noBaggage: styled.div`
    margin: 0 auto;
    width: 98px;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${NoBaggage});
  `,
  stroller: styled.div`
    margin: 0 auto;
    width: 94px;
    height: 94px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Stroller});
  `,
  baggageStroller: styled.div`
    margin: 0 auto;
    width: 125px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BaggageStroller});
  `,
  bSText:styled.span`
    margin-top: 5px;
    margin-left: -52px;
  `,
  ex: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    padding-left: 42px;
    &:before {
      content: "예)";
      display: block;
      position: absolute;
      top: 0;
      left: 14px;
      color: ${DARK_GRAY1};
    }
  `,
  wrap: styled.div`
    margin-top: 70px;
    @media only screen and (max-width: 767px) { 
        margin-top: 30px;
    }
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  sub: styled.h5`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  `,
  content: styled.div`
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
    &:first-child{
      margin-top: 20px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  `,
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    line-height: 1.8em;
    position: relative;
  `,
  linkm: styled.span`
    margin-left: 2px;
    border-bottom: 2px solid ${BLUE1};
    a{
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
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
  stit: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  subtit: styled.p`
    font-size: 15px;
    margin: 20px 0px;
  `,
  orange: styled.span`
    color: ${ORANGE2}
  `,
};

const T = {
  table: styled.div`
    table {
      width: 100%;
      thead td{
        color: ${DARK_GRAY1};
        font-size: 18px;
        line-height: 1.36em;
        font-weight: 700;
        text-align: left;
      }
      td{
        font-size: 18px;
        line-height: 1.36em;
        font-weight: 400;
        text-align: left;
        position: relative;
        ul{
          width:100%;
          height:auto;
          overflow:Hidden;
          display:flex;
          justify-content:space-between;
          align-items:center;
          li{
          }
        }
      }
      thead td, thead th{
        padding: 18px 0;
        border-bottom: 2px solid ${LIGHT_GRAY8};
      }
      tbody td, tbody th{
        padding: 18px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
    }
    .step-wrap{
        width:100%;
        height:auto;
        overflow:hidden;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        .step-value{
            margin-left:10px;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            .ico{
                
            }
            .txt{
                margin-left:5px;
            }
        }
    }
    @media only screen and (max-width: 767px) { 
      table{
        col:nth-child(1){
          display:none;
        }
        col:nth-child(2){
          width:110px;
        }
        tr{
          th{
            font-size:14px;
            &:nth-child(1){
              display:none;
            }
          }
          td{
            font-size:14px;
            padding:10px 5px;
            ul{
              display:block;
              li{
                line-height: 28px;
                font-size:14px;
                a{
                    font-size:14px;
                }
                &:first-child{
                  margin-top:0;
                }
              }
            }
          }
        }
      }
      .step-wrap{
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .step-value{
            margin-left:0px;
            margin-top:20px;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            .ico{
                
            }
            .txt{
                margin-left:5px;
            }
        }
      }
      
    }
  `,
  }

  const S = {
    modalTitle : styled.div`
    `,
  
    textArea: styled.div`
      height: 100%;
      &.auto{
        padding: 0 50px 50px;
        overflow-y: auto;
        box-sizing: border-box;
      }
    `,
  
  }
export default TabContent;
