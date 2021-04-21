import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
  RED1,
} from '@airpremia/cdk/styles/colors';
import Liquid from 'public/images/support/img_liquid.svg';
import Bomb from 'public/images/support/img_bomb.png';
import Danger from 'public/images/support/img_danger.png';
import Fire from 'public/images/support/img_fire.png';
import Nuclear from 'public/images/support/img_nuclear.png';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
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
import Caution from 'public/images/support/ico_caution.svg';
import Link from 'next/link'


function additionalServiceprohibition(){
  return (
    <Container>
      <ComTitle
        title="수하물"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>항공기 반입 금지 물품 안내</C.titleMain>
          <C.sb>
            <C.p>- 하기 기준은 대한민국 공항 적용 기준이며, 목적지가 외국 공항일 경우 추가 금지 물품을 항공사 또는 여행사를 통하여 사전에 반드시 확인 바랍니다.</C.p>
            <C.p>- 하기 외 제한 물품은&nbsp;
            <C.linkpage>
                <a href="https://avsec.ts2020.kr/avsc/main.do" target="_blank">
                  한국교통안전공단
                </a>
            </C.linkpage>
            을 통하여 확인해 주시기 바랍니다.</C.p>
          </C.sb>
          <C.sb>
            <C.sub>기내 반입, 위탁 수하물 모두 불가한 물품</C.sub>
          </C.sb>
            <C.igr>
              <C.img><img src={Bomb} /></C.img>
              <C.group>
                <C.bdt>폭발물류</C.bdt>
                <C.desc>수류탄, 다이너마이트, 화약류, 연막탄, 조명탄, 폭죽, 지뢰,<br />뇌관, 신관, 도화선, 발파캡 등 폭발장치</C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Fire} /></C.img>
              <C.group>
                <C.bdt>인화성 물질</C.bdt>
                <C.desc>성냥, 라이터, 부탄가스 등 인화성가스, 휘발유·페인트 등 인화성<br />액체, 70% 이상의 알코올성 음료 등​ (단, 소형 안전성냥 및 휴대<br />용라이터는 각 1개에 한해 객실 반입 가능)</C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Nuclear} /></C.img>
              <C.group>
                <C.bdt>방사성·전염성·독성 물질</C.bdt>
                <C.desc>염소, 표백제, 산화제, 수은, 하수구 청소재제, 독극물, 의료용·<br />상업용 방사성 동위원소, 전염성·생물학적 위험물질 등​</C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Danger} /></C.img>
              <C.group>
                <C.bdt>기타 위험물질</C.bdt>
                <C.desc>소화기, 드라이아이스, 최루가스 등​<br />(단, 드라이아이스는 1인당 2.5㎏에 한해 이산화탄소배출이<br />용이하도록 안전하게 포장된 경우 항공사 승인 하에 반입이 가능)</C.desc>
              </C.group>
            </C.igr>
            <C.line></C.line>
            <C.sbody>
              <C.sub>카운터에서 위탁 수하물로 보내야하는 물품</C.sub>
            </C.sbody>
            <C.igr>
              <C.img><img src={Sport} /></C.img>
              <C.group>
                <C.bdt>스포츠용품류</C.bdt>
                <C.desc>
                  <C.btg>야구배트, 하키스틱, 골프채, 당구큐, 빙상용스케이트, 아령,<br /> 볼링공, 활, 화살, 양궁 등​</C.btg>
                  <C.btg>테니스라켓 등 라켓류, 인라인스케이트, 스케이트 보드, 등산<br />용 스틱, 야구공 등 공기가 주입되지 않은 공구류는 객실 반입 가능</C.btg>
                </C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Sword} /></C.img>
              <C.group>
                <C.bdt>창, 도검류</C.bdt>
                <C.desc>
                  <C.btg>과도, 커터칼, 접이식칼, 면도칼, 작살, 표창, 다트 등​​​</C.btg>
                  <C.btg>안전면도날, 일반 휴대용면도기, 전기면도기 등은 객실 반입<br />가능</C.btg>
                </C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Handgun} /></C.img>
              <C.group>
                <C.bdt>총기류</C.bdt>
                <C.desc>
                  <C.btg>모든 총기 및 총기부품, 총알, 전자충격기, 장난감총 등​​</C.btg>
                  <C.btg>총기류는 소지허가서 등을 제출해 확인 받은 뒤 총알과 분리<br />후 위탁가능</C.btg>
                </C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Safe} /></C.img>
              <C.group>
                <C.bdt>무술호신용품</C.bdt>
                <C.desc>
                  <C.btg>쌍절곤, 공격용 격투무기, 경찰봉, 수갑, 호신용 스프레이 등​​</C.btg>
                  <C.btg>호신용스프레이는 1인당 1개(100㎖이하)만 위탁가능</C.btg>
                </C.desc>
              </C.group>
            </C.igr>
            <C.igr>
              <C.img><img src={Tool} /></C.img>
              <C.group>
                <C.bdt>공구류</C.bdt>
                <C.desc>
                  <C.btg>도끼, 망치, 못총, 톱, 송곳, 드릴/날길이 6cm를 초과하는 가위<br />·스크루드라이버·드릴심류/총길이 10cm를 초과하는 렌치·스패너·<br />펜치류/가축몰이 봉 등</C.btg>
                </C.desc>
              </C.group>
            </C.igr>
            <C.line></C.line>
        </C.body>
        <C.sbody>
          <C.sub>기내 반입, 위탁 수하물 모두 가능한 물품</C.sub>
        </C.sbody>
        <C.igr>
          <C.img><img src={Kit} /></C.img>
          <C.group>
            <C.bdt>생활도구류</C.bdt>
            <C.desc>
              <C.btg>수저, 포크, 손톱깎이, 긴우산, 감자칼, 병따개, 와인따개, 족집게,<br />손톱정리가위, 바늘류, 제도용 콤파스 등</C.btg>
            </C.desc>
          </C.group>
        </C.igr>
        <C.igr>
          <C.img><img src={Drug} /></C.img>
          <C.group>
            <C.bdt>액체류 위생용품·욕실용품·의약품류​</C.bdt>
            <C.desc>
              <C.btg>화장품, 염색약, 퍼머약, 목욕용품, 치약, 콘텍트렌즈용품, 소염제,<br />의료용 소독 알코올, 내복약, 외용연고 등​<br />(단, 국제선 객실 반입시 100㎖ 이하만 가능, 위탁 수하물인 경우<br />개별 용기 500㎖ 이하로 1인당 2kg(2ℓ)까지 반입 가능)​</C.btg>
            </C.desc>
          </C.group>
        </C.igr>
        <C.igr>
          <C.img><img src={Device} /></C.img>
          <C.group>
            <C.bdt>의료장비 및 ​보행 보조 도구</C.bdt>
            <C.desc>
              <C.btg>주사바늘, 체온계, 자동제세동기 등 휴대용 전자의료장비,<br />인공심박기 등 인체이식장치, 지팡이, 목발, 휠체어, 유모차 등​​</C.btg>
              <C.btg>수은체온계는 보호케이스에 안전하게 보관된 경우 객실 반입<br />가능하며 전동휠체어는 배터리 위험성 등으로 위탁만 가능​</C.btg>
            </C.desc>
          </C.group>
        </C.igr>
        <C.igr>
          <C.img><img src={Air} /></C.img>
          <C.group>
            <C.bdt>구조용품</C.bdt>
            <C.desc>
              <C.btg>소형 산소통(5kg 이하), 구명조끼에 포함된 실린더 1쌍(여분<br />실린더 1쌍도 가능), 눈사태용 구조배낭 (1인당 1개)<br />​(단, 안전기준에 맞게 포장한 상태로 승인 필요)</C.btg>
            </C.desc>
          </C.group>
        </C.igr>
        <C.igr>
          <C.img><img src={Portable} /></C.img>
          <C.group>
            <C.bdt>건전지 및 개인용 휴대 전자장비</C.bdt>
            <C.desc>
              <C.btg>휴대용 건전지, 시계, 계산기, 카메라, 캠코더, 휴대폰, 노트북<br />컴퓨터, MP3 등</C.btg>
            </C.desc>
          </C.group>
        </C.igr>
        <C.line></C.line>
        <C.sbody>
          <C.sub>기내에 액체류를 휴대하려면?</C.sub>
        </C.sbody>
        <C.tmi><C.center><Liquid /></C.center></C.tmi>
        <C.tmi><C.desc><C.bold>물·음료·식품·화장품</C.bold> 등 액체·분무(스프레이) ·겔류(젤 또는 크림)로 된 물품은 100㎖ 이하의 개별용기에 담아 1인당 1ℓ 투명 비닐지퍼백 1개에 한해 반입이 가능합니다.</C.desc></C.tmi>
        <C.tmi><C.desc><C.bold>유아식 및 의약품 등</C.bold>은 항공여정에 필요한 용량에 한하여 반입이 허용됩니다. 단, 의약품은 처방전 등 증빙 서류를 검색요원에게 제시해야 합니다.</C.desc></C.tmi>
        <C.tmi><C.desc><C.bold>고추장/김치 등 액체류 음식물</C.bold></C.desc></C.tmi>
        <C.desc>- 기내 액체류 반입 규정과 동일하게 적용</C.desc>
        <C.desc>- 위탁 수하물로 부치실 것을 권고드리며 발효식품의 특성상 부피가 늘어나는 것을 감안하여 용기의 3분의 2만 채워서 포장해 주시기 바랍니다.</C.desc>
          <C.sbody>
            <C.title>리튬배터리 운송기준</C.title>
            <C.sb>
              <T.table>
                <table>
                  <colgroup>
                    <col width="20%"></col>
                    <col width=""></col>
                    <col width="240px"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>휴대수하물</td>
                      <td>위탁 수하물</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>100Wh 이하, 리튬 함량 2g 이하</th>
                      <td>
                        <p>기기 장착 : A</p>
                        <p>여분 : 5개</p>
                      </td>
                      <td>
                        <p>기기 장착 : A</p>
                        <p><C.red>여분 : 불가</C.red></p>
                      </td>
                    </tr>
                    <tr>
                      <th>100Wh 초과 ~ 160Wh 이하,<br />리튬 함량 8g 이하</th>
                      <td>
                        <p>기기 장착 : B</p>
                        <p>여분 : 2개</p>
                      </td>
                      <td>
                        <p>기기 장착 : B</p>
                        <p><C.red>여분 : 불가</C.red></p>
                      </td>
                    </tr>
                    <tr>
                      <th>160Wh 초과, 리튬 함량 8g 초과</th>
                      <td><C.red>운송 불가</C.red></td>
                      <td><C.red>운송 불가</C.red></td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
              <C.linehgt>
                <p>* A = 총 15개(휴대수하물+위탁수하물), B = 총 10개(휴대수하물+위탁수하물)</p>
                <p>** 리튬이온배터리의 용량 단위 : Wh, 리튬메탈배터리의 용량 단위 : g​</p>
              </C.linehgt>
            </C.sb>
            <C.tmi>
              <C.desc>
                <p>- 배터리 용량 구하는 법 : 용량(Wh) = 전압(V) X 전류(Ah),  1Ah=1,000mAh​</p>
                <p>- 여분의 리튬배터리 및 보조배터리는 위탁수하물로 운송이 불가하며, 휴대용 전자기기를 위탁수하물로 운송하는 경우  반드시 전원을 꺼주시기 바랍니다.​</p>
                <p>- 리튬배터리로 구동되는 일체의 탈 것류(에어휠, 호버보드, 전기 자전거, 전동 스쿠터, 전동 킥보드, 전동 스케이트 보드 등)는 배터리 용량에 관계없이 휴대/위탁수하물 모두 불가합니다.​​</p>
              ​</C.desc>
            </C.tmi>
          </C.sbody>
          <C.sbody>
            <C.title>전동휠체어</C.title>
            <C.sb>
              <C.subtit>건식, 습식 배터리(누출형/비누출형)</C.subtit>
              <T.table>
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>배터리 용량</th>
                      <td>제한없음</td>
                    </tr>
                    <tr>
                      <th>비고</th>
                      <td>배터리 분리 가능 여부 확인 필요<br />(분리된 배터리는 위탁 운송)</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.sb>
          </C.sbody>
          <C.sbody>
            <C.sb>
              <C.subtit>리튬 배터리</C.subtit>
              <T.table>
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>배터리용량</th>
                      <td>
                        <p>1개 구동 시: 300Wh 이하</p>
                        <p>2개 구동 시: 개당 160Wh 이하</p>
                        <p><C.red>분리불가 일체형 제한 없음</C.red></p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>여분 배터리 허용량</p>
                      </th>
                      <td>
                        <p>1개 가능: 300Wh 구동 시</p>
                        <p>2개 가능: 160Wh 구동 시</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>비고</p>
                      </th>
                      <td>
                        <p>용량 및 분리 가능 여부 확인 및 배터리 용량 필요</p>
                        <p><C.red>(분리된 리튬 배터리는 기내로만 반입 가능)</C.red></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
              <C.rf>* 반드시 항공사 사전 승인이 필요하오니 에어프레미아 예약센터(02-6953-6115)로 문의 주시기 바랍니다.​</C.rf>
            </C.sb>
          </C.sbody>
          <C.sbody>
            <C.title>스마트 가방</C.title>
            <C.sb>
              <C.subtit>배터리 용량이 2.7wh(리튬이온) 또는 0.3g(리튬메탈) 이하</C.subtit>
              <T.table>
                <table>
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>휴대 수화물</td>
                      <td>위탁 수화물</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>배터리 분리 불가형</th>
                      <td>
                        <p><C.blue>가능</C.blue></p>
                        <p>(단, 전원 반드시 끄고, 객실 상단 선반에 보관)</p>
                      </td>
                      <td><C.blue>가능</C.blue></td>
                    </tr>
                    <tr>
                      <th>배터리 분리 가능형</th>
                      <td>
                        <p>분리된 배터리, 배터리가 분리된 스마트가방</p>
                        <p>(분리된 배터리는 반드시 기내에 보관)</p>
                      </td>
                      <td>배터리가 분리된 스마트가방</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.sb>
          </C.sbody>
          <C.sbody>
            <C.sb>
              <C.subtit>배터리 용량이 2.7wh(리튬이온) 또는 0.3g(리튬메탈) 초과</C.subtit>
              <T.table>
                <table>
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>휴대 수화물</td>
                      <td>위탁 수화물</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>배터리 분리 불가형</th>
                      <td>
                        <p><C.red>불가</C.red></p>
                        <p>(단, 전원 반드시 끄고, 객실 상단 선반에 보관)</p>
                      </td>
                      <td><C.red>불가</C.red></td>
                    </tr>
                    <tr>
                      <th>배터리 분리 가능형</th>
                      <td>
                        <p><C.red>분리된 배터리*</C.red>, 배터리가 분리된 스마트가방</p>
                        <p>(분리된 배터리는 반드시 기내에 보관)</p>
                      </td>
                      <td>배터리가 분리된 스마트가방</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
              <C.rf><C.red>배터리용량은 160Wh, 8g 이내인 경우 가능​</C.red></C.rf>
            </C.sb>
          </C.sbody>
          <C.sbody>
            <C.title>전자담배</C.title>
            <C.sb>
              <T.table>
                <table>
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>휴대 수화물</td>
                      <td>위탁 수화물</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>전자담배</th>
                      <td>
                        <p><C.blue>가능</C.blue></p>
                      </td>
                      <td><C.red>불가</C.red></td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.sb>
            <C.stit>
              <p>일부국가에서는 휴대수하물로 반입을 금지하고 있습니다.​</p>
              <p><C.red>예) 싱가포르, 대만은 휴대 및 위탁수하물 모두 반입 불가</C.red></p>
            </C.stit>
          </C.sbody>
          <C.sbody>
            <C.title>분말류(파우더류)</C.title>
            <C.stit>
              <p>미주행 항공편 탑승 시 TSA(미국 교통 보안청)의 요청에 따라 분말류(파우더류)는 용량에 따라 반입이 제한됩니다.​</p>
              <p>예) 커피가루, 밀가루, 설탕 등</p>
            </C.stit>
            <C.sb>
              <T.table>
                <table>
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기준</th>
                      <td>휴대 수화물</td>
                      <td>위탁 수화물</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>12온스 (약 350㎖) 이하</th>
                      <td>
                        <p><C.blue>가능</C.blue></p>
                      </td>
                      <td><C.blue>가능</C.blue></td>
                    </tr>
                    <tr>
                      <th>12온스 (약 350㎖) 초과</th>
                      <td>
                        <p><C.red>불가</C.red></p>
                      </td>
                      <td><C.blue>가능</C.blue></td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
            </C.sb>
          </C.sbody>
          <C.sbody>
            <C.content>
              <C.note><C.image><Caution /></C.image>유의 사항</C.note>
              <C.ntg>[항공보안법] 제 44조에 따라 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의 벌금에 처할 수 있으니 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</C.ntg>
              <C.ntg>항공사 사전승인이 필요한 경우 수량 또는 운송이 제한될 수 있습니다.​</C.ntg>
              <C.ntg>외국 공항의 경우 해당국의 규정에 따라 다를 수 있으며, 출국 또는 환승 검색 시 압수될 수 있습니다.​​</C.ntg>
              <C.ntg>액체류 면세품을 구매한 손님​</C.ntg>
              <C.rgt>1) 면세점에서 제공하는 투명 봉인 봉투 STEB(Security Tamper Evident Bag)에 물품과 영수증이 들어있지 않으면 물품이 폐기 또는 압류 처​분 되오니 주의하시기 바랍니다.​</C.rgt>
              <C.rgt>2) 최종 목적지행 항공기 탑승 전까지는 미개봉 상태를 유지해주시기 바랍니다.​</C.rgt>
            </C.content>
          </C.sbody>
          <C.body>
          <C.title>도움이 되셨나요?</C.title>
          <C.sb>
            <C.helpl>
              <Link href="./carry">
                <a>
                  휴대 수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./free-baggage">
                <a>
                  위탁 수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./prohibition">
                <a>
                  항공기 반입금지 물품 안내<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./special-carry">
                <a>
                  스포츠/악기/고가품 운송<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./lost-carry">
                <a>
                  수하물 분실 및 보상<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./#">
                <a>
                  1:1 문의<Linkblack />
                </a>
              </Link>
            </C.helpl>
          </C.sb>
        </C.body>
      </C.wrap>
    </Container>
  )
}


