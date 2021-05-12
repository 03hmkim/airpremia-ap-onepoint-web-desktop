import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  WHITE1,
  DARK_BLUE1,
  BLUE1,
  RED1,
} from '@airpremia/cdk/styles/colors';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
// import Special from 'public/images/support/img_special.png';
import Link from 'next/link'
import SpecialTab from './special-carryTab';


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
            <SpecialTab />
          </C.body>
          <C.body>
            <C.title>도움이 되셨나요?</C.title>
            <C.sb>
              <C.helpl>
                <Link href="./carry">
                  <a>
                    운송제한물품<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./free-baggage">
                  <a>
                    무료수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./prohibition">
                  <a>
                    초과수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl className="dpN">
                <Link href="./special-carry">
                  <a>
                    특수수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./lost-carry">
                  <a>
                    수하물 배상<Linkblack />
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
    )
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
    font-size: 30px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
  `,
  sub: styled.h5`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  `,
  content: styled.div`
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
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
  note: styled.p`
    font-size: 15px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
      content:"-";
      width: 5px;
      height: 20px;
      top: 0px;
      left: 0px;
      color: ${LIGHT_GRAY8};
      display: block;
      position: absolute;
    }
  `,
  span: styled.span`
    padding: 4px 12px;
    color:${WHITE1};
    background-color: ${DARK_BLUE1};
    border-radius: 60px;
  `,
  linkTitle: styled.a`
    font-size: 14px;
    font-weight: bold;
    color: ${BLUE1};
    margin-right: 10px;
  `,
  img: styled.p`
    display: inline-block;
    vertical-align: middle;
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};

    .dpN{
      display: none;
    }
  `,
  linkm: styled.p`
    margin-top: 20px;
    margin-left: 10px;
    a,
    span{
      color: ${BLUE1};
      font-weight: 600;
      cursor: pointer;
    }
    &:last-child{
      margin-left: 0px;
    }
  `,
  txtb: styled.p`
    font-size: 15px;
    font-weight: bold;
    line-height: 1.8;
  `,
  red: styled.span`
    color: ${RED1};
  `,
  linehgt: styled.div`
    font-size: 14px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
  `,
  desc: styled.p`
    font-size: 15px;
    font-weight: regular;
    line-height: 1.8;
  `,
}
export default SpecialCarry;