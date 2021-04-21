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
}

const PrivacyCheck: FC<IProps> = ({
  isBold = false,
  checkboxProps,
  onClickDescription = () => {},
}: IProps) => {
  return (
    <S.container>
      <S.left>
        <Checkbox {...checkboxProps}>
          <p className={isBold ? 'font-bold' : ''}>
            {checkboxProps.children}
          </p>
        </Checkbox>
      </S.left>
      <S.right>
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
    justify-content: space-between;
    align-items: center;
  `,

  left: styled.div``,

  right: styled.div`
    svg {
      width: 8px;
      height: 11px;
    }
  `,
};

export default PrivacyCheck;
