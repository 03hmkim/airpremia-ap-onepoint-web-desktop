import { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput } from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { TaskButton } from 'src/components';
import { useMe } from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';

interface IProps {}

const CouponRegistration: FC<IProps> = ({}) => {
  const { onSubmitCouponCode } = useMe();
  const { onHideNewModal } = useModal();
  const [couponCode, setCouponCode] = useState('');
  const couponData = {
    labelData: {
      children: '쿠폰 코드',
    },
    inputData: {
      value: couponCode,
      target: 'couponCode',
      type: EInputType.TEXT,
      placeholder: '쿠폰 코드 입력',
      onChange: (e: any) => setCouponCode(e.target.value),
    },
  };

  const onClickButton = async () => {
    const res = await onSubmitCouponCode(couponCode);
    if (res) {
      onHideNewModal();
    }
  };

  return (
    <S.container>
      <TextInput
        labelProps={couponData.labelData}
        inputProps={couponData.inputData}
      />
      <S.button>
        <TaskButton
          disabled={!couponCode}
          onClick={onClickButton}
        >
          등록
        </TaskButton>
      </S.button>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  button: styled.div`
    margin-top: 120px;
  `,
};

export default CouponRegistration;
