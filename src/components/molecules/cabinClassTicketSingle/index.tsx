import { FC } from 'react';
import styled from 'styled-components';
import { CabinClassProductSingleCard } from 'src/components';
import { IFlightTicketSearchJourney } from '@airpremia/core/api/ticket/types';

interface IProps {
  journey: IFlightTicketSearchJourney;
  selectedProduct: string;
  onChangeClassType: (e: any) => void;
  onChangeProductType: (key: string) => void;
}

const CabinClassTicketSingle: FC<IProps> = ({
  journey,
  selectedProduct,
  onChangeClassType,
  onChangeProductType,
}) => {
  const { journeyKey, cabinClasses } = journey;

  const onClickClass = (key: string) => {
    onChangeClassType({ target: `/${journeyKey}` });
    onChangeProductType(key);
  };

  return (
    <S.container>
      {cabinClasses.map((item, i) => {
        const isSelected =
          selectedProduct ===
          item.productClasses[0].fareAvailabilityKey;
        return (
          <S.wrapper
            key={`cabinClassProductSingleCard${i.toString()}`}
          >
            <CabinClassProductSingleCard
              isSelected={isSelected}
              classText={item.text}
              classCode={item.code}
              productClassList={item.productClasses}
              onChangeProductType={onClickClass}
            />
          </S.wrapper>
        );
      })}
    </S.container>
  );
};

const S = {
  container: styled.div`
    & > div:not(:first-of-type) {
      margin-top: 10px;
    }
  `,

  wrapper: styled.div``,
};

export default CabinClassTicketSingle;