const C = {
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
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
  area: styled.div`
    width: 1200px;
    height: auto;
    margin-top: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
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
  rf: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
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
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
    content:"-";
    width: 5px;
    height: 20px;
    top: 0px;
    left: 0px;
    color: ${LIGHT_GRAY8};
    display: block;
    position: absolute;
    }
  `,
  btg: styled.p`
    font-size: 14px;
    color: ${DARK_GRAY1};
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
    content:"-";
    width: 5px;
    height: 20px;
    top: 0px;
    left: 0px;
    color: ${DARK_GRAY1};
    display: block;
    position: absolute;
    }
  `,
  rgt: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  lgcl: styled.p`
    color: ${LIGHT_GRAY8};
  `,
  igr: styled.div`
    width: 50%;
    margin-top: 80px;
    display: inline-block;
    &:first-child{
      margin-top: 60px;
    }
    &:last-child{
      margin-bottom: 60px;
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
  `,
  group: styled.div`
    margin-left: 50px;
    display: inline-block;
    vertical-align: middle;
  `,
  bdt: styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  `,
  desc: styled.p`
    font-size: 15px;
    font-weight: regular;
    line-height: 1.8;
  `,
  img: styled.p`
    display: inline-block;
    vertical-align: middle;
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
  linkpage: styled.span`
    color: ${BLUE1};
    border-bottom: 1px solid ${BLUE1};
  `,
  line: styled.div`
    width: 100%;
    margin: 60px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  subtit: styled.p`
    font-size: 15px;
    font-weight: bold;
  `,
  blue: styled.span`
    color: ${BLUE1};
  `,
  red: styled.span`
    color: ${RED1};
  `,
  stit: styled.p`
    font-size: 15px;
    margin: 20px 0px;
    line-height: 1.8;
  `,
  linehgt: styled.div`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
  `,
}
    
const T = {
  table: styled.div`
    .taL,
    .taL{
    text-align: left;
    }
    .taR,
    .taR{
    text-align: right;
    }
    table {
    width: 100%;
    th,
    thead td,
    td strong {
      color: ${DARK_GRAY1};
      font-size: 15px;
      font-weight: bold;
      line-height: 1.6;
      letter-spacing: -0.3px;
      text-align: center;
    }
    td strong {
      margin-top: 30px;
      display: block;
      &:first-of-type {
      margin-top: 0;
      }
    }
    td{
      font-size: 14px;
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
      text-align: left;
      vertical-align: middle;
    }
    th:last-child,
    td:last-child{
      text-align: right;
    }
    thead th,
    thead td{
      padding: 18px 0;
      border-bottom: 1px solid ${DARK_GRAY1};
    }
    tbody th,
    tbody td{
      padding: 18px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
  }
`,
}
export default additionalServiceprohibition;