

/**
 * A custom heading component that renders a title and an optional paragraph.
 *
 * @param title - The title to be displayed.
 * @param size - The size of the title, can be 'small', 'medium', or 'large'.
 * @param paragraph - An optional paragraph to be displayed below the title.
 * @param center - Whether to center the heading and paragraph, defaults to true.
 * @param className - An optional CSS class to be applied to the heading.
 * @param paragraphColor - The color of the paragraph text, defaults to 'text-body-color'.
 * @returns A React component that renders the custom heading.
 */

import { useMediaQueries } from "../../../hooks/useMediaQueries";
import type { CustomHeadingProp } from "../../../types";

const CustomHeading = ({
  title,
  size,
  paragraph,
  center = true,
  className,
  paragraphColor = 'text-body-color'
}: CustomHeadingProp) => {
  const { isMobile } = useMediaQueries();
  const sizeClasses = {
    small: 'text-xl sm:text-3xl',
    medium: 'text-2xl sm:text-4xl',
    large: 'text-3xl sm:text-5xl'
  };

  return (
    <div
      className={`relative flex flex-col left-0 top-0 ${center ? 'justify-center items-center' : 'justify-start items-start'}`}
    >
      <h1
        className={`${isMobile ? 'mb-1' : 'mb-4'} font-bold font-neue ${sizeClasses[size]} ${className}`}
        data-aos="fade-up"
      >
        {title}
        <span className="text-primary">.</span>
      </h1>
      {paragraph && (
        <p
          className={`mb-4 max-w-3xl text-base font-medium leading-relaxed sm:leading-relaxed sm:text-lg ${paragraphColor} ${isMobile ? 'mr-auto' : ''}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default CustomHeading;
