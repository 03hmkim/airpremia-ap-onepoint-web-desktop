import { ISsrModalAmenityInput } from '.';
import ImgDefault from 'public/images/img_amenity@2x.png';

export const dummySsrModalAmenityInputs: ISsrModalAmenityInput[] = [
  {
    amenityType: 'default',
    id: '0',
    label: 'Air Pack',
    description: '배게, 담요, 이어폰, 물티슈',
    price: 0,
    img: ImgDefault,
    isActive: false,
  },
  {
    amenityType: 'pay',
    id: '1',
    label: 'Super Comfort Pack (대여)',
    description: '노이즈캔슬링 이어폰, 독서를 위한 조명',
    price: 18000,
    img: ImgDefault,
    isActive: false,
  },
  {
    amenityType: 'pay',
    id: '2',
    label: 'Somnium Pack',
    description: '노이즈캔슬링 이어폰, 독서를 위한 조명',
    price: 18000,
    img: ImgDefault,
    isActive: false,
  },
  {
    amenityType: 'pay',
    id: '3',
    label: 'Dream Pack',
    description: '노이즈캔슬링 이어폰, 독서를 위한 조명',
    price: 18000,
    img: ImgDefault,
    isActive: false,
  },
];
