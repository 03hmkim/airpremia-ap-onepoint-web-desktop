import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import PetTab from './petTab';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'

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
            <C.title>도움이 되셨나요?</C.title>
            <C.sb>
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
              <C.helpl>
                <Link href="./help">
                  <a>
                    장애인 및 의료 도움이 필요한 손님<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl className="dpN">
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
            </C.sb>
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
    font-size: 24px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 21px;
    font-weight: bold;
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
}


export default Pet;