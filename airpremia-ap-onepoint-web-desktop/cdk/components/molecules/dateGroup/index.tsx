import React, { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { ELanguageType } from '../../../../core/lib/constant';
import localeData from 'dayjs/plugin/localeData';
import Typography from '../../atoms/typography';
import { LIGHT_GRAY7 } from '../../../styles/colors';

dayjs.extend(localeData);
const localDay = dayjs().localeData();

export interface IProps {
  language: ELanguageType;
}

const DayGroup: FC<IProps> = ({
  language = ELanguageType.KR,
}) => {
  const [weekdays] = useState<string[]>(
    localDay.weekdaysShort(),
  );
  useEffect(() => {
    dayjs.locale(language);
  }, []);

  return (
    <S.container>
      {weekdays.map((item, i) => (
        <Typography
          key={i.toString()}
          color={LIGHT_GRAY7}
          fontType="type12"
          lineHeight={18}
          fontWeight="medium"
        >
          {item}
        </Typography>
      ))}
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
};

export default DayGroup;
