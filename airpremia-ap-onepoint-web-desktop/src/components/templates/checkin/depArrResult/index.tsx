import styled from 'styled-components';
import { FC, ReactElement } from 'react';
// import { IFlightDepArr } from '@airpremia/core/stores/models/bookingSession';
// import { useBooking } from '@airpremia/core/hooks';


interface IProps {
  // title: string;
  tripList: ReactElement;
  tab: ReactElement;
  // linkBarWithImage: ReactElement;
  // warningList: ReactElement;
  paging: ReactElement;
  search : ReactElement;
}

///★
// const {onSearchFlightArrDep} = useBooking();
// const onLoadLowFaresArrow = async (
//   params: IFlightDepArr,//결과값
// ) => onSearchFlightArrDep();//hook


const DepArrResultTemplate: FC<IProps> = ({
  // title,
  tripList,
  tab,
  search,
  // linkBarWithImage,
  // warningList,
  paging,
}) => { 
  return ( 
    <S.container>
      <S.tab>{tab}</S.tab>
      {/* <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title> */}
      {search}
      <S.table>{tripList}</S.table>

      {/* <S.linkBarWithImage>
        {linkBarWithImage}
      </S.linkBarWithImage> */}
      <S.paging>{paging}</S.paging>
      {/* <S.cautionGuide>{warningList}</S.cautionGuide> */}
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }
  `,

  tab: styled.div`
    // margin-top: 100px;
  `,

  table: styled.div`
    margin: 60px 0 80px;
  `,

  // Pagination: styled.div``,

  linkBarWithImage: styled.div``,

  cautionGuide: styled.div`
    margin-top: 80px;
  `,
  paging: styled.div`
    // padding: 200px 0;
    p {
      margin-bottom: 100px;
      font-size: 30px;
      text-align: center;
    }
  `
};

export default DepArrResultTemplate;
