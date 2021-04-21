import styled from 'styled-components';
import { FC, ReactElement, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import SvgPrint from 'public/images/ico_print.svg';
import ImgLogo from 'public/images/eticket/img_logo.png';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  bookings: ReactElement;
  journeys: ReactElement;
  payments: ReactElement;
}

const EticketTemplate: FC<IProps> = ({
  bookings,
  journeys,
  payments,
}) => {
  // #print.A4               .sheet { width: 210mm; height: 296mm }

  const printAreaRef = useRef<HTMLDivElement>(null);
  const onPrint = useReactToPrint({
    content: () => printAreaRef.current,
  });

  return (
    <S.container>
      <S.iconArea>
        <div onClick={onPrint}>
          <SvgPrint />
          <p>인쇄</p>
        </div>
      </S.iconArea>
      <S.wrapper ref={printAreaRef}>
        <S.eticketArea>
          <img src={ImgLogo} alt="에어프레미아" style={{width: 126}} />
          <div style={{marginTop: 40}}>
            <h1 style={{fontSize: 20}}>여정 안내서</h1>
            <p style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Passenger ltinerary</p>
          </div>
          {bookings}
          <p style={{marginTop: 10, color: '#b2b2b2', fontSize: 13}}>모든 정보는 항공사나 공항 사정에 의해 변경될 수 있습니다.</p>
          {journeys}
          <S.paymentWrapper>
            <h2 style={{margin: 0, paddingBottom: 5, fontSize: 14, fontWeight: 'bold'}}>운임 결제 정보</h2>
            <p style={{margin: 0, paddingBottom: 20, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Ticket/Fare Payment Information</p>
            {payments}
          </S.paymentWrapper>
          <S.guideArea>
            <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, lineHeight: 2}}>
              ·궁금하신 점이나 불편한 사항은 고객센터 1:1 문의하기를 이용해주시기 바랍니다.
            </p>
            <div style={{height: 1, margin: '50px 0 30px', backgroundColor: '#e5e5e5'}} />
            <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400, lineHeight: 2}}>
              에어프레미아(주) Air Premia Inc. &nbsp; 대표 : 김세영, 심주엽 <br />
              서울특별시 강서구 공항대로 248, 대방건설빌딩 4층
            </p>
            <br/>
            <p style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>ⓒ 2021 AIR PREMIA INC. ALL RIGHT RESERVED.</p>
          </S.guideArea>
        </S.eticketArea>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
  `,
  wrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
  `,
  iconArea: styled.div`
    width: 615x;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 5px;
      font-weight: 600;
      font-size: 15px;
      line-height: 26px;
      letter-spacing: -0.3px;
      cursor: pointer;
    }
    span {
      display: block;
      border-right: solid 1px ${LIGHT_GRAY6};
      width: 1px;
      height: 12px;
      margin: 0 15px;
    }
  `,

  eticketArea: styled.div`
    width: 615px;
    margin: 50px 0;
  `,
  paymentWrapper: styled.div`
    width: 615px;
    margin-top: 80px;
  `,

  guideArea: styled.div`
    width: 615px;
    margin: 0 auto;
    p {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.3px;
      color: ${LIGHT_GRAY8};
    }
  `,
};



export default EticketTemplate;