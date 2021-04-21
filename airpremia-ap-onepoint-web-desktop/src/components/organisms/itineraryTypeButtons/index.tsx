import { FC } from 'react';
import styled from 'styled-components';
import { RoundedButton5 } from 'src/components';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';

interface IStyleProps {}
interface IProps extends IStyleProps {
  type: EFlightType;
  onChangeType: (type: EFlightType) => () => void;
}

const ItineraryTypeButtons: FC<IProps> = ({
  type,
  onChangeType,
}) => {
  return (
    <S.container>
      <RoundedButton5
        isActive={type === EFlightType.RT}
        onClick={onChangeType(EFlightType.RT)}
      >
        왕복
      </RoundedButton5>
      <RoundedButton5
        isActive={type === EFlightType.OW}
        onClick={onChangeType(EFlightType.OW)}
      >
        편도
      </RoundedButton5>
    </S.container>
  );
};

ItineraryTypeButtons.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>``,
};

export default ItineraryTypeButtons;
