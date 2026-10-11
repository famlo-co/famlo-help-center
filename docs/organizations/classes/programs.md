---
sidebar_position: 5
title: "Programs: families choose days, billed monthly"
description: Set up a program where families pick their days and pay monthly tuition, then follow enrolled families, failed payments and families leaving.
keywords: [program monthly tuition, families choose days, days a week pricing, registration fee, notice to leave, end enrollment, failed program payment]
audience: organizations
who: Owners, co-leaders and class organizers set it up; owners and bookkeepers manage its families
---

# Programs: families choose days, billed monthly

A program is a class where each family chooses which days their children come, and pays a monthly tuition based on how many days a week they picked. It suits things like learning days, forest school or after-school care that run all term. Families are billed by card on the 1st of each month until the program ends or they leave.

To take paid enrollments, your organization needs to be set up to take card payments. See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

## Set up a program

1. Open **Classes** and select **New class**.
2. Under **Or start from a shape**, choose **Program** ("Families choose their days, billed monthly").
3. Fill in the name, cover photo and **Where & what it is** as for any class. Use **When** for the dates the program runs and its daily start and end times. Every day you offer follows those dates and times.
4. In **Days & monthly tuition**, fill in the monthly prices and rules described below.
5. Finish **Everything else** and **Description**, then select **Publish**, or **Save draft** to come back later.

For the parts every class shares, see [Create and publish a class](/docs/organizations/activities).

<Screenshot src="/img/screens/organizations/classes-programs-editor.webp" alt="The Days & monthly tuition card in the class editor, with the monthly prices (1), Days offered (2), Registration fee (3), Notice to leave (4), Joining mid-month opened to its three choices (5) and Taking new families (6) numbered" url="famlo.co/co-op/thistledown-homeschool-co-op/activities/garden-learning-days/edit" width={678} height={1002} />

The line under the card's heading shows when billing runs, for example "Billed monthly by card, Aug 24 – Dec 11".

## Days & monthly tuition, field by field

Each row below the prices opens in place with **Change** and closes with **Done**.

| Field | What it does |
| --- | --- |
| **Monthly tuition by days a week** (1) | One monthly price for each number of days a family can pick: **1 day a week**, **2 days** and so on. "A month's tuition for each number of days a family picks. Billed on the 1st; leave one blank to not offer it." |
| **Days offered** (2) | The weekdays the program runs. "Families choose which of these days they come. Each day has its own spots and roster." |
| **Registration fee** (3) | An optional fee. "Charged when a family enrols, then once a year while they stay. Leave it blank for none." |
| **Notice to leave** (4) | **Days of notice**, from 0 to 365. It starts at 30. "A family leaving pays through the end of the month their notice ends in, and keeps coming until then." |
| **Joining mid-month** (5) | What a family who joins partway through a month pays for that first month. See the next section. |
| **Taking new families** (6) | On or off. "Off stops new enrolments, and the class stays listed. Families already enrolled keep their days." |

For example, with 30 days of notice, a family who gives notice on October 10 has notice that ends on November 9. They pay through November 30 and keep coming until then. Notice never runs past the program's last day.

A program's leaving rule takes the place of refund terms. In **Everything else**, the **If a family cancels** row shows it, for example "30 days' notice to leave, paid through the end of that month". To learn how refund terms work on other classes, see [Refund terms (If a family cancels)](/docs/organizations/classes/refund-terms).

### Joining mid-month

The card asks: "A family joins on the 18th. What do they pay for that first month?" Each choice shows a worked example using your own prices.

| Choice | What the family pays for their first month |
| --- | --- |
| **Prorate the first month** (the default) | "Only the days left in the month." Then the full monthly price from the 1st. |
| **Charge the full month** | The full monthly price at sign-up, "whatever the date". |
| **Start next month** | Nothing for the current month. They start, and pay the monthly price, on the 1st of the next month. |

### Money on a program

- Programs are billed monthly by card. Each family pays the price for the number of days they chose, plus the registration fee if you set one.
- Families pay a booking fee on each monthly charge, so you receive the full price you set. You can choose to pay it yourself instead. See [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee).
- The price families see on the listing starts from your lowest monthly price.

### Changing a program after families enroll

- **Days offered**: you can add a day at any time. You can't take away a day that families are enrolled on. Saving shows, for example, "Mondays can't be taken away — families are enrolled on that day."
- **Monthly prices**: clearing a price removes that option, unless families are already paying on it. Then it stays, and they keep paying it.
- **Taking new families**: turn it off to stop new enrollments without unlisting the program.

A program can't be split into sections. See [Split a class into sections](/docs/organizations/classes/sections).

## See who's enrolled: the Families tab

