---
sidebar_position: 3
title: "The Money place: ledger, class payments and who sees money"
description: What each tab in Money shows, who on your team can open it, how to read the Families ledger and Class payments, and what receipts families get.
keywords: [famlo money tab, family ledger, class payments, who can see payments, bookkeeper access, co-leader money access, organization receipts, sales tax merchant of record]
audience: organizations
who: Owners, Bookkeepers, and anyone whose Money access is View or more
---

# The Money place: ledger, class payments and who sees money

**Money** in your console shows what every family has been billed, has paid and still owes, for dues and classes together. This page covers what each tab is for, who on your team can open it, and how to read the two main screens. To open Money, your access needs **Money** set to **View** or **Take payments & refund**.

## Open Money

1. In your console, select **Money** (1) in the left rail. On a phone, it's under **More**.
2. Pick a tab (2). **Families** opens first.

<Screenshot src="/img/screens/organizations/money-overview-families.webp" alt="The Money place with Money highlighted in the left rail and the row of tabs from Families to Payouts & fees highlighted, above the Collected, Outstanding, Refunded and Dues figures and the family ledger" url="famlo.co/co-op/sunnyside-learning/money" width={1280} height={800} />

A number on **Money** in the rail counts memberships with a failed dues payment. Only people who can act on dues see it.

## The tabs, and who sees each

Each tab shows only for people whose access lets them open it. Here is who sees what with the standard roles:

| Tab | What it's for | Who sees it |
|---|---|---|
| **Families** | The ledger: what each family was billed, paid and owes | **Money** set to **View** or **Take payments & refund** (Owners, Bookkeepers) |
| **Dues** | Paying members, failed dues payments and reminders | **Take payments & refund** (Owners, Bookkeepers) |
| **Class payments** | Every class booking that asks for money, and whether it's paid | **View** or more. **Request payment** and **Send refund** need **Take payments & refund**. |
| **Requests & refunds** | Payment requests you've sent and refunds you've given | **Take payments & refund** |
| **Scholarships & ESA** | Your own scholarship funds, Step Up and ESA invoices, and the programs you accept | With the Scholarship or Website plan: people who can edit **School settings** (Owners, Co-leaders). Without one of those plans, the tab tells you about the Scholarship plan, and only people with **Take payments & refund** see it. |
| **Discounts** | Promo codes | People who can edit **School settings** (Owners, Co-leaders) |
| **Charges** | Saved charges you add to payment requests, including late pickup | **Take payments & refund** |
| **Payouts & fees** | Opens **School settings** › **Getting paid** | Only the person who created or claimed the listing |

Other people with **Owner** ticked see every tab except **Payouts & fees**. Payouts, the Stripe connection and the organization-wide booking fee choice stay with the creator. See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

### Co-leaders don't see the money

The Co-leader role's own description ends "Not money." A Co-leader who opens **Money** finds only **Scholarships & ESA** (if your plan includes it) and **Discounts**. They can't see the Families ledger, **Dues**, **Class payments**, **Requests & refunds** or **Getting paid**, and they can't send refunds or payment requests.

If you want a Co-leader to handle money too, open **People** › **Staff & teachers**, open the person, select **Change what [first name] can do**, and set the **Money** line to **View** or **Take payments & refund**. Changing any line makes their role **Custom**. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

A **Bookkeeper** is the opposite: money only. Bookkeepers see Families, Dues, Class payments, Requests & refunds and Charges, but not your classes' rosters, families' contact details or messages. Class names in **Class payments** show as plain text for them, not links.

## The Families ledger

**Families** is one ledger for everyone who has been billed: dues and class bookings added together.

The four figures at the top cover this school year, since August 1 (the line above the heading says so):

| Figure | What it counts |
|---|---|
| **Collected** | Money families have actually paid you for bookings and dues. The line under it compares it with the same number of days just before. |
| **Outstanding** | What families still owe, added up from the **Owes** column. "Owed by N accounts" says how many. |
| **Refunded** | Refunds, with the number of bookings. It reads "full amount": a booking you refunded only part of counts at its whole charge. |
| **Dues** | Your monthly dues income from paying members, and how many there are. It shows **None** if no one pays dues. |

The ledger has one row per paying account, with **Family**, **Children**, **Billed**, **Paid** and **Owes**. A household where both parents have their own Famlo account appears twice. Each row has one action:

- **Remind** shows when a family's dues are past due ("Dues past due") or haven't gone through yet ("Dues awaiting payment"). It sends them the dues payment reminder. Only people with **Take payments & refund** see it.
- **View** shows when a family owes for a class. It opens **Class payments** for just that family, showing their unpaid bookings.
- **Paid** means they're settled. **Nothing billed** means there's nothing to collect.

