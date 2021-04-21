import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import CheckinDetailInfoTemplate from '.';
import { passenger } from 'src/components/templates/checkin/checkinDetailInfo/dummy';
import {
  GuideList,
  PassengerInfoShareButton,
  PassengerFormExpansionPanel,
  PassengerForm2,
  Checkbox,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  WHITE1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Templates / CheckinDetailInfoTemplate',
  component: CheckinDetailInfoTemplate,
  decorators: [withKnobs],
};
const guideListData = [
  {
    title: '온라인 체크인 신청 안내',
    descriptions: [
      '온라인 체크인 신청을 완료하시면 출발 24시간 전에 자동으로 체크인이 완료되며, 입력하신 휴대전화 번호로 탑승권이 전송됩니다.',
      '온라인 체크인 신청 완료 후에도 좌석 변경 및 항공편 변경이 가능합니다.',
      '입력한 여권 정보가 부정확하거나 유효하지 않을 경우 출/도착지 사전 심사결과에 따라 탑승권 발급이 불가할 수도 있습니다.',
    ],
  },
  {
    title: '온라인 체크인 신청 불가한 경우',
    descriptions: [
      '온라인 탑승권이 허용되지 않는 일부 해외 공항 출발 항공편',
      '직원의 확인이 필요한 요청사항이 있는 탑승객',
    ],
  },
];
export const 체크인신청하기상세_바로완료: FC = () => {
  const [formFilled, setFormFilled] = useState([false]);
  const checkboxProps = {
    isActive: true,
    onChange: () => {},
  };

  return (
    <CheckinDetailInfoTemplate
      isCompleted
      guide={guideListData.map((item, i) => (
        <GuideList
          key={`guideListData${i.toString()}`}
          title={item.title}
          descriptions={item.descriptions}
        />
      ))}
      passengerInfoShareButton={
        <PassengerInfoShareButton />
      }
      expansionPanel={
        <S.wrapper>
          <PassengerFormExpansionPanel
            name="YUNJUNG SEO"
            disabled={false}
            buttonLabel="신청 완료"
          >
            <PassengerForm2
              idx={0}
              data={passenger}
              formFilled={formFilled}
              onChangeFilledStatus={setFormFilled}
            />
          </PassengerFormExpansionPanel>
        </S.wrapper>
      }
      confirmCheckbox={
        <Checkbox {...checkboxProps}>
          입력한 여권 정보와 실제 여권 정보가 일치합니다.
        </Checkbox>
      }
      checkinButton={
        <TaskButton>온라인 체크인 신청</TaskButton>
      }
    />
  );
};

export const 체크인신청하기상세_좌석선택: FC = () => {
  const [formFilled, setFormFilled] = useState([false]);
  const checkboxProps = {
    isActive: true,
    onChange: () => {},
  };

  return (
    <CheckinDetailInfoTemplate
      isCompleted={false}
      guide={guideListData.map((item, i) => (
        <GuideList
          key={`guideListData${i.toString()}`}
          title={item.title}
          descriptions={item.descriptions}
        />
      ))}
      passengerInfoShareButton={
        <PassengerInfoShareButton />
      }
      expansionPanel={
        <S.wrapper>
          <PassengerFormExpansionPanel
            name="YUNJUNG SEO"
            disabled={false}
            buttonLabel="신청 완료"
          >
            <PassengerForm2
              idx={0}
              data={passenger}
              formFilled={formFilled}
              onChangeFilledStatus={setFormFilled}
            />
          </PassengerFormExpansionPanel>
        </S.wrapper>
      }
      confirmCheckbox={
        <Checkbox {...checkboxProps}>
          입력한 여권 정보와 실제 여권 정보가 일치합니다.
        </Checkbox>
      }
      checkinButton={
        <S.buttonWrapper>
          <TaskButton
            color={LIGHT_GRAY7}
            backgroundColor={WHITE1}
            border={`solid 1px ${LIGHT_GRAY7}`}
          >
            좌석 자동 지정
          </TaskButton>
          <TaskButton>좌석 선택</TaskButton>
        </S.buttonWrapper>
      }
    />
  );
};

const S = {
  wrapper: styled.div``,

  buttonWrapper: styled.div`
    button {
      width: 240px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  `,
};
