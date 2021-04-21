import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Dummy from './dummy';

import UserGradeTemplate from './';
import {
  GradeDashboard,
  MembershipDashboard,
  UserGradeGuideTable,
} from 'src/components';
import { Container } from 'src/styles/layout';
import Caution from 'src/components/molecules/caution';

export default {
  title: 'desktop / Templates / UserGradeTemplate',
  component: UserGradeTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'UserGradeTemplate',
  },
};

export const 회원등급: FC = () => {
  return (
    <Container>
      <UserGradeTemplate
        title="회원 등급"
        gradeDashboard={<GradeDashboard grade="blue" />}
        membershipDashboard={
          <MembershipDashboard
            mileage={1000}
            grade="blue"
          />
        }
        userGradeGuideTable={
          <UserGradeGuideTable grade="blue" />
        }
        caution={
          <Caution
            isTitleBold
            title={Dummy.title}
            body={Dummy.body}
          />
        }
      />
    </Container>
  );
};
