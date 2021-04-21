import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import CovidTab from './covidTab/index';
import CovidBg from 'public/images/BGimg_illust.svg';
import {
  ComTitle,
} from 'src/components';

function Covid(){
    return (
    <Container pb={60}>
      <C.clear>
        <ComTitle
          title="코로나 안내 센터"
        />
        <C.right>
          <CovidBg />
        </C.right>
      </C.clear>
      <C.igr>
        <CovidTab />
      </C.igr>
    </Container>
    )
}

const C = {
  ComTitles:styled.h1`
    display: inline-block;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -0.03em;
    line-height: 48px;
    @media only screen and (max-width: 767px) {
      margin-bottom: 80px;
      font-size: 26px;
      letter-spacing: -0.052em;
      line-height: 36px;
    }
    `,
  igr: styled.div`
    margin-top: 80px;
    @media only screen and (max-width: 767px) {
      margin-top: 0;
    }
  `,
  clear:styled.div`
  margin-bottom: 0 !important;
  position: relative;
  &::after{
    content:"";
    clear:both;
    display:block;
  }
  `,
  right:styled.span`
    position: absolute;
    top: 0;
    right: 25px;
    @media only screen and (max-width: 1059px) {
      display: none;
    }
  `,
  rt:styled.div`
    position: relative;
  `,
}

export default Covid;