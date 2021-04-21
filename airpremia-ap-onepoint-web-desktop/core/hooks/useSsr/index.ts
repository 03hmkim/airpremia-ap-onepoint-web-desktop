import UseSsr from './useSsr';
import seat from './seat';

function index() {
  return {
    ...UseSsr(),
    ...seat(),
  };
}

export default index;
