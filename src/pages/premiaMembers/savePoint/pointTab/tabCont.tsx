import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  BLUE1,
  ORANGE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import PremiaMoney from 'public/images/premiaMembers/savePoint/premiaMoney.svg';
import PremiaPoint from 'public/images/premiaMembers/savePoint/premiaPoint.svg';
import MoneyBg from 'public/images/premiaMembers/savePoint/pointbannerbg.png';
import WomanBg from 'public/images/premiaMembers/savePoint/illust_15_service_03.svg';
import AirplaneBg from 'public/images/premiaMembers/savePoint/airplaneBg.png';
import WolrdBg from 'public/images/premiaMembers/savePoint/worldBg.png';
import { TaskButton } from 'src/components';
import DomesticIcon from 'public/images/premiaMembers/savePoint/domesticIcon.svg';
import InternationalIcon from 'public/images/premiaMembers/savePoint/InternationalIcon.svg';


function TabContent({currIdxCont}: IProps) {
  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <div>
          <C.title>프레미아 포인트 적립 기준</C.title>
          <C.mt30>
            <C.ul>
              <C.li> 결제한 항공 운임  1,000KRW 당 기본 10포인트의 비율로 프레미아포인트가 적립됩니다.</C.li>
              <C.li> 골드 등급 회원에게 40%의 포인트를 추가로,  다이아몬드 등급 회원에게 90%의 포인트를 추가로 적립해드립니다.</C.li>
              <C.li> 세금 및 유류할증료, 부가서비스 구매 금액 등 항공운임이외의 결제 금액은 적립 대상에 포함되지 않습니다. </C.li>
            </C.ul>
          </C.mt30>

          <C.bannerBox01>
            <C.bannerDiv>
              <C.bannerContent01>
                <div style={{width:'100px'}}>
                  <div className="mb7">
                    <PremiaMoney />
                  </div>
                  
                  <C.itemTitle>항공 운임</C.itemTitle>
                </div>
                <S.ul>
                  <S.li>결제된 항공 운임 (할인된 금액 제외)</S.li>
                  <S.li>공항세, 유류할증료를 포함한 세금 제외</S.li>
                  <S.li>해외 출발 항공권의 경우 운임을 원화로 환산하여 계산</S.li>
                </S.ul>
              </C.bannerContent01>
              <C.bannerContent02>
                <div style={{width:'100px'}}>
                  <div className="mb7">
                    <PremiaPoint />
                  </div>
                  <C.itemTitle>적립 비율</C.itemTitle>
                </div>
                <S.ul>
                  <S.li>기본 1%의 적립 비율 (1,000KRW당 10포인트 비율)</S.li>
                  <S.li>골드 회원은 40% 추가 적립 (1,000KRW당 14포인트 비율)</S.li>
                  <S.li>다이아몬드 회원은 90% 추가 적립 (1,000KRW당 19포인트 비율)</S.li>
                </S.ul>
              </C.bannerContent02>
            </C.bannerDiv>
          </C.bannerBox01>
        </div>
        <C.sbody>
          <C.title>프레미아 포인트 적립 예시</C.title>
          <C.mt30>
            <ul>
              <li className="flex">
                <C.emphasis className="font-premia-bold">01</C.emphasis>
                <C.note className="point">항공 운임 300,000 KRW 의 항공권을 구매한 승객이 탑승 시점에 BLUE 등급인 경우 <div className="line"></div></C.note>
                <C.noteSubText>3,000 포인트 적립</C.noteSubText>
              </li>
              <li className="flex">
                <C.emphasis className="font-premia-bold">02</C.emphasis>
                <C.note className="point">항공 운임 300,000 KRW 의 항공권을 구매한 승객이 탑승 시점에 GOLD 등급인 경우 <div className="line"></div></C.note>
                <C.noteSubText>3,000 포인트 + 추가 1,200포인트 적립</C.noteSubText>
              </li>
              <li className="flex">
                <C.emphasis className="font-premia-bold">03</C.emphasis>
                <C.note className="point">항공 운임 300,000 KRW 의 항공권을 구매한 승객이 탑승 시점에 DIAMOND 등급인 경우 <div className="line"></div></C.note>
                <C.noteSubText>3,000 포인트 적립 + 추가 2,700 포인트 적립</C.noteSubText>
              </li>
            </ul>
          </C.mt30>
        </C.sbody>
        <C.sbody>
          <C.title>프레미아 포인트 적립 예외</C.title>
          <C.mt30>
            <C.ul>
              <C.li> Economy35 –Lite 운임(K,S,V Class) 을 구매한 경우에는 프레미아포인트 적립이 불가합니다.</C.li>
            </C.ul>
          </C.mt30>
        </C.sbody>
      </C.wrap> 
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <div>
          <C.title>프레미아 포인트 적립 방법</C.title>
          <C.mt30>
            <C.ul>
              <C.li> 탑승자 정보 입력 시 탑승자 본인의 휴대폰 번호 또는 회원 번호를 입력해주세요.</C.li>
              <C.li> 탑승하는 항공편의 체크인 및 탑승이 완료되면 항공기가 출발할 때 자동으로 포인트가 적립됩니다.</C.li>
            </C.ul>
          </C.mt30>
        </div>
        <C.sbody>
          <C.title>예약 시 회원 번호를 입력하지 못한 경우</C.title>
          <C.bannerBox02>
            <C.flex>
              <C.ul style={{marginLeft:'30px'}} className='pd52'>
                <C.li>
                  항공권 예약 시 에어프레미아 회원이지만 탑승자의 회원 번호를 입력하지 못하셨나요? <br />
                  <C.linkTitle><a href="" target="_blank">다가오는 여정</a></C.linkTitle> 페이지에서 예약을 조회하여 손쉽게 회원 번호를 추가할 수 있어요. 
                </C.li>
                <C.li style={{marginTop:'60px'}}>
                  항공권 예약 시 에어프레미아 회원이 아니었더라도 괜찮아요.<br />
                  탑승 이전에 회원가입을 완료하시면 <C.linkTitle><a href="" target="_blank">다가오는 여정</a></C.linkTitle> 페이지에서 예약을 조회하여 손쉽게 회원 번호를 추가할 수 있어요. <br />
                  지금 바로 간편하게 회원가입하시고 풍성한 포인트 적립의 혜택을 누려보세요. 
                </C.li>
              </C.ul>
            </C.flex>
            <S.bg02>
              <WomanBg />
            </S.bg02>
          </C.bannerBox02>
        </C.sbody>
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <C.title>프레미아 포인트 사후 적립 요건</C.title>
        <C.mt30>
          <C.ul>
            <C.li> 적립 대상 항공편이 도착지에 도착한 시점에 에어프레미아 회원이 아니라면 사후 적립이 불가합니다.<br /> 
            탑승 시점에 회원이 아니었더라도 늦지 않았어요. 항공편 도착 이전에 회원으로 가입하시면 사후 적립이 가능해요! <br />
            에어프레미아 기내 와이파이를 이용해서 비행 중에 회원 가입하시고 사후 적립의 혜택을 놓치지 마세요. </C.li>
            <C.li className='mt20'> 탑승일로부터 1년 이내에만 사후 적립이 가능합니다.<br />
              <span>- 예) 2020년 9월 1일 탑승 항공편 : 2021년 8월 31일 까지 사후 적립 신청한 경우에만 사후 적립 가능</span>
            </C.li>
            <C.li className='mt20'> 회원 정보 상 이름과 탑승자의 이름이 일치하는 경우에만 사후 적립이 가능합니다.<br />
              <span>- 국내선 항공권의 경우 탑승자 한글 이름과 회원 정보상 영문 이름의 발음이 동일해야 사후 적립이 가능합니다.</span><br />
              <span>- 국제선 항공권의 경우 탑승자 영문 이름(여권상 영문 이름)과 회원 정보상 영문 이름의 철자가 동일해야 사후 적립이 가능합니다.</span>
            </C.li>
          </C.ul>
        </C.mt30>
      <C.mt30>
      <C.mt30>
        <C.bannerBox className="bg01">
            <C.bannerDiv>
              <div className="addIcon">
                <div className="mb7">
                  <DomesticIcon />
                </div>
                <C.itemTitle>국내선<br /> 사후 적립</C.itemTitle>
              </div>
              <C.flex>
                <C.note className='str'>
                  <span className='blue'>PREMIAMEMBERS@AIRPREMIA.COM</span>으로 탑승자의 회원정보 (이메일, 영문 이름, 생년월일, 휴대폰 번호, 회원번호)와<br />
                  여정확인서, 신분증 (주민등록증, 운전면허증, 여권 중 1)을 보내주세요. 담당자가 확인 후 요청을 처리해 드립니다.
                </C.note>                  
              </C.flex>
            </C.bannerDiv>
          </C.bannerBox>
        </C.mt30>
        <C.mt30>
        <C.bannerBox className="bg02">
            <C.bannerDiv>
                <div className="addIcon">
                  <div className="mb7">
                    <InternationalIcon />
                  </div>
                  <C.itemTitle>국제선<br /> 사후 적립</C.itemTitle>
                </div>
                <C.flex>
                  <C.note className='str'>
                    에어프레미아 홈페이지에서만 국제선 사후적립이 가능합니다. <br />
                    사후 적립의 경우 회원정보에 여권번호가 입력되어 있어야 하니 여권 번호 입력 후 사후 적립을 진행 해주세요. 
                  </C.note>                  
                </C.flex>
            </C.bannerDiv>
          </C.bannerBox>
        </C.mt30>
      </C.mt30>
        <C.igr>
          <div style={{width:'300px', margin: '0 auto'}}>
            <TaskButton fontWeight={'normal'}>국제선 사후 적립 신청하기</TaskButton>
          </div>
        </C.igr>
      </C.wrap>
    )
  }
}

