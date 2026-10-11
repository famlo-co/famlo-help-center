---
sidebar_position: 5
title: "Ask a family to pay: payment requests and saved charges"
description: Send one family a payment request for lunches, materials or a late pickup, save the charges you use often, and track what's paid in Requests & refunds.
keywords: [payment request, invoice a family, request payment famlo, late pickup fee, saved charges, bill a family for extras, requests and refunds]
audience: organizations
who: Owners and Bookkeepers
---

# Ask a family to pay: payment requests and saved charges

A payment request asks one family to pay an amount you name, such as a week of lunches, materials or a late pickup. It goes to the family's **Messages** and email, and they pay it by card when they tap **Pay**. Famlo never charges a saved card on its own.

You need Money set to **Take payments & refund** to send one (Owners and Bookkeepers have it), and your organization's payouts must be set up first.

## Send a payment request

Start from whichever place you're already looking at. Each one opens the same form:

| Where you are | What to select |
|---|---|
| **People** › **Families** | The family's **•••** menu, then **Request payment** |
| A child's record, **Money** tab | **Request payment** (the request is already set to that child) |
| **Money** › **Class payments** | **Request payment** under a booking (set to that child and booking) |
| **Messages**, in the family's conversation | **Invoice** next to the reply box (only if you can reply in that conversation) |

Then fill in the form:

1. Under **What it's for**, add what you're charging for. Type an **Item**, a **Qty** and a **Price ($)**, or tap a saved charge such as **+ Packaged lunch · $7.00** (1) to add it with its price filled in. Use **+ Something else** (or **+ Add a line** if you have no saved charges) for anything else. The **Total** adds up as you type.
2. Under **For**, leave **The family** or pick a child or one of their bookings.
3. Set **Pay by** (2). It starts one week from today, and it can be at most 90 days away.
4. Choose a **Reminder**: **If unpaid after 3 days** (the default), **If unpaid after a week** or **No reminder**.
5. Turn on **Step Up scholarship** only if the family will pay with Step Up and you expect Step Up to approve it. It's off unless you turn it on.
6. Under **What you'll receive**, decide whether to tick **I want to receive the full $X** (3), where $X is your total. See the next section.
7. Add a **Message (optional)**, for example "Lunches for this week plus Tuesday's late pickup."
8. Select **Send request** (4).

You'll see "Sent. [Name] can pay it from the conversation." The request appears as a card in the family's conversation with you, and in **Money** › **Requests & refunds**.

<Screenshot src="/img/screens/organizations/payment-requests-form.webp" alt="The payment request form for a family, with a saved Packaged lunch charge, the Pay by date, the I want to receive the full amount option and the Send request button numbered" url="famlo.co/co-op/sunnyside-learning/payment_requests/new" width={1280} height={1497} />

:::note
After you send it, the amount can't be changed. As the form says: "To change it, cancel this one and send a new one."
:::

## The booking fee and "I want to receive the full $X"

