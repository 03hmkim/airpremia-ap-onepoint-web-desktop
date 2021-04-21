import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SvgLogo from 'public/images/btn_logo.svg';
import {
  ORANGE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IGnbSubMenu {
  label: string;
  to: string;
}

export interface IGnbMenu {
  mainMenuLabel: string;
  subMenus: IGnbSubMenu[];
}

interface IProps {
  menus: IGnbMenu[];
}

function Gnb({ menus }: IProps) {
  return (
    <S.container>
      <div className="innerWrapper">
        <S.logo>
          <Link href="/">
            <a className="logo">
              <SvgLogo />
            </a>
          </Link>
        </S.logo>
        <S.menusWrapper>
          {menus.map((menu: IGnbMenu, index: number) => {
            return (
              <div key={`${index}`} className="mainMenu">
                <div className="label">
                  {menu.mainMenuLabel}
                </div>
                <div className="subMenusWrapper">
                  <div className="innerWrapper">
                    <div className="subMenus">
                      {menu.subMenus.map(
                        (
                          subMenu: IGnbSubMenu,
                          subIndex: number,
                        ) => {
                          return (
                            <div
                              key={`${subIndex}`}
                              className="subMenu"
                            >
                              <Link href={subMenu.to}>
                                <a className="label">
                                  {subMenu.label}
                                </a>
                              </Link>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </S.menusWrapper>
      </div>
    </S.container>
  );
}

Gnb.defaultProps = {};

const S = {
  container: styled.div`
    margin: 0 auto;
    background-color: ${WHITE1};
    position: relative;
    > .innerWrapper {
      display: flex;
      min-width: 1440px;
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 80px;
      height: 80px;
      box-sizing: border-box;
      &:hover {
        .subMenusWrapper {
          display: block;
        }
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 359px;
          background-color: ${WHITE1};
          z-index: -1;
        }
      }
    }
  `,
  logo: styled.div`
    padding: 20px 0;
    margin-right: 130px;
    cursor: pointer;
    a {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      svg {
        margin-left: -10px;
      }
    }
  `,
  menusWrapper: styled.div`
    flex: 1;
    display: flex;
    .label:hover {
      color: ${ORANGE1};
    }

    .mainMenu {
      display: flex;
      align-items: center;

      &:nth-child(2) {
        margin-left: 7px;
      }
      &:nth-child(3) {
        margin-left: 53px;
      }
      &:nth-child(4) {
        margin-left: 58px;
      }
      &:nth-child(5) {
        margin-left: 21px;
      }
      &:nth-child(6) {
        margin-left: 51px;
      }

      > .label {
        width: 105px;
        padding-left: 5px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.3px;
        cursor: default;
      }
      .subMenusWrapper {
        display: none;
        position: relative;
        .innerWrapper {
          position: absolute;
          top: 44px;
          left: -110px;
        }
        .subMenus {
          width: 110px;
          padding-left: 5px;
        }
        .subMenu + .subMenu {
          padding-top: 5px;
        }
        .subMenu {
          height: 29px;
          line-height: 29px;
          .label {
            font-size: 13px;
            letter-spacing: -0.26px;
            &:hover {
              border-bottom: 1px solid ${ORANGE1};
            }
          }
        }
      }
    }
  `,
};

export default Gnb;
