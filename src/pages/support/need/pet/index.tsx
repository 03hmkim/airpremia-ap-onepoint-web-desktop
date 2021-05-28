import styled from 'styled-components';
import {
  ComTitle,
  SupportLink,
} from 'src/components';
import { Container } from 'src/styles/layout';
import PetTab from './petTab';
import { 
  needHelp,
  needInfant,
  needPregnant,
  needTeenager,
} from 'src/components/molecules/gnbNew/linkset';
import { SupportStyle } from 'src/styles/common';

function Pet(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="도움이 필요한 손님"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>반려동물을 동반하는 손님</C.titleMain>
            <PetTab />
          </C.body>
          <C.body>
            <C.titleMain>도움이 되셨나요?</C.titleMain>
            <C.linkWrap>
              <SupportLink
                title={needHelp.title}
                link={needHelp.link}
              />
              <SupportLink
                title={needInfant.title}
                link={needInfant.link}
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
  );
}

const S = {
  container: styled.div``,
}

const C = {
  ...SupportStyle.C1,
}


export default Pet;