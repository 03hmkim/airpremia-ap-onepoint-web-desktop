import styled from 'styled-components';
import {
  ComTitle
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8
} from '@airpremia/cdk/styles/colors';
import HelpTab from './helpTab';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'

function NeedHelp(){
    return (
    <Container>
      <div>
      <ComTitle
        title="도움이 필요한 손님"
      />
      <C.wrap>
        <C.body>
          <C.titleMain>장애인 및 의료 도움이 필요한 손님</C.titleMain>
          <HelpTab />
        </C.body>
        {/* <C.sbody>
          <C.title>기내 사용 가능한 휴대용 산소 발생기 모델명</C.title>
          <C.tmi>
            <C.ul>
              <C.li>AirSep FreeStyle​</C.li>
              <C.li>AirSep LifeStyle</C.li>
              <C.li>AirSep Focus​</C.li>
              <C.li>AirSep Freestyle 5​</C.li>
              <C.li>(Caire) SeQual eQuinox / Oxywell (model 4000)​</C.li>
              <C.li>Delphi RS-00400 / Oxus RS-00400​</C.li>
              <C.li>DeVilbiss Healthcare iGo​</C.li>
              <C.li>Inogen One​</C.li>
              <C.li>Inogen One G2​</C.li>
              <C.li>lnogen One G3</C.li>
              <C.li>lnova Labs LifeChoice Activox​</C.li>
              <C.li>International Biophysics LifeChoice / lnova Labs LifeChoice</C.li>
              <C.li>Invacare XPO2 / XPO100</C.li>
              <C.li>Invacare Solo 2</C.li>
              <C.li>Oxylife Independence Oxygen Concentrator</C.li>
              <C.li>Precision Medical EasyPulse</C.li>
              <C.li>Respironics EverGo</C.li>
              <C.li>Respironics SimplyGo</C.li>
              <C.li>Sequal Eclipse</C.li>
              <C.li>SeQual SAROS</C.li>
              <C.li>X) VBox (3B Medical) Trooper (Aer X) Oxygen Concentrator</C.li>
            </C.ul>
          </C.tmi>
        </C.sbody> */}
          <C.sbody>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.content>
              <C.helpl>
                <Link href="./infant">
                  <a>
                    유아 동반 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./teenager">
                  <a>
                    혼자 여행하는 어린이,청소년<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./pregnant">
                  <a>
                    임산부 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl className="dpN">
                <Link href="./help">
                  <a>
                    장애인 및 의료 도움이 필요한 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./pet">
                  <a>
                    반려동물을 동반하는 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./#">
                  <a>
                    1:1 문의<Linkblack />
                  </a>
                </Link>
              </C.helpl>
            </C.content>
          </C.sbody>

      </C.wrap>

      </div>
    </Container>
    )
}


const C = {
  wrap: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 100px;
    &:first-of-type{
      margin-top: 30px;
      @media only screen and (max-width: 1059px) {
        margin-top: 20px;;
      }
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) {
      margin-top: 60px;
    }
  `,
  titleMain: styled.h2`
    font-size:24px;
    font-weight: bold;
    margin-bottom:30px;
    @media only screen and (max-width: 1059px) {
      margin-bottom:20px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: -0.04em;
    }
  `,
  title: styled.h3`
    font-size: 21px;
    font-weight: bold;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.032em;
    }
  `,
  itemText: styled.p`
  font-size: 18px;
  line-height: 30px;
  span{
      color: ${LIGHT_GRAY8}
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: -0.028em;
  }
`,
  content: styled.div`
    margin-top: 30px;
      @media only screen and (max-width: 1059px) {
        margin-top: 20px;;
      }
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  helpl: styled.p`
    width: 100%;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 1.8em;
    font-family: 'NotoSans';
    font-weight: 700;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    &.dpN{
      display: none;
    }
  `,
  p: styled.p``,
  bold: styled.p`
    font-weight: bold;
  `,
ex: styled.div`
  position: relative;
  font-size: 18px;
  line-height: 2em;
  padding-left: 44px;
  &:before {
    content: "예시)";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.8em;
    letter-spacing: -0.028em;
  }
`,
}
    

export default NeedHelp;