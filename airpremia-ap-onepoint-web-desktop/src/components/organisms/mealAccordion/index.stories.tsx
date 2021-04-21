import React, { FC, useState } from 'react';
import MealAccordion from '.';
import styled from 'styled-components';
import { SsrInputCheckboxRadio } from 'src/components';
import { ESsrInputType } from 'src/components/molecules/ssrInputCheckboxRadio';

export default {
  title: 'desktop / Organisms / MealAccordion',
  component: MealAccordion,
  parameters: {
    componentSubtitle: 'MealAccordion 컴포넌트 Docs',
  },
};

export const 기내식_아코디언: FC = () => {
  const [active, setAcitve] = useState(false);
  const toggle = () => {
    setAcitve(!active);
  };

  return (
    <S.container>
      <MealAccordion
        isOpen={active}
        onClick={toggle}
        title="일반식"
      >
        <div className="inputWrapper">
          <SsrInputCheckboxRadio
            inputType={ESsrInputType.RADIO}
            isActive={false}
            value="BG202"
            name="해산물 식사"
            description="신식사 설명이 들어가는 영역입니다. 식사 설명이 들어가는 영역입니다."
            price={22000}
          />
        </div>
      </MealAccordion>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 449px;
    .inputWrapper {
      width: 419px;
    }
  `,
};
