import styled from 'styled-components';
import { 
  DARK_GRAY1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import Why from 'public/images/premiaMembers/grade/why.png';


function MembersWhy(){
  return (
    <C.why>
      <C.bannerBox03>
        <C.bancon>
          <C.conltxt>
            <C.titlecon>WHY</C.titlecon>
            <C.contitle>프레미아 멤버스가 특별한 이유</C.contitle>
            <C.description>에어프레미아 상용 고객에게 다양한 혜택을<span className="textEnterN" />드리기 위해 프레미아 멤버스 프로그램을<span className="textEnterN" />운영합니다. 에어프레미아 회원이라면 누구나<span className="textEnterN" />이용할 수 있습니다. 등급에 따른 다양한<span className="textEnterN" />혜택과 승급 기준을 확인해보세요. </C.description>
          </C.conltxt>
          <C.conrtxt>
            <C.dt><C.det>01</C.det> 직관적인 포인트 적립이 가능합니다.</C.dt>
            <C.dd>복잡하고 어려운 항공사 마일리지 프로그램은 이제 그만.<span className="textEnterN" />결제한 항공 운임의 1%가 기본으로 적립됩니다. 회원 등급이 높다면 적립률도 높아집니다.</C.dd>
            <C.dt><C.det>02</C.det> 편리한 포인트 사용이 가능합니다.</C.dt>
            <C.dd>적립한 포인트는 언제든지 사용할 수 있습니다.<span className="textEnterN" />항공권뿐만 아니라 부가 서비스와 캐빈 업그레이드까지 포인트로 구매가 가능합니다.</C.dd>
            <C.dt><C.det>03</C.det> 자주 탑승할수록 더욱 큰 혜택을 드립니다.</C.dt>
            <C.dd>직전 24개월동안 누적 적립한 포인트를 기준으로 회원 등급을 결정합니다.<span className="textEnterN" />회원 등급이 높아질수록 함께 높아지는 포인트 적립률과 다양한 혜택을 누려보세요.</C.dd>
          </C.conrtxt>
        </C.bancon>
      </C.bannerBox03>
    </C.why>
  )
}



const C = {
  why: styled.div`
    margin-top: 100px;
    
    .textEnterN {
      display: block;
    }

    @media only screen and (max-width: 1059px) { 
      margin-top: 80px;

      .textEnterN {
        margin-left: 4px;
        display: inline-block;
      }
    }

    @media only screen and (max-width: 767px) { 
      margin-top: 60px;
    }
  `,

  bannerBox03:styled.div`
    height: auto;
    border-radius: 12px;
    background-color: rgba(232,221,213,0.5);
    background-image: url(${Why});
    background-repeat: no-repeat;
    background-position: right 30px center;

    @media only screen and (max-width: 1059px) {
      background-image: none;
    }

    @media only screen and (max-width: 767px) { 
      background-position: right bottom;
      height: auto;
    }
  `,

  bancon:styled.div`
    padding: 50px 40px;

    &::after{
      content: "";
      display: block;
      clear: both;
    }
    @media only screen and (max-width: 1059px) { 
      padding: 30px;
    }
    @media only screen and (max-width: 767px) { 
      padding: 20px;
    }
  `,

  conltxt: styled.div`
    float: left;

    @media only screen and (max-width: 1059px) { 
      float: none;
    }
  `,

  conrtxt: styled.div`
    width: calc(100% - 340px);
    padding-top: 60px;
    padding-right: 160px;
    float: right;
    box-sizing: border-box;

    @media only screen and (max-width: 1059px) { 
      width: 100%;
      padding-right: 0px;
      float: none;
    }

    @media only screen and (max-width: 767px) { 
      padding-top: 40px;
    }
  `,

  titlecon: styled.h2`
    font-size: 48px;
    font-family: 'premiaOTF';
    color: ${ORANGE2};
    @media only screen and (max-width: 1059px) { 
      font-size: 40px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 36px;
    }
  `,

  contitle: styled.h4`
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
    @media only screen and (max-width: 1059px) { 
      font-size: 20px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 18px;
    }
  `,

  description: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    margin-top: 90px;
    line-height: 28px;
    @media only screen and (max-width: 1059px) { 
      font-size: 18px;
      margin-top: 60px;
      line-height: 1.5em;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
      margin-top: 40px;
    }
  `,

  dt: styled.p`
    font-size: 18px;
    line-height: 28px;
    font-weight: bold;
    position:relative;
    padding-left:30px;
    @media only screen and (max-width: 1059px) { 
      line-height: 1.5em;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,

  dd: styled.p`
    font-size: 18px;
    line-height: 28px;
    margin-left: 30px;
    @media only screen and (max-width: 1059px) { 
      line-height: 1.5em;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,

  det: styled.span`
    color: ${ORANGE2};
    font-size: 24px;
    font-family: 'premiaOTF';
    line-height: 28px;
    margin-right: 14px;
    position:absolute;
    left:0;
    top:0px;

    @media only screen and (max-width: 1059px) { 
      font-size: 22px;
      line-height: 1.5em;
    }

    @media only screen and (max-width: 767px) { 
      font-size: 20px;
      top:-6px;
    }
  `,
}

export default MembersWhy;