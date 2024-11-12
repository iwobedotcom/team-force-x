import { useState } from 'react';
import { faqs } from '../../../data/faqs';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import { ButtonSize } from '../../../types';
import ButtonLink from '../../common/buttons/button-link';
import CustomHeading from '../../common/custom-heading';
import CustomSection from '../../common/custom-section';
import FAQItem from './faq-item';

/**
 * Renders the FAQs (Frequently Asked Questions) section of the home page.
 *
 * The FAQs section includes a heading, a list of FAQs, and a button to get in touch.
 * The FAQs are rendered using the `FAQItem` component, which handles the open/close state of each FAQ.
 * The section is wrapped in a `CustomSection` component with a white background and a wave pattern.
 */
const FAQs = () => {
  const { isMobile } = useMediaQueries();
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <CustomSection
      id="faqs"
      className="bg-white relative z-10 pb-72 overflow-x-hidden"
      waveColor="#ffffff"
    >
      <div className="md:grid md:grid-cols-2 md:items-start md:gap-12 xl:gap-32">
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-1 sm:space-y-3 sticky top-0">
            <div className="space-y-2 md:space-y-4">
              <p
                className="text-sm text-black font-semibold font-neue underline underline-offset-2 decoration-lime-400 decoration-2"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Support
              </p>
              <div className="w-11/12">
                <CustomHeading
                  title="Frequently Asked Questions"
                  paragraph="Magna exercitation duis fugiat minim velit quis sit non nulla. "
                  size="large"
                  center={false}
                />
              </div>
            </div>

            <div className="flex flex-row sm:flex-row items-start gap-5">
              <div data-aos="fade-up" data-aos-delay="200">
                <ButtonLink
                  label="Get in Touch"
                  to="#"
                  size={isMobile ? ButtonSize.Small : ButtonSize.Medium}
                  variant="button"
                />
              </div>
              <img
                className="rounded-xl w-44 h-44 object-cover image-tilt"
                src="/images/boy-girl.png"
                alt="Boy & Girl"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-2xl mx-auto">
            <div className="hs-accordion-group">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  {...faq}
                  isOpen={index === openIndex}
                  onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default FAQs;
