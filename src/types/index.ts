import type { PropsWithChildren, ReactElement } from 'react';
export type MetadataProp = {
  title: string;
  description: string;
  applicationName: string;
  referrer: string;
  keywords: string[];
  robots: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
      index: boolean;
      follow: boolean;
      noimageindex: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
};

export type ButtonLinkProp = {
  to?: string;
  label: string | ReactElement;
  variant?: 'button' | 'link';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactElement | null;
  color?: string;
  alt?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export type CustomHeadingProp = {
  title: string;
  size: 'small' | 'medium' | 'large';
  className?: string;
  paragraph?: string;
  center?: boolean;
  paragraphColor?: string;
};

export type CustomSectionProp = PropsWithChildren<{
  id: string;
  container?: boolean;
  className?: string;
  waveColor?: string;
}>;

export type OfferingProp = {
  id?: number;
  title: string;
  description: string;
  mockup: string;
  link?: string;
  bgColor?: string;
  height?: string;
  imageRes?: string;
  positioning?: string;
};

export type AvatarProp = {
  id: number;
  name: string;
  image: string;
  isMobile?: boolean;
};

export type StatsProp = {
  id: number;
  sum: string;
  label: string;
};

export type ServsProp = {
  id: number;
  icon: string;
  title: string;
  bgColor: string;
};

export type FAQItemProp = FAQsProp & {
  isOpen: boolean;
  onToggle: () => void;
};

export type FAQsProp = {
  id: number;
  question: string;
  answer: string;
};

type FooterNavItem = {
  id: number;
  title: string;
  link: string;
};

export type FooterNavLinksProp = {
  heading: string;
  menu: FooterNavItem[];
};

export type HeaderNavLinksProp = {
  id: number;
  title: string;
  path: string;
};

export type TestimonialsProp = {
  id: number;
  avatar: string;
  name: string;
  message: string;
  title: string;
  stars: number;
};

export type DownloadButtonProp = {
  store: string;
  icon: ReactElement;
  bgColor: string;
  textColor: string;
};

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum ButtonVariant {
  Link = 'link',
  Button = 'button'
}

export enum HeadingSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum BackgroundColor {
  Black = 'bg-black',
  White = 'bg-white'
}

export enum TextColor {
  Black = 'text-black',
  White = 'text-white'
}
