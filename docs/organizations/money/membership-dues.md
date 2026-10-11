---
slug: /organizations/membership-dues
sidebar_position: 6
title: Membership dues
description: Charge families recurring or one-time dues to belong, approve paid join requests, follow up on failed payments and remove a paying member.
keywords: [membership dues, recurring dues, charge families to join, failed dues payment, remove a member refund, dues booking fee, approve paid join request]
audience: organizations
who: Owners and bookkeepers
---

# Membership dues

Dues are what a family pays to belong to your organization, separate from what they pay for a class. You set one price and one schedule, families send a join request with their card, and their card is charged when you approve them.

Before you start, two things must be true: your organization's visibility is **Closed** or **Private**, and card payments are set up in **Getting paid**.

## Who can do what

| Task | Who |
|---|---|
| Set dues, watch **Money › Dues**, send reminders, remove a paying member | People with **Money** set to **Take payments & refund**: by preset the **Owner** and the **Bookkeeper** |
| Approve or deny join requests | People with **Families & children** set to **Add & approve**: by preset the **Owner** and the **Co-leader** |
| Set up card payments (Stripe) | Only the person who created or claimed the listing |
| Record dues paid in cash, check or transfer | People who can take payments, on the **Website** plan |

Co-leaders can approve new members, but they can't see **Dues** or change the price. See [What staff can do](/docs/organizations/members-and-roles).

## Turn on dues

<Screenshot src="/img/screens/organizations/membership-dues-settings.webp" alt="School settings with Dues and pricing open, showing the Membership dues row at $50.22 a month and its Edit link" url="famlo.co/co-op/sunnyside-learning/settings/dues" width={1280} height={800} />

1. Open **School settings** (1).
2. Under MONEY, select **Dues & pricing** (2).
3. On the **Membership dues** row, select **Edit** (3).
4. Tick **Enable membership dues**.
5. Enter the **Price (USD)**. This is what you receive.
6. Choose a **Billing cadence**.
7. Add a **Description (optional)**: what members get for their dues.
8. Select **Save**.

The row then shows the price families see, booking fee included, for example "$50.22 / month" for $45 dues.

### Billing cadences

| Cadence | When the family is charged |
|---|---|
| **Monthly** | When you approve them, then every month |
| **Every 2 months** | When you approve them, then every two months |
| **Quarterly** | When you approve them, then every three months |
| **Every 6 months** | When you approve them, then every six months |
| **Annually** | When you approve them, then every year |
| **One-time fee** | Once, when you approve them. It never renews. |

One cadence applies to the whole organization. Families don't choose between options, and there are no membership levels or free trials.

### If saving is refused

- **"must be Closed or Hidden to charge a membership fee"**: your visibility is **Open**. Change it in **School settings › Joining › Visibility** to **Closed** (still listed, with events and the roster for members only) or **Private** (link only), then set your dues. The message says "Hidden"; the setting is called **Private**.
- **"Connect your payouts to start collecting dues."**: card payments aren't set up yet. The person who created or claimed the listing sees **Set up payouts**; everyone else sees "Only the organization's owner can do that." See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

### Changing the price

Edit the row and save a new price. Members who already pay by card keep the price they joined at; the new price applies to families who join after you save. Tell your members before you change what new families pay, so nobody is surprised.

## The booking fee on dues

Every dues charge carries the booking fee: the first one and every renewal. Families pay 3.7% of your dues plus $1.79, plus Stripe's processing, so you receive the full dues you set. A membership counts as one ticket. Families see the total, and each invoice shows the fee as its own **Booking fee** line.

On the join form, families read: "Includes a $5.22 booking fee on every charge. Sunnyside Learning Co. receives the full dues. Not refundable unless Sunnyside Learning Co. cancels."

If you choose to pay the booking fee yourself in **School settings › Getting paid › Booking fee**, families see just your dues and the fee comes out of each payment instead. See [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee).

If a family's membership or payment plan started before October 9, 2026, it keeps its original terms: the family pays the listed amount and Famlo's 4% comes out of your payout. Anything started on or after October 9 carries the booking fee.

## Approving paid join requests

With dues on, every family who wants to join sends a request, and you review each one. Their card is saved, and "You won't be charged until the organizers approve your request." Requests arrive in **People › Join requests**, marked "Card on file — approving charges them".

1. Open **People**, then **Join requests**.
2. Select **Review** to read their **Screening answers**.
3. Select **Approve request** to charge the card and add them, or choose a **Reason for denying** and select **Deny request**.

What you may see after approving:

| Message | What it means |
|---|---|
| "Approved [name] — payment processed." | They're charged and are now a member. |
| "Approved [name]. They need to confirm their payment — we've emailed them." | Their bank asked them to confirm. They become a member once they do. |
| "Approved [name]. They're already a paid-up member, so their card wasn't charged." | Nothing more to do. |
| "Approved [name]. We're checking with Stripe whether their payment went through. They become a member as soon as it confirms. Don't charge them again." | Wait. Don't approve or charge again. |
| "[name]'s card was declined, so they aren't a member yet. We've asked them to update it." | They need to update their card. |
| "…can't take card payments until payouts are set up. Set up payouts, then approve again." | Nothing was charged. Finish **Getting paid** first. |

