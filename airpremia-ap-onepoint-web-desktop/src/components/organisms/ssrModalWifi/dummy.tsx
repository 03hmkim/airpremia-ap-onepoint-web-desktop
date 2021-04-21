import { ISsrModalWifiInput } from '.';
import ImageWifi10 from 'public/images/img_bookflight_wifi_10.svg';
import ImageWifi100 from 'public/images/img_bookflight_wifi_100.svg';
import ImageWifi300 from 'public/images/img_bookflight_wifi_300.svg';
import ImageWifi500 from 'public/images/img_bookflight_wifi_500.svg';

export const dummySsrModalWifiInputs: ISsrModalWifiInput[] = [
  {
    id: '0',
    price: 0,
    img: <ImageWifi10 />,
    isActive: true,
  },
  {
    id: '1',
    price: 15000,
    img: <ImageWifi100 />,
    isActive: false,
  },
  {
    id: '2',
    price: 35000,
    img: <ImageWifi300 />,
    isActive: false,
  },
  {
    id: '3',
    price: 55000,
    img: <ImageWifi500 />,
    isActive: false,
  },
];
