import UseSsr from './useSsr';
import UseSsrUI from './useSsrUI';
import modal from './modal';
import price from './price';
import trip from './trip';
import passenger from './passenger';

function index() {
  return {
    ...modal(),
    ...price(),
    ...trip(),
    ...passenger(),
    ...UseSsr(),
    ...UseSsrUI(),
  };
}

export default index;
