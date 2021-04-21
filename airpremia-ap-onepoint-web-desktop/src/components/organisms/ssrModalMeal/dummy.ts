import ImgDefault from 'public/images/img_meal_default@2x.jpg';
import { ISsrModalMealInput } from '.';

export const dummySsrModalMealInputs: ISsrModalMealInput[] = [
  {
    mealType: 'meal',
    id: '0',
    label: '일반식',
    description: '영양과 맛을 고려한 일반식',
    price: 22000,
    img: ImgDefault,
    isActive: true,
    isSpecial: true,
  },
  {
    mealType: 'meal',
    id: '1',
    label: '커플 세트',
    description: '프리미엄 기내식 2개 + 와인 2잔 세트',
    price: 22000,
    img: ImgDefault,
    isActive: false,
    isSpecial: false,
  },
  {
    mealType: 'snack',
    id: '2',
    label: '프리미엄 간식',
    description:
      '수분크림, 립밤, 미스트, 스팀 온열 안대, 마스크팩',
    price: 18000,
    img: ImgDefault,
    isActive: false,
    isSpecial: false,
  },
  {
    mealType: 'snack',
    id: '3',
    label:
      '콘차이 토로, 디아블로 까베르네 소비뇽 2013, 1잔',
    price: 22000,
    img: ImgDefault,
    isActive: false,
    isSpecial: false,
  },
  {
    mealType: 'snack',
    id: '4',
    label: '쏘우밀 크리 비달 아이스와인  2015, 1잔',
    price: 22000,
    img: ImgDefault,
    isActive: false,
    isSpecial: false,
  },
];

export const dummySnackInputs: ISsrModalMealInput[] = [];
