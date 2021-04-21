import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  PassportTemplate,
  BoardingPassPaper,
  Loading,
} from 'src/components';
import { useBooking } from '@airpremia/core/hooks';

interface IProps {}

const BoardingPass: FC<IProps> = () => {
  const { bookingStore, onBoardingPassLoad } = useBooking();
  const router = useRouter();
  const { boardingPasses, 
    isPassportRequest, 
    isPassportSuccess 
  } = bookingStore;
  const [isLoad, setLoad] = useState(false);

  const removeUnnessaryDom = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const gnbNew = document.getElementById('gnbNew');

    if (header && footer && gnbNew) {
      header.style.display = 'none';
      footer.style.display = 'none';
      gnbNew.style.display = 'none';
    }
  };
  const { recordLocator, journeyKey, firstName, lastName } = router.query;
  const onLoadPassport = () => {
    const _recordLocator = Array.isArray(recordLocator)
      ? recordLocator[0]
      : recordLocator;

    const _journeyKey = Array.isArray(journeyKey)
      ? journeyKey[0]
      : journeyKey;

    onBoardingPassLoad(_recordLocator, _journeyKey);
    setLoad(true);
  };

  useEffect(() => {
    removeUnnessaryDom();
    onLoadPassport();
  }, []);

  if(isLoad) {
    if (isPassportRequest) {
      return <Loading />;
    } else {
      if(!isPassportSuccess) {
        alert("탑승권을 조회할 수 없습니다.");
        window.close();
      }
    }
    setLoad(false);
  }

  if (!boardingPasses) {
    return <Loading />;
  }
  return (
    <S.container>
      <S.wrapper>
        <PassportTemplate
          boardingPasses={
            <S.boardingPassWrapper>
              {boardingPasses.map((boardingPass, i) => (
                firstName != null && lastName != null 
                  && firstName != boardingPass.name.first && lastName != boardingPass.name.last 
                ? null 
                : <S.wrapper
                  key={`boardingPass${i.toString()}`}
                >
                  <BoardingPassPaper
                    boardingPass={boardingPass}
                  />
                </S.wrapper>
              ))}
            </S.boardingPassWrapper>
          }
        />
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  wrapper: styled.div``,
  boardingPassWrapper: styled.div`
    & > div:not(:first-of-type) {
      margin-top: 60px;
    }
  `,
};

export default BoardingPass;
