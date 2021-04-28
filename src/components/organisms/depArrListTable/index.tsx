import { FC } from 'react';
// import { prop } from 'styled-tools';
// import moment from 'moment';
import styled from 'styled-components';
// import { map, compact, join, flow } from 'lodash/fp';
// import { useRouter } from 'next/router';
// import {
//   TableHeaderWithList,
//   TableBodyWithList,  
// } from 'src/components';
// import { useCommon } from '@airpremia/core/hooks';
import {
  WHITE1,
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  BLUE1,
  // ORANGE1,
  RED2
} from '@airpremia/cdk/styles/colors';

interface IProps {
  currIdx: number, 
  headerList: string[],
  widthList: number[],
  list: any[],
  emptyMessage: string,
}

// const onMakeRangeDate = (
//   code: string,
//   ...args: string[]
// ) => {
//   return flow(
//     map(
//       (item: string) =>
//         item &&
//         moment(item)
//           .locale(code)
//           .format('YYYY. M. D. (dd)'),
//     ),
//     compact,
//     join(' - '),
//   )(args);
// };


const DepArrListTable: FC<IProps> = ({
  currIdx,
  // headerList,
  // widthList,
  list,
  // emptyMessage
}: IProps) => {
  // const router = useRouter();
  // const { commonStore } = useCommon();
  // const {
  //   language: { code },
  // } = commonStore;

  console.log("넘어온list", list);

  if ( currIdx === 0 ) {
    return(
    <C.wrap>
    <C.sbody>
      <C.sb>
        <C.title>서울/인천(ICN) - 하노이(HAN)</C.title>
        <div>
          <T.table className="mt40">
            <table>
              <colgroup>
                <col width="18.75%"></col>
                <col width="35.25%"></col>
                <col width="32.4%"></col>
                <col width="21.6%"></col>
              </colgroup>
              <thead>
                <tr>
                  <th>항공편</th>
                  <td>출발</td>
                  <td>도착</td>
                  <td>운항상태</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <p><C.bold>AP3400</C.bold><br />(직항)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>10:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>10:15</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>13:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착예정</C.description>
                        <C.itemTitle>13:20</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <C.Badge className='blue'>도착완료</C.Badge>
                    </td>
                </tr>
                <tr>
                  <th>
                    <p><C.bold>AP3200</C.bold><br />(직항)</p>
                  </th> 
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>21:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>출발예정</C.description>
                        <C.itemTitle>21:07</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                    <div>
                      <C.textBox>
                        <C.description>스케줄</C.description>
                        <C.itemTitle>12:00</C.itemTitle>
                      </C.textBox>
                      <C.textBoxCenter>
                        <C.line></C.line>
                      </C.textBoxCenter>
                      <C.textBox>
                        <C.description>도착예정</C.description>
                        <C.itemTitle>12:20</C.itemTitle>
                      </C.textBox>
                    </div>
                  </td>
                  <td>
                  <C.Badge className='black'>도착 전</C.Badge>
                    </td>
                </tr>
              </tbody>
              <tfoot className='displayNone'>
                <tr>
                  <td colSpan={4}>
                    <C.description className='center'>조회 결과가 존재하지 않습니다.</C.description>
                  </td>
                </tr>
              </tfoot>
            </table>
          </T.table>
        </div>
      </C.sb>
    </C.sbody>
 
  </C.wrap> 
                // return (
                //   <S.wrapper
                //     key={`item${i.toString()}`}
                //     onClick={onClick}
                //   >
                //     <S.bodyItem width={widthList[0]}>
                //       {item.recordLocator}
                //     </S.bodyItem>
                //     <S.bodyItem width={widthList[1]}>
                //       {isOneWay ? '편도' : '왕복'}
                //     </S.bodyItem>
                //     <S.bodyItem width={widthList[2]}>
                //       {item.originText}&nbsp;
                //       {isOneWay ? '→' : '-'}&nbsp;
                //       {item.destinationText}
                //     </S.bodyItem>
                //     <S.bodyItem width={widthList[3]}>
                //       {onMakeRangeDate(
                //         code,
                //         item.beginDate,
                //         item.endDate,
                //       )}
                //     </S.bodyItem>
                //     <S.bodyItem
                //       width={widthList[4]}
                //       color={BLUE1}
                //     >
                //       {item.statusText}
                //     </S.bodyItem>
                //   </S.wrapper>
                // );

                
    );
  }
  else if(currIdx===1){
    alert('확인');
    return null;
  }
  else{
    return null;
  }
};




