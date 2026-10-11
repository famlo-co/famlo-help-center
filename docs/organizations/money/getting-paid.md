---
slug: /organizations/getting-paid
sidebar_position: 1
title: Set up getting paid with Stripe
description: Connect your organization's own Stripe account so card payments, dues and refunds go straight to your bank, and turn on Apple Pay, Klarna and more.
keywords: [connect stripe famlo, organization payouts, getting paid, stripe onboarding, reconnect stripe, apple pay klarna affirm, merchant of record]
audience: organizations
who: The person who created or claimed the listing
---

# Set up getting paid with Stripe

Connect your organization's own Stripe account once, and card payments for classes, membership dues and payment requests go straight into your bank. Only the person who created or claimed the listing can do this. Free classes and Step Up or ESA invoicing never need Stripe.

## Before you start

- **Who can do it.** Getting paid is open only to the person who created or claimed your listing. Other people with **Owner** ticked, and Bookkeepers, can't open it. Until Stripe is connected, **Dues & pricing**, for example, tells them "Only the organization's owner can do that."
- **What to have ready.** The page says it plainly: "Have your bank account, your EIN (or SSN) and a photo ID ready. Leave halfway and Famlo keeps your place."
- **Your bank details stay with Stripe.** "Stripe holds your bank details and moves the money. Famlo never sees them."
- **You may not need it at all.** Free classes need no payment setup. Organizations on the Scholarship or Website plan that are paid only through Step Up or an ESA don't need Stripe either. See [Accept Step Up and ESA payments](/docs/organizations/money/step-up-and-esa).

You do need Stripe to take card payments for a class, to collect [membership dues](/docs/organizations/membership-dues), and to send card refunds.

## Connect with Stripe

1. Open **School settings** (1), then **Getting paid** (2). You can also get there from **Money** › **Payouts & fees**.
2. Select **Connect with Stripe** (3).
3. Fill in Stripe's forms: who you are, your business details, and the bank account you want paid into. These questions are Stripe's, answered on Stripe's site.
4. When you finish, Stripe sends you back to **Getting paid**, which shows where you stand.

<Screenshot src="/img/screens/organizations/getting-paid-connected.webp" alt="School settings with Getting paid open, showing the Stripe connection as Connected and Charges and Payouts both Enabled" url="famlo.co/co-op/sunnyside-learning/payout" width={1280} height={800} />

<Screenshot src="/img/screens/organizations/getting-paid-connect.webp" alt="The Get paid by card row, marked Not connected, with the Connect with Stripe button" frame="none" width={735} height={197} />

If you stop partway, or a Stripe link expires because you went back or waited too long, nothing is lost. Return to **Getting paid** and carry on from where you left off.

Your organization gets its own Stripe account, with the full Stripe Dashboard. Your organization is the merchant of record: your name appears on the family's card statement, and disputes are handled in your Stripe account.

## What each state means

The top row of **Getting paid** shows one of five states, with one button to move it on.

| Row title | Label | Button | What it means |
|---|---|---|---|
| **Get paid by card** | Not connected | **Connect with Stripe** | You haven't started. |
| **Finish setting up Stripe** | Onboarding incomplete, or Pending verification | **Continue Stripe onboarding** | "Stripe still needs something from you before it will pay out, and Famlo kept your place." |
| **Stripe is reviewing your details** | In review | **Check again** | "There's nothing else for you to do. This usually takes a few minutes, and the page updates on its own." |
| **Stripe connection** | Connected | **Update payout details** | "You're all set to accept paid bookings." The button reopens Stripe so you can change your bank account or business details. |
| **Stripe connection** | Disconnected, or "Since" a date | **Reconnect with Stripe** and **Contact support** | Famlo can no longer reach your Stripe account, so paid bookings, memberships and refunds can't go through. See [Reconnect Stripe](#reconnect-stripe). |

Once you have a Stripe account, a second row, **Charges and payouts**, shows two of Stripe's checks, each **Enabled** or **Pending**. **Charges** is whether your account can take payments. **Payouts** is whether Stripe can pay into your bank. Families can pay by card only when both read **Enabled**.

When onboarding is unfinished or Stripe is disconnected, a red dot appears beside **Getting paid** in School settings. Not connecting at all never shows one, because many organizations don't need Stripe.

## Reconnect Stripe

If someone removes Famlo from the Connected applications list in your Stripe Dashboard, Famlo loses access to your account. You'll see it in two places:

