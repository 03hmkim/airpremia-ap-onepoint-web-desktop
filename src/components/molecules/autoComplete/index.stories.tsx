import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import AutoComplete from '.';
import { Select } from 'src/components';
import { ESelectPosition } from '../select';

export default {
  title: 'desktop / Molecules / autoComplete',
  component: AutoComplete,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'AutoComplete',
  },
};

const sortedCountryCodeData = {
  suggestions: [
    { countryNumber: 82, description: '대한민국 (+82)' },
    { countryNumber: 84, description: '베트남 (+84)' },
    { countryNumber: 81, description: '일본 (+81)' },
    { countryNumber: 86, description: '중국 (+86)' },
    { countryNumber: 852, description: '홍콩 (+852)' },
  ],
  ㄱ: [
    { countryNumber: 233, description: '가나 (+233)' },
    { countryNumber: 241, description: '가봉 (+241)' },
    { countryNumber: 592, description: '가이아나 (+592)' },
    { countryNumber: 220, description: '감비아 (+220)' },
    { countryNumber: 502, description: '과테말라 (+502)' },
  ],
  ㄴ: [
    { countryNumber: 264, description: '나미비아 (+264)' },
    { countryNumber: 674, description: '나우루 (+674)' },
    {
      countryNumber: 234,
      description: '나이지리아 (+234)',
    },
    {
      countryNumber: 672,
      description: '남극,오스트레일리아의외 (+672)',
    },
    {
      countryNumber: 27,
      description: '남아프리카공화국 (+27)',
    },
  ],
};

export const 자동완성드롭다운내용: FC = () => {
  return (
    <AutoComplete
      key="countryNumber"
      label="description"
      dataList={sortedCountryCodeData}
      onChange={() => {}}
      emptyMessage={
        <p>
          국가명/지역명 또는 국가번호를 찾을 수 없습니다.
          <br />
          검색어를 다시 한 번 확인해주세요.
        </p>
      }
    />
  );
};

export const 국가코드드롭다운예제: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [label, setLabel] = useState('+ 82');
  const onOpen = () => setOpen(!isOpen);
  const selectProps = {
    label,
    isShowMenu: isOpen,
    position: ESelectPosition.DOWN,
    onClick: onOpen,
  };

  const contentProps = {
    key: 'countryNumber',
    label: 'description',
    dataList: sortedCountryCodeData,
    onChange: (data: any) => {
      setLabel(`+ ${data.countryNumber}`);
      onOpen();
    },
    onFliter: () => {},
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };
  return (
    <S.container>
      <Select {...selectProps}>
        <AutoComplete {...contentProps} />
      </Select>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 50px;
    padding: 14px 0;
  `,
};
