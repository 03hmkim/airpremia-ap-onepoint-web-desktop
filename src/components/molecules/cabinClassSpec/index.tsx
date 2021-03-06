import styled from 'styled-components';
import Link from 'next/link';
// import SvgBag from 'public/images/ico_bag.svg';
import SvgSeat from 'public/images/ico_seat.svg';
// import SvgWifi from 'public/images/ico_wifi.svg';
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import {
  Arrow,
} from 'src/components';

export interface IProps {
  classType: string;
}

const getDummyDataBySpecType = (type: string) =>
  type.toUpperCase() === 'Y'
    ? {
        name: 'Economy 35',
        seat: 89,
        bag: 1,
        wifi: 10,
      }
    : {
        name: 'Premia 42',
        seat: 106,
        bag: 2,
        wifi: 500,
      };

function CabinClassSpec({ classType }: IProps) {
  const { name, seat } = getDummyDataBySpecType(
    classType,
  );
  return (
    <S.container>
      <S.top>
        <h2 className="font-premia-bold">{name}</h2>
        <div>
          <SvgSeat width={18} height={18} />
          <p>좌석간격 {seat} cm</p>
        </div>
        {/* <div>
          <SvgBag width={18} height={18} />
          <p>수하물 {bag} 개</p>
        </div> */}
        {/* <div>
          <SvgWifi width={18} height={18} />
          <p>와이파이 {wifi} M</p>
        </div> */}
      </S.top>
      <S.bottom>
        <Link href={'/ticket/flight/info-class'}>
          <a target="_blank">
            에어프레미아 클래스<span className="enter" />&nbsp;알아보기 <Arrow color={BLUE1} />
          </a>
        </Link>
      </S.bottom>
    </S.container>
  );
}

const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 253px;
    /* @TODO: 이렇게 분자 컴포넌트에서는 height 100%로 주는게 좋을듯 싶은데 storybook에서 깨지는 문제가 있어서 일단은 px로 줬음 */

    @media only screen and (max-width: 767px) { 
      height: auto;
    }
  `,

  top: styled.div`
    padding: 0 10px;
    h2 {
      font-size: 36px;
      line-height: 35px;
      letter-spacing: -0.72px;
      color: ${DARK_GRAY1};
      margin-bottom: 24px;
    }

    div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      p {
        margin-left: 10px;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: -0.26px;
      }
    }

    @media only screen and (max-width: 767px) {
      h2 {
        font-size: 26px;
      }
      div {
        p {
          font-size: 13px;
        }
      }
    }
  `,

  bottom: styled.div`
    height: auto;
    a {
      color: ${BLUE1};
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.28px;
    }

    .arrow {
      position: relative;
      top: 4px;
      display: inline-flex;
    }

    @media only screen and (max-width: 1059px) {
      .enter {
        display: block;
    }    
    @media only screen and (max-width: 767px) { 
      .enter {
        margin-left: 4px;
        display: inline-block;
      }

      .arrow {
        width: 14px;
        height: 14px;
        top: 2px;
      }
    }

    @media only screen and (max-width: 767px) { 
      margin-top: 2vw;
      margin-left: 10px;

      a {        
        font-size: 14px;
      }
    }
  `,
};

export default CabinClassSpec;
