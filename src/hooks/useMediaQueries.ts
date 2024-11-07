import { debounce } from 'lodash-es';
import { useCallback, useLayoutEffect, useState } from 'react';

/**
 * A React hook that provides a boolean value indicating whether the current device is mobile based on a given breakpoint.
 *
 * @param breakpoint - The maximum width in pixels to consider a device as mobile. Defaults to 640px.
 * @returns An object with a `isMobile` property that is `true` if the current device is mobile, and `false` otherwise.
 */
export const useMediaQueries = (breakpoint: number = 640): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mediaQuery.matches);
  }, [breakpoint]);

  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 250);
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setIsMobile(mediaQuery.matches);
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      debouncedHandleResize.cancel();
    };
  }, [breakpoint, handleResize]);

  return { isMobile };
};
