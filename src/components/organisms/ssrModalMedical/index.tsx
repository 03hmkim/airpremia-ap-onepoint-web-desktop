import styled from 'styled-components';
import { flow, find, map } from 'lodash/fp';
import { SsrCheckbox, WarningList } from 'src/components';
import { Textarea, TaskButton } from 'src/components';
import { SsrModalS } from 'src/styles/common';

export interface ISsrModalMedicalInput {
  id: string;
  /** checkbox에 노출되는 label */
  label: string;
  /** 상세 내용 */
  description: string;
  /** 포커싱 유무 */
  isFocus: boolean;
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  inputs?: ISsrModalMedicalInput[];
  onChangeInputs: (inputs: ISsrModalMedicalInput[]) => void;
  onClickButton: () => void;
}

function SsrModalMedical({
  inputs,
  onChangeInputs,
  onClickButton,
}: IProps) {
  const getFocusedInput = flow(find('isFocus'))(inputs);
  const hasFocusedInput = !!getFocusedInput;
  const onFocus = (id: string) => () => {
    const result = flow(
      map((medicalInput: ISsrModalMedicalInput) => {
        medicalInput.isFocus = medicalInput.id == id;
        return medicalInput;
      }),
    )(inputs);
    onChangeInputs(result);
  };
  const getInputsElement = (
    medicalInputs?: ISsrModalMedicalInput[],
  ) => {
    return medicalInputs?.map(
      (medicalInput: ISsrModalMedicalInput) => {
        const isActive = medicalInput.description !== '';
        return (
          <div
            className="inputWrapper"
            key={medicalInput.id}
          >
            <SsrCheckbox
              onClick={onFocus(medicalInput.id)}
              isActive={isActive}
              isFocus={medicalInput.isFocus}
            >
              {medicalInput.label}
            </SsrCheckbox>
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
  const onChangeDescription = (value: string) => {
    const focusedId = getFocusedInput.id;
    const result = flow(
      map((medicalInput: ISsrModalMedicalInput) => {
        if (medicalInput.id == focusedId) {
          medicalInput.description = value;
        }
        return medicalInput;
      }),
    )(inputs);
    onChangeInputs(result);
  };

  return (
    <S.container>
      <S.top>
        <div className="titleWrapper">
          <div className="title font-bold">
            기타 의료 도움이 필요한 승객
          </div>
          <div className="description">
            <div>
              신생아, 고령의 고객, 당뇨 질환, 체내 의료 장비
              삽입 고객, 산소통 대여 등 기타 의료 도움이
              필요한 승객의 영우 신청 승객과 함께 상세
              내용을 작성해주세요.
              <span className="focus">
                (의사 소견서 제출 필요)
              </span>
            </div>
          </div>
        </div>
        <div className="contentsWrapper">
          <div className="subtitle font-bold">
            신청 승객
          </div>
          <div className="inputsWrapper">
            {getInputsElement(inputs)}
          </div>
          {hasFocusedInput && (
            <div className="detailWraper">
              <div className="subtitle font-bold">
                상세 내용
              </div>
              <div className="textareaWrapper">
                <div className="count">0/2000</div>
                <Textarea
                  value={getFocusedInput.description}
                  placeholder="기타 도움이 필요한 경우 요청 내용을 작성해주세요."
                  onChange={onChangeDescription}
                />
              </div>
            </div>
          )}
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

SsrModalMedical.defaultProps = {};

const S = {
  ...SsrModalS.S3,
  container: styled.div<IStyleProps>``,
};

export default SsrModalMedical;
