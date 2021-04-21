import ImgDefault from 'public/images/img_baggage_default@2x.png';
import ImgOne from 'public/images/img_baggage_02@2x.png';
import ImgTwo from 'public/images/img_baggage_03@2x.png';
import ImgThree from 'public/images/img_baggage_04@2x.png';
import { ISsrModalBaggageInput } from '.';

export const dummySsrModalBaggageInputs: ISsrModalBaggageInput[] = [
  {
    id: '0',
    label: '23KG X 1개',
    price: 0,
    img: ImgDefault,
    isActive: true,
  },
  {
    id: '1',
    label: '23KG X 1개',
    price: 35000,
    img: ImgOne,
    isActive: false,
  },
  {
    id: '2',
    label: '23KG X 2개',
    price: 75000,
    img: ImgTwo,
    isActive: false,
  },
  {
    id: '3',
    label: '23KG X 3개',
    price: 115000,
    img: ImgThree,
    isActive: false,
  },
];