A program's class page has a **Families** tab. Only people whose **Money** access is set to **Take payments & refund** see it: by default, the Owner and the Bookkeeper.

1. Open **Classes**, then open the program.
2. Select the **Families** tab (1).
3. Select a family (2) to open their details in a side panel.

<Screenshot src="/img/screens/organizations/classes-programs-families-tab.webp" alt="A program's class page with the Families tab (1) selected, showing 3 enrolled, 1 past due and 1 leaving, and a family whose payment didn't go through (2) at the top of the list" url="famlo.co/co-op/thistledown-homeschool-co-op/activities/garden-learning-days?tab=families" width={1280} height={800} />

The line at the top counts families, for example "3 enrolled · 1 past due · 1 leaving". Each row shows the family name and children, their days, and where they stand. Families with a failed payment come first, then families who are leaving.

| What a row says | What it means |
| --- | --- |
| "paid through Oct 31" | Enrolled and paid up to that date. |
| "Oct 1 payment didn't go through" (in red), then "Stripe tries again Oct 13" | A monthly payment failed. Stripe is retrying the card. Once Stripe stops retrying, the row says "Stripe stopped retrying". |
| "leaving · paid through Nov 30" | The family gave notice, or an end date was set. They keep coming until that date. |

The side panel shows the family's **Children**, their **Days** with the monthly price and when they joined, the parent's name and email, and their **Status**. It also lists their **Payments**. If the family has asked to switch days, a **Changing** row shows the new days and the date they start. Their current days stay until then. A family who gave notice may have left a note, which shows as **Their note**.

## When a payment doesn't go through

If a monthly card payment fails, nothing is canceled. The child keeps their place, Famlo emails the family, and Stripe tries the card again.

You see it in two places:

- On the program's **Families** tab, at the top of the list, and in the family's side panel. The panel says, for example, "Oct 1 · $300 didn't go through. Stripe tries again Oct 13. We emailed Priya." and "Leo keeps a place. Nothing is cancelled unless you do it."
- On **Today**, under **Needs you**, for example "Nair family's Oct 1 payment didn't go through", with **Review**. Several failed payments show as one row, such as "2 payments didn't go through".

**Needs you** also lists families who gave notice, for example "Holt family gave notice for Garden Learning Days", with the child, their last day and any note. You don't need to approve notice. The row is there so you know a place is about to open.

These rows show only for people whose **Money** access is set to **Take payments & refund**.

If the family can't pay, you can contact them through **Messages**, or end the enrollment as described below.

## End a family's enrollment

Families usually leave by giving notice from their own account. You can also end an enrollment yourself.

1. Open the program's **Families** tab and select the family.
2. In the side panel, select the child's end link (1), for example **End Leo's enrollment…**. With more than one child on the enrollment it reads **End this enrollment…**.
3. Choose when it ends:
   - **At the end of the month they paid for**: select the **End on** button, for example **End on Oct 31**. Nothing is refunded, and the child keeps coming until then.
   - **Today**: select **End today**. Their days are freed now. The panel shows how much goes back to their card, or that nothing is refunded.
4. Confirm. The confirmation repeats the end date and the refund before anything happens.

<Screenshot src="/img/screens/organizations/classes-programs-end-enrollment.webp" alt="A family's details on a program, with a payment that didn't go through and End Leo's enrollment (1) opened to its two choices, End on Oct 31 and End today" url="famlo.co/co-op/thistledown-homeschool-co-op/program-families/3" width={1280} height={800} />

"Either way Stripe stops billing them, and their days open up for another family." If the family had already given notice, ending at the end of the month never moves their end date later. Ending an enrollment also drops any change of days the family was waiting on.

Famlo doesn't email the family when you end an enrollment, so let them know through **Messages**.

## Troubleshooting

**I can't see the Families tab.**
It shows only on programs, and only to people whose **Money** access is set to **Take payments & refund**. Co-leaders and class organizers don't see it by default. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

**I can't remove a day from the program.**
Families are enrolled on that day. End those enrollments first, or keep the day.

**I can't delete the program.**
A program with enrollments can't be deleted. If families are still paying, Famlo tells you to "Cancel their enrollments first — that is what stops the money." If every enrollment has ended, the program stays, because the enrollments are the record of what families paid.

**A family says they want to change days.**
Families change their own days from their account. You'll see the change in their side panel under **Changing**. To see what families see, read [Enrolling in a program](/docs/families/booking/programs).

## What's next

- [Create and publish a class](/docs/organizations/activities)
- [Running a class: the class page](/docs/organizations/running/class-page)
- [The booking fee, and paying it yourself](/docs/organizations/money/booking-fee)
- [Enrolling in a program](/docs/families/booking/programs) (what families see)
- [Your console and Today](/docs/organizations/getting-started/your-console)
