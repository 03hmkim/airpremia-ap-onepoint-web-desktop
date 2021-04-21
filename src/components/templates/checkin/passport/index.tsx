import styled from 'styled-components';
import { FC, ReactElement, useRef } from 'react';
import { Container } from 'src/styles/layout';
import { useReactToPrint } from 'react-to-print';
import SvgPrint from 'public/images/ico_print.svg';
import SvgShare from 'public/images/ico_share.svg';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { useModal } from 'src/hooks';

interface IProps {
  boardingPasses: ReactElement;
}

const PassportTemplate: FC<IProps> = ({
  boardingPasses,
}) => {
  const { onShowToastPopup } = useModal();
  const printAreaRef = useRef<HTMLDivElement>(null);
  const onPrint = useReactToPrint({
    content: () => printAreaRef.current,
  });
  const copyText = () => {
    const tmp = document.createElement('textarea');
    tmp.style.position = 'fixed';
    tmp.style.left = '0';
    tmp.style.top = '0';
    tmp.style.opacity = '0';
    tmp.value = window.location.href;

    document.body.appendChild(tmp);
    tmp.focus();
    tmp.select();

    document.execCommand('copy');
    document.body.removeChild(tmp);
    onShowToastPopup('주소가 복사됐습니다.');
    return;
  };

  return (
    <Container pt={100} pb={123}>
      <S.boardingPassArea ref={printAreaRef}>
        {boardingPasses}
      </S.boardingPassArea>

      <S.iconArea>
        <div onClick={onPrint}>
          <SvgPrint />
          <p>인쇄</p>
        </div>
        <span />
        <div onClick={copyText}>
          <SvgShare />
          <p>탑승권 공유</p>
        </div>
      </S.iconArea>
      <S.guideArea>
        <p>
          온라인 탑승권은 공항 수속 및 탑승 시 반드시
          필요합니다.
          <br />
          QR코드가 나오도록 인쇄하거나 휴대폰으로 전송해서
          탑승 당일 지참하시기 바랍니다.
          <br />
          에어프레미아 앱에서 온라인 탑승권을 더 편하게
          제시할 수 있습니다.
        </p>
      </S.guideArea>
    </Container>
  );
};

const S = {
  boardingPassArea: styled.div`
    display: flex;
    justify-content: center;
  `,

  iconArea: styled.div`
    margin: 50px 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    p {
      margin-left: 5px;
      font-weight: 600;
      font-size: 15px;
      line-height: 26px;
      letter-spacing: -0.3px;
      cursor: pointer;
    }
    span {
      display: block;
      border-right: solid 1px ${LIGHT_GRAY6};
      width: 1px;
      height: 12px;
      margin: 0 15px;
    }
  `,
  guideArea: styled.div`
    width: 800px;
    text-align: center;
    margin: 0 auto;
    p {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.3px;
      color: ${LIGHT_GRAY8};
    }
  `,
};

export default PassportTemplate;
