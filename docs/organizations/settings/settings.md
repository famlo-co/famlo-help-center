---
slug: /organizations/settings
sidebar_position: 2
title: School settings
description: Find your way around School settings, who sees each section, and set visibility, joining, join rules and screening questions.
keywords: [school settings, organization settings, visibility, join policy, screening questions, join rules, unpublish listing, private group]
audience: organizations
---

# School settings

**School settings** holds the choices you make once for your whole organization: how families find you and join, your default registration form and refund terms, how you get paid, your Famlo plan, and your integrations. You see only the sections your access lets you open, so two people on the same team can see different lists.

## Find School settings

1. In your console, select **School settings** (1) at the foot of the left rail. On a phone, tap **More**, then **School settings**.
2. Pick a section from the list (2). On a computer, the section opens beside the list.

<Screenshot src="/img/screens/organizations/settings-joining.webp" alt="School settings with the section list on the left and the Joining section open on the right" url="famlo.co/co-op/sunnyside-learning/settings/joining" width={1280} height={800} />

School settings has two panes: the section list on the left and the section you're in on the right. On a phone they are two screens. You see the list first, and each section has a **School settings** link at the top to take you back.

Each section is a list of rows. A row shows its current value with **Edit** or **Add** beside it. Open a row, make your change and select **Save**. The row saves on its own, and nothing else on the page changes. There is no page-wide save button.

## The sections and who sees them

The list is grouped under **School**, **Money** and **Tools**, with **Danger zone** last. A section you can't open isn't shown, and a group with nothing in it for you disappears. Someone with only money access, for example, sees just the Money group.

| Section | What it's for | Who sees it |
|---|---|---|
| **Identity** | Your logo, photos, name, short link, type, about, location and contact details. See [Your organization profile](/docs/organizations/settings/your-organization-profile). | School settings set to **Edit settings** (Owners, Co-leaders) |
| **Joining** | Visibility, how people join, join rules and screening questions. Covered below. | School settings set to **Edit settings** |
| **Registration form** | "The questions and agreements every new class starts with, so you set them once." Your legal name, your **Waivers & agreements** library, the signing settings (including **Ask families to sign agreements**), how long signed copies are kept, and your default registration questions. See [Waivers and signed agreements](/docs/organizations/classes/agreements) and [Registration questions and waivers](/docs/organizations/classes/questions-and-waivers). | School settings set to **Edit settings** |
| **Semesters & co-op day** ↗ | Opens **Schedule**. See [Schedule, semesters and breaks](/docs/organizations/running/schedule-and-semesters). | People who run all classes, or who edit School settings |
| **Staff roles** ↗ | Opens **People** › **Staff & teachers**. See [What staff can do](/docs/organizations/members-and-roles). | People who can see the People place |
| **Getting paid** | Connecting Stripe, payment methods, and who pays the booking fee. See [Set up getting paid with Stripe](/docs/organizations/getting-paid). | Only the person who created or claimed the listing |
| **Dues & pricing** | "What members pay you, and how often." See [Membership dues](/docs/organizations/membership-dues). | Money set to **Take payments & refund** (Owners, Bookkeepers) |
| **If a family cancels** | Your default refund terms for paid classes. See [Refund terms](/docs/organizations/classes/refund-terms). | Money set to **Take payments & refund** |
| **Scholarship billing** | Who Step Up and other programs pay, and which programs you accept. See [Accept Step Up and ESA payments](/docs/organizations/money/step-up-and-esa). | School settings set to **Edit settings**, on the **Scholarship** or **Website** plan |
| **Plan & billing** | Your Famlo plan and its invoices. See [Famlo plans](/docs/organizations/getting-started/famlo-plans). | School settings set to **Edit settings** to buy, switch or cancel (Owners, Co-leaders). Anyone with **Money** access can see the current plan. |
| **Integrations** | Keep your mailing list in sync with Mailchimp, Wix, MailerLite, Kit or a webhook. See [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations). | School settings set to **Edit settings** |
| **Danger zone** | "Hand this organization over to someone else, or close it for good." See [How do I transfer group leadership?](/docs/how-to/transfer-leadership) and [Closing your listing](/docs/organizations/closing-your-listing). | Only the person who created or claimed the listing |

The ↗ arrow means the link takes you to another place in the console.

**Getting paid** and **Danger zone** belong to the person who created or claimed the listing. Other people with **Owner** ticked don't see them. That person can hand both over to an Owner or Co-leader from **Danger zone** › **Hand it over**. To change access for someone on your team, see [What staff can do](/docs/organizations/members-and-roles).

## Status dots

A colored dot beside a section means it needs something. Point at the dot to see why. Red means something has stopped working. Amber means something is unfinished.

| Section | Dot | What it means |
|---|---|---|
| **Identity** | Amber | Your organization has no logo, no short link, or neither ("Add a logo and a short link"). |
| **Getting paid** | Red | "Stripe is disconnected", or "Stripe onboarding isn't finished". |
| **Scholarship billing** | Amber | "Add who programs should pay", or "Choose the programs you accept". |
| **Integrations** | Red | "An integration has stopped working". |
| **Integrations** | Amber | A connected tool is waiting for you to choose where families go, for example "Pick a Kit tag" or "Pick a MailerLite group". |

