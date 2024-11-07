import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { testimonials } from '../../../data/testimonials';
import CustomHeading from '../../common/custom-heading';
import CustomSection from '../../common/custom-section';
import TestimonialCard from './card';

/**
 * Renders the Testimonials component, which displays a carousel of testimonials with a custom heading and section.
 * The carousel is implemented using the `keen-slider` library, with options for different breakpoints.
 * The testimonials data is imported from the `@/config/testimonials` module.
 */
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 8
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 18 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 22 }
      }
    }
  });

  return (
    <CustomSection id="testimonials" className="bg-gradient pb-16" waveColor="#6f2fd7">
      <CustomHeading
        title="What people are saying about us"
        size="large"
        className="text-white w-full md:w-2/3 lg:w-1/2 text-center mx-auto mb-12"
      />
      <div className="relative py-5">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial) => (
            <div className="keen-slider__slide" key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                const totalSlides = instanceRef.current?.track.details.slides.length ?? 0;
                const targetSlide = Math.floor((idx / 2) * (totalSlides - 1));
                instanceRef.current?.moveToIdx(targetSlide);
              }}
              className={`mx-1 w-3 h-3 rounded-full ${
                Math.floor(
                  (currentSlide / ((instanceRef.current?.track.details.slides.length ?? 1) - 1)) * 2
                ) === idx
                  ? 'bg-white'
                  : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      )}
    </CustomSection>
  );
};

export default Testimonials;
