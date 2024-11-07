
/**
 * A React component that renders an offering card with a title, description, mockup image, and a link.
 * The component adjusts its layout based on the screen size (desktop or mobile).
 *
 * @param {OfferingProp} props - The props for the OfferingCard component.
 * @param {string} props.title - The title of the offering.
 * @param {string} props.description - The description of the offering.
 * @param {string} props.mockup - The URL of the mockup image.
 * @param {string} props.bgColor - The background color of the card.
 * @param {string} props.link - The URL of the link associated with the offering.
 * @param {string} [props.height] - The height of the card.
 * @param {string} [props.imageRes] - The CSS class for the image resolution.
 * @param {string} [props.positioning] - The CSS class for the positioning of the mockup image.
 * @returns {JSX.Element} - The OfferingCard component.
 */

import { useMediaQueries } from "../../../../hooks/useMediaQueries";
import type { OfferingProp } from "../../../../types";
import ButtonLink from "../../../common/buttons/button-link";
import { ArrowRightIcon } from "../../../icons";

const OfferingCard = ({
  title,
  description,
  mockup,
  bgColor,
  link,
  height,
  imageRes,
  positioning
}: OfferingProp) => {
  const { isMobile } = useMediaQueries();
  const heightClass = height || 'h-full';

  const desktopLayout = (
    <>
      <div className="p-8 md:p-12 flex flex-col h-full w-full z-10">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="mt-3 text-body-color text-sm flex-grow w-[80%]">{description}</p>
        {link && (
          <div className="mt-auto pt-4">
            <ButtonLink
              label="Explore Invoicing Tools"
              to={link}
              size="small"
              variant="link"
              icon={<ArrowRightIcon />}
              color="text-black"
            />
          </div>
        )}
      </div>
      <div className={`absolute ${positioning} ${imageRes} overflow-hidden`}>
        <img src={mockup} alt={`${title} mockup`} className="object-contain w-full h-full" />
      </div>
    </>
  );

  const mobileLayout = (
    <div className="flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-body-color text-sm">{description}</p>
        {link && (
          <div className="mt-4">
            <ButtonLink
              label="Explore Invoicing Tools"
              to={link}
              size="small"
              variant="link"
              icon={<ArrowRightIcon />}
              color="text-black"
            />
          </div>
        )}
      </div>
      <div className={`${imageRes} overflow-hidden mx-auto flex flex-col justify-between h-full`}>
        <div className="flex-grow"></div> {/* This will take up the available space */}
        <img src={mockup} alt={`${title} mockup`} className="object-contain w-full h-auto" />
      </div>
    </div>
  );

  return (
    <div
      className={`group relative flex flex-col shadow-sm rounded-3xl overflow-hidden ${heightClass} ${bgColor}`}
      data-aos="flip-left"
    >
      {isMobile ? mobileLayout : desktopLayout}
    </div>
  );
};

export default OfferingCard;
