import { useCallback } from 'react';

export default () => {
  let $body: any;

  const hideScrollBody = useCallback(() => {
    $body?.classList.add('scrollHidden');
  }, []);

  const showScrollBody = () => {
    $body?.classList.remove('scrollHidden');
  };

  const upScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return { hideScrollBody, showScrollBody, upScroll };
};
