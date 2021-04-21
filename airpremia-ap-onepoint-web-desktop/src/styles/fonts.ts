import { createGlobalStyle } from 'styled-components';
// 한글: NotoSans
// 영문 + 특문: Heebo (unicode범위: U+0020-007E) 적용

export default createGlobalStyle`
  @font-face {
    font-family: 'Premia';
    font-weight: 400;
    src: url('/font/Premia-Light.woff2') format('woff2'),
      url('/font/Premia-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Premia';
    font-weight: 700;
    src: url('/font/Premia-Medium.woff2') format('woff2'),
      url('/font/Premia-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    font-weight: 200;
    src: url('/font/NotoSansCJKkr-DemiLight.woff2') format('woff2'),
      url('/font/NotoSansCJKkr-DemiLight.woff') format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    font-weight: 300;
    src: url('/font/NotoSansCJKkr-Regular.woff2') format('woff2'),
      url('/font/NotoSansCJKkr-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    font-weight: 400;
    src: url('/font/NotoSansCJKkr-Medium.woff2') format('woff2'),
      url('/font/NotoSansCJKkr-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'NotoSans';
    font-weight: 700;
    src: url('/font/NotoSansCJKkr-Bold.woff2') format('woff2'),
      url('/font/NotoSansCJKkr-Bold.woff') format('woff');
  }
  @font-face {
    font-family: "Heebo";
    font-weight: 400;
    src: url("/font/Heebo-Regular.woff2") format("woff2");
      url("/font/Heebo-Regular.woff") format("woff");
    unicode-range: U+0020-007E;
  }
  @font-face {
    font-family: "Heebo";
    font-weight: 700;
    src: url("/font/Heebo-Medium.woff2") format("woff2");
      url("/font/Heebo-Medium.woff") format("woff");
    unicode-range: U+0020-007E;
  }
`;
