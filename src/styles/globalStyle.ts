import { createGlobalStyle } from 'styled-components';
import {
  LIGHT_GRAY6,
  DARK_GRAY1,
  WHITE1,
  DARK_BLUE1,
  DARK_BLUE2,
  DARK_BLUE3,
} from '@airpremia/cdk/styles/colors';

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

    
    .textEnter {
      display: block;

      @media only screen and (max-width: 767px) { 
        margin-left: 4px;
        display: inline-block;
      }
    }

    .textEnterM {
      display: inline-block;

      @media only screen and (max-width: 767px) { 
        margin-left: 4px;
        display: block;
      }
    }
  }
  &.scrollHidden {
    // overflow: hidden;
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




  /* 테이블 공통 css */
  .tbWrap {
    border-bottom: 1px solid ${DARK_BLUE1};

    &.noHead {
      border-top: 1px solid ${DARK_BLUE1};
    }

    table {
      width: 100%;

      .taL {
        text-align: left !important;
      }
      .taR {
        text-align: right !important;
      }
      .taC {
        text-align: center !important;
      }

      thead th,
      thead td,
      tbody th,
      tbody td {
        padding: 18px 10px;
        color: ${DARK_GRAY1};
        font-size: 20px;
        font-weight: 300;
        line-height: 1.6;
        letter-spacing: -0.3px;
        text-align: center;
        vertical-align: middle;
        word-break: break-all;

        &:last-child {
          border-right: 0;
        }

        &.vtcTop {
          vertical-align: top;
        }
      }

      thead th,
      thead td {
        color: ${WHITE1};
        font-weight: 700;
        background: ${DARK_BLUE1};
        border-right: 1px solid ${DARK_BLUE2};
      }

      thead th {
        border-right-color: ${DARK_BLUE3};
      }

      thead td {
        border-bottom: 1px solid ${DARK_BLUE2};
      }

      thead td.bdBN,
      thead tr:last-child th,
      thead tr:last-child td {
        border-bottom: 0;
      }

      tbody th {
        font-weight: 700;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        border-right: 1px solid ${DARK_BLUE1};

        &.sb {
          border-right-color: ${LIGHT_GRAY6};
        }

        &.db {
          border-bottom-color: ${DARK_BLUE1};
          border-right-color: ${LIGHT_GRAY6};
        }        
      }

      tbody td {
        border-bottom: 1px solid ${LIGHT_GRAY6};
        border-right: 1px solid ${LIGHT_GRAY6};
      }

      tbody tr:last-child th, 
      tbody tr:last-child td {
        border-bottom: 0;
      }
    }
  

    &.vtc {
      border-top: 1px solid ${DARK_BLUE1};

      table {
        tbody th {
          padding-left: 10px;
          padding-right: 10px;
          color: ${WHITE1};
          background: ${DARK_BLUE1};
          border-bottom: 1px solid ${DARK_BLUE3};
        }

        tbody td {
          padding-left: 30px;
          padding-right: 10px;
          border-bottom: 1px solid ${LIGHT_GRAY6};
        }
        
        tbody tr:last-child th, 
        tbody tr:last-child td {
          border-bottom: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .tbWrap {
      table {
        thead th,
        thead td {
          padding: 15px 5px;
          font-size: 14px;
        }

        tbody th,
        tbody td {
          padding: 15px 5px;
          font-size: 13px;
        }
      }

      &.vtc table{
        tbody th,
        tbody td {
          padding-left: 5px;
        }
      }
    }
  }
  /* 테이블 공통 css 끝 */
`;
