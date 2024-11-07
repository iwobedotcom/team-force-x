import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

/**
 * A React hook that manages the state of a sticky navbar based on the user's scroll position.
 *
 * The hook uses the `useState` and `useEffect` hooks to track the user's scroll position and update the `sticky` state accordingly.
 *
 * The `sticky` state is set to `true` when the user scrolls past the `SCROLL_THRESHOLD` value (80 pixels), and `false` otherwise.
 *
 * The hook also uses the `debounce` function to throttle the scroll event handler, which helps improve performance by reducing the number of updates.
 *
 * @returns {boolean} The `sticky` state, indicating whether the navbar should be sticky or not.
 */

const SCROLL_THRESHOLD = 80;

export const useStickyNavbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= SCROLL_THRESHOLD);
    };

    const debouncedHandleStickyNavbar = debounce(handleStickyNavbar, 100);

    window.addEventListener('scroll', debouncedHandleStickyNavbar);

    return () => {
      window.removeEventListener('scroll', debouncedHandleStickyNavbar);
    };
  }, []);

  return sticky;
};
