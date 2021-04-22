import { createGlobalStyle } from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export default createGlobalStyle`
  body {
    color: ${DARK_GRAY1};
    font-family: 'NotoSans', sans-serif;
    .font-normal {
      font-family: 'NotoSans', sans-serif;
    }
    .font-bold {
      font-family: 'NotoSans', sans-serif;
      font-weight: 700;
    }
    .font-premia-normal {
      font-family: 'Premia', sans-serif;
    }
    .font-premia-bold {
      font-family: 'Premia', sans-serif;
      font-weight: 700;
    }
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
  }
  &.scrollHidden {
    overflow: hidden;
  }
  
  button {
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
