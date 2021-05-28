import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import FreeBaggageTab from './free-baggageTab';
import { SupportStyle } from 'src/styles/common';
import { 
  baggageLost,
  baggageOver,
  baggageProhibition,
  baggageSpecial,
} from 'src/components/molecules/gnbNew/linkset';


function FreeBaggage(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>무료 수하물</C.titleMain>
            <C.content>
              <FreeBaggageTab />
            </C.content>
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>     
            <C.linkWrap>
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
              <SupportLink
                title={baggageSpecial.title}
                link={baggageSpecial.link}
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


export default FreeBaggage;