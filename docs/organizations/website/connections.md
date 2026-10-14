---
sidebar_position: 11
title: "Analytics, the cookie banner and your calendar feed"
description: Add Google Analytics or a Meta Pixel to your Famlo website, see the cookie banner families get, and share a calendar feed of your classes.
keywords: [google analytics website, meta pixel, facebook pixel, cookie banner, cookie consent, privacy page, calendar feed, ics feed for classes]
audience: organizations
who: Owners and co-leaders
plan: Website plan
---

# Analytics, the cookie banner and your calendar feed

The **Connections** tab in **Website** links your site to your own Google Analytics and Meta Pixel. It also sets up the cookie banner families see before any tracking starts, and gives you a calendar feed of your classes to share. You need the **Website** plan and **School settings** set to **Edit settings**, which Owners and Co-leaders have.

Newsletter tools such as MailerLite and Kit are set up in a different place. See [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations).

## Add Google Analytics or a Meta Pixel

Both are optional. Add one, both or neither. Until you add an ID, your site loads no tracking and shows no cookie banner.

1. Open **Website**, then **Connections** (1).
2. For Google Analytics, type your ID in **Measurement ID** (2). It starts with G-, like G-ABC123. As the tab says: "Find it in Google Analytics › Admin › Data streams."
3. For a Meta Pixel, type your ID in **Pixel ID** (3). That's "The number in Meta Events Manager › Data sources. Digits only."
4. Select **Save connections** (4).

<Screenshot src="/img/screens/organizations/website-connections-analytics.webp" alt="The Connections tab with the Connections tab as 1, the Measurement ID field as 2, the Pixel ID field as 3 and Save connections in the unsaved changes bar as 4" url="famlo.co/co-op/sunnyside-learning/website/connections" width={1280} height={900} />

Like **Theme** and **Domain**, this tab saves straight to your live site. You don't need to publish anything. After you save, the notice tells you when the change will show, for example "Connections saved. Live on your site within a minute or two."

To stop tracking, clear the field and select **Save connections**.

### Change one setting in Google Analytics

Your site counts each page view itself. To avoid counting a page twice, change one setting in Google Analytics, as the tab says:

1. In Google Analytics, open your web data stream.
2. Open **Enhanced measurement**, then **Page views**.
3. Turn off **Page changes based on browser history events**.

## What families see: the cookie banner

Once you've added an ID, families are asked before anything loads. "Families are asked before any tracking starts. Nothing loads until they press Accept."

The banner is headed **Cookie choices** and uses your site's colors. It reads: "[Your organization] would like to use Google Analytics to see how families find this site. They set cookies. Nothing loads unless you press Accept." It names Google Analytics, Meta Pixel, or both, depending on what you've added. Families choose **Decline** or **Accept**.

<Screenshot src="/img/screens/organizations/website-connections-consent.webp" alt="The Visitor consent card with the Privacy page (optional) list as 1, above a preview of the Cookie choices banner with Decline and Accept" url="famlo.co/co-op/sunnyside-learning/website/connections" width={800} height={542} />

**Visitor consent** on the **Connections** tab shows a preview of the banner under "What families see, in your colors".

- **Nothing loads before Accept.** Google Analytics and the Meta Pixel load only after a family selects **Accept**. If they select **Decline**, nothing loads.
- **Some browsers have already said no.** If a family's browser is set to ask sites not to track them (Do Not Track or Global Privacy Control), they don't see the banner and nothing loads.
- **The choice is remembered in that browser.** After choosing, families see a small **Cookie choices** button in the corner of the page. They can select it at any time to change their mind. Declining after accepting stops the trackers from loading from then on.
- **Spanish pages.** If your site has Spanish pages, families see the banner in Spanish there.

### Where tracking never loads

The banner and the trackers appear only on your public pages: your homepage, your own pages, classes, teachers, contact, services and shop. As the tab says: "Never on members pages, the parent portal or checkout." That means Google and Meta never see what a family does while signed in, booking or paying.

