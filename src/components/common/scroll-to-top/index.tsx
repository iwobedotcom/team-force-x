import { useEffect, useState } from 'react';

/**
 * A React component that renders a "Scroll to Top" button that appears when the user scrolls down past a certain point on the page.
 *
 * The button is fixed to the bottom-right corner of the screen and becomes visible when the user scrolls past 300 pixels from the top of the page.
 * Clicking the button will smoothly scroll the page back to the top.
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-primary hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