const S = {
  container: styled.div``,
  ul: styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 767px) { 
    width:100%;
    flex:1;
  }
  @media only screen and (max-width: 479px) {
    margin-top:20px;
  }
  `,
  li: styled.li`
    font-size: 18px;
    line-height: 32px;
    position:relative;
    padding-left:10px;
    &:before{
      content:"-";
      position:absolute;
      left:0;
      top:0;
      font-size:18px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
      line-height:1.5em;
    }
  `,
  bg02:styled.div`
    position: absolute;
    right: 60px;
    bottom: 15px;

    @media only screen and (max-width: 1059px) {
      display: none;
    }

    @media only screen and (max-width: 767px) { 
      position:static;
      margin:0 auto;
    }
  `,
};

const C = {
  wrap: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 50px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 80px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 60px;
    }
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
    @media only screen and (max-width: 1059px) { 
      font-size: 20px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 18px;
    }
  `,
  itemTitle: styled.h5`
    font-size: 18px;
    font-weight: bold;
    line-height: 1.2em;
    margin-left: 10px;

    @media only screen and (max-width: 767px) { 
      margin-left: 0;
      font-size: 14px;
    }
  `,
  
  linkTitle: styled.a`
    font-size: 18px;
    font-weight: bold;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
    box-shadow: inset 0 -1.5px 0 ${BLUE1};

    @media only screen and (max-width: 767px) { 
      font-size: 14px;
      line-height:1.5em;
    }
  `,

  mt30:styled.div`
    margin-top: 30px;
    .flex{
      display: flex;
      align-items: center;
      padding-bottom: 25px;
      &:last-child{
        padding: 0;
      }
    }
    .bg01{
      background: url(${AirplaneBg});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .bg02{
      background: url(${WolrdBg});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center bottom;
    }

    @media only screen and (max-width: 1059px) { 
      .bg01{
          background:none;
      }
      .bg02{
        background:none;
      }
    }

    @media only screen and (max-width: 767px) { 
      .flex{
        display:block;
        position:relative;
        padding-left:20px;
        &:last-child{
          padding-left:20px;
        }
      }
    }
  `,

  flex:styled.div`
    display: flex;
    align-items: center;

    .pd52{
      padding: 52px 0;
      width: calc( 100% - 160px );
    }

    @media only screen and (max-width: 767px) { 
      display:block;

      .pd52{
        width:calc( 100% - 40px );
        margin-left:20px !important;
        padding:20px 0;

        li{
          margin-top:20px !important;

          &:first-child{
            margin-top:0 !important;
          }
        }
      }      
    }
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

  itemText: styled.p`
    font-size: 18px;
    line-height: 1.8;
    display: inline-block;
    &:hover{
      color:${ORANGE2};
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,

  note: styled.p`
    padding: 0 10px 0 15px;
    position: relative;
    font-size: 18px;
    color: ${DARK_GRAY1};
    line-height: 1.5em;

    &.str{
      padding-right: 180px;
    }

    &.point{
      line-height: 22px;
    }
    .line{
      content: "";
      width: 1px;
      height: 50%;
      top: 5px;
      right: 0;
      text-indent: -9999px;
      display: flex;
      position: absolute;
      background-color: #dddddd;
    }
    .blue {
      color: ${BLUE1};
    }

    @media only screen and (max-width: 1059px) {
      padding: 0;
    }

    @media only screen and (max-width: 767px) { 
      font-size: 14px;

      &.str{
        padding: 0;
        font-size: 14px;
      }
      .line{
        display:none;
      }
    }
  `,
  noteSubText:styled.p`
  padding-right: 0;
  padding-left: 10px;
  @media only screen and (max-width: 767px) { 
    line-height:1.5em;
    font-size:14px;
    padding:0;
  }
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  igr: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
  emphasis:styled.p`
    font-size:20px;
    color: ${ORANGE1};
    @media only screen and (max-width: 767px) { 
      font-size:16px;
      position:absolute;
      left:0;
      top:2px;
    }
  `,
  ul:styled.ul`
  .mt20{
    margin-top: 20px;
  }
  `,
  li: styled.li`
    padding-left: 10px;
    position: relative;
    font-size: 18px;
    line-height: 36px;
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
        margin: 0;
      }
    @media only screen and (max-width: 767px) { 
      font-size:14px;
      line-height:1.5em;
      &:before{
        top:9px;
      }
    }
  `,
  bannerBox01:styled.div`
    height: auto;
    margin-top: 30px;
    border: 1px solid ${LIGHT_GRAY6};
    border-radius: 12px;
    background-image: url(${MoneyBg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center top;
    @media only screen and (max-width: 1059px) { 
      height: auto;
    }
    @media only screen and (max-width: 767px) { 
      background-image: none;
    }
  `,
  bannerBox02:styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    position: relative;
    border: 1px solid ${LIGHT_GRAY6};
    border-radius: 12px;
    @media only screen and (max-width: 767px) { 
      display:block;
    }
  `,
  bannerBox:styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    position: relative;
    border: 1px solid ${LIGHT_GRAY6};
    border-radius: 12px;
  `,
  bannerDiv:styled.div`
    max-width: 1050px;
    margin: 45px 30px;
    display: flex;

    .addIcon{
      width: 100px;
      margin-right: 30px;
      text-align: center;
    }
    .mb7{
      margin-bottom: 7px;
    }
    @media only screen and (max-width: 1059px) { 
      display:block;
      margin: 30px;

      .addIcon{
        margin:0 auto 20px auto;
      }
    }
    @media only screen and (max-width: 767px) { 
      margin: 20px;

      .addIcon svg {
        width: 70px;
        height: 70px;
      }
    }
  `,

  bannerContent01:styled.div`
    width: 45%;
    padding-right: 35px;
    display: flex;
    &>div{
        text-align:center;
      }
    @media only screen and (max-width: 1059px) { 
      width: 100%;
      padding-right:0;
    }
    @media only screen and (max-width: 767px) { 
      svg {
        width: 35px;
        height: 35px;
      }    
    }
    @media only screen and (max-width: 479px) {
      flex-direction:column;
      display:flex;
      justify-content:center;
      align-items:center;
      &>div{
        text-align:center;
      }
    }
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
      top: 8px;
      left: 0;
      text-indent: -9999px;
      display: inline-block;
      position: absolute;
      background-color: ${LIGHT_GRAY6};
    }

    &>div{
      text-align:center;
    }

    @media only screen and (max-width: 1059px) { 
      width: 100%;
      margin-top:40px;
      padding-left:0;

      &::before{
        display:none
      }
    }

    @media only screen and (max-width: 767px) { 
      svg {
        width: 35px;
        height: 35px;
      }
    }

    @media only screen and (max-width: 479px) {
      flex-direction:column;
      display:flex;
      justify-content:center;
      align-items:center;

      &>div{
        text-align:center;
      }
    }
  `,
}
export default TabContent;
