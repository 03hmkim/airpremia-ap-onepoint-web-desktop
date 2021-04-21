import styled from 'styled-components';
import { Arrow } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import {
  WHITE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { switchProp } from 'styled-tools';

interface IStyleProps {
  /** 1. short 2. long */
  lengthType?: string;
}
interface IProps extends IStyleProps {
  children?: string | React.ReactElement;
  onClick: () => void;
}

function ButtonLink2Type4({
  lengthType,
  children,
  onClick,
}: IProps) {
  const lengthTypeLocal = lengthType ? lengthType : 'short';
  return (
    <S.container
      onClick={onClick}
      lengthType={lengthTypeLocal}
    >
      <div className="label">{children}</div>
      <div className="arrowWrapper">
        <Arrow
          position={EPosition.RIGHT}
          scale={0.6}
          borderWidth="3"
        />
      </div>
    </S.container>
  );
}

ButtonLink2Type4.defaultProps = {
  lengthType: 'short',
};

const S = {
  container: styled.button<IStyleProps>`
    width: 100%;
    display: flex;
    height: 64px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    padding-left: 30px;
    padding-right: ${switchProp('lengthType', {
      short: '12px',
      long: '22px',
    })};
    .label {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.32px;
    }
  `,
};

export default ButtonLink2Type4;
