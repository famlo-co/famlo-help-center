---
sidebar_position: 3
title: Your mailing list
description: See who asked your organization for email updates at checkout or on your website, what each status means, and how to export the list to your email tool.
keywords: [organization mailing list, email me updates, newsletter signup, export mailing list, mailing list csv, unsubscribe from organization emails, co-op newsletter list]
audience: organizations
who: Owners and co-leaders
---

# Your mailing list

Your mailing list is the families who asked your organization to email them. They join by ticking a box when they register for a class, or by signing up on your website. You send the emails yourself, from your own email tool: Famlo keeps the list and never emails these people for you.

The list is free on every Famlo plan. To see it, you need School settings set to **Edit settings**, which owners and co-leaders have.

## Open your mailing list

1. In your console, select **People** (1).
2. Select the **Mailing list** tab (2).
3. To download the list, select **Export CSV** (3).

<Screenshot src="/img/screens/organizations/mailing-list-page.webp" alt="The People place with the Mailing list tab open, showing 5 people on the list with Website, Checkout, Waiting to confirm, Undeliverable and Unsubscribed pills, and the Export CSV button highlighted" url="famlo.co/co-op/sunnyside-learning/mailing-list" width={1280} height={1320} />

The heading tells you how many people are on your list. Under it, a short note counts anyone whose address is undeliverable, anyone still waiting to confirm, and anyone who unsubscribed.

Each person shows their name (when their Famlo account has one) and email, then:

- **Joined** and a date, for people on your list.
- **Signed up** and a date, for website signups that haven't confirmed yet.
- **Unsubscribed** and a date, for people who left.
- "· at" and a class name, when they joined while registering for that class.

## Who can build a list

There are two ways onto your list, and each has its own requirement.

| Way in | Who gets it |
|---|---|
| The **Email me updates** box at checkout | Organizations that are verified and that you created or claimed on Famlo |
| The signup form on your website | Organizations with their own website on their own domain (Website plan) |

Your organization is Verified once Stripe setup is finished or while a paid Famlo plan is active.

You see the **Mailing list** tab as soon as either way is open to you. An organization with a website but not yet verified collects signups from its website only, with no box at checkout.

To finish Stripe setup, see [Getting paid](/docs/organizations/getting-paid). For plans, see [Famlo plans](/docs/organizations/getting-started/famlo-plans).

## How families join

**At checkout.** When a family registers for one of your classes, checkout shows an optional box, unticked to start with:

> Email me updates from Sunnyside Learning Co. They send these themselves, not Famlo. Optional, and you can unsubscribe from any of them.

If they tick it, they're on your list straight away, because they're signed in to Famlo and their email address is already confirmed. They show the **Checkout** pill.

**On your website.** Every page of your website has an email signup: in the footer, or in an **Email signup** section where you've added one to the page. A visitor types their **Email** and selects **Subscribe**.

<Screenshot src="/img/screens/organizations/mailing-list-website-signup.webp" alt="An Email signup section on an organization's website, with the heading Hear when new classes open, an Email field, a Subscribe button and the line Emails from Sunnyside Learning Co. Unsubscribe any time." url="www.sunnysidelearning.example" width={1272} height={287} dark={false} />

Website signups are confirmed by email before they count:

1. Famlo sends the visitor an email titled "Confirm you want emails from" and your organization's name.
2. They select **Yes, email me** in the email, then **Yes, email me** again on your website.
3. Your website shows "You're on the list."

Until they confirm, they show **Waiting to confirm** and aren't counted, exported or sent to a connected tool. The confirmation link works for 30 days. Website signups show the **Website** pill.

To add or move the signup section, see [Sections you can add](/docs/organizations/website/sections).

## What the pills mean

| Pill | What it means |
|---|---|
| **Checkout** | They ticked the box when registering for a class. |
| **Website** | They signed up on your website. |
| **Waiting to confirm** | A website signup who hasn't clicked the confirmation email yet. Not on your list until they do. |
| **Undeliverable** | Email to this address has bounced or been reported as spam. They're still counted, and the export marks them. |
| **Unsubscribed** | They left your list. They stay on this page but are never exported. |

