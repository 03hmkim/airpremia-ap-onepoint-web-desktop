import React from 'react';
import styled from 'styled-components';
import ImgHelloHuman from 'public/images/hello_human.png';
import ImgWindow from 'public/images/airpremia_window.svg';

interface IProps {}

function AppDownloadButton1({}: IProps) {
  return (
    <S.container>
      <S.helloHumanWrapper>
        <ImgWindow />
        <img src={ImgHelloHuman} alt="HumonIcon" />
      </S.helloHumanWrapper>
      <div>
        <h6 className="font-premia-bold">APP DOWNLOAD</h6>
        <p>
          에어프레미아 앱으로 예매하고
          <br />
          여정을 관리해보세요 :-)
        </p>
      </div>
    </S.container>
  );
}

AppDownloadButton1.defaultProps = {};

const S = {
  container: styled.div`
    display: flex;
    margin-left: 20px;
    h6 {
      font-size: 16px;
      color: #ff5800;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      letter-spacing: -0.24px;
      color: #222222;
      line-height: 20px;
    }
    & > div {
      position: relative;
      width: 56px;
      height: 70px;
      overflow: hidden;
      margin-left: 20px;
      img {
        width: 100%;
      }
      &:nth-child(2) {
        width: 146px;
      }
    }
  `,
  helloHumanWrapper: styled.div`
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  `,
};

export default AppDownloadButton1;
