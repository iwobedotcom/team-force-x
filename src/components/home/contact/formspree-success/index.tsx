

/**
 * Renders a success message component for a Formspree form submission.
 *
 * This component is displayed when a user successfully submits a form using the Formspree service. It includes a success icon, a title, and a paragraph message.
 *
 * The component is positioned absolutely at the top of the page with a transparent background, and is displayed within a rounded gradient container. The size of the success icon is adjusted based on the screen size using the `useMediaQueries` hook.
 */

import { useMediaQueries } from "../../../../hooks/useMediaQueries";
import CustomHeading from "../../../common/custom-heading";

const FormspreeSuccess = () => {
  const { isMobile } = useMediaQueries();
  return (
    <section className="absolute top-[-230px] w-full z-50 bg-transparent">
      <div className="container">
        <div className="bg-gradient rounded-3xl" data-aos="fade-up">
          <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-5 max-w-xl text-center">
              <div className="flex justify-center items-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={isMobile ? '80' : '150'}
                  height={isMobile ? '80' : '150'}
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#b0bdc6"
                    d="m.6 48.7l18.5-19.3L4.9 8.9c-.7.9-1.2 2.1-1.3 3.5L0 45.1q-.15 2.1.6 3.6M62.7 5.5L35.9 30.4L57 58.9c1.2-1 2-2.5 2.2-4.3L64 10c.2-1.8-.4-3.5-1.3-4.5"
                  />
                  <path
                    fill="#cad5dd"
                    d="m25.7 39.4l-6.6-10L.6 48.7c.4.9 1.1 1.5 1.9 1.7L53.3 60c1.4.3 2.7-.2 3.7-1.1L35.9 30.4z"
                  />
                  <path
                    fill="#dfe9ef"
                    d="M59.3 4L7.1 7.5c-.9.1-1.6.6-2.2 1.4l14.3 20.5l6.6 10l10.2-9L62.7 5.5c-.9-1-2.1-1.6-3.4-1.5"
                  />
                </svg>
              </div>

              <CustomHeading
                title="Thank you for your message!"
                paragraph="Sit tight—we’re already on it! Our team is excited to get back to you and will reach out as soon as we can. We can’t wait to connect!"
                size="large"
                className="text-white w-full text-center mx-auto mb-12"
                paragraphColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormspreeSuccess;