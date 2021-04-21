import { get } from 'lodash';

const types = {
  normal: {
    type36: [36, 48],
    type30: [30, 42],
    type28: [28, 42],
    type22: [22, 30],
    type20: [20, 28],
    type18: [18, 28],
    type16: [16, 26],
    type15: [15, 25],
    type14: [14, 24],
    type13: [13, 23],
    type12: [12, 22],
  },
  premia: {
    type44: [44, 54],
    type36: [36, 48],
    type30: [30, 32],
    type22: [22, 28],
    type24: [24, 24],
  },
};
export const getFontData = (
  _font: string,
  fontType: string,
) => {
  const defaultTypes = get(types, 'normal.type14');
  const font =
    _font === 'normal' || _font === 'premia'
      ? _font
      : 'normal';

  return get(types, [font, fontType]) || defaultTypes;
};

export const getFontWeight = (
  fontFamily: string,
  fontWeight: string,
) => {
  let prefix = '';
  const boldPostFix = '-bold';
  const isMedium = fontWeight === 'medium';
  const isBold = fontWeight === 'bold';

  if (fontFamily === 'premia') {
    prefix = 'Premia';
    if (isMedium) {
      return { fontFamily: `${prefix}${boldPostFix}` };
    } else {
      return { fontFamily: `${prefix}` };
    }
  } else {
    prefix = 'NotoSans';
    if (isMedium) {
      return {
        fontFamily: `${prefix}`,
        fontWeight: 600,
      };
    } else if (isBold) {
      return { fontFamily: `${prefix}${boldPostFix}` };
    } else {
      return { fontFamily: `${prefix}` };
    }
  }
};

export const getData = <T extends { [key: string]: any }>({
  letterSpacing = undefined,
  fontFamily = 'normal',
  fontType,
  fontWeight = 'regular',
  lineHeight,
  ...props
}: T) => {
  const [fontSize, _lineHeight] = getFontData(
    fontFamily,
    fontType,
  );
  const _letterSpacing = letterSpacing || fontSize * -0.02;
  const _fontWeight = getFontWeight(fontFamily, fontWeight);

  return {
    fontSize,
    lineHeight: lineHeight || _lineHeight,
    letterSpacing: _letterSpacing,
    ..._fontWeight,
    ...props,
  };
};
