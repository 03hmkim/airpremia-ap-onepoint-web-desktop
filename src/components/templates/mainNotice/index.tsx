import styled from 'styled-components';
import {
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import ntcBg from 'public/images/home/main_noticeBg_s.png';
  

export interface IProps{}
function MainNotice({}: IProps) {
  return (
    <S.container>
      <div className="txt">메인에서만 보여지는 긴급 공지사항입니다.</div>
    </S.container>
  )
}

const S = {
container: styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  display: table;
  background: url(${ntcBg}) no-repeat center center;

  * {
    box-sizing: border-box;
  }

  .txt {
    padding: 0 25px;
    color:${WHITE1};
    font-size: 18px;
    line-height: 1.3em;
    display: table-cell;
    vertical-align: middle;
  }

  @media only screen and (max-width: 1059px) {
    background-position: right -500px center;
  }

  @media only screen and (max-width: 767px) {
    height: 70px;
    background-position: right -300px center;
    background-size: 1100px;

    .txt {
      font-size: 14px;
      font-weight: 300;
    }
  }

  @media only screen and (max-width: 500px) {
    background-position: right -360px center;
  }
`
}
export default MainNotice;