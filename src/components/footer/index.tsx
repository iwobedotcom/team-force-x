
import { Suspense } from 'react';
import { footerNavlinks } from '../../data/footerNavlinks';
import { BackgroundColor, TextColor, type DownloadButtonProp } from '../../types';
import ButtonLink from '../common/buttons/button-link';
import SocialsButton from '../common/buttons/socials-button';
import {
  AppStoreIcon,
  CaretDownIcon,
  EmailIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LoaderIcon,
  PhoneIcon,
  TwitterIcon,
  VimeoIcon
} from '../icons';

/**
 * The `Footer` component represents the footer section of the application.
 * It includes various sections such as the company logo, contact information,
 * navigation links, and download buttons for the mobile app.
 *
 * The footer is designed to be responsive and includes dark mode support.
 * It uses the `footerNavlinks` configuration to populate the navigation links.
 * The `DownloadButton` component is used to render the app download buttons.
 *
 * The footer also includes social media buttons and a language selector.
 */

/**
 * The `DownloadButton` component renders a button with an icon and text to represent a download link for a mobile app.
 *
 * @param store - The text to display for the app store name (e.g. "App Store", "Google Play").
 * @param icon - The icon component to display next to the store name.
 * @param bgColor - The background color of the button.
 * @param textColor - The text color of the button.
 * @returns A React component that renders the download button.
 */
const DownloadButton = ({ store, icon, bgColor, textColor }: DownloadButtonProp) => (
  <button
    type="button"
    className={`flex items-center justify-center w-40 mt-3 ${textColor} ${bgColor} h-10 rounded-lg`}
  >
    <div className="mr-3">
      <Suspense fallback={<LoaderIcon />}>{icon}</Suspense>
    </div>
    <div className="-mt-1 font-neue text-md font-semibold">{store}</div>
  </button>
);

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative z-10 bg-body-color-dark dark:bg-gray-dark pt-72"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12 mb-12 lg:mb-16">
            <div className="max-w-[360px]">
              <a href="/" className="inline-block mb-6">
                <img src="/images/logo-alt.png" alt="logo" width={100} height={100} />
              </a>
              <p className="mb-5 text-sm text-body-color dark:text-body-color-dark">
                Pariatur esse sit dolor proident pariatur aliqua consectetur fugiat ea laboris anim
                et.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  <p className="text-sm font-semibold text-body-color font-neue">+99999999999</p>
                </li>
                <li className="flex items-center gap-2">
                  <EmailIcon />
                  <p className="text-sm font-medium text-body-color font-neue">
                    teamforce@loremipsum.com
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {footerNavlinks.map((navItem) => (
            <div
              className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12 mb-12 lg:mb-16"
              key={navItem.heading}
            >
              <h2 className="mb-4 text-lg font-bold text-black font-neue dark:text-white">
                {navItem.heading}
              </h2>
              <ul className="space-y-3">
                {navItem.menu.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="inline-flex items-center text-sm font-medium text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors duration-300"
                    >
                      <span className="mr-2">•</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12 mb-12 lg:mb-16">
            <h2 className="mb-4 text-lg font-bold text-black font-neue dark:text-white">
              Download App
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <img src="/images/barcode.png" className="w-32 h-32 object-cover" alt="QR Code" />
              <div className="flex flex-col gap-2">
                <DownloadButton
                  store="App Store"
                  icon={
                    <Suspense fallback={<LoaderIcon />}>
                      <AppStoreIcon />
                    </Suspense>
                  }
                  bgColor={BackgroundColor.Black}
                  textColor={TextColor.White}
                />
                <DownloadButton
                  store="Google Play"
                  icon={
                    <Suspense fallback={<LoaderIcon />}>
                      <GooglePlayIcon />
                    </Suspense>
                  }
                  bgColor={BackgroundColor.White}
                  textColor={TextColor.Black}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-2 mb-4 sm:mb-0">
            <SocialsButton icon={<FacebookIcon />} />
            <SocialsButton icon={<TwitterIcon />} />
            <SocialsButton icon={<VimeoIcon />} />
            <SocialsButton icon={<InstagramIcon />} />
          </div>
          <p className="text-sm text-body-color dark:text-white mb-4 sm:mb-0">
            Full Copyright & Design by TeamForce - {new Date().getFullYear()}
          </p>
          <ButtonLink
            label="English (US)"
            size="small"
            variant="button"
            icon={<CaretDownIcon />}
            to="#"
            color="white"
            alt
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
