import { FC } from 'react';
import styled from 'styled-components';
import { Arrow } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  text: string;
  onClick: () => void;
  arrowReverse?: boolean;
}

const ButtonSubType5: FC<IProps> = ({
  text,
  onClick,
  arrowReverse,
}) => {
  return (
    <S.container onClick={onClick}>
      <p>{text}</p>
      <Arrow
        position={
          arrowReverse ? EPosition.UP : EPosition.DOWN
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 12px 30px;
    border: solid 1px ${LIGHT_GRAY6};
    border-radius: 300px;
    cursor: pointer;
    &:hover {
      border: solid 1px ${DARK_GRAY1};
    }

    p {
      margin-right: 5px;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
    }
    svg {
      width: 16px;
      height: 16px;
    }
  `,
};

export default ButtonSubType5;
