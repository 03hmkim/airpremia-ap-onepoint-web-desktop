import styled from 'styled-components';
import { PopupTitle } from 'src/components';
import {
  Emphasis,
  Input,
  RoundedButton3,
  TaskButton,
} from 'src/components';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import Select from 'src/components/molecules/select';

interface IStyleProps {}
interface IProps extends IStyleProps {}

function HpCertification({}: IProps) {
  // TODO 휴대폰 maxlen

  return (
    <S.container>
      <PopupTitle>휴대폰 번호 인증</PopupTitle>
      <div className="description">
        결제 비밀번호 재설정을 위해 휴대폰 번호를
        <br />
        입력 후 인증을 해주세요.
      </div>
      <div className="hpInputWrapper">
        <div className="label">
          휴대폰 번호
          <div className="emphasisWrapper">
            <Emphasis />
          </div>
        </div>
        <div className="row">
          <div className="selectWrapper">
            <Select label="+82" />
          </div>
          <div className="numberWrapper">
            <Input placeholder="휴대폰 번호 입력" />
            <div className="buttonWrapper">
              <RoundedButton3 onClick={() => {}}>
                인증받기
              </RoundedButton3>
            </div>
          </div>
        </div>
      </div>
      <div className="certificationNumberWrapper">
        <Input placeholder="인증번호 입력" />
      </div>
      <div className="certificationbuttonWrapper">
        <TaskButton disabled>인증하기</TaskButton>
      </div>
    </S.container>
  );
}

HpCertification.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .description {
      padding-top: 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
    .hpInputWrapper {
      padding-top: 80px;
      > .label {
        display: flex;
        font-size: 14px;
        line-height: 2.14;
        letter-spacing: -0.28px;
        color: ${DARK_GRAY1};
        .emphasisWrapper {
          padding-left: 2px;
          padding-top: 10px;
        }
      }
      .row {
        display: flex;
        justify-content: space-between;
        .selectWrapper {
          width: 50px;
          padding: 14px 0;
          border-bottom: 1px solid ${LIGHT_GRAY6};
        }
        .numberWrapper {
          position: relative;
          flex: 1;
          margin-left: 10px;
          border-bottom: 1px solid ${LIGHT_GRAY6};
          .buttonWrapper {
            position: absolute;
            top: 14px;
            right: 0;
          }
        }
      }
    }
    .certificationNumberWrapper {
      margin-top: 39px;
      padding: 8px 0 9px;
      border-bottom: 1px solid ${LIGHT_GRAY6};
    }
    .certificationbuttonWrapper {
      font-size: 15px;
      padding-top: 60px;
    }
  `,
};

export default HpCertification;
