import { ButtonSize, type ButtonLinkProp } from '../types';

const BASE_CLASSES = 'font-bold rounded-lg font-neue transition-all duration-300 ease-in-out';
const HOVER_CLASSES =
  'hover:brightness-110 hover:animate-pulse transform hover:-translate-y-0.5 active:translate-y-0';

/**
 * A custom React hook that generates CSS class names for button and link components based on the provided props.
 *
 * @param props - The button or link component props, including size, color, and other styling options.
 * @returns An object containing the generated CSS class names for the button and link components.
 */
export const useButtonClasses = (props: ButtonLinkProp) => {
  const sizeClasses = {
    [ButtonSize.Small]: 'py-2 px-3 text-sm',
    [ButtonSize.Medium]: 'py-2 px-6 text-base',
    [ButtonSize.Large]: 'py-3 px-8 text-lg'
  };

  const baseClasses = `
    ${BASE_CLASSES}
    ${sizeClasses[props.size || ButtonSize.Medium]}
    ${props.icon ? 'inline-flex items-center gap-x-2' : ''}
  `;

  const linkClasses = `
    ${baseClasses}
    ${props.color || 'text-white'}
    hover:text-white/75
  `;

  const buttonClasses = `
    ${baseClasses}
    ${props.alt ? 'bg-white text-black' : 'bg-gradient-to-t from-[#399d3b] via-[#77cf38] to-[#abf43c] text-white'}
    shadow-lg ${props.alt ? 'shadow-white/50' : 'shadow-[#77cf38]/50'}
    ${HOVER_CLASSES}
  `;

  return { linkClasses, buttonClasses };
};
