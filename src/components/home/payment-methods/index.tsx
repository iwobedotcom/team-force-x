import CustomHeading from "../../common/custom-heading";
import CustomSection from "../../common/custom-section";


/**
 * Renders a section for displaying payment methods on the home page.
 *
 * The section includes a custom heading with a title and paragraph, and an image of the team force network.
 *
 * @returns {JSX.Element} The payment methods section component.
 */
const PaymentMethods = () => {
  return (
    <CustomSection
      id="payment-methods"
      className="bg-white pb-16"
      container={false}
      waveColor="#ffffff"
    >
      <div className="container">
        <CustomHeading
          title="All major payment methods"
          paragraph="We've got all your payments covered"
          size="large"
          className="w-full md:w-2/3  text-center mx-auto mb-12"
        />
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/team-force-network.png"
          alt="offerings"
          className="object-cover w-full h-auto image-zoom"
          data-aos="fade-up"
        />
      </div>
    </CustomSection>
  );
};

export default PaymentMethods;
