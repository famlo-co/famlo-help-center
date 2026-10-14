---
sidebar_position: 4
title: "Refunds: sending one, answering a request, and cancellations"
description: Send part or all of a card payment back without cancelling, answer a family's refund request, and see how cancellations are refunded.
keywords: [send refund famlo, partial refund, refund request, approve refund, decline refund, cancel booking refund, what this refund costs you, organization refunds]
audience: organizations
who: Owners and Bookkeepers (Money set to Take payments & refund)
---

# Refunds: sending one, answering a request, and cancellations

You can send money back to a family's card at any time, without cancelling their booking, and you decide on the refund requests families send you. This page also explains how a cancellation is refunded, depending on who cancels. Sending refunds and answering requests needs Money set to **Take payments & refund**, which the **Owner** and **Bookkeeper** presets have.

## Send a refund without cancelling

Use **Send refund** when a family should get some money back but keeps their place: a missed session, a class that was cut short, or an overcharge. The booking stays exactly as it is.

You can start a refund from four places:

- **Money** › **Class payments**: **Send refund** on a booking's row. It shows only while some card money is left to refund on that booking.
- **People** › **Parents**: the family's row menu (**•••**) › **Send refund**.
- A child's record: the **Money** tab, under **Billing** › **Send refund**.
- An appointment's panel, for services: **Send refund**.

<Screenshot src="/img/screens/organizations/refunds-class-payments.webp" alt="Money, Class payments tab, with Send refund on a family's booking row highlighted" url="famlo.co/co-op/sunnyside-learning/money/class-payments" width={1280} height={800} />

To send one from **Class payments**:

