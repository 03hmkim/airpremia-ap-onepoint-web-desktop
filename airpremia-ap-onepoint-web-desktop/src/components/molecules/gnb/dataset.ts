import { IGnbMenu } from './index';

export const gnbMenus: IGnbMenu[] = [
  {
    mainMenuLabel: '예매',
    subMenus: [
      {
        label: '항공권 예매',
        to: '/ticket/flight',
      },
      {
        label: '보너스 항공권',
        to: '/',
      },
    ],
  },
  {
    mainMenuLabel: '조회/체크인',
    subMenus: [
      {
        label: '예약 조회',
        to: '/checkin/find-trip',
      },
      {
        label: '온라인 체크인',
        to: '/checkin/online',
      },
      {
        label: '출/도착 조회',
        to: '/checkin/flight-status',
      },
      {
        label: '운항 스케줄',
        to: '/',
      },
    ],
  },
  {
    mainMenuLabel: '프레미아 멤버스',
    subMenus: [
      {
        label: '회원 등급',
        to: '/',
      },
      {
        label: '혜택',
        to: '/',
      },
    ],
  },
  {
    mainMenuLabel: '이벤트',
    subMenus: [
      {
        label: '이벤트',
        to: '/',
      },
      {
        label: '프로모션',
        to: '/',
      },
    ],
  },
  {
    mainMenuLabel: '서비스 안내',
    subMenus: [
      {
        label: '사전 수하물 구매',
        to: '/support/additional-service/baggage',
      },
      {
        label: '수하물',
        to: '/support/baggage/carry',
      },
      {
        label: '탑승 수속',
        to: '/support/checkin/info',
      },
      {
        label: '도움이 필요한 손님',
        to: '/support/need/help',
      },
    ],
  },
  {
    mainMenuLabel: '고객지원',
    subMenus: [
      {
        label: '공지사항',
        to: '/support/notice',
      },
      {
        label: '1:1 문의',
        to: '/support/inquiry',
      },
      {
        label: '자주 묻는 질문',
        to: '/support/faq',
      },
      {
        label: '기내 유실물 센터',
        to: '/',
      },
      {
        label: '서식 자료실',
        to: '/',
      },
    ],
  },
];
