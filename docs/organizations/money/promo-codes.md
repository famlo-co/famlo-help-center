---
slug: /organizations/promo-codes
sidebar_position: 10
title: Discounts (promo codes)
description: Create promo codes in Money › Discounts that families type at checkout or on dues, with dates, limits and a minimum order.
keywords: [promo code, discount code, famlo discounts, early bird discount, percent off code, membership discount code, redemption limit, one per family]
audience: organizations
who: Owners and co-leaders
---

# Discounts (promo codes)

A promo code is a word a family types for money off. You create codes in **Money** › **Discounts**, and every code works across your whole organization: on paid classes, services and shop items at checkout, and on membership dues. Owners and co-leaders can create and edit codes.

## Create a code

1. In your console, select **Money** (1), then the **Discounts** tab (2).
2. Select **New code** (3).
3. Type the **Code** families will enter, for example `EARLYBIRD`.
4. Choose a **Type** and fill in how much comes off.
5. Set any of the optional limits you want (see the next section).
6. Leave **Active — families can apply this code right now** ticked, or untick it to save the code without switching it on.
7. Select **Create promo code**.

<Screenshot src="/img/screens/organizations/promo-codes-discounts.webp" alt="The Discounts tab under Money, listing four codes with their value, uses and Active status, with Money, Discounts and New code highlighted" url="famlo.co/co-op/sunnyside-learning/promo_codes" width={1280} height={800} />

You land back on the list with "Promo code EARLYBIRD created."

## What each field does

<Screenshot src="/img/screens/organizations/promo-codes-new-code.webp" alt="The New promo code form filled in with the code EARLYBIRD, Percent off 15, and One redemption per family ticked" url="famlo.co/co-op/sunnyside-learning/promo_codes/new" width={720} height={660} />

| Field | What it does |
| --- | --- |
| **Code** | What the family types. 3 to 50 letters, numbers, dashes and underscores, with no spaces. It's saved in capitals and "Case-insensitive; families can type it any way." Each code name can be used once in your organization. |
| **Type** | **Percent off** or **Fixed amount off**. |
| **Percent off** | A whole number from 1 to 100. Rounded to the nearest cent at checkout. |
| **Amount off** | A dollar amount. It never takes an order below $0. |
| **Minimum order (optional)** | "Only applies when the order subtotal is at least this much." The subtotal is your price before the booking fee. |
| **Starts (optional)** | Before this date and time the code shows as **Scheduled** and doesn't work. Leave it blank to start now. |
| **Expires (optional)** | After this date and time the code shows as **Expired**. Leave it blank for no end date. |
| **Max total redemptions (optional)** | How many times the code can be used in total, by everyone. "Leave blank for no cap." When you edit a code, this field also shows how many times it has been used. |
| **One redemption per family** | Each family can use the code once, on a booking or on dues, not both. |
| **Active — families can apply this code right now** | The on switch. Untick it to pause a code without deleting it. |

**Percent off** and **Amount off** share one spot on the form. Changing **Type** swaps one for the other, so you only fill in one.

You can't limit a code to certain classes, to members only, or to a number of months, and you can't let one family use it a set number of times above one.

## Statuses

Each code shows one status on the **Discounts** list, worked out from its own settings.

| Status | Why |
| --- | --- |
| **Active** | Families can use it now. |
| **Scheduled** | **Starts** is still in the future. It switches on by itself. |
| **Expired** | **Expires** has passed. Edit the date to bring it back. |
| **Limit reached** | **Max total redemptions** has been used up. |
| **Inactive** | **Active** is unticked. |

Each row also shows the value ("25% off" or "$5.00 off"), how many times it's been used (for example "3 of 50 used"), its date window, and **Minimum order** or **One per family** when those are set. Use **Edit** to change a code and **Delete** to remove it.

## Pause, change or delete a code

- **Pause:** select **Edit**, untick **Active — families can apply this code right now**, then **Save changes**. The code keeps its use count, and you can tick it again later.
- **Change:** select **Edit**, change any field, then **Save changes**. Bookings and memberships that already used the code keep the discount they got.
- **Delete:** select **Delete** and confirm "Delete promo code [CODE]? Families using it at checkout will stop getting the discount." This can't be undone. Families who already booked keep their discount.

To end a promotion but keep its history, pause the code instead of deleting it.

## Where families use a code

Codes work at the same checkout on famlo.co and on your own website.

| Where | What the family sees |
| --- | --- |
| Checkout for a class, single date, pack, service or shop item | **Have a promo code?** opens a **Promo code** box with **Apply**. Once it works, they see "[CODE] applied — 15% off" and a **Promo** line in the summary with the amount taken off. On a service booking, the box appears only while you have a code that's switched on and inside its dates. |
| A membership join form | **Discount code (optional)**. It comes off the first dues charge only. |
| A membership they already have | In **Account settings** › **Memberships**, **Have a discount code?** and **Apply code**. It comes off every renewal from then on. |

Codes don't work on:

