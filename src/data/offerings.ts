import type { OfferingProp } from "../types";


export const offerings: OfferingProp[] = [
  {
    id: 1,
    title: 'Scan  & Go',
    description:
      'Transform your payment link into a QR code that customers can scan with their phone to  pay.',
    mockup: '/images/scan-and-go.png',
    bgColor: 'bg-red-100'
  },
  {
    id: 2,
    title: 'Easily Send Requests via e-mail or SMS',
    description: '...or copy-paste the link',
    mockup: '/images/email-and-sms.png',
    bgColor: 'bg-blue-100'
  },
  {
    id: 3,
    title: 'Online Billing & Invoicing Payments',
    description: 'Get paid faster with Online Invoicing and Virtual Terminal',
    mockup: '/images/online-billing-and-invoicing.png',
    link: '#',
    bgColor: 'bg-purple-100'
  }
];
