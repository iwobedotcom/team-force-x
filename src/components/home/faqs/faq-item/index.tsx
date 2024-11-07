import type { FAQItemProp } from '../../../../types';

/**
 * Renders a FAQ item component with a toggle functionality.
 *
 * @param id - The unique identifier for the FAQ item.
 * @param question - The question text for the FAQ item.
 * @param answer - The answer text for the FAQ item.
 * @param isOpen - A boolean indicating whether the FAQ item is currently open.
 * @param onToggle - A function to toggle the open state of the FAQ item.
 * @returns A React component representing a FAQ item.
 */
const FAQItem = ({ id, question, answer, isOpen, onToggle }: FAQItemProp) => {
  return (
    <div
      className={`hs-accordion rounded-xl p-6 ${
        isOpen ? 'hs-accordion-active bg-gray-50 shadow-md' : ''
      } transition-all duration-300 dark:hs-accordion-active:bg-gray-dark mb-1`}
      id={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
      data-aos="fade-left"
    >
      <button
        className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start text-md font-bold font-neue text-black transition focus:outline-none md:text-lg"
        aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
        onClick={onToggle}
      >
        {question}
        <svg
          className={`block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 ${
            isOpen ? 'hidden' : ''
          } dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg
          className={`size-5 shrink-0 text-gray-600 group-hover:text-gray-500 ${
            isOpen ? 'block' : 'hidden'
          } dark:text-neutral-400`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div
        id={`hs-basic-with-title-and-arrow-stretched-collapse-${id}`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
        aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${id}`}
      >
        <p className="text-sm font-medium leading-relaxed sm:text-base text-body-color sm:leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
