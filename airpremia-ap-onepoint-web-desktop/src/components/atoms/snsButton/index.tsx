import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';
import SvgInstagram from 'public/images/ico_sns_instagram.svg';
import SvgFacebook from 'public/images/ico_sns_facebook.svg';
import SvgYoutube from 'public/images/ico_sns_youtube.svg';

interface IProps {
  /** instagram, facebook, youtube */
  type: string;
  /** 새창 경로 */
  to: string;
}

function SnsButton({ type, to }: IProps) {
  const svg = useMemo(() => {
    switch (type) {
      case 'instagram':
        return <SvgInstagram />;
      case 'facebook':
        return <SvgFacebook />;
      case 'youtube':
        return <SvgYoutube />;
      default:
        return <SvgInstagram />;
    }
  }, [type]);

  const onClick = useCallback(() => {
    window.open(to, '_blank');
  }, [to]);

  return <S.container onClick={onClick}>{svg}</S.container>;
}

SnsButton.defaultProps = {
  type: 'instagram',
  to: 'https://airpremia.com/',
};

const S = {
  container: styled.button`
    width: 30px;
    height: 40px;
    border-radius: 15px;
    border: solid 1px ${LIGHT_GRAY5};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default SnsButton;
