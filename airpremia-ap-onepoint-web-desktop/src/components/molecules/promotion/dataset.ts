import { IList } from 'src/components/organisms/promotionContent';

export const listData: IList = {
  title: '이벤트 안내',
  data: [
    {
      th: '판매기간',
      td: '2019. 10. 10. ~ 2019. 11. 10.',
    },
    {
      th: '출발기간',
      td: '2020. 10. 10. ~ 2021. 10. 31.',
    },
    {
      th: '구매처',
      td: '에어프레미아 홈페이지, 모바일 웹/앱',
    },
    {
      th: '대상',
      td: '에어프레미아에서 예매하시는 회원(로그인 필수)',
    },
    {
      th: '혜택',
      td: '결제 화면에서 바우처번호 AP1234를 입력하면 운임의 10% 할인(유아 제외)',
    },
  ]

}

export default listData;