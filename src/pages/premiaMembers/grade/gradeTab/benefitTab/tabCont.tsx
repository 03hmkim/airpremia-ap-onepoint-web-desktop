import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  BLUE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import Members from 'public/images/premiaMembers/grade/membersinfo.png';
import Why from 'public/images/premiaMembers/grade/why.png';
import Caution from 'public/images/support/ico_caution.svg';


function TabContentBenefit({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <C.Cont></C.Cont>
        <C.title>프레미아포인트 적립</C.title>
        <C.tmi>
          <C.ul>
            <C.li>모든 BLUE 회원에게 <C.blue>항공 운임 1,000KRW 당 10 포인트</C.blue> 비율로 프레미안포인트를 적립해드립니다.<br></br>프레미아포인트 적립에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
            <C.li>적립한 프레미안포인트는 항공 운임, 유상 좌석, 사전 수하물, 좌석 업그레이드 구매 시 사용이 가능합니다.<br></br> 프레미아포인트 사용에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
          </C.ul>
        </C.tmi>
        <C.sbody>
          <C.title>한눈에 보는 등급별 혜택 비교</C.title>
          <C.tmi>
          <T.table>
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td className='bcol'>BLUE</td>
                      <td>GOLD</td>
                      <td>DIAMOND</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>포인트 기본 적립</th>
                      <td className='bcol'>1,000원 당 10 포인트 비율</td>
                      <td>1,000원 당 10 포인트 비율</td>
                      <td>1,000원 당 10 포인트 비율</td>
                    </tr>
                    <tr>
                      <th>포인트 추가 적립</th>
                      <td className='bcol'>-</td>
                      <td>포인트 40% 추가 적립</td>
                      <td>포인트 90% 추가 적립</td>
                    </tr>
                    <tr>
                      <th>추가 수하물</th>
                      <td className='bcol'>-</td>
                      <td>위탁 수하물 무상 추가 2회</td>
                      <td>위탁 수하물 무상 추가 4회</td>
                    </tr>
                    <tr>
                      <th>좌석 지정</th>
                      <td className='bcol'>-</td>
                      <td>-</td>
                      <td>전 좌석 무상 지정 2회</td>
                    </tr>
                    <tr>
                      <th>좌석 업그레이드</th>
                      <td className='bcol'>-</td>
                      <td>-</td>
                      <td>좌석 업그레이드 2회</td>
                    </tr>
                    <tr>
                      <th>기내 우선 탑승</th>
                      <td className='bcol'>-</td>
                      <td>-</td>
                      <td>기내 우선 탑승 혜택 제공</td>
                    </tr>
                    <tr>
                      <th>수하물 우선 하기</th>
                      <td className='bcol'>-</td>
                      <td>-</td>
                      <td>수하물 우선 하기 혜택 제공</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
          </C.tmi>
          <C.sb>
          <C.content>
              <C.note><C.image><Caution /></C.image>회원 등급 유의 사항</C.note>
              <C.ntg>위탁 수하물 추가는 23kg X 1 piece 에 한해 무상 제공되며 한번 탑승 시 1회 무상 추가만 가능합니다.</C.ntg>
              <C.ntg>좌석 지정 및 좌석 업그레이드 혜택은 다이아몬드 회원 본인에게만 제공됩니다.​</C.ntg>
              <C.ntg>좌석 업그레이드 혜택은 Economy 35 – Flex 운임으로 예약한 경우에만 제공됩니다.</C.ntg>
              <C.ntg>기내 우선 탑승 서비스는 국제선 항공편에 한해 제공됩니다.​</C.ntg>
              <C.ntg>상기 혜택은 항공사 사정에 따라 제공이 불가할 수 있습니다.​</C.ntg>
            </C.content>
          </C.sb>
        </C.sbody>
        <C.sbody>
          <C.bannerBox03>
            <C.bancon>
              <C.conltxt>
                <C.titlecon>WHY</C.titlecon>
                <C.contitle>프레미아 멤버스가 특별한 이유</C.contitle>
                <C.description>에어프레미아 상용 고객에게 다양한 혜택을<br></br>드리기 위해 프레미아 멤버스 프로그램을<br></br>운영합니다. 에어프레미아 회원이라면 누구나<br></br>이용할 수 있습니다. 등급에 따른 다양한<br></br>혜택과 승급 기준을 확인해보세요. </C.description>
              </C.conltxt>
              <C.conrtxt>
                <C.dt><C.det>01</C.det> 직관적인 포인트 적립이 가능합니다.</C.dt>
                <C.dd>복잡하고 어려운 항공사 마일리지 프로그램은 이제 그만.<br></br>결제한 항공 운임의 1%가 기본으로 적립됩니다. 회원 등급이 높다면 적립률도 높아집니다.</C.dd>
                <C.dt><C.det>02</C.det> 편리한 포인트 사용이 가능합니다.</C.dt>
                <C.dd>적립한 포인트는 언제든지 사용할 수 있습니다.<br></br>항공권뿐만 아니라 부가 서비스와 캐빈 업그레이드까지 포인트로 구매가 가능합니다.</C.dd>
                <C.dt><C.det>03</C.det> 자주 탑승할수록 더욱 큰 혜택을 드립니다.</C.dt>
                <C.dd>직전 24개월동안 누적 적립한 포인트를 기준으로 회원 등급을 결정합니다.<br></br>회원 등급이 높아질수록 함께 높아지는 포인트 적립률과 다양한 혜택을 누려보세요.</C.dd>
              </C.conrtxt>
            </C.bancon>
          </C.bannerBox03>
        </C.sbody>
      </C.wrap>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <C.Cont></C.Cont>
        <C.title>프레미아포인트 적립</C.title>
        <C.tmi>
          <C.ul>
            <C.li>모든 GOLD 회원에게 <C.blue>항공 운임 1,000KRW 당 14 포인트</C.blue> 비율로 프레미안포인트를 적립해드립니다<br></br>  프레미아포인트 적립에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
            <C.li>적립한 프레미안포인트는 항공 운임, 유상 좌석, 사전 수하물, 좌석 업그레이드 구매 시 사용이 가능합니다.<br></br>프레미아포인트 사용에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
          </C.ul>
        </C.tmi>
        <C.sbody>
          <C.title>위탁 수하물 무상 추가</C.title>
          <C.p>모든 GOLD 회원에게 위탁 수하물을 무료로 추가할 수 있는 쿠폰 2매를 드립니다.</C.p>
          <C.bannerBox04>
            <C.bancon>
              <C.title>위탁 수하물 무상 추가 쿠폰 사용 조건</C.title>
              <C.tbul>
                <C.ul>
                  <C.li>기본 제공되는 위탁 수하물 허용량에 추가로 23kg 이내 수하물 1개를 무상으로 위탁하실 수 있습니다.</C.li>
                  <C.li>본 쿠폰은 사전구매 수하물 구매 시 사용하실 수 있는 온라인 결제 전용 쿠폰으로써 공항 현장에서 발생하는<br></br>초과 수하물 요금에 대해서는 사용이 불가합니다.</C.li>
                  <C.li>본 쿠폰은 발급일로부터 2년 동안 유효합니다. 유효 기간이 지난 쿠폰은 자동으로 소멸됩니다.</C.li>
                  <C.li>사전 구매 수하물 제도를 운영하는 국제선 항공권에만 사용이 가능합니다.</C.li>
                  <C.li>쿠폰은 한 번 탑승 시 1개만 사용 가능합니다. (한 번 탑승 시 여러 장 중복 사용 불가)</C.li>
                  <C.li>공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다.</C.li>
                </C.ul>
              </C.tbul>
            </C.bancon>
          </C.bannerBox04>
        </C.sbody>
        <C.sbody>
          <C.title>한눈에 보는 등급별 혜택 비교</C.title>
          <C.tmi>
          <T.table>
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td>BLUE</td>
                      <td className='bcol'>GOLD</td>
                      <td>DIAMOND</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>포인트 기본 적립</th>
                      <td>1,000원 당 10 포인트 비율</td>
                      <td className='bcol'>1,000원 당 10 포인트 비율</td>
                      <td>1,000원 당 10 포인트 비율</td>
                    </tr>
                    <tr>
                      <th>포인트 추가 적립</th>
                      <td>-</td>
                      <td className='bcol'>포인트 40% 추가 적립</td>
                      <td>포인트 90% 추가 적립</td>
                    </tr>
                    <tr>
                      <th>추가 수하물</th>
                      <td>-</td>
                      <td className='bcol'>위탁 수하물 무상 추가 2회</td>
                      <td>위탁 수하물 무상 추가 4회</td>
                    </tr>
                    <tr>
                      <th>좌석 지정</th>
                      <td>-</td>
                      <td className='bcol'>-</td>
                      <td>전 좌석 무상 지정 2회</td>
                    </tr>
                    <tr>
                      <th>좌석 업그레이드</th>
                      <td>-</td>
                      <td className='bcol'>-</td>
                      <td>좌석 업그레이드 2회</td>
                    </tr>
                    <tr>
                      <th>기내 우선 탑승</th>
                      <td>-</td>
                      <td className='bcol'>-</td>
                      <td>기내 우선 탑승 혜택 제공</td>
                    </tr>
                    <tr>
                      <th>수하물 우선 하기</th>
                      <td>-</td>
                      <td className='bcol'>-</td>
                      <td>수하물 우선 하기 혜택 제공</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
          </C.tmi>
          <C.sb>
          <C.content>
              <C.note><C.image><Caution /></C.image>회원 등급 유의 사항</C.note>
              <C.ntg>위탁 수하물 추가는 23kg X 1 piece 에 한해 무상 제공되며 한번 탑승 시 1회 무상 추가만 가능합니다.</C.ntg>
              <C.ntg>좌석 지정 및 좌석 업그레이드 혜택은 다이아몬드 회원 본인에게만 제공됩니다.​</C.ntg>
              <C.ntg>좌석 업그레이드 혜택은 Economy 35 – Flex 운임으로 예약한 경우에만 제공됩니다.</C.ntg>
              <C.ntg>기내 우선 탑승 서비스는 국제선 항공편에 한해 제공됩니다.​</C.ntg>
              <C.ntg>상기 혜택은 항공사 사정에 따라 제공이 불가할 수 있습니다.​</C.ntg>
            </C.content>
          </C.sb>
        </C.sbody>
        <C.sbody>
          <C.bannerBox03>
            <C.bancon>
              <C.conltxt>
                <C.titlecon>WHY</C.titlecon>
                <C.contitle>프레미아 멤버스가 특별한 이유</C.contitle>
                <C.description>에어프레미아 상용 고객에게 다양한 혜택을<br></br>드리기 위해 프레미아 멤버스 프로그램을<br></br>운영합니다. 에어프레미아 회원이라면 누구나<br></br>이용할 수 있습니다. 등급에 따른 다양한<br></br>혜택과 승급 기준을 확인해보세요. </C.description>
              </C.conltxt>
              <C.conrtxt>
                <C.dt><C.det>01</C.det> 직관적인 포인트 적립이 가능합니다.</C.dt>
                <C.dd>복잡하고 어려운 항공사 마일리지 프로그램은 이제 그만.<br></br>결제한 항공 운임의 1%가 기본으로 적립됩니다. 회원 등급이 높다면 적립률도 높아집니다.</C.dd>
                <C.dt><C.det>02</C.det> 편리한 포인트 사용이 가능합니다.</C.dt>
                <C.dd>적립한 포인트는 언제든지 사용할 수 있습니다.<br></br>항공권뿐만 아니라 부가 서비스와 캐빈 업그레이드까지 포인트로 구매가 가능합니다.</C.dd>
                <C.dt><C.det>03</C.det> 자주 탑승할수록 더욱 큰 혜택을 드립니다.</C.dt>
                <C.dd>직전 24개월동안 누적 적립한 포인트를 기준으로 회원 등급을 결정합니다.<br></br>회원 등급이 높아질수록 함께 높아지는 포인트 적립률과 다양한 혜택을 누려보세요.</C.dd>
              </C.conrtxt>
            </C.bancon>
          </C.bannerBox03>
        </C.sbody>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.Cont></C.Cont>
        <C.title>프레미아포인트 적립</C.title>
        <C.tmi>
          <C.ul>
            <C.li>모든 DIAMOND 회원에게 <C.blue>항공 운임 1,000KRW 당 19 포인트</C.blue> 비율로 프레미안포인트를 적립해드립니다.<br></br>프레미아포인트 적립에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
            <C.li>적립한 프레미안포인트는 항공 운임, 유상 좌석, 사전 수하물, 좌석 업그레이드 구매 시 사용이 가능합니다.<br></br>프레미아포인트 사용에 대한 자세한 정보가 궁금하시면 <C.linkTitle><a href="" target="_blank">여기</a></C.linkTitle>를 클릭해주세요. </C.li>
          </C.ul>
        </C.tmi>
        <C.sbody>
          <C.title>위탁 수하물 무상 추가</C.title>
          <C.p>모든 DIAMOND 회원에게 위탁 수하물을 무료로 추가할 수 있는 쿠폰 4매를 드립니다. </C.p>
          <C.bannerBox04>
            <C.bancon>
              <C.title>위탁 수하물 무상 추가 쿠폰 사용 조건</C.title>
              <C.tbul>
                <C.ul>
                  <C.li>기본 제공되는 위탁 수하물 허용량에 추가로 23kg 이내 수하물 1개를 무상으로 위탁하실 수 있습니다.</C.li>
                  <C.li>본 쿠폰은 사전구매 수하물 구매 시 사용하실 수 있는 온라인 결제 전용 쿠폰으로써 공항 현장에서 발생하는<br></br>초과 수하물 요금에 대해서는 사용이 불가합니다.</C.li>
                  <C.li>본 쿠폰은 발급일로부터 2년 동안 유효합니다. 유효 기간이 지난 쿠폰은 자동으로 소멸됩니다.</C.li>
                  <C.li>사전 구매 수하물 제도를 운영하는 국제선 항공권에만 사용이 가능합니다.</C.li>
                  <C.li>쿠폰은 한 번 탑승 시 1개만 사용 가능합니다. (한 번 탑승 시 여러 장 중복 사용 불가)</C.li>
                  <C.li>공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다.</C.li>
                </C.ul>
              </C.tbul>
            </C.bancon>
          </C.bannerBox04>
        </C.sbody>
        <C.sbody>
          <C.title>전 좌석 무상 지정</C.title>
          <C.p>모든 DIAMOND 회원에게 모든 유상 좌석을 무료로 지정할 수 있는 쿠폰 2매를 드립니다. </C.p>
          <C.bannerBox04>
            <C.bancon>
              <C.title>좌석 무상 지정 쿠폰 사용 조건</C.title>
              <C.tbul>
                <C.ul>
                  <C.li>본 쿠폰은 유상 좌석 지정 시 사용할 수 있는 쿠폰으로써 온라인 사전 좌석 지정과 현장 좌석 지정 시 모두<br></br>사용이 가능합니다.</C.li>
                  <C.li>본 쿠폰은 발급일로부터 2년 동안 유효합니다. 유효 기간이 지난 쿠폰은 자동으로 소멸됩니다. </C.li>
                  <C.li>본 쿠폰은 회원 본인의 좌석 지정 시에만 사용이 가능합니다.</C.li>
                  <C.li>공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다. </C.li>
                </C.ul>
              </C.tbul>
            </C.bancon>
          </C.bannerBox04>
        </C.sbody>
        <C.sbody>
          <C.title>좌석 업그레이드</C.title>
          <C.p>모든 DIAMOND 회원에게 Premium 42 좌석으로 업그레이드 할 수 있는 쿠폰 2매를 드립니다. </C.p>
          <C.bannerBox04>
            <C.bancon>
              <C.title>업그레이드 쿠폰 사용 조건</C.title>
              <C.tbul>
                <C.ul>
                  <C.li>본 쿠폰은 Economy 35 –Flex 운임 (Y, B,M Class) 을 구매한 경우에만 사용이 가능합니다.</C.li>
                  <C.li>본 쿠폰은 발급일로부터 2년 동안 유효합니다. 유효 기간이 지난 쿠폰은 자동으로 소멸됩니다.</C.li>
                  <C.li>본 쿠폰은 회원 본인의 좌석 업그레이드시에만 사용이 가능합니다. </C.li>
                  <C.li>공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다.</C.li>
                </C.ul>
              </C.tbul>
            </C.bancon>
          </C.bannerBox04>
        </C.sbody>
        <C.sbody>
          <C.title>기내 우선 탑승 서비스</C.title>
          <C.p>모든 DIAMOND 회원에게 기내 우선 탑승 혜택을 드립니다. 최대 4인까지 동반 우선 탑승이 가능합니다.<br></br>단 공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다. </C.p>
        </C.sbody>
        <C.sbody>
          <C.title>수하물 우선 하기 서비스</C.title>
          <C.p>모든 DIAMOND 회원에게 위탁 수하물 우선 하기 혜택을 드립니다.<br></br>단 공항 및 항공기 상황에 따라 부득이하게 사용이 불가한 경우가 발생할 수 있습니다. </C.p>
        </C.sbody>
        <C.sbody>
          <C.title>한눈에 보는 등급별 혜택 비교</C.title>
          <C.tmi>
          <T.table>
                <table>
                  <colgroup>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                    <col width="25%"></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th></th>
                      <td>BLUE</td>
                      <td>GOLD</td>
                      <td className='bcol'>DIAMOND</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>포인트 기본 적립</th>
                      <td>1,000원 당 10 포인트 비율</td>
                      <td>1,000원 당 10 포인트 비율</td>
                      <td className='bcol'>1,000원 당 10 포인트 비율</td>
                    </tr>
                    <tr>
                      <th>포인트 추가 적립</th>
                      <td>-</td>
                      <td>포인트 40% 추가 적립</td>
                      <td className='bcol'>포인트 90% 추가 적립</td>
                    </tr>
                    <tr>
                      <th>추가 수하물</th>
                      <td>-</td>
                      <td>위탁 수하물 무상 추가 2회</td>
                      <td className='bcol'>위탁 수하물 무상 추가 4회</td>
                    </tr>
                    <tr>
                      <th>좌석 지정</th>
                      <td>-</td>
                      <td>-</td>
                      <td className='bcol'>전 좌석 무상 지정 2회</td>
                    </tr>
                    <tr>
                      <th>좌석 업그레이드</th>
                      <td>-</td>
                      <td>-</td>
                      <td className='bcol'>좌석 업그레이드 2회</td>
                    </tr>
                    <tr>
                      <th>기내 우선 탑승</th>
                      <td>-</td>
                      <td>-</td>
                      <td className='bcol'>기내 우선 탑승 혜택 제공</td>
                    </tr>
                    <tr>
                      <th>수하물 우선 하기</th>
                      <td>-</td>
                      <td>-</td>
                      <td className='bcol'>수하물 우선 하기 혜택 제공</td>
                    </tr>
                  </tbody>
                </table>
              </T.table>
          </C.tmi>
          <C.sb>
          <C.content>
              <C.note><C.image><Caution /></C.image>회원 등급 유의 사항</C.note>
              <C.ntg>위탁 수하물 추가는 23kg X 1 piece 에 한해 무상 제공되며 한번 탑승 시 1회 무상 추가만 가능합니다.</C.ntg>
              <C.ntg>좌석 지정 및 좌석 업그레이드 혜택은 다이아몬드 회원 본인에게만 제공됩니다.​</C.ntg>
              <C.ntg>좌석 업그레이드 혜택은 Economy 35 – Flex 운임으로 예약한 경우에만 제공됩니다.</C.ntg>
              <C.ntg>기내 우선 탑승 서비스는 국제선 항공편에 한해 제공됩니다.​</C.ntg>
              <C.ntg>상기 혜택은 항공사 사정에 따라 제공이 불가할 수 있습니다.​</C.ntg>
            </C.content>
          </C.sb>
        </C.sbody>
        <C.sbody>
          <C.bannerBox03>
            <C.bancon>
              <C.conltxt>
                <C.titlecon>WHY</C.titlecon>
                <C.contitle>프레미아 멤버스가 특별한 이유</C.contitle>
                <C.description>에어프레미아 상용 고객에게 다양한 혜택을<br></br>드리기 위해 프레미아 멤버스 프로그램을<br></br>운영합니다. 에어프레미아 회원이라면 누구나<br></br>이용할 수 있습니다. 등급에 따른 다양한<br></br>혜택과 승급 기준을 확인해보세요. </C.description>
              </C.conltxt>
              <C.conrtxt>
                <C.dt><C.det>01</C.det> 직관적인 포인트 적립이 가능합니다.</C.dt>
                <C.dd>복잡하고 어려운 항공사 마일리지 프로그램은 이제 그만.<br></br>결제한 항공 운임의 1%가 기본으로 적립됩니다. 회원 등급이 높다면 적립률도 높아집니다.</C.dd>
                <C.dt><C.det>02</C.det> 편리한 포인트 사용이 가능합니다.</C.dt>
                <C.dd>적립한 포인트는 언제든지 사용할 수 있습니다.<br></br>항공권뿐만 아니라 부가 서비스와 캐빈 업그레이드까지 포인트로 구매가 가능합니다.</C.dd>
                <C.dt><C.det>03</C.det> 자주 탑승할수록 더욱 큰 혜택을 드립니다.</C.dt>
                <C.dd>직전 24개월동안 누적 적립한 포인트를 기준으로 회원 등급을 결정합니다.<br></br>회원 등급이 높아질수록 함께 높아지는 포인트 적립률과 다양한 혜택을 누려보세요.</C.dd>
              </C.conrtxt>
            </C.bancon>
          </C.bannerBox03>
        </C.sbody>
      </C.wrap>
    )
  }
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  `,
  wrap: styled.div`
    margin: 30px 0px 60px 0px;
  `,
  Cont:styled.p`
    margin-bottom: 60px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    display:block;
      &:first-of-type{
        margin-top: 30px;
      }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  conmar: styled.p`
    margin-top: 20px;
  `,
  titlecon: styled.h2`
    font-size: 48px;
    font-family: 'premiaOTF';
    color: ${ORANGE2};
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  contitle: styled.h4`
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
  `,
  content: styled.div`
    padding-top: 12px;
  `,
  sb: styled.div`
    margin-top: 80px;
  `,
  conltxt: styled.div`
    float: left;
  `,
  conrtxt: styled.div`
    padding-top: 60px;
    padding-right: 160px;
    float: right;
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
    margin-bottom: 15px;
    display: flex;
    justify-align: center;
  `,
  description: styled.p`
    font-size: 14px;
    color: ${DARK_GRAY1};
    margin-top: 90px;
    line-height: 28px;
  `,
  det: styled.span`
    color: ${ORANGE2};
    font-size: 24px;
    font-family: 'premiaOTF';
    line-height: 28px;
    margin-right: 14px;
  `,
  dt: styled.p`
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;
  `,
  dd: styled.p`
    font-size: 16px;
    line-height: 28px;
    margin-left: 40px;
  `,
  bold: styled.span`
    font-weight: bold;
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
    padding-left: 10px;
    line-height: 28px;
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
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    margin-left: 10px;
    display: inherit;
    vertical-align: middle;
  `,
  tbul:styled.p`
    margin-top: 20px;
  `,
  ul:styled.ul`
    
  `,
  li: styled.li`
    padding-left: 10px;
    line-height: 36px;
    position: relative;
      &::before{
        content:"";
        width: 4px;
        height: 4px;
        top: 15px;
        left: 0px;
        text-indent: -9999px;
        display: block;
        position: absolute;
        background-color: ${DARK_GRAY1};
        border-radius: 50%
      }
      &:first-child{
        margin-top: 0px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
  `,
  lp:styled.p`
    margin-left: 10px;
    line-height: 36px;
  `,
  left:styled.div`
  padding-right:80px;
  `,
  right:styled.div`
  
  `,
bannerBox02:styled.div`
  margin-top: 30px;
  border: 1px solid ${LIGHT_GRAY6};
  border-radius: 12px;
  background-image: url(${Members});
  background-repeat: no-repeat;
  background-position: right 50px top 100px;
`,
bannerBox03:styled.div`
  height: 382px;
  border-radius: 12px;
  background-color: rgba(232,221,213,0.5);
  background-image: url(${Why});
  background-repeat: no-repeat;
  background-position: right 30px center;
`,
bannerBox04:styled.div`
  margin-top: 30px;
  border: 1px solid ${LIGHT_GRAY6};
  border-radius: 12px;
  background-image: url(${Members});
  background-repeat: no-repeat;
  background-position: right 50px top 100px;
`,
bannerDiv:styled.div`
  width: 995px;
  margin: 26px 30px;
  display: flex;
`,

bannerContent01:styled.div`
  width: 45%;
  padding-right: 35px;
  display: flex;
`,
bannerContent02:styled.div`
  width: 55%;
  padding-left: 25px;
  display: flex;
  position: relative;
    &::before{
      content:"";
      width: 1px;
      height: 80%;
      top: 20px;
      left: 0;
      text-indent: -9999px;
      display: inline-block;
      position: absolute;
      background-color: ${LIGHT_GRAY6};
    }
`,
blue:styled.span`
  color: ${BLUE1};
`,
bancon:styled.div`
  padding: 50px 40px;

  &::after{
    content: "";
    display: block;
    clear: both;
  }
`,
bcol:styled.p`
  background-color: ${LIGHT_GRAY1};
`,
linkTitle: styled.a`
  font-size: 16px;
  font-weight: bold;
  color: ${BLUE1};
  line-height: 36px;
  cursor: pointer;
  box-shadow: inset 0 -1.5px 0 ${BLUE1};
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
      &.bcol {
        background-color: ${LIGHT_GRAY1};
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
export default TabContentBenefit;
