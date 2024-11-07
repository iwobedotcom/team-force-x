import { useEffect } from 'react';

/**
 * A React component that scrolls the page to the top when rendered.
 *
 * This component uses the `useEffect` hook to execute a side effect that scrolls the page to the top when the component is mounted. It returns `null`, as it does not render any visible content.
 */
const ScrollUp = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
};

export default ScrollUp;
