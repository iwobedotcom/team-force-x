import { offerings } from "../../../data/offerings";
import CustomHeading from "../../common/custom-heading";
import CustomSection from "../../common/custom-section";
import OfferingCard from "./offering-card";

/**
 * Renders the Offerings section of the home page, which displays a list of payment offerings.
 * The section includes a custom heading and a grid of OfferingCard components.
 * The layout and styling of the section is handled by the CustomSection and OfferingCard components.
 */
const Offerings = () => {
  return (
    <CustomSection id="offerings" className="bg-white" waveColor="#ffffff">
      <CustomHeading
        title="You'll love our powerful payments"
        paragraph="We've got all your payments covered"
        size="large"
        className="w-full md:w-2/3  text-center mx-auto mb-12"
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2 mt-10 -right-">
        {offerings.map((offering, index) => (
          <div
            key={offering.id}
            className={`
        ${index === offerings.length - 1 && offerings.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-2' : ''}
      `}
          >
            <OfferingCard
              {...offering}
              height={index === offerings.length - 1 ? 'h-[350px]' : 'h-[350px]'}
              imageRes={index === offerings.length - 1 ? 'h-[90%] w-[90%]' : 'h-3/5 w-3/5'}
              positioning={
                index === offerings.length - 1 ? 'bottom-0 -right-52' : 'bottom-0 right-0'
              }
            />
          </div>
        ))}
      </div>
    </CustomSection>
  );
};

export default Offerings;
