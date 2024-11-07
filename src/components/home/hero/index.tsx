import { clients } from '../../../data/clients';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import { ButtonSize, type AvatarProp } from '../../../types';
import ButtonLink from '../../common/buttons/button-link';
import { ContourLines, SphericalLines, TwilightStar } from '../../icons';

/**
 * The `Hero` component represents the main hero section of the homepage. It includes a title, a call-to-action button, a list of client avatars, and various decorative elements.
 *
 * The component uses the `useMediaQueries` hook to determine if the user is on a mobile device, and adjusts the layout and styles accordingly.
 *
 * The `Avatar` component is used to render the client avatars, displaying the client's name in a tooltip on hover.
 */

const Avatar = ({ name, image, isMobile }: AvatarProp) => {
  return (
    <div className="hs-tooltip inline-block">
      <img
        className={`hs-tooltip-toggle relative  inline-block ${isMobile ? 'h-9 w-9' : 'h-10 w-10'} rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900`}
        src={image}
        alt={`${name}'s Avatar`}
      />
      <span
        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 glassmorphism text-xs text-white rounded-lg"
        role="tooltip"
      >
        {name}
      </span>
    </div>
  );
};

const Hero = () => {
  const { isMobile } = useMediaQueries();
  return (
    <section
      id="hero"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-gradient pt-[140px]"
    >
      <div className="container grid md:grid-cols-2 gap-1 md:gap-1 xl:gap-20">
        <div>
          <h1
            className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-none pb-7"
            data-aos="fade-up"
          >
            The next generation payment ways.
          </h1>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
              <ButtonLink
                label="Get Started For Free"
                variant="button"
                size={isMobile ? ButtonSize.Medium : ButtonSize.Large}
                to="#"
              />
            </div>

            <div className="relative mt-10 md:mt-20 lg:mt-24">
              <p className="mb-4 max-w-3xl text-sm font-medium leading-relaxed sm:text-base sm:leading-relaxed font-neue text-white ">
                Over 50k+ Clients &nbsp;&nbsp;&nbsp;
                <span className="text-white/75">all over the world</span>
              </p>
              <div className="flex -space-x-2">
                {clients.map((client) => (
                  <Avatar key={client.id} {...client} isMobile={isMobile} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative ms-4" data-aos="fade-left" data-aos-delay="400">
          <img
            className={`w-full rounded-md image-tilt  ${isMobile ? 'mt-5' : ''}`}
            src="/images/pino.png"
            alt="Hero Image"
          />
          <div className="absolute right-0 top-0 opacity-30 lg:opacity-70">
            <TwilightStar />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <ContourLines />
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <SphericalLines />
      </div>
    </section>
  );
};

export default Hero;
