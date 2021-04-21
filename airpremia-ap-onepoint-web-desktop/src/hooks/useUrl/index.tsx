import { useRouter } from 'next/router';
import { flow } from 'lodash/fp';
import queryString from 'query-string';

function useUrl() {
  const router = useRouter();
  const { asPath } = router;

  const getQueries = (path: string) => {
    if (!path.includes('?')) return '';

    return path.split('?')[1];
  };

  return {
    url: asPath.split('?')[0],
    queries: flow(getQueries, queryString.parse)(asPath),
  };
}

export default useUrl;
