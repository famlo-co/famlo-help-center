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
    {title: 'Book an activity for your children', to: '/docs/families/registering'},
    {title: 'What is free, and what you pay for', to: '/docs/families/whats-free-and-whats-paid'},
    {title: 'Cancel a booking and get a refund', to: '/docs/how-to/cancel-refund'},
    {title: 'Add your children and their details', to: '/docs/families/your-family'},
    {title: 'Sync Famlo dates to your own calendar', to: '/docs/how-to/export-calendar'},
  ],
  organization: [
    {title: 'List your organization', to: '/docs/organizations/listing-your-organization'},
    {title: 'Set up payouts', to: '/docs/organizations/getting-paid'},
    {title: 'Create and schedule activities', to: '/docs/organizations/activities'},
    {title: 'Invite your team and set roles', to: '/docs/organizations/members-and-roles'},
    {title: 'Charge membership dues', to: '/docs/organizations/membership-dues'},
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
    description: 'Find local activities, book a spot for each child, pay, and keep track of it all.',
    icon: 'family',
    to: '/docs/category/for-families',
    linkLabel: 'All family guides',
    links: [
      {title: 'Getting started', to: '/docs/families/getting-started'},
      {title: 'Finding activities', to: '/docs/families/finding-activities'},
      {title: 'Booking', to: '/docs/families/registering'},
      {title: 'Payments and refunds', to: '/docs/families/payments-and-refunds'},
      {title: 'Your family', to: '/docs/families/your-family'},
      {title: 'Messages', to: '/docs/families/messages'},
    ],
  },
  {
    audience: 'organization',
    title: 'For organizations',
    description: 'List your co-op, class or venue, take bookings and dues, run your team, and get paid.',
    icon: 'building',
    to: '/docs/category/for-organizations',
    linkLabel: 'All organization guides',
    links: [
      {title: 'Set up your organization', to: '/docs/organizations/listing-your-organization'},
      {title: 'Activities', to: '/docs/organizations/activities'},
      {title: 'Memberships', to: '/docs/organizations/membership-dues'},
      {title: 'Getting paid', to: '/docs/organizations/getting-paid'},
      {title: 'Team and roles', to: '/docs/organizations/members-and-roles'},
      {title: 'Insights', to: '/docs/organizations/insights'},
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
    description: 'Search, the map, saved items and alerts for new activities near you.',
    icon: 'search',
    to: '/docs/families/finding-activities',
  },
  {
    title: 'Booking and your calendar',
    description: 'Book for each child, join a waitlist, and sync dates to your own calendar.',
    icon: 'calendar',
    to: '/docs/families/registering',
  },
  {
    title: 'Money',
    description: 'What families pay, refunds, payouts and scholarships.',
    icon: 'card',
    to: '/docs/families/payments-and-refunds',
  },
  {
    title: 'Messages',
    description: 'Talk with organizations and other families, and control what reaches you.',
    icon: 'message',
    to: '/docs/families/messages',
  },
  {
    title: 'Running activities',
    description: 'Create activities, set tickets and prices, and take attendance.',
    icon: 'book',
    to: '/docs/organizations/activities',
  },
  {
    title: 'Your team',
    description: "Invite staff, set roles, and hand over leadership when it's time.",
    icon: 'team',
    to: '/docs/organizations/members-and-roles',
  },
  {
    title: 'Insights',
    description: 'See who is booking, what is filling up, and where families come from.',
    icon: 'chart',
    to: '/docs/organizations/insights',
  },
  {
    title: 'Account and sign-in',
    description: 'Signing in, notifications, getting help, and closing an account.',
    icon: 'lock',
    to: '/docs/account/login-and-security',
  },
];

export type Announcement = {
  date: string;
  audience: string;
  title: string;
  summary: string;
  to: string;
};

/** Newest first. The first one is drawn as the featured card. */
export const announcements: Announcement[] = [
  {
    date: 'August 2026',
    audience: 'Everyone',
    title: 'Messages',
    summary: 'Message organizations and other families from one inbox.',
    to: '/changelog/messages',
  },
];