A payment request is paid through the same checkout as a class, so the same booking fee applies. Families pay a booking fee on paid bookings (3.7% of the price plus $1.79, plus Stripe's processing), so you receive the full amount you asked for. If you've chosen to pay the booking fee yourself, it comes out of what you receive instead. See [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee).

The panel under **What you'll receive** shows what the family pays, what Stripe and Famlo take, and what you receive, and it updates as you type. Stripe's part is shown as "about", because it varies a little by card type.

Tick **I want to receive the full $X** when you'd rather the family saw a single price. In the form's words: "Famlo raises the price so the fees come out of it, not out of what you asked for. [Name] sees one price, with no fee line, the same however they pay." You still receive the amount you asked for. When you open the sent request, it shows a **Raised to cover fees** line.

If you turned on **Step Up scholarship**, the panel shows two views: **If they pay by card** and **If Step Up pays**. Step Up pays you through its own system, with no card fee or Famlo fee. You can only turn it on once Step Up is set up for your organization; until then it says "Set up Step Up in Settings to offer it." See [Accept Step Up and ESA payments](/docs/organizations/money/step-up-and-esa).

## Rules to know

- **Payouts first.** Families pay by card, so you can't send a request until payouts are set up. Until then the form says "Families pay these by card, so set up payouts in Settings before you send one." See [Set up getting paid with Stripe](/docs/organizations/getting-paid).
- **One family at a time.** "Payment requests go to one family, in their own thread." A family who wrote to you from your website without a Famlo account can't be sent one until they sign up.
- **Pay-by date.** It can't be in the past, and it can be at most 90 days away.
- **No edits.** To change the amount or the lines, cancel the request and send a new one.
- **No health details.** Item names and the message are checked like any message, and children's medical details are refused.
- **How long it stays open.** A request that's still unpaid after its pay-by date shows as **Overdue**, and the family can still pay it for 30 more days. After that it expires and shows **Expired unpaid**. A service invoice that holds a time works differently; see the next section.
- **Reminders.** The automatic reminder goes out once, on the schedule you picked, unless you've already sent one yourself. You can remind the family yourself at most once a day.

## Invoices for services

When the conversation is about one of your services, the form is called an invoice and the button reads **Send invoice**. The first line starts with the service's name and length, and its price if you show an exact one.

For a service with set times, you can tick **Book a time with it** and choose a **Date**, **Time**, **Length** and how you'll meet. In the form's words, the time is "Held for [Name] until it's paid or the pay-by day passes. Any time works, even outside your weekly hours." An invoice that holds a time expires at the end of its pay-by day, and the time is released. See [Services and appointments](/docs/organizations/running/services-and-appointments).

## Follow up in Requests & refunds

Open **Money** › **Requests & refunds** (1) to see every payment request you've sent and every refund you've sent without cancelling. It lists the latest 100. The top of the page shows **Waiting to be paid**, **Overdue**, **Collected in [month]** and **Refunded in [month]**. **Saved charges** (2) takes you to your saved charges.

<Screenshot src="/img/screens/organizations/payment-requests-list.webp" alt="Money, Requests and refunds tab with the waiting, overdue, collected and refunded totals and one sent request due Oct 17, with the tab and Saved charges button numbered" url="famlo.co/co-op/sunnyside-learning/money/requests" width={1280} height={800} />

Each row shows the family, what it's for, the amount and where it stands:

| Status | What it means |
|---|---|
| **Sent · due [date]** | Waiting for the family to pay. |
| **Overdue · [n] days** | The pay-by date has passed. The family can still pay. |
| **Payment going through** | The family is paying right now. |
| **Paid [date]** | Paid. **Receipt** opens the details. |
| **Awaiting Step Up** | The family chose Step Up, and Step Up hasn't paid yet. |
| **Cancelled** | You cancelled it, so the family can't pay it. |
| **Expired unpaid** | Nobody paid it in time. |

Select a row to open the request. From there you can:

- **Remind [Name] now.** On an overdue request, **Remind** is also right on the row. If you've already reminded them today, you'll see "[Name] was already reminded today. You can remind them again tomorrow."
- **Cancel this payment request…** then **Cancel payment request**. The family can't pay it after that, and they're told. You can only cancel while no payment is going through. If one is, you'll see "Their payment is going through now, so it can't be cancelled. Refund it once it lands."
- **Open the conversation** with the family.

If a family has already paid and you need to give money back, use **Send refund**. Families can't cancel a paid request themselves; they ask you in the conversation. See [Refunds](/docs/organizations/money/refunds).

## Save the charges you use often

**Money** › **Charges** keeps the extras you bill for again and again. Each saved charge shows up as a one-tap button on every payment request form.

1. Open **Money**, then **Charges**.
2. Select **Add a charge** (1).
3. Enter a **Name**. It's "What families see on the request", up to 60 characters.
4. Under **What it's for**, choose **Something else**, or **Late pickup** for a late pickup rate.
5. Enter a **Price**.
6. Leave **Offer this on payment requests** ticked.
7. Select **Add charge**.

<Screenshot src="/img/screens/organizations/payment-requests-charges.webp" alt="Money, Charges tab listing a Packaged lunch charge at $7.00 and a Late pickup charge at $1.00 a minute, with Add a charge numbered" url="famlo.co/co-op/sunnyside-learning/money/charges" width={1280} height={800} />

Select a charge to change it, then **Save**. Untick **Offer this on payment requests** to stop offering it without deleting it. The list then marks it **Off**. **Delete** removes it, and "Requests already sent with it keep their price." Editing a charge never changes a request you've already sent.

## Charge for late pickups

A **Late pickup** charge lets your attendance register offer to bill a family when a child is collected after a class ends.

**Set the rate.** In **Money** › **Charges**, add a charge with **What it's for** set to **Late pickup**, then choose:

- **Per minute** or **Once, flat**.
- **Grace before it starts**: **None**, 5, 10, 15, 20 or 30 minutes.
- **Offer this on payment requests** must stay ticked, or the register won't offer it.

You can have one late pickup charge switched on at a time. A second one is refused with "You already have a late pickup charge switched on. Switch that one off first."

**At the register.** The class needs an end time, and the child must be checked in. Once the end time plus the grace has passed, the child's **Pick up** button becomes **Pick up · late**. It stays that way for up to 180 minutes. Anyone who can take attendance can use it, including teachers for their own classes.

1. Select **Pick up · late**. The **Picking up [child]** panel opens with the pickup time and how long ago the class ended.
2. Check **Charge late pickup?**. For a per-minute rate, adjust the minutes with **−** and **+**. They count from the end of the grace, up to 180.
3. Add a **Note to the family (optional)**.
4. Select **Picked up · send $X request**, or **Picked up, no charge** to record the pickup without billing.

Both buttons record the pickup. A charged pickup sends the family a payment request for that child and booking. It's due in 7 days, with a reminder if it's still unpaid after 3 days. As the panel says: "They pay when they're ready; nothing is charged to a card." Payouts must be set up for this too. The person at the register can change the minutes but not the rate. For more on the register, see [Attendance, check-in and the sign-in QR](/docs/organizations/attendance).

## Who gets told

| When | Who | How |
|---|---|---|
| You send a request | The family | A card in their conversation with you, a notification and an email ("Payment request from [Organization]: $X"). They can't switch this off. |
| A reminder goes out | The family | A notification and an email ("Still to pay: $X to [Organization]"). It follows the family's reminder settings. |
| You cancel a request | The family | A notification. The card in the conversation also changes. |
| The family pays | The family | A receipt by email |
| The family pays | The person who sent it, and the person who created or claimed the listing | A notification in Famlo. **Requests & refunds** shows it as paid. |

To see what families see and how they pay, read [Paying an invoice or payment request](/docs/families/money/payment-requests).

## Troubleshooting

**I don't see Request payment or Invoice.**
You need Money set to **Take payments & refund**. Co-leaders don't have money access. Ask an Owner to change what you can do. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

**The form says to set up payouts first.**
Payment requests are paid by card, so Stripe payouts must be set up. Only the person who created or claimed the listing can do that, in **School settings** › **Getting paid**.

**I sent the wrong amount.**
Open the request in **Money** › **Requests & refunds**, cancel it, and send a new one. If the family already paid, use **Send refund** for the difference.

**The register doesn't offer Pick up · late.**
Check that you have a **Late pickup** charge with **Offer this on payment requests** ticked, that the class has an end time, that the child is checked in, and that the grace has passed. It's no longer offered once 180 minutes have passed after the grace.

**A family says the request has expired.**
Send a new one. An expired request can't be reopened.

## What's next

- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Refunds: sending one, answering a request, and cancellations](/docs/organizations/money/refunds)
- [The Money place: ledger, class payments and who sees money](/docs/organizations/money/money-overview)
- [Accept Step Up and ESA payments](/docs/organizations/money/step-up-and-esa)
