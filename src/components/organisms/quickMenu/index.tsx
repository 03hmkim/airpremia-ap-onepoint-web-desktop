import styled from 'styled-components';
import Link from 'next/link';
import {
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import IcoNav2b1 from 'public/images/nav/ico_nav_2-1_s.svg';
import IcoNav2b2 from 'public/images/nav/ico_nav_2-2_s.svg';
import IcoNav2b3 from 'public/images/nav/ico_nav_2-3_s.svg';

function QuickMenu () {
  return (
    <S.container>
      <ul>
        <li>
          <Link href='/checkin/find-trip'>
            <a className="label">
              <IcoNav2b1 />
              <span>예약 조회</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/checkin/online'>
            <a className="label">
              <IcoNav2b2 />
              <span>온라인 체크인</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/checkin/depArrCheck'>
            <a className="label">
              <IcoNav2b3 />
              <span>출/도착 조회</span>
            </a>
          </Link>
        </li>
      </ul>
    </S.container>
  );
}

const S = {
  container: styled.div`
    > ul {
      display: flex;
      justify-content: center;

      li {
        padding: 0 55px;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 50px;
          position: absolute;
          right: 0;
          top: calc(50% - 25px);
          background: ${LIGHT_GRAY6};
        }

        &:last-child::after {
          display: none;
        }

        .label {
          display: flex;
          align-items: center;

          span {
            margin-left: 20px;
            font-size: 21px;
            font-weight: 400;
          }
        }
      }
    }

    @media only screen and (max-width: 1199px) {
      > ul {
        display: flex;
        justify-content: center;
  
        li {
          padding: 0 40px;
        }
      }
    }

    @media only screen and (max-width: 930px) {
      > ul {
        li {
          padding: 0 10px;

          .label {
            span {
              margin-left: 0;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 767px) {
      > ul {
        li {
          width: 33.3333%;
          text-align: center;

          .label {
            display: block;

            span {
              margin-top: 10px;
              display: block;
              font-size: 16px;
            }
          }
        }
      }
    }
  `,
};

export default QuickMenu;