- **Getting paid** shows "Your Stripe account is disconnected from Famlo".
- **Money** shows a red banner: "Until it is reconnected you cannot take payments, bill memberships, or issue refunds."

To fix it:

1. Open **School settings**, then **Getting paid**. (Or select **Reconnect** on the banner in **Money**.)
2. Select **Reconnect with Stripe**.
3. Sign in to the **same** Stripe account and allow Famlo access again.

Nothing you've already taken payment for is affected. If others on your team see the banner, it tells them "Only the owner can fix it."

Famlo doesn't email you when Stripe is disconnected. The banner is the signal. There's also no button in Famlo to disconnect Stripe; that's done from your own Stripe Dashboard.

## Payment methods families can use

Once your Stripe connection reads **Connected**, the **Credit & debit cards** row turns on, and switches appear for the other ways to pay. Cards (Visa, Mastercard and Amex) are always on.

| Method | What the page says |
|---|---|
| **Apple Pay** | "Costs you nothing extra. Only draws on a domain Apple has verified for your account." |
| **Google Pay** | "Costs you nothing extra." |
| **Link** | "Stripe's saved-card wallet. Returning families pay in one click." |
| **Klarna** | "You are paid in full up front; Klarna carries the credit risk." |
| **Affirm** | "You are paid in full up front; Affirm carries the credit risk." |

Apple Pay, Google Pay and Link turn on straight away: "Families will see it at checkout." Klarna and Affirm may need Stripe to review your account first. Until Stripe approves, the switch shows **In review** and the method doesn't appear at checkout.

Bank debit (ACH) isn't offered. The booking fee is the same whichever method a family uses. See [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee).

## Payouts and timing

Stripe moves the money, not Famlo. How often Stripe pays into your bank, and how long it holds your first payout, are Stripe's settings. You'll find them in your own Stripe Dashboard. Famlo doesn't show a payout schedule.

Card refunds come out of your Stripe balance. Families usually see a refund in 5 to 10 business days. For how refunds work, see [Refunds](/docs/organizations/money/refunds).

Your organization is responsible for any sales tax on what it sells. Famlo doesn't calculate, collect or file it.

## After you connect

**The Verified badge.** Once Stripe setup is finished, your organization shows as **Verified** on Famlo. If it wasn't already verified, Famlo emails you to say so.

**Protect your payouts with a passkey.** If you don't have a passkey yet, **Getting paid** suggests one: "Protect your payouts — add a passkey". A passkey lets you sign in with your fingerprint, face or device PIN, so a stolen password alone can't open your payout settings. Select **Add a passkey**, or **Not now** to hide the suggestion. It's "Optional. Payouts work the same either way." See [Login and security](/docs/account/login-and-security).

## Troubleshooting

**I can't find Getting paid.**
It's shown only to the person who created or claimed the listing. Ask them to set it up. To hand over payouts to someone else, [contact support](/docs/account/support).

**I finished Stripe's forms, but the page says Finish setting up Stripe.**
Stripe needs something more. Select **Continue Stripe onboarding** to go back to what's missing. If the page says **Stripe is reviewing your details** instead, there's nothing to do. Wait, or select **Check again**.

**I see "We couldn't start Stripe onboarding. Please try again."**
Famlo couldn't reach Stripe that time. Try again in a minute. "We couldn't resume Stripe onboarding" means the same when you were returning to Stripe partway through.

**I see "Your organization's details changed since an earlier attempt to connect Stripe."**
Try again tomorrow, as the message says, or [contact support](/docs/account/support).

**I see "Your Stripe account is still there — the link between it and Famlo is what broke."**
Don't start a new account. [Contact support](/docs/account/support), and we'll reconnect the one you already have.

**A message says "Stripe has declined this account."**
Stripe has decided not to work with your account. Only Stripe can change that: "Contact Stripe support to appeal."

**I can't put a price on a class.**
A paid class needs a way to be paid. Finish Stripe so **Charges** and **Payouts** both read **Enabled**, or set up Step Up and ESA payments if you have the Scholarship or Website plan. The price field says what's missing.

**Membership dues won't turn on.**
**Dues & pricing** shows "Connect your payouts to start collecting dues." until Stripe is connected.

## What's next

- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Prices, spots and ways to join](/docs/organizations/tickets-and-pricing)
- [Membership dues](/docs/organizations/membership-dues)
- [Accept Step Up and ESA payments](/docs/organizations/money/step-up-and-esa)
- [Famlo plans: Free, Scholarship and Website](/docs/organizations/getting-started/famlo-plans)
