import styled from 'styled-components';
import { FC } from 'react';
import { Arrow } from 'src/components';
import { Checkbox } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { IProps as ICheckboxProps } from 'src/components/molecules/checkbox';

interface IProps {
  isBold?: boolean;
  checkboxProps: ICheckboxProps;
  onClickDescription?: () => void;
  arrow?: string;
}

const PrivacyCheck: FC<IProps> = ({
  isBold = false,
  checkboxProps,
  arrow,
  onClickDescription = () => {},
}: IProps) => {
  return (
    <S.container className={arrow}>
      <S.left>
        <Checkbox {...checkboxProps}>
          <p className={isBold ? 'font-bold' : ''}>
            {checkboxProps.children}
          </p>
        </Checkbox>
      </S.left>
      <S.right className="right">
        <Arrow
          position={EPosition.RIGHT} 
          onClick={onClickDescription}
        />
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    @media only screen and (max-width: 767px) {
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &.arrowN .right {
      display: none;
    }
    &.arrowN {
      margin-bottom: 15px;
      @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
    }
  `,

  left: styled.div``,

  right: styled.div`
    svg {
      width: 12px;
      height: 16.5px;
    }
  `,
};

export default PrivacyCheck;
