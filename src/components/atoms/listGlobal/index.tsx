import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  level?: string; //fst, scd, trd, four
  body?: string | ReactElement;
  item?: number | string;
}

function ListGlobal({
  level,
  body,
}: IProps) {
  return (
    <S.container className={level}>
      {body}
    </S.container>
  );
}
ListGlobal.defaultProps = {};

const dot = `
  content: "";
  width: 4px;
  height: 4px;
  display: block;
  position: absolute;
  top: 16px;
  border-radius: 4px;

  @media only screen and (max-width: 767px) {
    width: 3px;
    height: 3px;
    top: 13px;
  }
`;

const dash = `
  content: "-";
  display: block;
  position: absolute;
  top: 0;
`;

const S = {
  container: styled.div`
    position: relative;
    font-size: 18px;
    line-height: 2em;
    text-align: left;

    &.td {
      font-size: 20px;
    }

    &.td.fst:before,
    &.td.trd:before {
      top: 18px;
    }

    &.title {
      margin-bottom: 20px;
      font-weight: 700;
    }

    &.fst {
      padding-left: 14px;
    
      &:before {
        ${dot};
        left: 0;
        background-color: ${DARK_GRAY1};
      }
    }

    &.scd {
      padding-left: 28px;
    
      &:before {
        ${dash};
        left: 14px;
      }
    }

    &.trd {
      padding-left: 42px;
      color: ${LIGHT_GRAY8};

      &:before {
        ${dot};
        left: 30px;
        background-color: ${LIGHT_GRAY8};
      }
    }

    &.four {
      padding-left: 58px;
      color: ${LIGHT_GRAY8};

      &:before {
        ${dash};
        left: 44px;
      }
    }

    &.star {
      padding-left: 14px;

      &:before {
        content: "*";
        display: block;
        position: absolute;
        top: 0;
        left: 0px;
      }

      &.gray {
        color: ${LIGHT_GRAY8};

        &:before {
          color: ${LIGHT_GRAY8};
        }
      }

      &.orange {
        &:before {
          color: ${ORANGE2};
        }
      }
    }

    &.ball {
      padding-left: 24px;

      &:before {
        content: "???";
        display: block;
        position: absolute;
        top: 0;
        left: 0px;
      }

      &.gray {
        color: ${LIGHT_GRAY8};

        &:before {
          color: ${LIGHT_GRAY8};
        }
      }
    }

    &.ex {
      padding-left: 44px;

      &:before {
        content: "??????)";
        display: block;
        position: absolute;
        top: 0;
        left: 0px;
      }

      &.gray {
        color: ${LIGHT_GRAY8};
      }
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      font-weight: 300;
      line-height: 28px;
      letter-spacing: -0.032em;

      &.td {
        font-size: 13px;
      }

      &.td.fst:before,
      &.td.trd:before {
        top: 12px;
      }

      &.title {
        font-size: 16px;
        line-height: 28px;
      }

      &.fst {
        padding-left: 10px;

        &:before {
          left: 0px;
        }
      }

      &.scd {
        padding-left: 20px;

        $:before {
          left: 11px;
        }
      }

      &.trd {
        padding-left: 33px;

        &:before {
          left: 23px;
        }
      }

      &.four {
        padding-left: 45px;

        &:before {
          left: 35px;
        }
      }
      
      &.ball {
        padding-left: 18px;
      }

      &.ex {
        padding-left: 34px;
      }
    }
  `,
};


export default ListGlobal;
