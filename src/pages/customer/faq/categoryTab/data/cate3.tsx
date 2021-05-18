import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  LIGHT_GRAY8,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from 'public/images/btn_dropdown_arrow_able_up_black2.svg';


const Accordion = withStyles({
  root: {},
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {},
  content: {},
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {},
}))(MuiAccordionDetails);


function Cate1() {

  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    console.log(event);
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <T.accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="accSummary"
        >
          <Typography className="qst">                
            <strong>여행사나 비회원으로 예매했는데 예약 조회가 안됩니다. 어디서 확인 가능한가요?</strong>
            <p className="loc">항공권 &gt; 예약조회</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accDetails">
          <Typography className="asr">
            항공권 환불 시 총 운임에서 아래 금액이 수수료로 감액하고 환불되며, 유류할증료, 공항 사용료, 부가서비스는 100% 환불됩니다.<br />
            단, 사망, 임신, 질병/사고로 인한 항공권 환불 시 환불 수수료가 면제됩니다.<br /><br />
            [국제선]<br />
            출발 90 이전 : 0%<br />
            출발 30~89일 전 : 10%<br />
            출발 15~29일 전 : 20%<br />
            출발 3~14일 전 : 30%<br />
            출발 2일 전 : 50%<br />
            출발 이후 : No-show 위약금 지불 후 50% (마일리지의 경우, No-show 위약금을 포함한 60%)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
          className="accSummary"
        >
          <Typography className="qst">                
            <strong>여행사나 비회원으로 예매했는데 예약 조회가 안됩니다. 어디서 확인 가능한가요?</strong>
            <p className="loc">항공권 &gt; 예약조회</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accDetails">
          <Typography className="asr">
            항공권 환불 시 총 운임에서 아래 금액이 수수료로 감액하고 환불되며, 유류할증료, 공항 사용료, 부가서비스는 100% 환불됩니다.<br />
            단, 사망, 임신, 질병/사고로 인한 항공권 환불 시 환불 수수료가 면제됩니다.<br /><br />
            [국제선]<br />
            출발 90 이전 : 0%<br />
            출발 30~89일 전 : 10%<br />
            출발 15~29일 전 : 20%<br />
            출발 3~14일 전 : 30%<br />
            출발 2일 전 : 50%<br />
            출발 이후 : No-show 위약금 지불 후 50% (마일리지의 경우, No-show 위약금을 포함한 60%)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </T.accordion>
  );
}

const T = {
  accordion: styled.div`
    .accWrap {
      margin: 0 !important;
      box-shadow: none;
      border-bottom: 1px solid ${LIGHT_GRAY6};

      &::before {
        display: none;
      }

      .accSummary{
        padding: 0;
        padding-right: 30px;

        > div {
          margin: 0;
        }
      }

      .accDetails{
        padding: 0;
      }
    }

    .qst,
    .asr {
      width: 100%;
      padding: 30px 0 30px 60px;
      position: relative;
      text-align: left;
      box-sizing: border-box;

      &::before {
        position: absolute;
        left: 20px;
        top: 0px;
        font-family: 'Premia', sans-serif;
        font-weight: 700;
        font-size: 44px;
        line-height: 100px;
      }
    }

    .qst {
      padding-right: 60px;
      font-family: 'NotoSans', sans-serif;

      > strong {
        display: block;
        font-size: 24px;
        line-height: 1.8em;
      }

      .loc {
        margin-top: 10px;
        display: block;
        color: ${LIGHT_GRAY7};
        font-size: 18px;
      }

      &::before {
        content: "Q";
        color: ${LIGHT_GRAY8};
      }
    }

    .asr {
      font-family: 'NotoSans', sans-serif;
      font-size: 18px;
      line-height: 1.8em;
      border-top: 1px solid ${LIGHT_GRAY6};

      &::before {
        content: "A";
        color: ${ORANGE2};
      }
    }
    @media only screen and (max-width: 767px) { 
      .accWrap {
        .accSummary{
          padding: 0;
          padding-right: 0px;
  
        }
      }
      .qst,
      .asr {
        padding: 20px 0 20px 40px;
        &::before {
          left:0px;
        }
      }
      .qst {
        padding-right: 10px;
  
        > strong {
          font-size: 22px;
          letter-spacing: -0.4px;
        }
  
        .loc {
          font-size: 14px;
          letter-spacing: -0.28px;
        }
      }
  
      .asr {
        font-size: 14px;
        letter-spacing: -0.28px;
      }
    } 
  `,
};

export default Cate1;
