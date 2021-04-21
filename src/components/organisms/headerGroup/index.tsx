import styled, { css } from 'styled-components';
import { includes } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GnbNew, Header, Topbanner } from 'src/components';
import { useAccident } from '@airpremia/core/hooks';
import { useUrl } from 'src/hooks';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';

interface IProps {
  resetData?: () => void; //smartport.mhh bookingSession reset
}

const HeaderGroup: FC<IProps> = ({ resetData }) => {
  const router = useRouter();
  const { accidentStore } = useAccident();
  const { url } = useUrl();
  const { accidentList } = accidentStore;
  const [showBanner, setShowBannerStatus] = useState(false);

  const onChangeBannerStatus = () => {
    if (
      router.pathname === '/' &&
      accidentList.length > 0
    ) {
      setShowBannerStatus(true);
    } else {
      setShowBannerStatus(false);
    }
  };

  useEffect(() => {
    onChangeBannerStatus();
  });

  if (!includes(url.split('/'), 'dark')) {
    return (
      <S.container
        hasBorder={
          router.pathname === '/ticket/flight/cabin-class'
        }
      >
        {showBanner && <Topbanner />}
        <Header />
        <GnbNew resetData={resetData} />
      </S.container>
    );
  }
  return null;
};

HeaderGroup.defaultProps = {
  resetData: () => {},
};

const S = {
  container: styled.div<{ hasBorder: boolean }>`
    position: sticky;
    width: 100%;
    /* min-width: 1440px; */
    z-index: 50;
    top: 0;
    ${({ hasBorder }) =>
      hasBorder &&
      css`
        border-bottom: solid 1px ${LIGHT_GRAY6};
      `}
  `,
};

export default HeaderGroup;
