import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
  RED1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import Liquid from 'public/images/support/liquid.svg';
import Liquid2 from 'public/images/support/liquid2.svg';
import Liquid3 from 'public/images/support/liquid3.svg';
import Bomb from 'public/images/support/img_bomb.png';
import Danger from 'public/images/support/img_danger.png';
import Fire from 'public/images/support/img_fire.png';
import Nuclear from 'public/images/support/img_nuclear.png';
import Handgun from 'public/images/support/img_handgun.png';
import Sport from 'public/images/support/img_sport.png';
import Sword from 'public/images/support/img_sword.png';
import Safe from 'public/images/support/img_safe.png';
import Tool from 'public/images/support/img_tool.png';
import Kit from 'public/images/support/img_kit.png';
import Drug from 'public/images/support/img_drug.png';
import Portable from 'public/images/support/img_portable.png';
import Device from 'public/images/support/img_device.png';
import Air from 'public/images/support/img_air.png';
import { ListGlobal } from 'src/components';

function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.titleSub>폭발성, 인화성, 유독성 물질</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>폭발물류</td>
                      <td>인화성 물질</td>
                      <td>방사성·전염성·독성 물질</td>
                      <td>기타 위험물질</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="img-type">
                      <td><img src={Bomb} /></td>
                      <td><img src={Fire} /></td>
                      <td><img src={Nuclear} /></td>
                      <td><img src={Danger} /></td>
                    </tr>
                    <tr>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>수류탄, 다이너마이트, 화약류, 연막탄, 조명탄, 폭죽, 지뢰,뇌관,신관,도화선, 발파캡 등 폭발장치</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>성냥, 라이터, 부탄가스 등 인화성 가스, 휘발유·페인트 등 인화성 액체, 70% 이상의 알코올성 음료 등<br></br>(단, 소형안전성냥 및 휴대용라이터는 각 1개에 한해 객실 반입 가능)</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>염소, 표백제, 산화제, 수은, 하수구 청소재제, 독극물, 의료용·상업용 방사성 동위원소, 전염성·생물학적 위험물질 등</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>소화기, 드라이아이스, 최루가스 등<br></br>(단, 드라이아이스는 1인당 2.5kg에 한해 이산화탄소 배출이 용이하도록 안전하게 포장된 경우 항공사 승인 하에 반입이 가능)</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>무기로 사용될 수 있는 물품</C.titleSub>
          <C.content>
            <T.table>
                <div className="tbl-scrolls">
                  <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>스포츠용품류</td>
                      <td>창도검류</td>
                      <td>총기류</td>
                      <td>무술호신용품</td>
                      <td>공구류</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="img-type">
                      <td><img src={Sport} /></td>
                      <td><img src={Sword} /></td>
                      <td><img src={Handgun} /></td>
                      <td><img src={Safe} /></td>
                      <td><img src={Tool} /></td>
                    </tr>
                    <tr>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>야구배트, 하키스틱, 골프채, 당구큐, 빙상용스케이트, 아령, 볼링골, 활, 화살, 양궁 등</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>테니스라켓 등 라켓류, 인라인스케이트, 스케이트 보드, 등산용 스틱, 야구공 등 공기가 주입되지 않은 공구류는 객실 반입 가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>과도, 커터칼, 접이식칼, 면도칼, 작살, 표창, 다트 등</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>안전면도날, 일반 휴대용면도기, 전기면도기 등은 객실 반입 가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>모든 총기 및 총기부품, 총알, 전자충격기, 장난감총 등</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>총기류는 항공사에 소지허가서등을 확인 시키고 총알과 분리 후 위탁가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>쌍절곤, 공격용 격투무기, 경찰봉, 수갑, 호신용스프레이 등</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>호신용스프레이는 1인당 1개(100ml이하)만 위탁가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>도끼, 망치, 못총, 톱, 송곳, 드릴/날길이 6cm를 초과하는 가위</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>스크루드라이버 ·드릴심류/총길이 10cm를 초과하는 렌치 ·스패너 ·펜치류/가축몰이 봉 등</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>일반생활용품 및 의료용품</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                    <col width="20%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <td>생활도구류</td>
                      <td>액체류 위생용품 ·욕실용품 ·의약품류</td>
                      <td>의료장비 및 보행 보조도구</td>
                      <td>구조용품</td>
                      <td>건전지 및 개인용 휴대 전자장비</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="img-type">
                      <td><img src={Kit} /></td>
                      <td><img src={Drug} /></td>
                      <td><img src={Device} /></td>
                      <td><img src={Air} /></td>
                      <td><img src={Portable} /></td>
                    </tr>
                    <tr>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>수저, 포크, 손톱깎이, 긴우산, 감자칼, 병따개, 와인따개, 족집게, 손톱정리가위, 바늘류, 제도용 콤파스 등</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>화장품, 염색약, 퍼머약, 목욕용품, 치약, 콘텍트렌즈용품, 소염제, 의료용 소독 알코올, 내복약, 외용연고 등<br></br>(단, 국제선 객실 반입시 100ml이하만 가능, 위탁수하물인 경우 개별용기 500ml이하로 1인당 2kg(2ℓ) 까지 반입 가능)</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>주사바늘, 체온계, 자동제세동기 등 휴대용 전자의료장비, 인공심박기 등 인체이식장치, 지팡이, 목발, 휠체어, 유모차 등</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>수은체온계는 보호케이스에 안전하게 보관된 경우 객실 반입 가능하며 전동휠체어는 배터리 위험성 등으로 위탁만 가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>소형 산소통(5kg 이하), 구명조끼에 포함된 실린더 1쌍(여분 실린더 1쌍도 가능), 눈사태용 구조배낭 (1인당 1개)<br></br>(단, 안전기준에 맞게 포장되고 해당 항공사 승인 필요)</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>휴대용 건전지, 시계, 계산기, 카메라, 캠코더, 휴대폰, 노트북컴퓨터, MP3 등</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>국제선 객실 내 액체류 반입 기준</C.titleSub>
          <C.content>
            <T.table>
              <table>
                <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                </colgroup>
                <tbody>
                  <tr className="img-type">
                    <td><img src={Liquid} /></td>
                    <td><img src={Liquid2} /></td>
                    <td><img src={Liquid3} /></td>
                  </tr>
                  <tr>
                    <td className="al" colSpan={3}>
                      <ListGlobal level="fst" body={
                        <p>물·음료·식품·화장품 등 액체·분무(스프레이) ·겔류(젤 또는 크림)로 된 물품은 100ml 이하의 개별용기에 담아 1인당 1ℓ 투명 비닐지퍼백 1개에 한해 반입이 가능합니다.</p>
                      }/>
                      <ListGlobal level="fst" body={
                        <p>유아식 및 의약품 등은 항공여정에 필요한 용량에 한하여 반입 허용, 단 의약품 등은 처방전 등 증빙서류를 검색요원에게 제시해 주시기 바랍니다.</p>
                      }/>
                      <ListGlobal level="fst" body={
                        <p>고추장/김치 등 액체류 음식물</p>
                      }/>
                      <ListGlobal level="scd" body={
                        <p>100ml 이하의 개별용기에 담아 1인당 1ℓ 투명 비닐지퍼백 1개에 한하여 반입이 가능합니다.</p>
                      }/>
                      <ListGlobal level="scd" body={
                        <p>위탁수하물로 부치실 것을 권고드리며 발효식품의 특성상 부피가 늘어나는 것을 감안하여 용기의 3분의 2만 채워서 포장해 주시기 바랍니다.</p>
                      }/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
        </C.body>
        <C.body>     
          <C.titleSub>전자담배</C.titleSub>
          <C.content>
            <T.table>
              <table>
                <colgroup>
                  <col width="20%"></col>
                  <col width="40%"></col>
                  <col width="40%"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <td>기준</td>
                    <td>휴대수하물</td>
                    <td>위탁수하물</td>
                  </tr>
                  <tr>
                    <td>전자담배</td>
                    <td>가능</td>
                    <td>불가능</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
          <C.content>
            <ListGlobal level="scd" body={
              <p>일부국가에서는 휴대수하물로 반입을 금지하고 있습니다.</p>
            }/>
            <C.ex>싱가포르, 대만은 휴대 및 위탁수하물 모두 반입 불가</C.ex>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap className="bdN">
        <C.body>
          <C.titleSub>리튬배터리 운송 규정</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                    <col width="28%"></col>
                    <col width="18%"></col>
                    <col width="18%"></col>
                    <col width="18%"></col>
                    <col width="18%"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="cell" rowSpan={2}>기준</td>
                      <td className="cell" colSpan={2}>휴대수하물</td>
                      <td className="cell" colSpan={2}>위탁수하물</td>
                    </tr>
                    <tr>
                      <td className="cell">기기장착</td>
                      <td className="cell">여분</td>
                      <td className="cell">기기장착</td>
                      <td className="cell">여분</td>
                    </tr>
                    <tr>
                      <td>100wh 이하, 2g 이하</td>
                      <td>A</td>
                      <td>5개</td>
                      <td>A</td>
                      <td><C.red>불가</C.red></td>
                    </tr>
                    <tr>
                      <td>100wh 초과 160wh 이하, 2g 초과 8g 이하 (항공사 사전 승인 필요)</td>
                      <td>B</td>
                      <td>2개</td>
                      <td>B</td>
                      <td><C.red>불가</C.red></td>
                    </tr>
                    <tr>
                      <td>160wh 초과, 8g 초과</td>
                      <td colSpan={4}><C.red>운송 불가</C.red></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
          <C.content>
              <ListGlobal level="fst" body={
                <p>A = 총 15개(휴대수하물+위탁수하물), B = 총 10개(휴대수하물+위탁수하물)</p>
              }/>
              <ListGlobal level="fst" body={
                <p>리튬이온배터리의 용량 단위 : Wh, 리튬메탈배터리의 용량 단위 : g</p>
              }/>
          </C.content>
          <C.content>
            <ListGlobal level="fst" body={
              <p>배터리 용량 구하는 법 : 용량(Wh) = 전압(V) X 전류(Ah), 1Ah=1,000mAh</p>
            }/>
            <ListGlobal level="fst" body={
              <p>여분의 리튬배터리 및 보조배터리는 위탁수하물로 운송이 불가하며, 휴대용 전자기기를 위탁수하물로 운송하는 경우 반드시 전원을 꺼주시기 바랍니다.</p>
            }/>
            <ListGlobal level="fst" body={
              <p>리튬배터리로 구동되는 일체의 탈 것류(에어휠, 호버보드, 전기 자전거, 전동 스쿠터, 전동 킥보드, 전동 스케이트 보드 등)는 배터리 용량에 관계없이&nbsp;<C.orange>휴대/위탁수하물 모두 불가</C.orange>합니다.</p>
            }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>전동휠체어</C.titleSub>
          <C.content>
            <T.table>
              <div className="tbl-scrolls">
                <table>
                  <colgroup>
                      <col width="10%"></col>
                      <col width="10%"></col>
                      <col width="40%"></col>
                      <col width="40%"></col>
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="cell" colSpan={2}>기준</td>
                      <td className="cell">배터리 용량</td>
                      <td className="cell">비고</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="cell">건식 배터리</td>
                      <td rowSpan={3}>제한 없음</td>
                      <td rowSpan={3}>
                        <ListGlobal level="fst" body={
                          <p>배터리 분리 가능 여부 확인 필요</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>습식 배터리는 비누출형/누출형 정보 제공 필요</p>
                        }/>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={2} className="cell">습식배터리</td>
                      <td className="cell">비누출형</td>
                    </tr>
                    <tr>
                      <td className="cell">누출형</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="cell">리튬 배터리</td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>배터리 용량:</p>
                        }/>
                        <ListGlobal level="scd" body={
                          <p>1개 구동 시 300wh 이하</p>
                        }/>
                        <ListGlobal level="scd" body={
                          <p>2개 구동 시 개당 160wh 이하<br></br>(분리불가 일체형 제한 없음)</p>
                        }/>
                        <ListGlobal level="fst" body={
                          <p>여분 배터리 허용량:</p>
                        }/>
                        <ListGlobal level="scd" body={
                          <p>300wh 구동 시 1개 가능</p>
                        }/>
                        <ListGlobal level="scd" body={
                          <p>160wh 구동 시 2개 가능</p>
                        }/>
                      </td>
                      <td>
                        <ListGlobal level="fst" body={
                          <p>용량 및 분리 가능 여부 확인 및 배터리 용량 필요<br></br>(분리된 리튬 배터리는 기내로만 반입 가능)</p>
                        }/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.content>
          <C.content>
              <ListGlobal level="fst" body={
                <p>반드시 항공사 사전 승인이 필요하오니 에어프레미아 예약센터(XXXX-XXXX)로 문의 주시기 바랍니다.</p>
              }/>
          </C.content>
        </C.body>
        <C.body>
          <C.titleSub>스마트 가방(Smart Luggage)</C.titleSub>
          <C.content>
            <ListGlobal level="fst" body={
              <p>배터리 용량이 2.7wh(리튬이온) 또는 0.3g(리튬메탈) 이하</p>
            }/>
          </C.content>
          <C.content>
            <T.table>
              <table>
                <colgroup>
                    <col width="20%"></col>
                    <col width="40%"></col>
                    <col width="40%"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <td className="cell">기준</td>
                    <td className="cell">휴대수하물</td>
                    <td className="cell">위탁수하물</td>
                  </tr>
                  <tr>
                    <td>배터리 분리 불가형</td>
                    <td>가능<br></br>(단, 전원 반드시 끄고, 객실 상단 선반에 보관)</td>
                    <td>가능</td>
                  </tr>
                  <tr>
                    <td>배터리 분리 가능형</td>
                    <td>분리된 배터리, 배터리가 분리된 스마트가방</td>
                    <td>배터리가 분리된 스마트가방</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
          <C.content>
            <ListGlobal level="fst" body={
              <p>배터리 용량이 2.7wh(리튬이온) 또는 0.3g(리튬메탈) 초과</p>
            }/>
          </C.content>
          <C.content>
            <T.table>
              <table>
                <colgroup>
                    <col width="20%"></col>
                    <col width="40%"></col>
                    <col width="40%"></col>
                </colgroup>
                <tbody>
                  <tr>
                    <td className="cell">기준</td>
                    <td className="cell">휴대수하물</td>
                    <td className="cell">위탁수하물</td>
                  </tr>
                  <tr>
                    <td>배터리 분리 불가형</td>
                    <td colSpan={2}>불가능</td>
                  </tr>
                  <tr>
                    <td>배터리 분리 가능형</td>
                    <td><C.orange>분리된 배터리*</C.orange>, 배터리가 분리된 스마트가방</td>
                    <td>배터리가 분리된 스마트가방</td>
                  </tr>
                </tbody>
              </table>
            </T.table>
          </C.content>
          <C.content>
            <ListGlobal level="fst" body={
              <p>리튬배터리 운송기준에 따름</p>
            }/>
          </C.content>
        </C.body>
      </C.wrap>
    )
  } 
}

