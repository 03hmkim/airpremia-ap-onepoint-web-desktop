import styled from 'styled-components';
import { Container } from 'src/styles/layout';
import { 
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  DARK_GRAY1,
  BLUE1,
 } from '@airpremia/cdk/styles/colors';
import DepartureArrivalCheckTab from './dacTab/index';
import { Caution, ComTitle } from 'src/components';
import Link from 'next/link';
// import Caution from 'public/images/support/ico_caution.svg';

const title = '유의사항';

function DepArrCheck(){
    return (
    <Container>
      <ComTitle
        title="출도착 조회"
      />
      <C.igr>
          <DepartureArrivalCheckTab />
      </C.igr>
      <C.igr>
        <Caution 
          isTitleBold={true} 
          title={title} 
          body={
            <>
              <p>출도착 시간 기준은 한국 시간 기준입니다.</p>
              <p>안내되는 비행시간은 현지공항사정에 따라 차이가 발생할 수 있습니다. 기타 자세한 안내는 해당 공항에 문의 바랍니다.</p>
              <p>당사의 자세한 운항 스케줄은 
                <C.linkTitle>
                  <Link href="./schedule">
                    <a>운항 스케줄 안내</a>
                  </Link>
                </C.linkTitle>
                를 참고해주시기 바랍니다.
              </p>
            </>
          }
        />
      </C.igr>
    </Container>
    )
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
  content: styled.div`
    margin-top: 10px;
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
  note: styled.p`
    position: relative;
    font-size: 18px;
    color: ${DARK_GRAY1};
    line-height: 36px;
      &.point{
        line-height: 22px;
      }
      &.bold{
        font-weight: bold;
      }
      .line{
        content: "";
        width: 1px;
        height: 50%;
        top: 5px;
        right: 0;
        text-indent: -9999px;
        display: flex;
        position: absolute;
        background-color: #dddddd;
      }
      .blue {
        color: ${BLUE1};
      }
    @media only screen and (max-width: 1059px) { 
        font-size: 15px;
    }
    @media only screen and (max-width: 767px) { 
        
    }
`,
  image: styled.p`
    margin-right: 5px;
    display:inline-block;
  `,
  description: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 10px;
    line-height: 28px;
      &.center{
        text-align:center;
      }
    @media only screen and (max-width: 1059px) { 
        font-size: 15px;
    }
    @media only screen and (max-width: 767px) { 
        
    }
  `,
  linkTitle: styled.a`
    margin-left: 4px;
    color: ${BLUE1};
    line-height: 36px;
    cursor: pointer;
    box-shadow: inset 0 -1.5px 0 ${BLUE1};
  `,

}


export default DepArrCheck;
