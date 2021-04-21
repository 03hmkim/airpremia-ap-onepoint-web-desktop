import styled from 'styled-components';
import { SsrModalS } from 'src/styles/common';
import { WarningList, CribInput } from 'src/components';
import { TaskButton } from 'src/components';
import { ICribInput } from 'src/components/molecules/cribInput';
import {
  LIGHT_GRAY7,
  ORANGE2,
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

export interface ISsrModalCribInput {
  id: string;
  titleLabel: string;
  subtitleLabel: string;
  /** 신청 가능 좌석 */
  availableSeatCount: number;
  inputs?: ICribInput[];
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  inputs?: ISsrModalCribInput[];
  onClickButton: () => void;
}

function SsrModalCrib({ inputs, onClickButton }: IProps) {
  const getCribInputsElement = (
    cribInputs?: ICribInput[],
  ) => {
    const onClick = (id: string, action: string) => {
      console.log(id, action);
    };
    return cribInputs?.map((cribInput: ICribInput) => (
      <div className="inputWrapper" key={cribInput.id}>
        <CribInput {...cribInput} onClick={onClick} />
      </div>
    ));
  };
  const getCribInputWrappersElement = (
    inputs?: ISsrModalCribInput[],
  ) => {
    return inputs?.map(
      (modalCribInput: ISsrModalCribInput) => {
        return (
          <div
            className="cribInputWrapper"
            key={modalCribInput.id}
          >
            <div className="topWrapper">
              <div className="left">
                <div className="title font-bold">
                  {modalCribInput.titleLabel}
                </div>
                <div className="subtitleLabel">
                  {modalCribInput.subtitleLabel}
                </div>
              </div>
              <div className="right availableSeat">
                <div className="label">신청 가능 좌석</div>
                <div className="count font-bold">
                  {modalCribInput.availableSeatCount}
                </div>
              </div>
            </div>
            <div className="bottomWrapper">
              {getCribInputsElement(modalCribInput.inputs)}
            </div>
          </div>
        );
      },
    );
  };

  const warningDescriptions = [
    '기타 의료 도움이 필요한 승객을 신청한 경우 이메일 또는 예매자 연락처를 통해 요청 내용에 대한 안내가 전송됩니다.',
    '요청 내용에 대한 대응은 에어프레미아에서 제공할 수 있는 범위 내에서 서비스를 제공해 드립니다.',
    '기내에서 사용 가능한 의료 장비 대여 시 대여 요금이 부과될 수 있습니다.',
  ];

  return (
    <S.container>
      <S.top>
        <div className="titleWrapper">
          <div className="title font-bold">
            유아용 침대 대여
          </div>
          <div className="description">
            <div>
              좌석 맨 앞줄 지정된 좌석에 유아용 침대(요람)을
              무료로 설치해드립니다.
              <br />
              유아용 침대 대여를 신청하는 경우 안전을 위하여
              공항에서 유아의 신장과 몸무게를 측정할 수
              있습니다.
            </div>
          </div>
        </div>
        <div className="contentsWrapper">
          <div className="cribInputsWrapper">
            {getCribInputWrappersElement(inputs)}
          </div>
          <div className="warningListWrapper">
            <WarningList
              descriptions={warningDescriptions}
            />
          </div>
        </div>
      </S.top>
      <S.bottom>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickButton}>
            신청 완료
          </TaskButton>
        </div>
      </S.bottom>
    </S.container>
  );
}

SsrModalCrib.defaultProps = {};

const S = {
  ...SsrModalS.S3,
  container: styled.div<IStyleProps>`
    .contentsWrapper {
      margin-top: 150px;
      border-top: 2px solid ${DARK_GRAY1};
      padding-top: 60px;
    }
    .cribInputWrapper + .cribInputWrapper {
      border-top: 1px solid ${LIGHT_GRAY6};
      padding-top: 60px;
    }
    .cribInputWrapper {
      padding-bottom: 50px;
      .topWrapper {
        display: flex;
        justify-content: space-between;
        .left,
        .right {
          display: flex;
          align-items: center;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: -0.4px;
        }
        .subtitleLabel {
          padding-left: 15px;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: ${LIGHT_GRAY7};
        }
        .availableSeat {
          .label {
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.3px;
            color: ${LIGHT_GRAY7};
          }
          .count {
            padding-left: 5px;
            font-size: 16px;
            letter-spacing: -0.32px;
            color: ${ORANGE2};
          }
        }
      }
      .bottomWrapper {
        padding-top: 60px;
        .inputWrapper + .inputWrapper {
          padding-top: 30px;
        }
      }
    }
  `,
};

export default SsrModalCrib;
