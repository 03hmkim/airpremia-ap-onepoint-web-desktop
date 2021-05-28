import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
// import Special from 'public/images/support/img_special.png';
import SpecialTab from './special-carryTab';
import { SupportStyle } from 'src/styles/common';
import { 
  baggageFree,
  baggageLost,
  baggageOver,
  baggageProhibition,
} from 'src/components/molecules/gnbNew/linkset';


function SpecialCarry(){

    return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>특수수하물</C.titleMain>
            <C.content>
              <SpecialTab />
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>      
            <C.linkWrap>
              <SupportLink
                title={baggageFree.title}
                link={baggageFree.link}
              />
              <SupportLink
                title={baggageLost.title}
                link={baggageLost.link}
              />
              <SupportLink
                title={baggageOver.title}
                link={baggageOver.link}
              />
              <SupportLink
                title={baggageProhibition.title}
                link={baggageProhibition.link}
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
  ...SupportStyle.C1,
}
export default SpecialCarry;