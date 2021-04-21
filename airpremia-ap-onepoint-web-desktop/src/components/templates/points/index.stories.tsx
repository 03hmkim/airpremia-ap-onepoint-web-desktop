import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PointsTemplate from './';
import {
  PointsHeader,
  PointsBody,
  ButtonSubType5,
  Caution,
} from 'src/components';
import { pointsHistory, caution } from './dummy';
import { Container } from 'src/styles/layout';

export default {
  title: 'desktop / Templates / PointsTemplate',
  component: PointsTemplate,
  decorators: [withKnobs],
};

export const 포인트초기화면: FC = () => {
  const [moreUnit, setMoreUnit] = useState(1);
  const onClickMore = () => {
    setMoreUnit(moreUnit + 1);
  };

  return (
    <Container>
      <PointsTemplate
        hasMoreButton={pointsHistory.length > 10 * moreUnit}
        title="포인트"
        pointsHeader={
          <PointsHeader
            name="LEE JINWON"
            points={5000000}
            expirationDate={'2020-09-02'}
            toBeExpiratedPoints={100000}
          />
        }
        pointsBody={
          <PointsBody
            list={pointsHistory.slice(0, 10 * moreUnit)}
          />
        }
        more={
          <ButtonSubType5
            text="탑승권 더보기"
            onClick={onClickMore}
          />
        }
        caution={
          <Caution
            isTitleBold
            title={caution.title}
            body={caution.body}
          />
        }
      />
    </Container>
  );
};
