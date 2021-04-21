import React from 'react';
import styled from 'styled-components';

function goBack(){
  window.history.go(-1);
}

const Failpage = () => {
  return (
    <>
   <S.container>
      <div>
        <h1>예약번호를 확인해주세요</h1>
        {"\n"}
        <hr></hr>
        <h3><button onClick={goBack}>뒤로가기</button></h3>
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
    background: rgba(255, 255, 255, 0.85);
    z-index: 50;
  `,
  
};

export default Failpage;