import UsePay from './usePay';
import dataset from './dataset';

function index() {
  return {
    ...UsePay(),
    ...dataset,
  };
}

export default index;
