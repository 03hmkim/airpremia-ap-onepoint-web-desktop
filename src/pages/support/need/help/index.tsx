import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import HelpTab from './helpTab';
import {
  needInfant,
  needPet,
  needPregnant,
  needTeenager,
} from '../../linkset';

function NeedHelp(){
    return (
    <Container>
      <S.container>
        <ComTitle
          title="도움이 필요한 손님"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>장애인 및 의료 도움이 필요한 손님</C.titleMain>
            <C.content>
              <HelpTab />
            </C.content>
          </C.body>
          {/* <C.body>
            <C.titleSub>기내 사용 가능한 휴대용 산소 발생기 모델명</C.titleSub>
            <C.content>
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
            </C.content>
          </C.body> */}
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={needInfant.title}
                link={needInfant.link}
              />
              <SupportLink
                title={needPet.title}
                link={needPet.link}
              />
              <SupportLink
                title={needPregnant.title}
                link={needPregnant.link}
              />
              <SupportLink
                title={needTeenager.title}
                link={needTeenager.link}
              />
            </C.linkWrap>
          </C.body>
        </C.wrap>

      </S.container>
    </Container>
    )
}

const S = {
  container: styled.div``,
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

    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
    }
  `,
  linkWrap: styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 1059px) {
      margin-top: 20px;
    }
  `,
  /* 서비스안내 공통css 끝 */
}
    

export default NeedHelp;