Because only families who select **Accept** are counted, your Google Analytics and Meta numbers will be lower than your real number of visitors.

## Link the banner to a privacy page

You can add a link to a privacy page of your own. It shows on the banner as **Our privacy page**.

1. Write a page about privacy in the on-page editor and publish it. See [Pages, your menu, and who can see each page](/docs/organizations/website/pages-and-menu).
2. Open **Website**, then **Connections**.
3. Under **Visitor consent**, choose the page in **Privacy page (optional)** (1).
4. Select **Save connections**.

The list shows only your published pages that everyone can see. Your homepage isn't in it. If you later unpublish the page or make it members-only, the banner leaves the link out. To remove the link yourself, choose **No link**.

Famlo doesn't write a privacy page for you. What it says about your use of Google Analytics or the Meta Pixel is up to you.

## Share your calendar feed

Your calendar feed lists your upcoming classes in a form that calendar apps can read. Families add it once, and your classes show up in their own Google, Apple or Outlook calendar. As the card says, "Calendar apps refresh it every few hours."

1. Open **Website**, then **Connections**.
2. Under **Calendar feed**, select **Copy address** (1). The address is your domain followed by /calendar.ics, for example `https://www.sunnysidelearning.example/calendar.ics`.
3. Paste the address into a newsletter, an email or a page on your site.

<Screenshot src="/img/screens/organizations/website-connections-calendar.webp" alt="The Calendar feed card with the feed address and Copy address as 1, next to Subscribe" url="famlo.co/co-op/sunnyside-learning/website/connections" width={800} height={292} />

Families add the address in their calendar app as a calendar subscription from a URL. **Subscribe** on the card opens the feed in the calendar app on your own device, so you can check what families will see.

The feed has no on/off switch. It's there as soon as your website has its own domain. Until then, the card says: "Your feed gets an address once your website has its own domain." See [Connect your own domain](/docs/organizations/website/custom-domain).

### What the feed includes

| Included | Left out |
| --- | --- |
| Classes shown as **Famlo + your website** | Draft classes |
| Every meeting in the next 90 days, so a weekly class shows each week | Classes set to **Your website only**, **Link only** or **Members only** |
| Each meeting's title, description and place, with a link to the class on your website | Cancelled meetings |
| Online classes, with the place shown as "Online" | Join links for online classes |

The calendar appears in families' apps as "[Your organization] classes". When you change a class, the feed picks it up and families' apps show the change the next time they refresh.

## Troubleshooting

**It says "Google Analytics needs a Measurement ID like G-ABC123".**
You've typed a different number, such as a property or account number. Copy the Measurement ID from **Admin › Data streams** in Google Analytics. It starts with G-.

**It says "Meta Pixel needs its Pixel ID, 10 to 20 digits".**
Type only the digits of your Pixel ID from Meta Events Manager, with no spaces or letters.

**I don't see the banner on my site.**
Check that you saved an ID. The banner shows only on public pages, never on the **Parent portal**, checkout or members pages. If you've already chosen **Accept** or **Decline** in your browser, you'll see only the small **Cookie choices** button. Your browser may also be set to ask sites not to track you, and then it shows no banner at all.

**Google Analytics shows fewer visits than I expected.**
Only families who select **Accept** are counted. Families who decline, or whose browser asks sites not to track them, aren't counted.

**My privacy page isn't in the list.**
The page must be published and visible to everyone. Your homepage and members-only pages can't be chosen.

**A class is missing from the calendar feed.**
Check that the class is published, set to **Famlo + your website**, and has a meeting in the next 90 days. Calendar apps refresh the feed every few hours, so a new class may take a while to appear.

## What's next

- [Connect your own domain](/docs/organizations/website/custom-domain)
- [Pages, your menu, and who can see each page](/docs/organizations/website/pages-and-menu)
- [How classes show on your site](/docs/organizations/website/classes-on-your-site)
- [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations)
- [Spanish, weather, branded emails and link previews](/docs/organizations/website/extras)
