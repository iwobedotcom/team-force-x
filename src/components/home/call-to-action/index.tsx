import { useMediaQueries } from "../../../hooks/useMediaQueries";
import { ButtonSize } from "../../../types";
import ButtonLink from "../../common/buttons/button-link";
import CustomHeading from "../../common/custom-heading";
import CustomSection from "../../common/custom-section";

/**
 * Renders the call-to-action section of the home page.
 * This section includes a hero image, a heading, a list of steps to open an account, and a call-to-action button.
 * The layout and styling of the section are handled by the `CustomSection` and other custom components.
 * The content and behavior of the section are defined in this component.
 */
const CallToAction = () => {
  const { isMobile } = useMediaQueries();
  return (
    <CustomSection id="cta" className="bg-body-color-dark pb-16" waveColor="#eeeef5">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img
            className="rounded-xl image-tilt"
            src="/images/girl-smile.png"
            alt="Girl Smiling"
            data-aos="fade-right"
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <p
                className="text-sm text-black font-semibold font-neue underline underline-offset-2 decoration-lime-400 decoration-2"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                Open An Account
              </p>
              <CustomHeading title="Let's get started" size="large" center={false} />
            </div>

            <ul className="space-y-2 sm:space-y-6 w-4/5">
              <li className="flex">
                <div className="flex items-center gap-x-7" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-2xl mr-1 font-neue text-black">01</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Sign Up in a few minutes
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex items-center gap-x-7" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="text-2xl mr-1 font-neue text-black">02</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Let us verify your identity
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex items-center gap-x-7" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="text-2xl mr-1 font-neue text-black">03</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Your account is open; you can send your first payment
                  </p>
                </div>
              </li>
            </ul>

            <div className="space-y-3 md:space-y-3" data-aos="fade-up" data-aos-delay="400">
              <ButtonLink
                label="Open An Account in Minutes"
                to="#"
                size={isMobile ? ButtonSize.Small : ButtonSize.Medium}
                variant="button"
              />

              <p className="text-xs text-body-color">
                Try it for 30days. For free. No obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default CallToAction;