// const S = {
//   container: styled.div``,
//   header: styled.div``,
//   body: styled.div``,
//   wrapper: styled.div`
//     border-bottom: solid 1px ${LIGHT_GRAY5};
//     width: 100%;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//   `,

//   bodyItem: styled.p<{ width: number; color?: string }>`
//     flex-basis: ${prop('width')}px;
//     font-size: 15px;
//     line-height: 22px;
//     font-weight: 600;
//     color: ${prop('color')};
//   `,

//   emptyMessage: styled.div`
//     padding: 100px 0;
//     width: 100%;
//     text-align: center;
//     color: ${LIGHT_GRAY7};
//     border-bottom: solid 1px ${LIGHT_GRAY5};
//     p {
//       font-size: 14px;
//       line-height: 20px;
//       letter-spacing: -0.28px;
//     }
//   `,
// };


const T = {
  table: styled.div`
    &.mt40{
      margin-top:40px;
    }
    .taL,
    .taL{
      text-align: left;
    }
    table {
      width: 100%;
        thead th,
        thead td,
        td strong {
          color: ${LIGHT_GRAY7};
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -0.3px;
          text-align: center;
        }
        td strong {
          margin-top: 30px;
          display: block;
        }
        th,td{
          font-size: 14px;
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: -0.3px;
          text-align: center;
          vertical-align: middle;
          position: relative;
            &>p {
              margin-top: 18px;
            }
            .txt {
              margin-top: 10px;
              p {
                  position: relative;
                  color: ${LIGHT_GRAY8};
                  &.iLine{
                  padding-left: 8px;
                  }
                  &.iLine::after{
                  content: "-";
                  position: absolute;
                  left: 0;
                  top: 0;
                  display: block;
                  }
              }
          }
      }
      th:first-child,      
      td:first-child{
        text-align: left;
        vertical-align: middle;
      }
      td:nth-child(2),
      td:nth-child(3){
        text-align: left;
        vertical-align: middle;
      }
      td:last-child{
        text-align: center;
      }
      thead th,
      thead td{
        padding: 18px 0;
        border-bottom: 1px solid ${DARK_GRAY1};
      }
      thead td:last-child{
        padding: 0;
      }
      .displayNone{
        display:none;
      }
      tbody th,
      tbody td{
        padding: 25px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
      tfoot tr {
        height: 228px;
      }
      tfoot th, td{
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
      tfoot td>p{
        margin:0;
      }
    }
    @media only screen and (max-width: 1059px) { 
      table {
        thead th,
        tbody th{
          padding-right:20px;
        }
        tbody th,
        tbody td{
          padding-top:10px;
          padding-bottom:10px;
        }
      }
    }
    @media only screen and (max-width: 479px) { 
      table {
        thead th,
        thead td,
        td strong {
          font-size: 14px;
        }
      }
    }
  `,
  };
  
  // const S = {

  // container: styled.div``,
  // header: styled.div``,
  // body: styled.div``,
  // wrapper: styled.div`
  //   border-bottom: solid 1px ${LIGHT_GRAY5};
  //   width: 100%;
  //   height: 100px;
  //   display: flex;
  //   align-items: center;
  //   cursor: pointer;
  // `,
  // emptyMessage: styled.div`
  //    padding: 100px 0;
  //    width: 100%;
  //    text-align: center;
  //    color: ${LIGHT_GRAY7};
  //    border-bottom: solid 1px ${LIGHT_GRAY5};
  //    p {
  //      font-size: 14px;
  //      line-height: 20px;
  //      letter-spacing: -0.28px;
  //    }
  //  `,

  //   stBox:styled.div`
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //       .Selected{
  //         color: ${ORANGE1};
  //         border: 1px solid ${ORANGE1};
  //         border-radius: 28px;
  //       }
  //   `,
  //   stOptions:styled.div`
  //     margin-right: 30px;
  //     padding: 13px 47px;
  //     border-radius: 30px;
  //   `,
  // };
  
  const C = {
    wrap: styled.div`
      margin-top: 60px;
        .displayNone{
          display: none;
        }
      @media only screen and (max-width: 1059px) { 
        margin-top: 40px;
      }
      @media only screen and (max-width: 767px) { 
        margin-top: 20px;
      }
    `,
    sbody: styled.div`
      margin-top: 100px;
      @media only screen and (max-width: 1059px) { 
        margin-top: 80px;
      }
      @media only screen and (max-width: 767px) { 
        margin-top: 60px;
      }
    `,
    title: styled.h4`
      font-size: 22px;
      font-weight: bold;
      @media only screen and (max-width: 1059px) { 
        font-size: 20px;
      }
      @media only screen and (max-width: 767px) { 
        font-size: 18px;
      }
    `,
    itemTitle: styled.h5`
      font-size: 20px;
      font-weight: bold;
      @media only screen and (max-width: 1059px) { 
        font-size: 18px;
      }
      @media only screen and (max-width: 767px) { 
        font-size: 16px;
      }
    `,
    sb: styled.div`
      margin-top: 60px;
      @media only screen and (max-width: 1059px) { 
        margin-top: 40px;
      }
      @media only screen and (max-width: 767px) { 
        margin-top: 20px;
      }
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
    itemText: styled.p`
      display: inline-block;
      font-size: 18px;
      line-height: 1.8;
      &.mt20{
        margin-top:20px;
      }
      @media only screen and (max-width: 1059px) { 
        font-size: 16px;
      }
      @media only screen and (max-width: 767px) { 
        font-size: 14px;
      }
    `,
    description: styled.p`
      margin-top: 10px;
      color: ${LIGHT_GRAY7};
      font-size: 18px;
      line-height: 28px;
      &.center{
        text-align:center;
      }
      &.mt20{
        margin-top:20px;
      }
      @media only screen and (max-width: 1059px) { 
        font-size: 16px;
      }
      @media only screen and (max-width: 767px) { 
        font-size: 14px;
        margin-top:0;
      }
    `,
    bold: styled.span`
      font-weight: bold;
    `,
    li: styled.li`
      padding-left: 10px;
      position: relative;
      line-height: 36px;
        &::before{
          content:"";
          width: 4px;
          height: 4px;
          top: 15px;
          left: 0px;
          text-indent: -9999px;
          display: block;
          position: absolute;
          background-color: ${DARK_GRAY1};
          border-radius: 50%
        }
        &:first-child{
          margin: 0;
        }
  
    `,
    Badge:styled.div`
      width: 60px;
      height: 24px;
      margin: 0 auto;
      padding: 2px;
      color: #fff;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      border-radius: 4px;
      box-sizing: border-box;
        &.blue{
          background-color: ${BLUE1};
        }
        &.black{
          background-color: ${DARK_GRAY1};
        }
        &.red{
          background-color: ${RED2};
        }
      @media only screen and (max-width: 1059px) { 
        font-size: 16px;
      }
      @media only screen and (max-width: 767px) { 
        font-size: 14px;
      }
      `,
    line:styled.div`
      width: 83px;
      height: 1px;
      margin: 10px 20px 14px;
      background: ${LIGHT_GRAY9};
      @media only screen and (max-width: 767px) { 
        margin: 10px 0px;
        width:100%;
      }
      `,
    textBox:styled.div`
      width: auto;
      display: inline-block;
      text-align: left;
      @media only screen and (max-width: 767px) { 
        width:calc( 100% - 20px );
        float:left;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
      @media only screen and (max-width: 479px) {
        display:block;
      }
      `,
    textBoxCenter:styled.div`
      width: auto;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      @media only screen and (max-width: 767px) { 
        width:calc( 100% - 20px );
        float:left;
      }
    `,
    bannerBox:styled.div`
      margin-top: 20px;
      padding: 32px 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      border: 1px solid #dddddd;
      border-radius: 12px;
        .mb6{
          margin-bottom:6px;
        }
        .mt15{
          margin-top:15px;
        }
      `,
    btn:styled.button`
      display: inline-block;
      padding: 13px 47px;
      border-radius: 12px;
      border: solid 1px ${WHITE1};
      font-size: 18px;
      font-weight: 600;
      color: ${DARK_GRAY1};
      @media only screen and (max-width: 1059px) { 
        font-size: 16px;
      }
      @media only screen and (max-width: 767px) { 
        
      }
  `,
  }

export default DepArrListTable;
