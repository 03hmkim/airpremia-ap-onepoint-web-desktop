import { FC } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Radio from '.';

export default {
  title: 'desktop / Molecules / Radio',
  component: Radio,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '라디오 체크박스 ',
  },
};

export const 라디오: FC = () => {
  return (
    <Radio isActive={boolean('버튼활성화', true)}>
      라디오박스
    </Radio>
  );
};

export const 라디오_내용: FC = () => {
  return (
    <Radio isActive={boolean('버튼활성화', true)}>
      <div>
        <u>underline</u>
      </div>
    </Radio>
  );
};

export const 라디오_비활성화: FC = () => {
  return (
    <Radio disabled>
      <div>비활성화</div>
    </Radio>
  );
};
