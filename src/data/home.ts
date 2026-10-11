import type {IconName} from '@site/src/components/Icon';

/**
 * Everything the homepage links to, in one place, so a renamed or moved guide
 * is a one-line change here rather than a hunt through JSX. Every `to` is a
 * site path, so a stale one fails the build (onBrokenLinks: 'throw').
 */

export type Guide = {title: string; to: string};

export type Audience = 'family' | 'organization';

export const popular: Record<Audience, Guide[]> = {
  family: [
    {title: 'Book an activity', to: '/docs/families/registering'},
    {title: 'What families pay', to: '/docs/families/whats-free-and-whats-paid'},
    {title: 'Cancel a booking or get a refund', to: '/docs/how-to/cancel-refund'},
    {title: 'Make a homeschool transcript', to: '/docs/how-to/homeschool-transcript'},
    {title: 'Sync Famlo to your calendar', to: '/docs/how-to/export-calendar'},
  ],
  organization: [
    {title: 'Create your listing', to: '/docs/organizations/listing-your-organization'},
    {title: 'Set up getting paid', to: '/docs/organizations/getting-paid'},
    {title: 'Create a class', to: '/docs/organizations/activities'},
    {title: 'The booking fee', to: '/docs/organizations/money/booking-fee'},
    {title: 'Build your own website', to: '/docs/organizations/website/overview'},
  ],
};

export type AudienceCard = {
  audience: Audience;
  title: string;
  description: string;
  icon: IconName;
  to: string;
  linkLabel: string;
  links: Guide[];
};

export const audienceCards: AudienceCard[] = [
  {
    audience: 'family',
    title: 'For families',
    description: "Find local activities, book for each child, pay, and keep your children's school records.",
    icon: 'family',
    to: '/docs/category/for-families',
    linkLabel: 'All family guides',
    links: [
      {title: 'Getting started', to: '/docs/families/getting-started'},
      {title: 'Finding activities', to: '/docs/families/finding-activities'},
      {title: 'Booking', to: '/docs/families/registering'},
      {title: 'Paying and refunds', to: '/docs/category/families-money'},
      {title: 'School records', to: '/docs/families/school-records/school-record'},
      {title: 'Messages', to: '/docs/families/messages'},
    ],
  },
  {
    audience: 'organization',
    title: 'For organizations',
    description: 'List your co-op, class or venue, take bookings and dues, run your team, get paid, and build your own website.',
    icon: 'building',
    to: '/docs/category/for-organizations',
    linkLabel: 'All organization guides',
    links: [
      {title: 'Getting started', to: '/docs/category/organizations-getting-started'},
      {title: 'Classes', to: '/docs/organizations/activities'},
      {title: 'Team and access', to: '/docs/organizations/members-and-roles'},
      {title: 'Money', to: '/docs/category/organizations-money'},
      {title: 'Your website', to: '/docs/organizations/website/overview'},
      {title: 'Messages', to: '/docs/organizations/communication/messages-inbox'},
    ],
  },
];

export type Topic = {
  title: string;
  description: string;
  icon: IconName;
  to: string;
  isNew?: boolean;
};

export const topics: Topic[] = [
  {
    title: 'Finding activities',
    description: 'Search, the map, saved activities and alerts for new ones near you.',
    icon: 'search',
    to: '/docs/families/finding-activities',
  },
  {
    title: 'Booking and your calendar',
    description: 'Book for each child, the ways to join a class, and syncing dates to your calendar.',
    icon: 'calendar',
    to: '/docs/category/families-booking',
  },
  {
    title: 'Paying and refunds',
    description: 'What families pay, paying over time, memberships, refunds and scholarships.',
    icon: 'card',
    to: '/docs/category/families-money',
  },
  {
    title: 'School records',
    description: "A school record for each child, logging home learning, and transcripts.",
    icon: 'book',
    to: '/docs/category/school-records',
    isNew: true,
  },
  {
    title: 'Messages',
    description: 'Talk with organizations, and control what reaches you.',
    icon: 'message',
    to: '/docs/families/messages',
  },
  {
    title: 'Classes and schedules',
    description: 'Create a class, set dates, prices and sections, and decide how families join.',
    icon: 'calendar',
    to: '/docs/category/organizations-classes',
  },
  {
    title: 'Your team',
    description: 'Add staff, choose what each person can do, and see your families.',
    icon: 'team',
    to: '/docs/organizations/members-and-roles',
  },
  {
    title: 'Getting paid',
    description: 'Payouts, the booking fee, dues, payment requests and refunds.',
    icon: 'card',
    to: '/docs/organizations/getting-paid',
  },
  {
    title: 'Your own website',
    description: 'Build your site, edit pages, use your own domain, and add members-only pages.',
    icon: 'globe',
    to: '/docs/organizations/website/overview',
    isNew: true,
  },
  {
    title: 'Account and sign-in',
    description: 'Signing in, passkeys, notifications, getting help, and your data.',
    icon: 'lock',
    to: '/docs/account/signing-in',
  },
];

export type Announcement = {
  date: string;
  audience: string;
  title: string;
  summary: string;
  to: string;
};

/**
 * Newest first. The first is drawn as the featured card and only three show.
 * Add a line here when a post goes into blog/; titles match the posts.
 */
export const announcements: Announcement[] = [
  {
    date: 'October 2026',
    audience: 'Everyone',
    title: 'A booking fee, so organizers receive the full price they set',
    summary: 'Paid bookings include a booking fee, shown inside every price.',
    to: '/changelog/booking-fee',
  },
  {
    date: 'October 2026',
    audience: 'Organizations',
    title: 'Your own website, on your own domain',
    summary: 'Build a website in Famlo, on a web address you own, where families book and pay.',
    to: '/changelog/your-own-website',
  },
  {
    date: 'October 2026',
    audience: 'Everyone',
    title: 'Drop-ins, packs, payment plans, programs and sections',
    summary: 'One class can be booked by the term, by the date, with a pack, or in monthly payments.',
    to: '/changelog/ways-to-join',
  },
  {
    date: 'October 2026',
    audience: 'Everyone',
    title: 'Services, appointments, payment requests and a store',
    summary: 'One-on-one services, payment requests, and a store for downloads and videos.',
    to: '/changelog/services-and-store',
  },
  {
    date: 'September 2026',
    audience: 'Organizations',
    title: 'The console, organized around your day',
    summary: 'The console opens on Today, with everything else in a short list of places.',
    to: '/changelog/console',
  },
  {
    date: 'September 2026',
    audience: 'Families',
    title: 'A school record for every child, free',
    summary: 'A school record that fills itself in from the classes you book.',
    to: '/changelog/school-records',
  },
  {
    date: 'August 2026',
    audience: 'Everyone',
    title: 'Messages',
    summary: 'Message the organizations your family is part of from one inbox.',
    to: '/changelog/messages',
  },
];
