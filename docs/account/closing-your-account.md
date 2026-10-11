---
sidebar_position: 6
title: Download your data or delete your account
description: Download a copy of your family's Famlo data, or delete your account yourself from Privacy & data, with 30 days to change your mind.
keywords: [delete famlo account, close famlo account, download my data famlo, famlo data export, cancel account deletion, famlo privacy and data, remove my family's data]
audience: everyone
---

# Download your data or delete your account

You can download a copy of your data or delete your Famlo account yourself, from **Account settings** › **Privacy & data**. A deletion signs you out right away and erases your family's records 30 days later. Until then you can cancel it with a link Famlo emails you. If you created an organization on Famlo, you may need to deal with it first (see [If you run an organization](#if-you-run-an-organization)).

## Open Privacy & data

Both tools sit behind an extra check, because they can download your children's health details or delete your account.

1. Open the avatar menu and choose **Account settings**. On a phone, **Account settings** opens as a list.
2. Select **Privacy & data** (1). It is always the last item in the list.
3. Under **Confirm it's you**, type **Your password** and select **Continue**. If you'd rather not use your password, select **Email me a code**, then enter the **Six-digit code** and select **Continue**.

If you signed up with Google, Facebook, Apple or a passkey and never set a password, the page says "You signed up without a password, so we'll email you a six-digit code instead." Use **Email me a code**.

The check lasts 15 minutes. If you signed in less than 15 minutes ago, Famlo skips it and shows the page straight away.

<Screenshot src="/img/screens/account/closing-your-account-privacy-data.webp" alt="Privacy & data in Account settings, with Privacy & data in the sidebar, the Download my data button and the Delete my account button highlighted" url="famlo.co/account/privacy" width={1280} height={900} />

## Download your data

On **Privacy & data**, select **Download my data** (2). Your browser saves a file named like `famlo-data-2026-10-10.json` straight away. Nothing is emailed.

The file holds:

- your profile and notification settings
- your family and each child on it, including allergies, medical notes, medications, dietary needs, emergency contacts and authorized pickups
- the organizations you belong to, your bookings and your memberships
- your saved cards (brand, last four digits and expiry only) and any account credit
- the messages you've sent and your support tickets
- your sign-in history

Card numbers aren't included, because Famlo never receives them.

:::warning
The file contains your children's allergies, medical notes and emergency contacts in plain text. Keep it somewhere you'd keep those, and don't send it to anyone who shouldn't see them.
:::

It's a JSON file, made for moving your data to another service. You can open it in any text editor.

## Before you delete

Deleting your account can't be undone after 30 days, and some things go the moment you confirm. Take care of these first:

- **Download your data** if you want a copy. You can't sign in once the deletion starts.
- **Use your account credit.** Unused credit is forfeited and can't be refunded. The confirmation screen shows the exact amount.
- **Cancel bookings you won't use.** Deleting your account doesn't cancel single bookings. They stay with the organization. See [Cancelling and refunds](/docs/families/payments-and-refunds).
- **Leave or close an organization you run.** See [If you run an organization](#if-you-run-an-organization).

You don't need to cancel paid memberships or program enrollments yourself. Deleting your account cancels them for you, with the unused part refunded.

## Delete your account

1. Open **Privacy & data** and confirm it's you (see above).
2. Under **Delete your account**, select **Delete my account** (3).
3. Read the summary. It's written for your account and lists what happens right away, what is erased and on which date, and what is kept.
4. In **Type DELETE to confirm** (1), type `DELETE`.
5. Select **Delete my account** (2), then confirm.

<Screenshot src="/img/screens/account/closing-your-account-delete-confirm.webp" alt="The bottom of the Delete your account screen, with the Type DELETE to confirm box and the Delete my account button highlighted, beside Keep my account" url="famlo.co/account/privacy/delete" width={736} height={288} />

Changed your mind before step 5? Select **Keep my account**. Deleting your account is free, and Famlo won't treat you differently for asking.

## What happens right away

As soon as you confirm:

- You're signed out on every device. Your password, passkeys and connected Google, Facebook or Apple logins are removed. This can't be undone, even if you cancel the deletion later.
- Your calendar subscription link stops working.
- Your profile photo is removed.
- Your paid memberships are canceled, with the unused part of the term refunded.
- Your program enrollments are canceled, with the unused part refunded where you were charged.
- Your saved cards are removed.
- Any organization you created that has no other members and no upcoming paid bookings is scheduled for deletion on the same date as your account.

Famlo then emails you a confirmation with a link to cancel.

## What is erased after 30 days

On the date shown on the confirmation screen, Famlo erases:

- each child's name, birthdate, allergies, medical notes, medications, dietary needs, emergency contacts and the list of people authorized to collect them
- your name, email address, phone number and location
- your membership of every organization
- your saved activities, follows, location alerts and notifications
- photos you sent in messages
- any unused account credit, which is forfeited

If your child is still booked into an activity that hasn't happened yet, the erasure waits until after it. Organizers read their rosters live, and the adult in charge needs your child's allergies and emergency contacts on the day.

Copies inside Famlo's encrypted backups aren't edited. They expire on their own, the last of them 12 months later.

## What is kept

Some records also belong to other people, so they stay, without your name where possible:

| What | What happens to it |
|---|---|
| Bookings and what you paid | Stay with the organizations you booked with, for their financial, attendance and tax records. Your name comes off the booking. Receipts an organization already sent you still name you. |
| Messages you sent | Stay in their conversations, shown as coming from a deleted account. They're the other person's record too. |
| Consent records, and records that an organizer opened a child's safety details | Kept as they are. Nobody can edit or delete them. |
| Support tickets you opened | Kept as a shared record with Famlo's team. |
| A bounced email address | If email to you ever bounced, Famlo keeps a note not to email that address again. |

Stripe, which processes card payments, keeps its own records of completed payments. The full details are in Famlo's [Data Deletion policy](https://famlo.co/legal/data-deletion).

## Cancel a deletion

You have until the date in your email to change your mind.

1. Open the email **"Your Famlo account is scheduled for deletion"**.
2. Select **Cancel deletion**. You'll see "Your account deletion has been cancelled. Sign in with an emailed code to get back in."
3. Sign in with an emailed code. See [Signing in and creating your account](/docs/account/signing-in).
4. Set up again whatever you want back: a password in [Login and security](/docs/account/login-and-security), passkeys, connected logins, your profile photo, saved cards and memberships.

Cancelling restores your account, your family's records, your bookings and your data. It can't bring back your password, passkeys or connected logins, your profile photo, a membership that was canceled, or a card that was removed. To get a canceled membership back, join again.

## The emails you'll get

These emails are always sent. You can't turn them off.

| Email | When | What it says |
|---|---|---|
| **Your Famlo account is scheduled for deletion** | Right after you confirm | What's already done, what will be erased on the date, and a **Cancel deletion** button |
| **Your Famlo account deletion was cancelled** | If you cancel | Nothing was erased, and how to sign back in |
| **Your Famlo account has been deleted** | On the deletion date | What was erased and what was kept. It's the last email Famlo sends to that address. |

:::caution
If you get a "scheduled for deletion" email and you didn't ask for it, select **Cancel deletion** straight away, then reply to that email to tell Famlo's support team.
:::

## If you run an organization

Your Famlo account and an organization's listing are closed separately.

If you created or claimed an organization, Famlo won't delete your account while:

- the organization has other members ("You own Sunnyside Learning Co., which has 9 other members. Transfer ownership or delete the organization first."), or
- it has paid bookings for activities that haven't happened yet ("Those families are expecting them.").

The **Delete your account** screen then says "This account can't be deleted yet" and lists each reason, with a link to that organization's settings (for example **Open Sunnyside Learning Co. settings**).

<Screenshot src="/img/screens/account/closing-your-account-delete-blocked.webp" alt="The Delete your account screen saying This account can't be deleted yet, with an Other people depend on this account box listing each organization and an Open settings link for each" url="famlo.co/account/privacy/delete" width={1280} height={900} />

To move on, either close the organization from its **Danger zone** (see [Closing your listing](/docs/organizations/closing-your-listing)) or hand it over. There isn't a button to transfer the person who created or claimed a listing yet. For now, to hand over payouts and closing the listing, open a ticket at famlo.co/support and the Famlo team moves it.

An organization that is already scheduled for deletion doesn't block you. One you created with no other members and no upcoming paid bookings is scheduled for deletion along with your account.

If you're on an organization's staff but didn't create it, nothing blocks you. Your membership and staff place end with your account.

## Troubleshooting

**I can't sign in, but I want my account deleted.**
First try the other ways in on [How Do I Recover My Account?](/docs/how-to/recover-account). If none work, reply to any email Famlo has sent you and ask for your account to be deleted. Your reply opens a support ticket.

**"This account is scheduled for deletion, so it can't be signed in to."**
That's expected during the 30 days. Use the **Cancel deletion** link in your email, then sign in with an emailed code.

**"That link has expired or the account has already been deleted."**
The cancel link stops working on the deletion date, or once it has been used. If you still need help, reply to the "scheduled for deletion" email to reach support.

**"This account can't be deleted from here."**
Some accounts can't be deleted from settings. Open a ticket from **Account settings** › **Support** and ask. See [Getting help](/docs/account/support).

**I only want to remove one child, not my whole account.**
Remove the child from your family instead. Their health details are erased 30 days after removal. See [Your family and children](/docs/families/your-family).

**I only want fewer emails.**
You don't need to delete anything. Turn them off in [Notifications](/docs/account/notifications).

## What's next

- [Closing your listing](/docs/organizations/closing-your-listing)
- [Your memberships](/docs/families/memberships)
- [Cancelling and refunds](/docs/families/payments-and-refunds)
- [Getting help](/docs/account/support)
