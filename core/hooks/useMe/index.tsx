import usePoints from './usePoints';
import useMyPage from './useMyPage';

function index() {
  return {
    ...usePoints(),
    ...useMyPage(),
  };
}

export default index;
