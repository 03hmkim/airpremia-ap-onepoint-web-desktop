import styled from 'styled-components';
import { 
  LIGHT_GRAY5
} from '@airpremia/cdk/styles/colors';
import Link from 'next/link'
import Linkblack from 'public/images/support/btn_txt_link_black.svg';

function SupportLink(){
  return (
    <C.wrap>
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
        <C.helpl className="dpN">
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
    </C.wrap>
  )
}



const C = {
  wrap: styled.div``,

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

  content: styled.div`
    margin-top: 30px;
    @media only screen and (max-width: 1059px) {
      margin-top: 20px;;
    }
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

export default SupportLink;