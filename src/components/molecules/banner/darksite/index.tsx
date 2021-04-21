import styled from 'styled-components';
import { Text, Badge } from 'src/components';
import { IProps as ITitleTextProps } from 'src/components/atoms/text';
import { ORANGE2 } from '@airpremia/cdk/styles/colors';

export interface IProps {
  /** Title Text Props */
  titleTextContent?: ITitleTextProps;
  /** Subtitle Text Props */
  subtitleTextContent?: ITitleTextProps;
}

function BannerDarksite({
  titleTextContent,
  subtitleTextContent,
}: IProps) {
  return (
    <S.container>
      <div className="banner_darksite--badge">
        <Badge backgroundColor={ORANGE2}>NOTICE</Badge>
      </div>
      <div className="banner_darksite--title-text-content">
        <Text {...titleTextContent}>
          {titleTextContent
            ? titleTextContent.children
            : ''}
        </Text>
      </div>
      <div className="banner_darksite--subtitle-text-content">
        <Text {...subtitleTextContent}>
          {subtitleTextContent
            ? subtitleTextContent.children
            : ''}
        </Text>
      </div>
    </S.container>
  );
}

BannerDarksite.defaultProps = {};

const S = {
  container: styled.div<IProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;

    .banner_darksite--badge {
      margin-bottom: 15px;
    }

    .banner_darksite--title-text-content {
      margin-bottom: 13px;
    }
  `,
};

export default BannerDarksite;
