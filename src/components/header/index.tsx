/**
 * The `Header` component represents the header section of the application.
 * It handles the rendering of the logo, navigation links, and button links.
 * The header can be in a sticky or non-sticky state, and the appearance changes accordingly.
 * The component also handles the toggling of the mobile navigation menu.
 */

import { useEffect, useState } from 'react';
import { headerNavlinks } from '../../data/headerNavlinks';
import { useLocation } from '../../hooks/useLocation';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { ButtonSize } from '../../types';
import ButtonLink from '../common/buttons/button-link';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isMobile } = useMediaQueries();
  const location = useLocation();

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen((prev) => !prev);
  const closeNavbar = () => setNavbarOpen(false);

  /**
   * Renders the logo image for the header component.
   * The logo image changes based on the sticky state of the header and the mobile device state.
   * @returns The JSX element containing the logo image.
   */
  const renderLogo = () => {
    const logoSrc = '/images/logo.png';
    return (
      <>
        <img src={logoSrc} alt="logo" className="dark:hidden" width={100} height={100} />
        <img src={logoSrc} alt="logo" className="hidden dark:block" width={100} height={100} />
      </>
    );
  };

  /**
   * Renders the navigation links for the header component.
   * The links are generated from the `headerNavlinks` configuration and displayed based on the current location and the sticky state of the header.
   * The links are also closed when clicked on mobile devices.
   * @returns The JSX element containing the navigation links.
   */
  const renderNavbarLinks = () =>
    headerNavlinks.map((menuItem) => (
      <li key={menuItem.id} className="group relative">
        <a
          href={menuItem.path}
          className={`flex py-2 md:text-md font-bold text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 font-neue ${
            location.pathname === menuItem.path ? 'text-white/75' : 'text-white hover:text-white/75'
          }`}
          onClick={closeNavbar}
        >
          {menuItem.title}
        </a>
      </li>
    ));

  /**
   * Renders the button links for the header component.
   * The button links are displayed in the mobile view of the header navigation.
   * The color of the buttons changes based on the sticky state of the header and the mobile device state.
   * @returns The JSX elements containing the button links.
   */
  const renderButtonLinks = () => (
    <>
      <ButtonLink label="Login" to="#" size={ButtonSize.Medium} variant="link" color="text-white" />
      <ButtonLink
        label="Sign Up"
        to="#"
        size={ButtonSize.Medium}
        variant="button"
        color="text-white"
      />
    </>
  );

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? `dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] glassmorphism-dark !bg-opacity-80 shadow-sticky backdrop-blur-sm transition`
          : 'absolute bg-transparent'
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <a href="/" className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-5'}`}>
              {renderLogo()}
            </a>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                {['top-[7px] rotate-45', 'opacity-0', 'top-[-8px] -rotate-45'].map(
                  (style, index) => (
                    <span
                      key={index}
                      className={`relative my-1.5 block h-0.5 w-[30px] ${
                        sticky ? (isMobile ? 'bg-white' : 'bg-black/65') : 'bg-white'
                      } transition-all duration-300 dark:bg-white ${navbarOpen ? style : ''}`}
                    />
                  )
                )}
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-full border-[.5px] border-body-color/50 px-6 py-4 duration-300 ${isMobile ? 'glassmorphism-dark' : ''} dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block lg:flex lg:space-x-8">
                  {renderNavbarLinks()}
                  {/* Add ButtonLinks to the navigation in mobile view */}
                  {isMobile && (
                    <div className="flex items-center justify-start lg:pr-0 gap-2 mt-3">
                      {renderButtonLinks()}
                    </div>
                  )}
                </ul>
              </nav>
            </div>

            {/* Only show ButtonLinks in desktop view */}
            {!isMobile && (
              <div className="flex items-center justify-end lg:pr-0 gap-2">
                {renderButtonLinks()}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
