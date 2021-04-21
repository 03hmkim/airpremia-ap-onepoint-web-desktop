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
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
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
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
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
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5d-content"
          id="panel5d-header"
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
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6d-content"
          id="panel6d-header"
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
      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7d-content"
          id="panel7d-header"
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
      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="accWrap">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8d-content"
          id="panel8d-header"
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
        font-family: 'Premia-Bold', sans-serif;
        font-size: 44px;
        line-height: 100px;
      }
    }

    .qst {
      padding-right: 60px;

      > strong {
        display: block;
        font-size: 15px;
      }

      .loc {
        margin-top: 10px;
        display: block;
        color: ${LIGHT_GRAY7};
        font-size: 13px;
      }

      &::before {
        content: "Q";
        color: ${LIGHT_GRAY8};
      }
    }

    .asr {
      font-size: 14px;
      line-height: 1.8em;
      border-top: 1px solid ${LIGHT_GRAY6};

      &::before {
        content: "A";
        color: ${ORANGE2};
      }
    }  
  `,
};

export default Cate1;