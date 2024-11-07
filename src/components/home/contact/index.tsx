import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import { ButtonSize, ButtonVariant } from '../../../types';
import ButtonLink from '../../common/buttons/button-link';
import CustomHeading from '../../common/custom-heading';
import ManageNotifications from './manage-notification';

/**
 * The `Contact` component represents a contact form section on the website. It uses the Formspree service to handle form submissions and provides a success message when the form is successfully submitted.
 *
 * The component includes the following features:
 * - Renders a form with fields for full name, email, phone number, and message
 * - Handles form submission using the `useForm` hook from the `@formspree/react` library
 * - Displays a success message when the form is successfully submitted, which is hidden after 10 seconds
 * - Displays error messages for any validation errors in the form fields
 * - Includes a `ManageNotifications` component to display any form submission errors
 *
 * The `Contact` component is rendered within a section element with an absolute position and a z-index of 50, which places it on top of other content on the page.
 */

const Contact = () => {
  const { isMobile } = useMediaQueries();
  const [state, handleSubmit] = useForm('mldervay');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      setShowErrors(true);
    }
  }, [state.errors]);

  const handleDismiss = () => {
    setShowErrors(false);
  };

  if (showSuccess) {
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
  }
  return (
    <section className="absolute top-[-230px] w-full z-50 bg-transparent">
      <div className="container">
        <div className="bg-gradient rounded-3xl" data-aos="fade-up">
          <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-5 max-w-xl text-center">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Full Name" field="fullname" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Email Address" field="email" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Phone Number" field="phone" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Enter Message"
                      rows={5}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent "
                    ></label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                </div>

                <div className="pt-8 pb-5">
                  <ButtonLink
                    label={state.submitting ? 'Submitting...' : 'Get Started Now'}
                    type="submit"
                    variant={ButtonVariant.Button}
                    size={isMobile ? ButtonSize.Medium : ButtonSize.Large}
                    disabled={state.submitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showErrors && state.errors && (
        <ManageNotifications
          emailStatus={state.errors
            .getFormErrors()
            .map((error) => error.message)
            .join(', ')}
          onDismiss={handleDismiss}
        />
      )}
    </section>
  );
};

export default Contact;
