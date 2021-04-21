import styled from 'styled-components';
import { FC, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  CheckinSearchTemplate,
  OnlineCheckinInfo,
  WarningList,
  CheckinListTemplate,
  OnlineCheckinCard,
  NothingOnlineCheckinCard,
} from 'src/components';
import { CheckinInquiryForm } from 'src/components/organisms/inquiryForm/index';
import {
  useAuth,
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';

interface IProps {}

const cautionList = [
  {
    title: '온라인 체크인 신청 안내',
    description: [
      '온라인 체크인을 신청하면 출발 24시간 전에 자동으로 체크인이 완료되며 연락처로 탑승권이 전송됩니다.',
      '온라인 체크인 신청 완료 후에도 탑승권 발급 전까지 좌석 변경 및 항공편 변경이 가능합니다.',
      '입력한 여권 정보가 부정확하거나 유효하지 않을 경우 탑승권 발급이 불가능할 수 있습니다.',
    ],
  },
  {
    title: '온라인 체크인 신청 불가한 경우',
    description: [
      '유아 동반 승객, 임산부 승객',
      '온라인 탑승권이 허용되지 않는 일부 해외 공항 출발 항공편',
      '직원의 확인이 필요한 요청사항이 있는 탑승객',
    ],
  },
];

const CheckIn: FC<IProps> = () => {
  const router = useRouter();
  const {
    bookingStore,
    onLoadCountryCodeList,
    onFindAvailableCheckin,
  } = useBooking();
  const { 
    firstName,
    lastName,
    recordLocator,
    checkinList,
  } = bookingStore;
  const { authStore } = useAuth();
  const { upScroll } = useScroll();
  const { isLogIn } = authStore;
  const hasItem = useMemo(() => {
    return checkinList.length > 0;
  }, [checkinList]);

  useEffect(() => {
    if (isLogIn) {
      onFindAvailableCheckin();
    }
    onLoadCountryCodeList();
  }, [isLogIn]);

  useEffect(() => {
    upScroll();
  }, []);

  const onClickOnline = () => {
    router.push(
      `/checkin/online/findCheckin?firstName=${firstName.value}&lastName=${lastName.value}&recordLocator=${recordLocator.value}`,
    );
  };

  if (isLogIn) {
    return (
      <Container>
        <CheckinListTemplate
          title="온라인 체크인 신청"
          description={
            hasItem
              ? '온라인 체크인을 신청할 여정을 선택해주세요'
              : ''
          }
          onlineCheckinCard={
            hasItem ? (
              checkinList.map((item, i) => (
                <S.wrapper key={i.toString()}>
                  <OnlineCheckinCard {...item} />
                </S.wrapper>
              ))
            ) : (
              <NothingOnlineCheckinCard />
            )
          }
        />
      </Container>
    );
  }

  return (
    <Container>
      <CheckinSearchTemplate
        title="온라인 체크인 신청"
        inquiryForm={
          <CheckinInquiryForm
            needReservationNumber
            title="체크인하실 여정의 탑승자 정보를 입력해주세요 :-)"
            onClick={onClickOnline}
          />
        }
        onlineCheckinInfo={<OnlineCheckinInfo />}
        onlineCheckinApplyInfo={cautionList.map(
          (item, i) => (
            <WarningList
              key={`waringList${i.toString()}`}
              title={item.title}
              descriptions={item.description}
            />
          ),
        )}
      />
    </Container>
  );
};

const S = {
  container: styled.div``,

  wrapper: styled.div`
    margin-bottom: 10px;
  `,
};

export default CheckIn;
