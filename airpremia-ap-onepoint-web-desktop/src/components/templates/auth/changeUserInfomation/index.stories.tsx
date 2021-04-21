import React, { FC, Fragment } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ChangeUserInfomationTemplate from './';
import { Container } from 'src/styles/layout';
import { Title, TaskButton } from 'src/components';
import { ChangeUserInfomation } from 'src/components';
import { useChangeUserInfomationHook } from './dummy';
import {
  LIGHT_GRAY7,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export default {
  title:
    'desktop / Templates / ChangeUserInfomationTemplate',
  component: ChangeUserInfomationTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ChangeUserInfomationTemplate',
  },
};

export const 유저정보변경템플릿: FC = () => {
  return (
    <Container>
      <ChangeUserInfomationTemplate
        title={<Title>회원정보변경</Title>}
        description={
          '항공권 예약 전에는 이름과 생년월일을 변경할 수 있습니다.'
        }
        content={
          <ChangeUserInfomation
            {...useChangeUserInfomationHook()}
          />
        }
        button={
          <Fragment>
            <TaskButton
              color={LIGHT_GRAY7}
              border={`solid 1px ${LIGHT_GRAY7}`}
              backgroundColor={WHITE1}
              onClick={() => console.log('취소')}
            >
              취소
            </TaskButton>
            <TaskButton onClick={() => console.log('저장')}>
              저장
            </TaskButton>
          </Fragment>
        }
      />
    </Container>
  );
};
