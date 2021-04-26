import { useState, useEffect, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { map } from 'lodash';
import {
  LIGHT_GRAY4,
  LIGHT_GRAY6,
  BLUE1,
  ORANGE2,
  DARK_GRAY1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import {
  Radio,
  CabinClassExpansionPanel,
} from 'src/components';
import { IProps as IRadioProps } from 'src/components/molecules/radio';
import { IFlightTicketSearchJourney } from '@airpremia/core/api/ticket/types';
import { addComma } from '@airpremia/core/lib/service';
import { ifProp } from 'styled-tools';

interface IProps {
  journey: IFlightTicketSearchJourney;
  radioData: IRadioProps[];
  selectedProduct: string;
  onChangeProductType: (key: string) => void;
}

function CabinClassTicket({
  journey,
  selectedProduct,
  radioData = [Radio.defaultProps, Radio.defaultProps],
  onChangeProductType,
}: IProps) {
  const [alreadyOpen, setAlreadyOpen] = useState<boolean>(
    false,
  );

  useEffect(() => {
    const res = radioData.reduce(
      (acc, it) => it.isActive || acc,
      false,
    );
    setAlreadyOpen(res);
  }, [radioData]);

  const { cabinClasses } = journey;
  return (
    <S.container>
      <S.selectBox>
        <S.cabinClassWrapper>
          {map(cabinClasses, (product, i) => {
            const className = product.code.toLowerCase();
            const getRadioDisableStatus = () => {
              if (!product.productClasses.length) {
                return true;
              }
              return product.productClasses.reduce(
                (acc, it) => {
                  return acc && !it.available;
                },
                true,
              );
            };
            const newRadioData = {
              ...radioData[i],
              disabled: getRadioDisableStatus(),
            };

            return (
              <div
                className={
                  className.toUpperCase() === 'Y'
                    ? 'ey'
                    : 'pe'
                }
                key={`cabinClassesRadio${i.toString()}`}
              >
                <Radio className="radio" {...newRadioData}>
                  {product.text}
                </Radio>
                <S.startPrice>
                  {getRadioDisableStatus() ? (
                    <S.soldout>매진</S.soldout>
                  ) : (
                    <Fragment>
                      {addComma(product.startPrice || 0)}{' '}
                      <span>원~</span>
                    </Fragment>
                  )}
                </S.startPrice>
              </div>
            );
          })}
        </S.cabinClassWrapper>
        <S.expansionPanel>
          {map(cabinClasses, (cabinClass, i) => {
            const { productClasses } = cabinClass;
            return (
              // radioData[i].isActive && (
              <S.cabinClassExpansionPanel
                key={`cabinClassExpansionPanel${i.toString()}`}
                isShow={radioData[i].isActive || false}
                isAlreadyOpen={alreadyOpen}
              >
                <CabinClassExpansionPanel
                  isShow={radioData[i].isActive || false}
                  classType={cabinClass.code}
                  classText={cabinClass.text}
                  productClassList={productClasses}
                  selectedProduct={selectedProduct}
                  onChangeProductType={onChangeProductType}
                  onClickFlightRule={() => {}}
                />
              </S.cabinClassExpansionPanel>
              // )
            );
          })}
        </S.expansionPanel>
      </S.selectBox>
    </S.container>
  );
}

const S = {
  container: styled.div`
    width: 100%;
    flex: 1;
  `,

  selectBox: styled.div`
    padding: 10px 0;
    display: block;
    justify-content: space-between;
    align-items: center;
    /* height: 116px; */
    height: 100%;
    flex-wrap: wrap;

    .radio {
      display: flex;

      & > div:last-of-type {
        font-size: 21px;
        line-height: 35px;
        letter-spacing: -0.36px;
      }
    }

    .ey {
      border-right: dotted 1px ${LIGHT_GRAY6};

      .radio > div:last-of-type {
        color: ${BLUE1};
      }
    }

    .pe {
      .radio > div:last-of-type {
        color: ${ORANGE2};
      }
    }

    @media only screen and (max-width: 767px) {
      .ey {
        border-right: 0;
      }

      .radio {  
        & > div:last-of-type {
          font-size: 14px;
        }
      }
    }
  `,

  cabinClassWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 116px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY4};

    & > div {
      flex: 1;
      padding: 36px 40px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media only screen and (max-width: 767px) { 
      height: auto;
      padding: 14px 0;
      display: block;
      overflow:hidden;

      & > div{
        width: 100%;
        padding: 6px 20px;
        float: left;
      }
    }
  `,

  startPrice: styled.div`
    font-family: 'heebo';
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
    font-weight: 600;
    color: ${DARK_GRAY1};

    span {
      font-family: 'NotoSans';
      font-size: 16px;
      line-height: 35px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      span {
        font-size: 14px;
      }
    }
  `,

  expansionPanel: styled.div`
    width: 100%;
    max-width: 1200px;
    position: relative;
    top: 20px;
    left: 0px;
    
    @media only screen and (max-width: 1440px) { 
      width: 100%;
      left: 0px;      
    }
  `,

  soldout: styled.div`
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.4px;
    font-weight: 600;
    color: ${LIGHT_GRAY8};
  `,

  cabinClassExpansionPanel: styled.div<{
    isShow: boolean;
    isAlreadyOpen: boolean;
  }>`
    overflow: hidden;
    margin-bottom: ${ifProp('isShow', 80, 0)}px;
    opacity: ${ifProp('isShow', 1, 0)};
    position: relative;
    left:-370px;
    width:calc( 100% + 370px );
    bottom: ${ifProp('isShow', 0, -20)}px;
    bottom: ${ifProp('isAlreadyOpen', 0)};
    ${({ isShow, isAlreadyOpen }) => {
      if (!isShow && isAlreadyOpen) {
        return css`
          display: none;
        `;
      }
    }};
    max-height: ${ifProp('isShow', '366', 0)}px;
    transition: all 0.3s;
    
    @media only screen and (max-width: 1059px) {
      left:0px;
      width:100%;
    }
    @media only screen and (max-width: 767px) { 
      max-height: ${ifProp('isShow', '1500', 0)}px;
    }
  `,
};

export default CabinClassTicket;
