import React, {
  ChangeEvent,
  useCallback,
  useState,
} from 'react';
import Radio, { IProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / atoms / Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IProps> = () => {
  const [selectedValue, setSelectedValue] = useState<
    string
  >('');
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
    },
    [],
  );
  return (
    <>
      <Radio
        checked={selectedValue === '1'}
        name="radioGroup"
        value="1"
        onChange={onChange}
      />
      <Radio
        checked={selectedValue === '2'}
        name="radioGroup"
        value="2"
        onChange={onChange}
      >
        children
      </Radio>
    </>
  );
};

export const 라디오 = Template.bind({});
라디오.args = {
  name: 'radio1',
  disabled: false,
};
