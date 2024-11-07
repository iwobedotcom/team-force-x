import type { ReactElement } from 'react';

/**
 * A button component that displays a social media icon.
 *
 * @param icon - The React element to be displayed as the button's icon.
 * @returns A button element with the provided icon.
 */
const SocialsButton = ({ icon }: { icon: ReactElement }) => (
  <button
    type="button"
    className="p-1 flex justify-center items-center size-[38px] text-sm font-medium rounded-xl border border-transparent text-black bg-white hover:brightness-110 hover:animate-pulse transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none"
  >
    {icon}
  </button>
);

export default SocialsButton;
