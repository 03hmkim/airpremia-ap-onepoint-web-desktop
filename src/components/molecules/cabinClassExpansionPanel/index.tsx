import styled from 'styled-components';
import map from 'lodash/map';
import {
  LIGHT_GRAY6,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import {
  Arrow,
  CabinClassSpec,
  CabinClassTicketCard,
} from 'src/components';
import { IFlightTicketSearchProductClass } from '@airpremia/core/api/ticket/types';

interface IProps {
  isShow: boolean;
  classType: string;
  classText: string;
  productClassList: IFlightTicketSearchProductClass[];
  selectedProduct: string;
  onClickFlightRule: () => void;
  onChangeProductType: (key: string) => void;
}

function CabinClassExpansionPanel({
  isShow,
  classType,
  selectedProduct,
  productClassList,
  onClickFlightRule,
  onChangeProductType,
}: IProps) {
  return (
    <S.container
      isShow={isShow}
      className="expansion-panel"
    >
      <S.contentWrapper>
        <S.cabinClassSpec>
          <CabinClassSpec classType={classType} />
        </S.cabinClassSpec>

        <S.cardWrapper>
          {map(productClassList, (productClass, i) => {
            const isSelected =
              selectedProduct ===
              productClass.fareAvailabilityKey;
            return (
              <S.cabinClassTicketCard
                key={`CabinClassTicketCard${i.toString()}`}
              >
                <CabinClassTicketCard
                  isSelected={isSelected}
                  productClass={productClass}
                  classType={classType}
                  onClick={onChangeProductType}
                />
              </S.cabinClassTicketCard>
            );
          })}
        </S.cardWrapper>
      </S.contentWrapper>
      <S.flightRule>
        <p onClick={onClickFlightRule}>
          항공권 규정 자세히 보기 <Arrow />
        </p>
      </S.flightRule>
    </S.container>
  );
}


const S = {
  container: styled.div<{ isShow: boolean }>`
    width: 100%;
  `,

  contentWrapper: styled.div`
    height: 321px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media only screen and (max-width: 767px) { 
      display: block;
      height: auto;
    }
  `,

  cabinClassSpec: styled.div`
    padding: 40px 10px 30px 30px;

    @media only screen and (max-width: 767px) { 
      padding: 20px 10px 20px 10px;
    }
  `,

  cardWrapper: styled.div`
    width: 100%;
    display: flex;
    flex: 1;

    @media only screen and (max-width: 479px) {
      display: block;
    }
  `,

  cabinClassTicketCard: styled.div`
    flex: 1;
    border-left: dotted 1px ${LIGHT_GRAY6};

    @media only screen and (max-width: 767px) {
      border-top: dotted 1px ${LIGHT_GRAY6};

      &:first-child {
        border-left: 0;
      }
    }

    @media only screen and (max-width: 479px) {
      width: 100%;
      border-left: 0;
    }
  `,

  flightRule: styled.div`
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.26px;
    color: ${DARK_GRAY1};
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;

    p {
      text-align: right;
    }

    @media only screen and (max-width: 767px) {
      font-size: 13px;
    }
  `,
};

export default CabinClassExpansionPanel;
