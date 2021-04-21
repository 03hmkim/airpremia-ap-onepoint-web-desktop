import { css } from 'styled-components';
import { darken } from 'polished';
import {
  BLUE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

export const onPressButtonCss = ({
  disabled = false,
  isActive,
  backgroundColor = BLUE1,
}: {
  disabled?: boolean;
  isActive: boolean;
  backgroundColor?: string;
}) => {
  let calculatedBackgroundColor: string;
  let calculatedOpacity: number;

  if (disabled) {
    calculatedBackgroundColor = LIGHT_GRAY6;
    calculatedOpacity = 1;
  } else {
    if (isActive) {
      calculatedBackgroundColor = darken(
        0.05,
        backgroundColor,
      );
      calculatedOpacity = 0.5;
    } else {
      calculatedBackgroundColor = backgroundColor;
      calculatedOpacity = 1;
    }
  }
  return css`
    background-color: ${calculatedBackgroundColor};
    span,
    g {
      opacity: ${calculatedOpacity};
    }
  `;
};
