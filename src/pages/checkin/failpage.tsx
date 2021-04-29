import React from 'react';
import styled from 'styled-components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';

function goBack(){
  window.history.go(-1);
}

const Failpage = () => {
  return (
    <>
   <S.container>
      <div className="content">
        <h1>예약번호를 확인해주세요</h1>
        {"\n"}
        <h3><TaskButton onClick={goBack}>뒤로가기</TaskButton></h3>
      </div>
   </S.container>
   </>
  );
};

const S = {
  container: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(34, 34, 34, 0.8);
    z-index: 50;

    .content {
      min-width: 320px;
      max-width: 480px;
      width: calc(100% - 100px);
      padding: 50px;
      overflow: hidden;
      background-color: ${WHITE1};
      border-radius: 16px;
      box-sizing: border-box;
    }

    h1 {
      font-size: 30px;
    }

    h3 {
      padding-top: 60px;
    }
  `,
  
};

export default Failpage;