const C = {
  /* 서비스안내 공통css */
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};

    &.bdN {
      border-top: 0;
    }
  `,
  body: styled.div`
    margin-top: 100px;

    &:first-of-type {
      margin-top: 30px;
    }
  `,
  titleMain: styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  titleSub: styled.h3`
    font-size: 21px;
    font-weight: 700;

    @media only screen and (max-width: 767px){
      font-size: 16px;
      letter-spacing: -0.32px;
      margin-top: 60px;
    }
  `,
  content: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.8em;

    &.mt60 {
      margin-top: 60px;
    }
    .ex{
    
    }

    @media only screen and (max-width: 767px){
      margin-top: 40px;
      font-size: 14px;
      letter-spacing: -0.28px;

      &.mt60 {
        margin-top: 40px;
      }
      .ex{
        font-size:14px;
      }
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */


  red: styled.span`
    color: ${RED1};
  `,
  orange: styled.span`
    color: ${ORANGE2};
  `,
  ex: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    padding-left: 42px;
    color: ${RED1};
    &:before {
      content: "예)";
      display: block;
      position: absolute;
      top: 0;
      left: 14px;
      color: ${RED1};
    }
    @media only screen and (max-width: 767px) { 
      font-size:14px;
      &:before {
        font-size:14px;
      }
    }
  `,
}
    
