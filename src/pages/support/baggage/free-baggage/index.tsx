import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'
import FreeBaggageTab from './free-baggageTab';


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
            <FreeBaggageTab />
          </C.body>
          <C.title>도움이 되셨나요?</C.title>
          <C.sb>
            <C.helpl>
              <Link href="./prohibition">
                <a>
                  운송제한물품<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl className="dpN">
              <Link href="./free-baggage">
                <a>
                  무료수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./carry">
                <a>
                  초과수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./special-carry">
                <a>
                  특수수하물<Linkblack />
                </a>
              </Link>
            </C.helpl>
            <C.helpl>
              <Link href="./lost-carry">
                <a>
                  수하물 분실 및 보상<Linkblack />
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
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
  `,
  titleMain: styled.h3`
    font-size: 24px;
    font-weight: bold;
  `,
  title: styled.h4`
    margin-top: 100px;
    font-size: 30px;
    font-weight: bold;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  helpl: styled.p`
    width: 100%;
    font-size: 20px;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
}
    
// const T = {
// table: styled.div`
//   .taL,
//   .taL{
//     text-align: left;
//   }
//   .taR,
//   .taR{
//     text-align: right;
//   }
//   table {
//     width: 100%;
//     th,
//     thead td,
//     td strong {
//       color: ${DARK_GRAY1};
//       font-size: 15px;
//       font-weight: bold;
//       line-height: 1.6;
//       letter-spacing: -0.3px;
//       text-align: center;
//     }
//     td strong {
//       margin-top: 30px;
//       display: block;
//       &:first-of-type {
//         margin-top: 0;
//       }
//     }
//     td{
//       font-size: 14px;
//       font-weight: 400;
//       line-height: 1.9;
//       letter-spacing: -0.3px;
//       text-align: center;
//       vertical-align: middle;
//       position: relative;
//       &>p {
//         margin-top: 18px;
//       }
//       &>p:first-of-type {
//         margin-top: 0;
//       }
//       .txt {
//         margin-top: 10px;
//       p {
//           position: relative;
//           color: ${LIGHT_GRAY8};
//           &.iLine{
//             padding-left: 8px;
//           }
//           &.iLine::after{
//             content: "-";
//             position: absolute;
//             left: 0;
//             top: 0;
//             display: block;
//           }
//         }
//       }
//     }
//     th:first-child,      
//     td:first-child{
//       text-align: left;
//       vertical-align: middle;
//     }
//     th:last-child,
//     td:last-child{
//       text-align: center;
//     }
//     thead th,
//     thead td{
//       padding: 18px 0;
//       border-bottom: 1px solid ${DARK_GRAY1};
//     }
//     tbody th,
//     tbody td{
//       padding: 18px 0;
//       border-bottom: 1px solid ${LIGHT_GRAY5};
//     }
//   }
// `,
// }
export default FreeBaggage;