- **Payment requests.** The amount you send is fixed. See [Payment requests](/docs/organizations/money/payment-requests).
- **Monthly prices that run with no end date.** The family sees "A promo code can't be used on ongoing monthly payments."

On a payment plan, the discount comes off the whole order and is spread across the payments.

If a code takes the whole price off, the family books without entering a card.

### Codes on membership dues

A code used on the join form comes off the first charge and nothing after. If you approve join requests, the code is used only when the charge goes through, so a denied request doesn't use it up. If the code can't be used (it's expired, say), the request still goes through at full price, and the form doesn't show an error.

A code a member applies to a membership they already have takes money off every renewal from then on. The discount is set as a dollar amount, worked out from their renewal price when they apply it. The family sees "Discount applied to your [Organization] membership.", or "That code couldn't be applied." if it can't be used. See [Membership dues](/docs/organizations/membership-dues).

## Offer a code to a member whose payment failed

When a member's dues payment fails, you can offer them one of your codes. You need Money set to **Take payments & refund** (by default, the Owner and the Bookkeeper).

1. Open **Money**, then **Dues**.
2. Find the member under the failed payments heading.
3. Choose a code from **Offer a discount…**. Only codes with **Active** ticked are listed.
4. Select **Offer**.

You see "Offered [CODE] to [name]." The family gets a notification and an email. In **Account settings** › **Memberships** they see "Your group offered you a discount" and a button to apply that code. Because it goes on a running membership, it comes off every renewal, so offer a modest amount.

## How a code affects the booking fee and your payout

You give the discount. It comes off your price, so you receive the discounted price.

The booking fee is worked out on what's charged to the family's card, after the promo code. So a smaller price also means a smaller fee. For example, a $100 class costs a family $108.95 with the fee. With a $50-off code, the class is $50 and the family pays $55.56, which includes a $5.56 booking fee. See [The booking fee](/docs/organizations/money/booking-fee).

If a family also has one of your scholarship awards or account credit with you, the promo code comes off first, then your scholarship award, then their credit. The card pays the rest.

## See which bookings used a code

Open a class, then its **Money** tab (you need money access to see it). In the payments table, the **Adjustments** column shows a pill with the code and the amount it took off, for example "SPRING25 −$2". If the code has since been deleted, the pill says "Discount". The **Discounts** figure at the top of the tab adds up promo codes together with your scholarship awards and credit families used on that class. See [Running a class: the class page](/docs/organizations/running/class-page).

## When a use counts

- A use counts when the payment goes through.
- If the payment fails or the family leaves checkout without paying, the use is given back.
- If a family cancels a booking, the use isn't given back. A **One redemption per family** code stays used for that family.

## Ideas

- **Early bird for a camp:** set **Expires** two weeks before the camp starts and tick **One redemption per family**. Codes can't be limited to one class, so share it only where you promote the camp.
- **First 50 families:** set **Max total redemptions** to 50 and leave the dates blank. The code shows **Limit reached** after the 50th use.
- **Launch on Monday:** set **Starts** to Monday morning. You can share the code now, and it won't work until then.
- **Welcome offer on dues:** share a code on your join page. It comes off the first charge only.

## Troubleshooting

**A family says the code doesn't work.**
At checkout, the message they see tells you why:

| The family sees | Why |
| --- | --- |
| "That promo code isn't valid for this organizer." | No code with that name exists in your organization. Check the spelling, or whether it was deleted. |
| "This promo code is no longer active." | **Active** is unticked. |
| "This promo code isn't available yet." | **Starts** is still in the future. |
| "This promo code has expired." | **Expires** has passed. |
| "This promo code has reached its redemption limit." | **Max total redemptions** is used up. |
| "This code requires a minimum order of $…" | The order, before the booking fee, is under the **Minimum order**. |
| "You've already used this promo code." | **One redemption per family** is on, and they've used it, on a booking or on dues. |
| "That promo code can no longer be used. Please try again." | The last use was taken while they were checking out. |

**A family used a code on the join form, but they paid full price.**
The join form doesn't show an error when a code can't be used. The request goes through at full price. Check the code's status and limits. Once they're a member, they can apply a working code in **Account settings** › **Memberships**, but it then comes off every renewal, not just one.

**I can't save the code name I want.**
Codes must be 3 to 50 letters, numbers, dashes or underscores, with no spaces. If you see "is already in use for this organization", another code has that name, even a paused one. Edit or delete the old code first.

**I can't find Discounts.**
You need School settings access: by default, the Owner and Co-leaders. Bookkeepers can offer codes from **Money** › **Dues** but can't create them. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

**I don't see Offer a discount… on the Dues page.**
It appears only next to members whose payment failed, and only when you have at least one code with **Active** ticked.

## What's next

- [Tickets and pricing](/docs/organizations/tickets-and-pricing): set the prices your codes discount, including members' prices and family rates.
- [Membership dues](/docs/organizations/membership-dues): dues, join requests and failed payments.
- [The booking fee](/docs/organizations/money/booking-fee): what families pay on top of your price.
- [Your own scholarship funds and awards](/docs/organizations/scholarships): give a family money off without a code.
