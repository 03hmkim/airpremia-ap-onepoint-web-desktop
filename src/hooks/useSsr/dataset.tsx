import React from 'react';
import SvgBag from 'public/images/ico_bag.svg';
import SvgSeat from 'public/images/ico_seat.svg';
// import SvgWifi from 'public/images/ico_wifi.svg';
// import SvgRestaurant from 'public/images/ico_restaurant.svg';
// import SvgEvent from 'public/images/ico_event.svg';
import SvgPregnant from 'public/images/ico_pregnant.svg';
import SvgDisabledPerson from 'public/images/ico_disabledperson.svg';
// import SvgBed from 'public/images/ico_bed.svg';
import SvgOxygenTank from 'public/images/ico_oxygentank.svg';
import { ISsrPanel } from 'src/components/molecules/ssrPanel';

export const ssrBundlePanelResources: ISsrPanel[] = [
  {
    id: 'bundle1',
    title: '베이직 서비스팩',
    defaultDescription:
      '수하물, 와이파이, 기내 편의용품을 15% 할인된 가격으로',
    totalFeeRaw: 65000,
    totalFee: 49000,
  },
];

export const ssrOriginalPanelResources = [
  {
    // type: 'baggage',
    left: <SvgBag />,
    title: '위탁 수하물',
    defaultDescription: '기본 제공: 인당 20KG(이코노미35), 인당 30KG(프레미아42)',
    // defaultDescription: '기본 제공: 인당 20KG',
  },
  {
    type: 'seat',
    left: <SvgSeat />,
    title: '좌석',
    defaultDescription: '기본 제공: 무료 좌석 선택 가능',
  },
  //   {
  //     type: 'wifi',
  //     left: <SvgWifi />,
  //     title: '기내 와이파이',
  //     defaultDescription: '기본 제공: 와이파이 10MB 무료',
  //   },
  //   {
  //     type: 'meal',
  //     left: <SvgRestaurant />,
  //     title: '기내식',
  //     defaultDescription: '기본 제공: 기본 (일반식)',
  //   },
  //   {
  //     type: 'amenity',
  //     left: <SvgEvent />,
  //     title: '기내 편의 용품',
  //     defaultDescription: '기본 제공: 기본 (Air Pack)',
  //   },
];

export const ssrSpecialPanelResources = [
  {
    id: 'pregnant',
    left: <SvgPregnant />,
    title: '임산부 승객',
    defaultDescription:
      '우선 탑승, 수하물 우선 찾기 서비스 제공',
  },
  {
    id: 'disabled',
    left: <SvgDisabledPerson />,
    title: '장애인 승객',
    defaultDescription:
      '우선 탑승, 수하물 우선 찾기 서비스 제공',
  },
  // {
  //   id: 'crib',
  //   left: <SvgBed />,
  //   title: '유아용 침대 대여',
  //   defaultDescription:
  //     '신장 76cm 이하, 몸무게 14kg 이하 신청 가능',
  // },
  {
    id: 'medical',
    left: <SvgOxygenTank />,
    title: '기타 의료 도움이 필요한 승객',
    defaultDescription: '기타 의료 서비스 요청 가능',
  },
];
