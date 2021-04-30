import { toInteger } from 'lodash';

function randomIMG() {
  const min = 1;
  const max = 4;
  const rand = toInteger(min + Math.random() * (max - min));

  return 'images/home/mainBg_0' + String(rand) + '.png';
}

export default randomIMG;
