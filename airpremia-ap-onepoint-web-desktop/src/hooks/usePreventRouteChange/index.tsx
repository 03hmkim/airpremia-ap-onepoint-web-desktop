import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Hook that listens to `next/router` `'routeChangeStart'` events and prevents changing
 * to a requested URL when `shouldPreventRouteChange` is `true`.
 *
 * @param {Boolean} shouldPreventRouteChange Whether to prevent all Next.js route changes or not.
 * @param {Funcion=} onRouteChangePrevented Callback function called when route change was prevented (optional).
 */
function usePreventRouteChange(
  shouldPreventRouteChange: boolean,
  onRouteChangePrevented: (url: string) => void,
) {
  const router = useRouter();
  const onBeforeUnloadWindow = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const routeChangeStart = (url: string) => {
    if (router.asPath !== url && shouldPreventRouteChange) {
      router.events.emit('routeChangeError');
      onRouteChangePrevented && onRouteChangePrevented(url);
      // Following is a hack-ish solution to abort a Next.js route change
      // as there's currently no official API to do so
      // See https://github.com/zeit/next.js/issues/2476#issuecomment-573460710
      throw `Route change to "${url}" was aborted (this error can be safely ignored)`;
    }
  };

  const addEvent = () => {
    window.addEventListener(
      'beforeunload',
      onBeforeUnloadWindow,
    );
  };

  const removeEvent = () => {
    window.removeEventListener(
      'beforeunload',
      onBeforeUnloadWindow,
    );
  };

  useEffect(() => {
    addEvent();
    if (!shouldPreventRouteChange) {
      removeEvent();
    }
    router.events.on('routeChangeStart', routeChangeStart);

    return () => {
      router.events.off(
        'routeChangeStart',
        routeChangeStart,
      );
      removeEvent();
    };
  }, [
    onRouteChangePrevented,
    router.asPath,
    router.events,
    shouldPreventRouteChange,
  ]);
}

export default usePreventRouteChange;