const T = {
  table: styled.div`
    .taL,
    .taL{
    
    }
    .taR,
    .taR{
    
    }
    table {
    width: 100%;
    th,
    thead td,
    td strong {
      color: ${DARK_GRAY1};
      font-size: 18px;
      font-weight: bold;
      line-height: 1.6;
      letter-spacing: -0.3px;
      text-align: center;
    }
    thead td,
    .cell{
      color:#fff;
      background:#1b2b45;
      border:1px solid #324158;
      padding-left:18px !important;
      padding-right:18px !important;
      text-align:center !important;
    }
    td strong {
      margin-top: 30px;
      display: block;
      &:first-of-type {
      margin-top: 0;
      }
    }
    td{
      font-size: 18px;
      font-weight: 400;
      line-height: 1.9;
      letter-spacing: -0.3px;
      text-align: center;
      vertical-align: middle;
      position: relative;
      &>p {
      margin-top: 18px;
      }
      &>p:first-of-type {
      margin-top: 0;
      }
      .txt {
      margin-top: 10px;
      p {
          position: relative;
          color: ${LIGHT_GRAY8};
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
    th:first-child,      
    td:first-child{
      
      vertical-align: middle;
    }
    th:last-child,
    td:last-child{
      
    }
    thead th,
    thead td{
      padding: 18px;
      word-break:keep-all;
      border-bottom: 1px solid ${DARK_GRAY1};
    }
    tbody th,
    tbody td{
      padding: 18px;
      word-break:keep-all;
      border-bottom: 1px solid ${LIGHT_GRAY5};
      text-align:left;
    }
    tbody td.al{
      text-align:left;
    }
    thead{
      td{
        vertical-align:middle;
        text-align:center;
      }
    }
    .img-type{
      td{
        text-align:center;
      }
    }
  }
  @media only screen and (max-width: 767px) { 
    .tbl-scrolls{
      width:100%;
      height:auto;
      overflow:hidden;
      overflow-x:auto;
      table{
        min-width:900px;
        thead{
          td{
            padding:10px;
            font-size:14px;
            height:30px;
            vertical-align:middle;
            text-align:center;
          }
        }
        td{
          padding:10px;
          font-size:14px;
          text-align:left;
        }
        .img-type{
          td{
            text-align:center;
          }
        }
        
      }
    }
    table{
      td{
        font-size:14px;
        padding:10px !important;
      }
    }
  }
`,
}

export default TabContent;
