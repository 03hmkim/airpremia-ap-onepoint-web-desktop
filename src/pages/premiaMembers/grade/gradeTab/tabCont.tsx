import { useState } from 'react';
import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  LIGHT_GRAY9,
  BLUE1,
  ORANGE1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import {
  RoundedNavigationTab,
} from 'src/components';
import TabContentMember from './memberTab/tabCont';
import TabContentBenefit from './benefitTab/tabCont';



function TabContent({currIdxCont}: IProps) {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['BLUE MEMBERS', 'GOLD MEMBERS','DIAMOND MEMBERS'];
  const tabList2 = ['BLUE MEMBERS', 'GOLD MEMBERS','DIAMOND MEMBERS'];

  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList}
          onClick={setCurrIdx}
        />
        <TabContentMember
          currIdxCont={currIdx}
        />
      </C.wrap>
    )
  } else {
    return (
      <C.wrap>
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList2}
          onClick={setCurrIdx}
        />
        <TabContentBenefit
          currIdxCont={currIdx}
        />
      </C.wrap>
    )
  }
}


const C = {
  ComTitles:styled.div`
  font-size:36px;
  font-weight: bold;
  @media only screen and (max-width: 1059px) { 
    font-size:30px;
  }
  @media only screen and (max-width: 767px) { 
    font-size:26px;
  }
  `,
  wrap: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 20px;
    }
  `,
  body: styled.div`
    margin-top: 140px;
    display:block;
      &:first-of-type{
        margin-top: 30px;
      }
    @media only screen and (max-width: 1059px) { 
      margin-top: 100px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 80px;
    }
  `,
  bd: styled.div`
  margin-top: 150px;
  text-align: center;
  @media only screen and (max-width: 1059px) { 
    margin-top: 100px;
  }
  @media only screen and (max-width: 767px) { 
    margin-top: 80px;
  }
`,
  sbody: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 80px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 60px;
    }
  `,
  titleMain: styled.h3`
    font-size: 30px;
    font-weight: bold;
    @media only screen and (max-width: 1059px) { 
      font-size: 26px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 22px;
    }
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
    @media only screen and (max-width: 1059px) { 
      font-size: 20px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 18px;
    }
  `,
  itemTitle: styled.h5`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  @media only screen and (max-width: 1059px) { 
    
  }
  @media only screen and (max-width: 767px) { 
    font-size: 14x;
  }
  `,
  linkTitle: styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${BLUE1};
  line-height: 36px;
  cursor: pointer;
  @media only screen and (max-width: 767px) { 
    font-size: 14x;
    line-height:1.5em;
  }
`,
  content: styled.div`
    padding-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
  mt30:styled.div`
  margin-top: 30px;
      .flex{
        display: flex;
        align-items: center;
      }

  `,
  flex:styled.div`
  display: flex;
  align-items: flex-end;
  padding-top:24px;
  `,

  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
      &:first-child{
        margin-top: 20px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
  `,

  itemText: styled.p`
  font-size: 18px;
  line-height: 1.8;
  display: inline-block;
  :hover{
    color:${ORANGE2};
  }
  @media only screen and (max-width: 767px) { 
    font-size: 14px;
  }
`,
  note: styled.p`
    padding: 0 10px 0 15px;
    position: relative;
    font-size: 18px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
      .textline{
        width: 1px;
        height: 80%;
        top: 0;
        right: 0;
        text-indent: -9999px;
        display: flex;
        position: absolute;
        background-color: #dddddd;
      }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,
  description: styled.p`
  font-size: 18px;
  color: ${LIGHT_GRAY8};
  margin-top: 10px;
  line-height: 1.8;
  @media only screen and (max-width: 767px) { 
    font-size: 14px;
  }
`,
bold: styled.span`
  font-weight: bold;
`,
  image: styled.p`
    margin-right: 5px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
      &::before{
        content:"-";
        width: 5px;
        height: 20px;
        top: 0px;
        left: 0px;
        color: ${LIGHT_GRAY8};
        display: block;
        position: absolute;
      }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,
  lgray: styled.p`
    color: ${LIGHT_GRAY7};
  `,
  igr: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 60px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
  desc: styled.p`
    margin-left: 50px;
    line-height: 1.8;
    display: inline-block;
    vertical-align: middle;
  `,
  img: styled.p`
    margin-left: 10px;
    display: inherit;
    vertical-align: middle;
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
      &.dpN{
        display: none;
      }
  `,
  emphasis:styled.p`
    font-size:20px;
    color: ${ORANGE1};
  `,
  selectBox: styled.div`
  width: 127px;
  margin-top: 40px;
  padding: 9px 14px;
  float: right;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${LIGHT_GRAY6};
  border-radius: 8px;
  `,
  ptb30: styled.div`
  padding:30px 0
  `,
  ul:styled.ul`
  `,
  li: styled.li`
    margin-bottom: 15px;
    padding-left: 10px;
    position: relative;
      &::before{
        content:"";
        width: 4px;
        height: 4px;
        top: 5px;
        left: 0px;
        text-indent: -9999px;
        display: block;
        position: absolute;
        background-color: ${DARK_GRAY1};
        border-radius: 50%
      }
      &:first-child{
        margin-top: 20px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
  `,
  left:styled.div`
  padding-right:80px;
  `,
  right:styled.div`
  
  `,
  badge:styled.div`
  width: auto;
  height: 20px;
  margin-right: 3px;
  padding: 1px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${ORANGE2};
  box-sizing: border-box;
  color:#fff;
  font-size: 11px;
`,
blackBadge:styled.div`
  width: auto;
  height: 20px;
  margin-right: 3px;
  padding: 2px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${DARK_GRAY1};
  box-sizing: border-box;
  color:#fff;
  font-size: 11px;
`,
grayBadge:styled.div`
  width: auto;
  height: 20px;
  margin-right: 3px;
  padding: 1px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${LIGHT_GRAY9};
  box-sizing: border-box;
  color:#fff;
  font-size: 11px;
`,
pr80:styled.div`
  padding-right:80px;
`,
noneEvent:styled.div`
  display: none;
`,
bannerDiv:styled.div`
    width: 995px;
    margin: 26px 30px;
    display: flex;
`,

bannerContent01:styled.div`
    width: 45%;
    padding-right: 35px;
    display: flex;
`,
bannerContent02:styled.div`
    width: 55%;
    padding-left: 25px;
    display: flex;
    position: relative;
      &::before{
        content:"";
        width: 1px;
        height: 80%;
        top: 20px;
        left: 0;
        text-indent: -9999px;
        display: inline-block;
        position: absolute;
        background-color: ${LIGHT_GRAY6};
      }
`,
}
export default TabContent;