A person with no pill other than **Checkout** or **Website** is on your list and can be emailed.

## Export your list

Select **Export CSV** at the top of the **Mailing list** page. The button appears once at least one person has joined. The file is named with your organization's short name and the date, like `sunnyside-learning-mailing-list-2026-10-10.csv`.

The export holds only people who are on your list now. People waiting to confirm and people who unsubscribed are left out.

| Column | What's in it |
|---|---|
| `email` | Their email address |
| `first_name` | First name, when their Famlo account has one |
| `last_name` | Last name, when their Famlo account has one |
| `status` | `confirmed` |
| `joined_on` | The date they joined, as year-month-day |
| `unsubscribed_on` | Empty for everyone in the export |
| `deliverable` | `yes`, or `no — bounced or complained` for undeliverable addresses |
| `source` | `checkout` or `website` |

Most email tools can import this file. You can also connect Mailchimp, Wix, MailerLite, Kit or a webhook so the list stays in sync without exporting: select **Connect a tool** on the **Mailing list** page, or see [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations).

:::tip
The export contains families' email addresses. Keep the file private and delete old copies once you've imported them.
:::

## You can't add or remove people

The list is read-only. There's no way to add someone by hand or take someone off. People join themselves, and leaving is their choice.

If someone asks you to stop emailing them, stop in your own email tool. If they joined at checkout, point them to the unsubscribe steps below so they leave your list on Famlo too.

## How people unsubscribe

A family who joined at checkout can leave your list from their Famlo account:

1. They open **Account settings**, then **Notifications**.
2. Under **Organization mailing lists**, they select **Unsubscribe** next to your organization.
3. On the page that asks "Leave Sunnyside Learning Co.'s mailing list?", they select **Unsubscribe**.

They see "You're unsubscribed". Leaving your list doesn't change their Famlo account, their membership or anything they've booked. They show **Unsubscribed** on your page from then on.

Your website tells people who sign up that every email has a link to unsubscribe, so include one in every email you send. People who signed up on your website leave through that link. Unsubscribes made in your email tool are handled by that tool.

People can come back: ticking **Email me updates** at a later checkout puts them back on your list, and signing up again on your website sends a new confirmation email.

For what families see, see [Notifications](/docs/account/notifications).

## Famlo doesn't send these emails

Famlo never emails your mailing list for you. You send to it from your own tool.

To have Famlo deliver a message to your families, in their Famlo inbox and by email, use [Announcements](/docs/organizations/communication/announcements). Announcements go to your members and to families registered for your classes, not to your mailing list.

## Troubleshooting

**I don't see the Mailing list tab under People.**
You need School settings set to **Edit settings**, and your organization needs one of the two ways in: verified and created or claimed by you, or its own website on its own domain. See [Who can build a list](#who-can-build-a-list).

**Families say there was no Email me updates box at checkout.**
The box only shows for verified organizations. If your organization isn't verified yet, finish Stripe setup in [Getting paid](/docs/organizations/getting-paid).

**There's no Export CSV button.**
It appears once at least one person has joined. People waiting to confirm don't count yet.

**Someone signed up on our website but still shows Waiting to confirm.**
They haven't selected **Yes, email me** in the confirmation email. Ask them to check their spam folder. If the email is lost or more than 30 days old, they can sign up again on your website for a new one. Signing up again within 10 minutes of the last email doesn't send another.

**An address shows Undeliverable.**
Email to it has bounced or been reported as spam. Ask the family for a current address. They can sign up again with the new one.

## What's next

- [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations)
- [Announcements](/docs/organizations/communication/announcements)
- [Export your data (CSV)](/docs/organizations/settings/exports)
- [Sections you can add](/docs/organizations/website/sections)