You get no dot if you never connected Stripe. Organizations that run only free classes, or take only scholarship money, don't need Stripe.

## Joining: who can find you, and how they join

**Joining** has four rows: **Visibility**, **How people join**, **Join rules** and **Screening questions**. Each one saves separately.

### Visibility

Open **Visibility** and choose one option.

| Option | What families see (on screen) |
|---|---|
| **Open** | "Listed publicly. Anyone can see everything." |
| **Closed** | "Listed publicly, but events and the member roster are for members only." |
| **Private** | "Hidden from search and directories — reachable only by a direct link you share." |

You can change this whenever you like. Dues need **Closed** or **Private**. See [Membership dues](/docs/organizations/membership-dues).

<Screenshot src="/img/screens/organizations/settings-visibility.webp" alt="The Visibility row open, showing the Open, Closed and Private options, the Published checkbox and Save" url="famlo.co/co-op/sunnyside-learning/settings/joining/visibility/edit" width={728} height={831} />

### Published

The same row has a **Published (page is public)** checkbox. As its hint says, unticking it hides your page "from the public and from search." Your members and staff can still open it, and everyone else gets a "not found" page. Members who open the page see a note at the top: "Only this organization's members and staff can see this page. It is hidden from everyone else and from search." While it's unticked, the collapsed **Visibility** row adds "unpublished — only members and staff can see the page".

To stay out of search but still let anyone with your link open the page, choose **Private** instead and leave **Published (page is public)** ticked.

### How people join

Open **How people join** and pick an option from **How do people join?**:

- **Anyone can join instantly**
- **They request to join and you review each one**
- **Invite only (they join from a link you send)**

Visibility and joining are separate choices, so you can mix them. For example, **Open** with **They request to join and you review each one** lists you publicly but still lets you review every family.

:::note
"Closed and Private groups always review requests — instant join applies to Open groups only." If you choose instant joining for a Closed or Private group, it is saved as a request to join. If you charge dues, you also review every request before a family's card is charged.
:::

You review join requests and send invitations from **People** › **Requests & invites**. See [People: families, children, join requests and invitations](/docs/organizations/team/people).

### Join rules

Open **Join rules** and write the expectations every member agrees to in **Join rules (optional)**, such as a code of conduct or a commitment to volunteer. Tick **Require members to accept these rules before joining** to make accepting them part of joining. The row then says "Members must accept these before joining."

### Screening questions

Open **Screening questions** to add up to 3 questions that families answer when they ask to join. Each question is free text, up to 200 characters, with a **Required** box. Leave a question blank to remove it.

Families answer these questions only when they request to join, so they matter only when you review requests.

## Registration form: waivers, agreements and questions

**Registration form** sets what families sign and answer when they register. From top to bottom:

- **Legal name**: "The exact name on your business registration." Your agreements name it as the party families agree with.
- **Waivers & agreements**: your library. Write each waiver or agreement once with **New agreement**, then choose which classes ask for it. The **New classes get it** switch adds one to every new class.
- **Signing settings**: **Ask families to sign agreements** (on unless you turn it off), **Let people check a signed copy online** at verify.famlo.co, and **How long we keep signed copies**.
- **Signed records: exports and holds**: export signed agreements and see who has exported them.
- **Registration questions**, then **Classes you already have**, to copy your default questions onto upcoming classes.

Classes don't have their own on/off box for agreements: a class asks for whatever agreements it picks from the library, and **Ask families to sign agreements** turns signing on or off for your whole organization. See [Waivers and signed agreements](/docs/organizations/classes/agreements) and [Registration questions and waivers](/docs/organizations/classes/questions-and-waivers).

## The Contact "Website" field

**Identity** › **Contact** has a **Website** field. It is just a link to a site you already have, shown on your Famlo page. It is not the **Website** plan. To build a website with Famlo, see [Your Famlo website](/docs/organizations/website/overview).

## Troubleshooting

**I can't see School settings, or a section I expected.** Each section depends on your access. Ask whoever manages your team's access to check yours in **People** › **Staff & teachers**. **Getting paid** and **Danger zone** appear only for the person who created or claimed the listing, even if other people have **Owner** ticked.

**Families who aren't members get "not found" on our page.** **Published (page is public)** is unticked, so only your members and staff can open the page. Open **Joining** › **Visibility**, tick it and select **Save**. If you want to stay out of search, choose **Private** as well.

**Families still join instantly, or still have to wait for approval.** Check **How people join**. If your organization is **Closed** or **Private**, or charges dues, every request is reviewed, whatever you choose.

**I don't see Scholarship billing.** It appears on the **Scholarship** and **Website** plans. See [Famlo plans](/docs/organizations/getting-started/famlo-plans).

**I changed a row and nothing else updated.** Each row saves on its own. Select **Save** in every row you change.

## What's next

- [Your organization profile](/docs/organizations/settings/your-organization-profile)
- [What staff can do: roles and access](/docs/organizations/members-and-roles)
- [Membership dues](/docs/organizations/membership-dues)
- [Export your data (CSV)](/docs/organizations/settings/exports)
- [Closing your listing](/docs/organizations/closing-your-listing)
