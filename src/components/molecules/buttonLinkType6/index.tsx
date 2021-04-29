import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { FC, ReactType } from 'react';
import { Arrow } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';

interface IStyle {
  disabled?: boolean;
}
interface IProps extends IStyle {
  SvgIcon: ReactType;
  text: string;
  onClick: () => void;
}

const ButtonLinkType6: FC<IProps> = ({
  SvgIcon,
  text,
  onClick,
  ...props
}) => {
  return (
    <S.container {...props} onClick={onClick}>
      <S.left>
        <span>
          <SvgIcon />
        </span>
        <p>{text}</p>
      </S.left>
      <S.right>
        <Arrow position={EPosition.RIGHT} />
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    /* width: 285px; */
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 20px;
    box-sizing: border-box;
    cursor: ${ifProp('disabled', 'default', 'pointer')};
    & > div {
      opacity: ${ifProp('disabled', 0.1, 1)};
    }

    &:hover {
      p {
        text-decoration: ${ifProp(
          'disabled',
          'unset',
          'underline',
        )};
      }
    }
  `,

  left: styled.div`
    display: flex;
    align-items: center;
    p {
      font-size: 18px;
      line-height: 24px;
      margin-left: 10px;
    }

    @media only screen and (max-width: 767px) {
      p {
        font-size: 15px;
      }
    }
  `,

  right: styled.div``,
};

export default ButtonLinkType6;