**Coming in** sits beside the ledger and lists money on its way, each with one button:

- "in scholarship invoices", with **Open**: Step Up or ESA invoices sent and waiting for the program to pay.
- "in failed dues", with **Review**: dues payments that failed. **Review** opens **Dues**.
- "in draft invoices", with **Review**: scholarship invoices not sent yet.

When there's nothing to show, it reads "No unpaid invoices or failed dues." People who can't open a row's destination don't see that row.

**Your Famlo plan** shows your plan and how much came in by card so far this month. People with **Take payments & refund** get a **Plan & billing** link. For what Famlo charges, go by [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee).

**Export** in the corner downloads the ledger as a spreadsheet. See [Export your data (CSV)](/docs/organizations/settings/exports).

## Class payments

**Class payments** lists every class booking that asks for money, newest first.

<Screenshot src="/img/screens/organizations/money-overview-class-payments.webp" alt="The Class payments tab with the Everything, Unpaid, Paid and Refunded filters highlighted, above a list of bookings marked Paid · Card with Request payment and Send refund links" url="famlo.co/co-op/sunnyside-learning/money/class-payments" width={1280} height={800} />

1. Open **Money**, then **Class payments**.
2. Narrow the list with the filters (1): **Everything**, **Unpaid**, **Paid** or **Refunded**.

Each row shows the family and child, the class and the date it was booked, the amount, and where the money stands:

| Status | Meaning |
|---|---|
| **Paid · Card** | Paid by card at checkout or through a payment request |
| **Paid · Scholarship** | Paid through the family's Step Up or ESA program |
| **Invoiced to scholarship** | Billed to the family's scholarship program, not paid yet |
| **Unpaid** | Nothing has been paid on it yet |
| **Cancelled** | The booking was cancelled |
| **Refunded** | The money went back to the family |

The amount is your price for that booking, less any promo code, account credit, scholarship award or Step Up share. When part was covered by a scholarship, the row adds "· scholarship $X". The booking fee isn't part of these amounts.

If you have **Take payments & refund**, each row also offers **Request payment**, to ask the family for something extra on that booking, and **Send refund**, while there's card money left to return. See [Ask a family to pay](/docs/organizations/money/payment-requests) and [Refunds](/docs/organizations/money/refunds).

The tab shows your latest 100 bookings. If you have more, a link at the bottom, **Every registration, as a spreadsheet**, downloads the full history. It shows only for people who run your classes.

## The receipts families get

You don't need to send receipts yourself. When a family pays:

- Their confirmation email, "You're registered for [Activity]!", lists the total.
- On famlo.co, **Payments & invoices** lists every payment. Opening one gives them **View Stripe receipt**. Membership dues show as invoices, with **View Stripe invoice** once paid.
- On your own website, if you have one, the **Parent portal** has **Payments & receipts**, showing payments to your organization only.

Card payments go into your own Stripe account, so the receipt and the family's card statement carry your organization's name, not Famlo's. More from the family side: [Payments & invoices and your receipts](/docs/families/money/payments-and-receipts).

## Taxes

Your organization is the merchant of record for what you sell on Famlo: registrations, tuition, dues and Store sales. That means any sales tax on them is yours to handle. Famlo doesn't calculate, collect or file sales tax, and there are no tax settings in the console. If you're not sure whether what you sell is taxable where you are, ask a tax professional.

## Troubleshooting

**Money isn't in my rail.**
Your access doesn't include money. Ask an Owner to set your **Money** line to **View** or **Take payments & refund**.

**I'm a Co-leader and Money only shows Discounts.**
That's expected. Co-leaders don't have money access by default. See [Co-leaders don't see the money](#co-leaders-dont-see-the-money).

**A red banner says "Stripe has been disconnected".**
Until it's fixed, you can't take card payments, bill memberships or send refunds. The creator sees **Reconnect** or **What to do**; everyone else sees "Only the owner can fix it." See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

**Money says "No money has moved yet".**
Nothing has been paid or billed yet. If card payments aren't set up, the creator sees **Set up getting paid**.

**A family appears twice in the ledger.**
Each Famlo account gets its own row, so a household with two accounts shows up twice.

**The Refunded figure looks too high.**
It counts each refunded booking at its whole charge, even if you refunded only part of it. **Requests & refunds** shows the exact amount of each refund you sent.

## What's next

- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Refunds: sending one, answering a request, and cancellations](/docs/organizations/money/refunds)
- [Ask a family to pay: payment requests and saved charges](/docs/organizations/money/payment-requests)
- [Membership dues](/docs/organizations/membership-dues)
- [What staff can do: roles and access](/docs/organizations/members-and-roles)