1. Open **Money**, then **Class payments** (1).
2. Find the booking and select **Send refund** (2). The form opens beside the list.
3. Check **From**. If you started from a family rather than a booking, choose which of their paid bookings the money comes from.
4. Enter the **Amount to send back**. The hint under the box shows the most you can send: "Up to $X, what's left of what they paid by card."
5. Add a note if you like (the box is labeled with the family's first name, for example "Note to Jordan (optional)"). The family sees it with the refund in their conversation, for example "Missed the Oct 2 class."
6. Read **What this refund costs you** (see the next section). It updates as you type.
7. Select **Send refund**, then confirm. The confirmation reads, for example, "Send this refund to Jordan's card? It can't be taken back."

<Screenshot src="/img/screens/organizations/refunds-send-refund.webp" alt="The Send refund form with the amount, the What this refund costs you panel and the Send refund button highlighted" url="famlo.co/co-op/sunnyside-learning/refunds/new?booking=93" width={1048} height={805} />

In the form, enter the amount (1), check the cost panel (2), then select **Send refund** (3). You'll see a message like "Sent $50.00 back to Jordan's card. They've been told in Messages." The family gets a **Refund sent** card in their conversation with you, plus a notification and an email. The refund also appears under **Money** › **Requests & refunds**, marked **Refund sent**. You can send more than one refund on the same booking, up to what's left of the card payment.

## What this refund costs you

The panel shows the refund from your side before you send it:

| Line | What it means |
|---|---|
| **[First name] gets back** | The amount going back to the family's card. |
| A line about Famlo's fee | Either **Famlo returns its 3.7% + $1.79 share**, when Famlo gives back part of its fee in proportion to what you refund, or **Booking fee the family paid (kept by Famlo)**. |
| **Stripe's original fee** | Always **not returned**. Stripe keeps its card fee on the original payment. |
| **Comes out of your payouts** | What the refund actually costs you once any returned fee is counted. |

Refunds come out of your own Stripe balance, because card payments go straight to your Stripe account.

## Answer a family's refund request

Before a booking starts, families cancel it themselves and your [refund terms](/docs/organizations/classes/refund-terms) decide what they get back. Once it has started, a family can use **Request a refund** on their booking instead. They pick a reason (**Ended early**, **Didn't happen**, **Not as described** or **Something else**), say how much they're asking for, and can add a note. You decide.

The request arrives as a **Refund request** card in that family's conversation in **Messages**, marked "Waiting on you". The person who created or claimed your listing is also notified, and that notification can't be turned off. The card has three buttons, **Approve** with the amount asked for (for example **Approve $12.50**), **Different amount** and **Decline**, and each one opens the request in a panel.

<Screenshot src="/img/screens/organizations/refunds-request-panel.webp" alt="A refund request panel showing the family, booking, amount asked for and reason, with Refund amount, Approve and send refund and Decline instead highlighted" url="famlo.co/co-op/sunnyside-learning/refund-requests/le5us3hmt6" width={1048} height={920} />

The panel shows the **Status**, the **Family**, the **Booking** and what was paid, **They ask for**, the **Reason** and **Their note**.

To approve it:

1. Open the request from its card in **Messages**.
2. Check the **Refund amount** (1). It starts at what the family asked for. To send a different amount, change it here (or select **Different amount** on the card, which labels the box **Amount to send back**).
3. Read **What this refund costs you**. It's the same panel as **Send refund**.
4. Select **Approve and send refund** (2), then confirm.

The money goes back to the card they paid with, their booking stays as it is, and the family is told in **Messages**. You'll see a message like "Approved. $12.50 is going back to Layla's card, and they've been told in Messages."

To decline it:

1. Select **Decline instead…** (3) in the panel, or **Decline** on the card.
2. Write **Why you're declining**. It's required, up to 300 characters, and the family sees it.
3. Select **Decline**.

The family sees your reason in the conversation and can reply there to talk it through. If no card money is left on the booking, Decline is the only answer the panel offers. A family can withdraw a request before you answer it, and they can have only one open request on a booking at a time.

## Cancellations: who cancels changes the refund

| What happens | What the family gets back |
|---|---|
| The family cancels before the booking starts | What your [refund terms](/docs/organizations/classes/refund-terms) allow, measured on what they paid by card. Each booking keeps the terms it was booked under. |
| The family asks after it has started | Whatever you approve (see above). |
| You cancel the whole class (**•••** › **Cancel activity**) | Everyone registered is refunded and notified. See [Cancel, unpublish or delete a class](/docs/organizations/running/cancel-or-delete). |
| You cancel one appointment (**Cancel…** in its panel) | You choose: refund all of it, **Refund part of it**, or **No refund now**. See [Services and appointments](/docs/organizations/running/services-and-appointments). |
| You refund a shop sale (**Store** › **Sales** › **Refund**) | The sale is cancelled and refunded. Families can't cancel shop purchases themselves. See [Sell downloads, videos and bundles in your Store](/docs/organizations/running/store). |

When a family cancels, their cancel screen shows **Amount paid**, **Activity refund**, **Booking fee refund** and **Total refund** before they confirm. **Booking fee refund** is marked "(not refundable)" when the booking fee isn't coming back.

**Who can cancel.** People who run every class (by preset the **Owner**, **Co-leader** and **Class organizer**) can cancel a class, which cancels every booking on it. Sending refunds and answering requests is separate: it needs Money set to **Take payments & refund** (by preset the **Owner** and **Bookkeeper**). A Co-leader can cancel a class but can't open **Requests & refunds** or send a refund. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

For membership dues, removing a member has its own refund choices. See [Membership dues](/docs/organizations/membership-dues).

## What Famlo can and can't refund

- **Card money only.** Every refund goes back to the card the family paid with, and only up to what's left of that card payment. Anything already refunded is subtracted, including from a later cancellation.
- **Step Up seats and money paid to you directly.** That money never went through a card, so Famlo can't send it back. The form says: "A Step Up seat, or money paid to you directly, never went through a card, so any refund of it is yours to give."
- **Shop downloads.** Refunding the full price of a shop purchase takes the product back from the family. A partial refund lets them keep it.
- **Timing.** Families usually see the money on their card within 5 to 10 business days.

## Troubleshooting

**I don't see Send refund.**
It shows only to people with Money set to **Take payments & refund**, and only on bookings with card money left to refund. A Step Up seat, or money paid to you directly, has nothing to refund by card.

**"There's no card payment left to refund on this."**
Everything paid by card on that booking has already been refunded, or it was never paid by card.

**"You can send back at most $X on this."**
You entered more than is left of the card payment. Enter that amount or less.

**A refund didn't go through.**
You and the family are both notified. Your notice reads like "A $50.00 refund to Jordan Rivera didn't go through. The money is still in your account. Send it again from Requests & refunds." Open **Money** › **Requests & refunds** and send it again. If Stripe is disconnected, the **Money** page shows a red banner, and you can't issue refunds until it's reconnected. See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

**The family says the refund hasn't arrived.**
Card refunds usually take 5 to 10 business days. If your Stripe balance is too low to cover a refund, Stripe holds it until enough money comes in.

## What's next

- [Refund terms (If a family cancels)](/docs/organizations/classes/refund-terms)
- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Ask a family to pay: payment requests and saved charges](/docs/organizations/money/payment-requests)
- [Cancel, unpublish or delete a class](/docs/organizations/running/cancel-or-delete)
- [Cancelling and refunds (what families see)](/docs/families/payments-and-refunds)
