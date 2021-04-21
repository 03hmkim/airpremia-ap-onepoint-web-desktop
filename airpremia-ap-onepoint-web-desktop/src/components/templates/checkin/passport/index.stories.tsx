import React, { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import PassportTemplate from '.';
import boardingPasses from './dummy';
import { BoardingPassPaper } from 'src/components';

export default {
  title: 'desktop / Templates / PassportTemplate',
  component: PassportTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Passport',
  },
};

export const 탑승권: FC = () => {
  return (
    <PassportTemplate
      boardingPasses={
        <S.boardingPassWrapper>
          {boardingPasses.map((boardingPass, i) => (
            <S.wrapper key={`boardingPass${i.toString()}`}>
              <BoardingPassPaper
                boardingPass={boardingPass}
              />
            </S.wrapper>
          ))}
        </S.boardingPassWrapper>
      }
    />
  );
};

const S = {
  boardingPassWrapper: styled.div`
    & > div:not(:first-of-type) {
      margin-top: 60px;
    }
  `,

  wrapper: styled.div``,
};
