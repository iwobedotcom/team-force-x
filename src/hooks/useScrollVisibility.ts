import { debounce } from 'lodash-es';
import { useEffect, useState } from 'react';

/**
 * A React hook that tracks the visibility of an element based on the user's scroll position.
 *
 * @param {number} [threshold=300] - The minimum number of pixels the user must scroll before the element is considered visible.
 * @returns {boolean} - `true` if the element is visible, `false` otherwise.
 */
export const useScrollVisibility = (threshold: number = 300): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold);
    };

    const debouncedToggleVisibility = debounce(toggleVisibility, 100);

    window.addEventListener('scroll', debouncedToggleVisibility);

    return () => window.removeEventListener('scroll', debouncedToggleVisibility);
  }, [threshold]);

  return isVisible;
};
