/**
 * The `Services` component renders the services section of the home page, including a list of services, statistics, and a section for freebies.
 *
 * The component uses several sub-components to render the different parts of the services section:
 * - `Stats`: Renders a grid of statistics
 * - `StatsCurve`: Renders a curved SVG graphic
 * - `Servs`: Renders a single service card
 * - `Freebies`: Renders a section for free tools
 *
 * The `Services` component also uses the `useMediaQueries` hook to determine if the user is on a mobile device, and adjusts the layout accordingly.
 */
import { Icon } from '@iconify/react';
import { freebies } from '../../../data/freebies';
import { servs } from '../../../data/servs';
import { stats } from '../../../data/stats';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import CustomHeading from '../../common/custom-heading';
import CustomSection from '../../common/custom-section';

// Stats Component
const Stats = () => (
  <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-5">
    {stats.map((stat) => (
      <div key={stat.id} className="flex flex-col items-center md:items-start">
        <h3 className="text-xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 font-semibold">
          {stat.sum}
        </h3>
        <p className="text-xs sm:text-sm text-body-color">{stat.label}</p>
      </div>
    ))}
  </div>
);

// Stats Curve SVG Component
const StatsCurve = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 50"
    className="w-[92%] mt-1 transform -translate-y-4"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'orange', stopOpacity: 0 }} />
        <stop offset="20%" style={{ stopColor: 'orange', stopOpacity: 0.3 }} />
        <stop offset="50%" style={{ stopColor: 'orange', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M 0 30 C 150 10, 250 40, 500 30"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="transparent"
    />
    <path
      d="M 0 35 C 100 50, 300 20, 500 35"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="transparent"
    />
    <path
      d="M 0 40 C 200 20, 350 50, 500 25"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="transparent"
    />
  </svg>
);

// Service Card Component
const Servs = ({ serv }: { serv: { bgColor: string; icon: string; title: string } }) => (
  <div className="relative w-full h-[250px]" data-aos="flip-left">
    <div
      className={`absolute inset-0 ${serv.bgColor} rounded-3xl shadow-sm dark:bg-neutral-800 dark:shadow-neutral-700/70`}
      style={{ transform: 'rotate(-8deg)', zIndex: 0 }}
    ></div>
    <div className="relative z-10 flex flex-col h-full glassmorphism shadow-sm rounded-3xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-6 md:p-6 flex flex-col h-full">
        <div className="mb-auto">
          <Icon icon={serv.icon} width={30} height={30} />{' '}
        </div>
        <p className="text-sm text-black font-semibold font-neue">{serv.title}</p>
      </div>
    </div>
  </div>
);

// Freebies Component
const Freebies = ({ freebies, isMobile }: { freebies: string[]; isMobile: boolean }) => (
  <div className={`py-10 sm:px-6 lg:py-14 ${isMobile ? 'w-full' : 'mx-auto w-4/5'}`}>
    <div
      className="group relative flex flex-col shadow-sm rounded-3xl overflow-hidden bg-red-100"
      data-aos="flip-up"
    >
      <div className="p-8 md:p-12 flex flex-col h-full w-full z-10">
        <h3 className="text-2xl font-semibold text-black">More free tools than you can handle</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
          {freebies.map((freebie, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-lg mr-1">•</span>
              <span className="text-sm font-medium text-body-color">{freebie}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
const Services = () => {
  const { isMobile } = useMediaQueries();

  return (
    <CustomSection id="services" className="bg-body-color-dark pb-16" waveColor="#ffffff">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <CustomHeading
            title="We provide the best service for you"
            paragraph="We've got all your payments covered"
            size="large"
            center={false}
          />
        </div>

        <div className="md:w-1/2 flex justify-end" data-aos="fade-left">
          <div className="w-full md:w-auto">
            <Stats />
            <StatsCurve />
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] py-10 sm:px-6 lg:py-14 mx-auto container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 space-y-3">
          {servs.map((serv) => (
            <Servs key={serv.title} serv={serv} />
          ))}
        </div>
      </div>

      <Freebies freebies={freebies} isMobile={isMobile} />
    </CustomSection>
  );
};

export default Services;