If a request was approved but the card wasn't charged, its page shows **Charge card and add member** so you can finish it. For more on join requests, see [People](/docs/organizations/team/people).

## Watching who pays: Money › Dues

<Screenshot src="/img/screens/organizations/membership-dues-dashboard.webp" alt="The Dues tab in Money showing monthly revenue, paying members and past due counts, with a failed payment's Send a reminder link and Offer a discount menu highlighted" url="famlo.co/co-op/sunnyside-learning/memberships" width={1280} height={800} />

Open **Money**, then **Dues**. The tab, and **Money** in the sidebar, show a count of past-due members. The page starts with three figures:

- **Monthly revenue**: everything converted to a monthly amount, so an annual membership counts as a twelfth.
- **Paying members**: how many are active.
- **Past due**: how many payments have failed.

Below that, every member is listed with their status (for example Active or Past due), the price, the next charge date and when they joined. A member you don't charge shows **(comped)**.

## When a dues payment fails

Failed payments come first on **Dues**: "Stripe is retrying. Reach out before the grace period lapses and the membership cancels itself." Each one shows how far along it is (**Retry**, **Action required**, **Final warning**, or "Awaiting retry"). Famlo emails the family at each stage.

For each failed payment you can:

- Select **Send a reminder** (1) to email the family and ask them to fix their payment. **Remind** on **Money › Families** does the same.
- Choose a code from **Offer a discount…** (2), then select **Offer**. The family sees "Your group offered you a discount" on their membership page and applies it with one tap. This menu appears only when you have active [promo codes](/docs/organizations/promo-codes).
- Open **What we've sent them** to see the emails already sent, so you don't repeat them.

If the payment never succeeds, the membership cancels itself.

## Removing a paying member

<Screenshot src="/img/screens/organizations/membership-dues-remove.webp" alt="A member row on the Dues tab with Remove opened, showing the Stops and Refund menus and the Remove button" url="famlo.co/co-op/sunnyside-learning/memberships" width={997} height={231} />

1. Open **Money**, then **Dues**.
2. Find the member and select **Remove [first name]**.
3. Under **Stops** (1), choose **Immediately** or **At period end**.
4. Under **Refund** (2), choose **No refund**, **Prorate** or **Full refund**.
5. Select **Remove** (3) and confirm.

**Prorate** returns the unused part of their last payment; **Full refund** returns all of it. A refund is sent only when **Stops** is **Immediately**; with **At period end** they keep access until the period they paid for ends, and nothing is refunded. Refunds come from your Stripe balance.

If you see "Stripe accepted their refund … but hasn't paid it out yet", your Stripe balance doesn't cover it yet. It goes out on its own once it does, so don't send a second refund.

## When members cancel and renew

- Members can cancel any time from **Account settings › Memberships**. Within 7 days of their first payment they can choose **Cancel and refund my first payment**: their membership ends right away and that first payment is refunded. After that, there's no refund, and they keep access until the end of the period they paid for.
- Renewal reminders are emailed to members before each renewal: at least 30 days ahead of an annual renewal, and at least 3 days ahead of any other.

## Dues paid outside Famlo

On the **Website** plan, you can record dues a family paid you in cash, by check or another way. That tells Famlo they're paid up to a date you choose, so they aren't asked to pay. Leaving that date blank makes them a complimentary member. You can't record a payment for someone who already pays by card through Famlo. See [Record cash, check and transfer payments](/docs/organizations/money/offline-payments).

## Troubleshooting

**I can't find Dues & pricing or Money › Dues.**
Both need **Money** set to **Take payments & refund**. Ask an owner to change what you can do in **People › Staff & teachers**.

**Saving dues gives a visibility error.**
Your organization is **Open**. Set **School settings › Joining › Visibility** to **Closed** or **Private**, save, then save your dues.

**Approving a request says payouts aren't set up.**
Nothing was charged. The person who created or claimed the listing needs to finish **School settings › Getting paid**, then approve again.

**A family says they were charged but aren't a member.**
Open their request in **People › Join requests**. If it says Stripe is still checking, wait and don't charge them again.

**I removed a member but the refund didn't confirm.**
The message says it "may still have gone through". Check the payment in your Stripe Dashboard before refunding by hand.

**I want to offer a free trial.**
There's no trial setting. You can offer a [promo code](/docs/organizations/promo-codes) for the join form instead.

## What's next

- [Discounts (promo codes)](/docs/organizations/promo-codes)
- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Record cash, check and transfer payments](/docs/organizations/money/offline-payments)
- [People: families, children, join requests and invitations](/docs/organizations/team/people)
- [The Money place](/docs/organizations/money/money-overview)
