import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import HelpTab from './helpTab';
import { SupportStyle } from 'src/styles/common';
import {
  needInfant,
  needPet,
  needPregnant,
  needTeenager,
} from 'src/components/molecules/gnbNew/linkset';

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
  ...SupportStyle.C1,
}
    

export default NeedHelp;