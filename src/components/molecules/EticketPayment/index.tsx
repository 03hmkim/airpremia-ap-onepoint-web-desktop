import styled from 'styled-components';
import { FC } from 'react';
import {
  IBookingDetailBreakdown,
  IBookingDetailPayment,
  IBookingDetailPaymentDetail,
} from '@airpremia/core/api/checkin/types';
import { addComma } from '@airpremia/core/lib/service';
import { flow, compact, map } from 'lodash/fp';

interface IProps {
  payments: IBookingDetailPayment[];
  breakdown: IBookingDetailBreakdown;
}

const EticketPayment: FC<IProps> = ({
  payments,
  breakdown,
}) => {

  if (!breakdown) {
    return <S.container></S.container>;
  }
  
  const {
    totalFarePrice,
    totalTaxAndFee,
    totalFuelSurcharge,
    totalSsrPrice,
    totalFarePriceDiscount,
    totalPromotionDiscount,
    totalPrice,
  } = breakdown;

  const getTaxAndFee = () => {
    return totalTaxAndFee - totalFuelSurcharge;
  }

  const getDiscountPrice = () => {
    return totalFarePriceDiscount + totalPromotionDiscount;
  }

  const getPaidText = () => {
    const paid = flow(
      map((p: any) => {
        return `${addComma(p.amount || 0)} 원`;
      }),
      compact,
    )(payments);

    return paid;
  }

  const getPaidType = () => {
    const types = flow(
      map((p: IBookingDetailPayment) => p.details),
      map((d: IBookingDetailPaymentDetail) => {
        return `${d.code} / ${d.accountNumber}`;
      }),
      compact,
    )(payments);

    return types;
  }

  return (
    <S.container>
      <table style={{width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', textAlign: 'left'}}>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <tbody>
          <tr style={{borderTop: '3px solid #222222'}}>
            <th style={{padding: '20px 0', textAlign: 'left'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>항공운임</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Fare</p>
              </div>
            </th>
            <td>
              <div style={{fontSize: 14, fontWeight: 'bold', textAlign: 'right'}}>{addComma(totalFarePrice || 0)} 원</div>
            </td>
            <td />
            <th>
              <div style={{textAlign: 'left'}}>
                <p style={{margin: 0, fontSize: 13}}>세금/기타비용</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Tax/Fee/charge</p>
              </div>
            </th>
            <td>
              <div style={{fontSize: 14, fontWeight: 'bold', textAlign: 'right'}}>{addComma(getTaxAndFee() || 0)} 원</div>
            </td>
          </tr>
          <tr style={{borderBottom: '1px solid #e5e5e5'}}>
            <th style={{padding: '20px 0', textAlign: 'left'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>유류할증료</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Fuel Surcharge</p>
              </div>
            </th>
            <td>
              <div style={{fontSize: 14, fontWeight: 'bold', textAlign: 'right'}}>{addComma(totalFuelSurcharge || 0)} 원</div>
            </td>
            <td />
            <th>
              <div style={{textAlign: 'left'}}>
                <p style={{margin: 0, fontSize: 13}}>부가 서비스료</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Service fee</p>
              </div>  
            </th>
            <td>
              <div style={{fontSize: 14, fontWeight: 'bold', textAlign: 'right'}}>{addComma(totalSsrPrice || 0)} 원</div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', textAlign: 'left'}}>
        <colgroup>
          <col width="50%" />
          <col width="50%" />
        </colgroup>
        <tbody>
          <tr style={{borderBottom: '1px solid #e5e5e5'}}>
            <th style={{padding: '20px 0'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>할인내역</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Discount</p>
              </div>
            </th>
            <td>
              <div style={{textAlign: 'right'}}>
                <p style={{margin: 0, fontSize: 14, fontWeight: 'bold'}}>{addComma(getDiscountPrice() || 0)} 원</p>
              </div>
            </td>
          </tr>
          {/* 
                <tr style="border-bottom:1px solid #e5e5e5;">
                <th style="padding:20px 0;">
                <div>
                <p style="margin:0; font-size:13px;">세금</p>
                <p style="margin:0; color:#b2b2b2; font-size:13px; font-weight:400;">Tax</p>
                </div>
                </th>
                <td>
                <div style="text-align:right;">
                <p style="margin:0; font-size:14px; font-weight:bold;">0원</p>
                </div>
                </td>
                </tr>
            */}
          <tr style={{borderBottom: '1px solid #e5e5e5'}}>
            <th style={{padding: '20px 0'}}>
              <div style={{textAlign: 'left'}}>
                <p style={{margin: 0, fontSize: 13}}>지불 금액/포인트</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Paid</p>
              </div>
            </th>
            <td>
              <div style={{color: '#0093ff', textAlign: 'right'}}>
                {getPaidText()?.map(
                  (paid, i) => (
                    <p style={{margin: 0, fontSize: 14, fontWeight: 'bold'}} key={`paidText${i}`}>{paid}</p>    
                  )
                )}
              </div>
            </td>
          </tr>
          <tr style={{borderBottom: '1px solid #e5e5e5'}}>
            <th style={{padding: '20px 0'}}>
              <div style={{textAlign: 'left'}}>
                <p style={{margin: 0, fontSize: 13}}>지불 수단</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Form of Payment</p>
              </div>
            </th>
            <td>
              <div style={{textAlign: 'right'}}>
                {getPaidType()?.map(
                  (t, i) => (
                    <p style={{margin: 0, fontSize: 14, fontWeight: 'bold'}} key={`paidType${i}`}>{t}</p>    
                  )
                )}
              </div>
            </td>
          </tr>
          <tr style={{borderBottom: '3px solid #222222'}}>
            <th style={{padding: '20px 0'}}>
              <div>
                <p style={{margin: 0, fontSize: 13}}>총 금액</p>
                <p className="e01" style={{margin: 0, color: '#b2b2b2', fontSize: 13, fontWeight: 400}}>Total Amount</p>
              </div>
            </th>
            <td>
              <div style={{textAlign: 'right'}}>
                <p style={{margin: 0, fontSize: 14, fontWeight: 'bold'}}>{addComma(totalPrice || 0)} 원</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding-bottom: 100px;
    @media only screen and (max-width: 767px) { 
      padding-bottom: 40px;
      table{
        th{
          .e01{
            margin-top:5px !important;
          }
        }
      }
    } 
  `,
};

export default EticketPayment;
