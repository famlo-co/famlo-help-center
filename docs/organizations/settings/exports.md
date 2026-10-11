---
sidebar_position: 3
title: Export your data (CSV)
description: Download your families, money ledger, registrations, class rosters, attendance and mailing list as CSV files, and see who can export each one.
keywords: [export families csv, export roster, attendance export, registrations spreadsheet, download mailing list, export ledger, famlo csv export]
audience: organizations
---

# Export your data (CSV)

You can download six lists from your console as CSV files: your families, the money ledger, registrations, a class roster, a class's attendance register, and your mailing list. Each file opens in Excel, Numbers or Google Sheets. Exports work on every Famlo plan, and each one is open to the people who can see that page.

## The six exports at a glance

| Export | Where | Who can run it, by default |
|---|---|---|
| Families | **People** › **Families** › **Export** | Owners, Co-leaders, Class organizers and Front desk |
| Money ledger | **Money** › **Families** › **Export** | Owners and Bookkeepers |
| Registrations | **Classes** › **Registrations** › **Export CSV** | Owners, Co-leaders and Class organizers |
| Class roster | A class › **Roster** tab › **Export CSV** | Owners, Co-leaders, Class organizers, Front desk, and Teachers for their own classes |
| Attendance register | A class › **Sessions** tab › **Export register**, or **Export term** on the class's **Attendance** list | Same as the class roster |
| Mailing list | **People** › **Mailing list** › **Export CSV** | Owners and Co-leaders |

"Who" follows each person's access, not a fixed job title. If you change someone's lines in **People** › **Staff & teachers**, what they can export changes with them. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

An **Export** button shows only when there is something to export. A new organization with no families yet won't see one on **People**, for example.

Each file is named after your organization (or the class) and the day you downloaded it, such as `sunnyside-learning-families-2026-10-10.csv`.

## Families

The list of every household that belongs to your organization or has a child in your classes.

1. Open **People** (1).
2. Stay on the **Families** tab and select **Export** (2).

<Screenshot src="/img/screens/organizations/exports-people-export.webp" alt="The People page with People in the console menu marked 1 and the Export button marked 2" url="famlo.co/co-op/sunnyside-learning/people" width={1280} height={800} />

Columns: **Family**, **Guardian**, **Email**, **Children**. People who can take payments and refunds also get a **Dues** column when your organization charges dues.

This file never includes allergies or other health details, even if you revealed them on screen.

People who can run it: anyone whose **Families & children** line is **View all** or **Add & approve**, anyone with **Edit settings**, and anyone who can add and edit staff. With the default roles that means Owners, Co-leaders, Class organizers and Front desk.

## Money ledger

What each family has been billed, has paid and still owes, one row per paying account.

1. Open **Money**.
2. On the **Families** tab, select **Export**.

Columns: **Family**, **Children**, **Billed**, **Paid**, **Owes**, **Dues status**. Amounts are in dollars. A household with two Famlo accounts appears as two rows, just as it does on screen.

People who can run it: anyone whose **Money** line is **View** or **Take payments & refund**. With the default roles, that means Owners and Bookkeepers. For more on the ledger itself, see [The Money place](/docs/organizations/money/money-overview).

## Registrations

Every registration across all your classes, in one file. The **Registrations** page shows only the latest 100, so the export is how you get the full history.

1. Open **Classes**, then the **Registrations** tab.
2. Set **Show** and **Activity** to what you want in the file.
3. Select **Export CSV** (1) at the top of the page.

<Screenshot src="/img/screens/organizations/exports-registrations-export.webp" alt="The Registrations page with the Show and Activity filters and the Export CSV button marked 1" url="famlo.co/co-op/sunnyside-learning/registrations" width={1280} height={800} />

The file follows your filters, with no 100-row limit. **Show** starts on **Confirmed & attended**, so choose **Everyone** and **All activities** if you want every registration you've ever had. When a list runs past 100, the page also offers an **Export for the full history** link under the table.

You can also start from **Money** › **Class payments**. When that list runs past 100, people who can also open Registrations see an **Every registration, as a spreadsheet** link at the bottom, which downloads every registration.

Columns: **Registered**, **Activity**, **Starts**, **Status**, **Parent**, **Email**, **Child**, **Ticket**, **Quantity**, **Amount**, **Scholarship**, **Paid via**, **Paid on**. No health details.

People who can run it: Owners, Co-leaders and Class organizers (anyone with **All classes** or **Edit settings**).

## Class roster

The full roster for one class, with each registration and the child's details. Use it for a field-trip contact sheet or to share with a substitute.

1. Open the class.
2. On the **Roster** tab, select **Export CSV** (1).

<Screenshot src="/img/screens/organizations/exports-roster-export.webp" alt="A class page on the Roster tab with the Export CSV button marked 1" url="famlo.co/co-op/sunnyside-learning/activities/chess-club-cape-coral-fl-zdpahxf72i" width={1280} height={800} />

Columns:
- The registration: **Registered**, **Status**, **Child**, **Age**, **Grade**, **Parent**, **Email**, **Ticket**, **Quantity**, **Amount**, **Scholarship**, **Paid via**, **Paid on**, **Checked in**.
- The child's health details, such as allergies and medical notes, and their emergency contact.
- What the family agreed to: **Terms signed by**, **Terms accepted at**, **Terms agreed to**.
- One column for each registration question you ask, with each family's answer. See [Registration questions and waivers](/docs/organizations/classes/questions-and-waivers).

:::warning Keep roster files private
A roster file can include children's health details and emergency contacts. Store it somewhere only the people who need it can open, and delete copies you no longer need.
:::

Health details in the file follow the same rule as the screen. For a child whose details you can't see, those cells say "Not shared". Famlo keeps a record each time a roster with health details is downloaded, just as it does when someone reveals them on screen.

People who can run it: Owners, Co-leaders and Class organizers, Front desk (they check in every class), and Teachers for the classes they're assigned to.

## Attendance register

The whole term's attendance for one class: one row per child per meeting.

1. Open the class.
2. On the **Sessions** tab, select **Export register**.

**Export term**, at the top of the class's **Attendance** list (the list of meetings you reach from a register's **All meetings** link), downloads the same file.

Columns: **Meeting date**, **Meeting**, **Child**, **Status**, **Method**, **Checked in at**, **Checked in by**, **Checked out at**, **Notes**. A canceled meeting still gets a row, marked "cancelled", so you can tell "called off" from "no register taken".

This file carries attendance only, never health details. Who can run it: the same people as the class roster. For taking attendance, see [Attendance, check-in and the sign-in QR](/docs/organizations/attendance).

## Mailing list

The families who asked you to email them, ready to import into the email tool you use.

1. Open **People**, then the **Mailing list** tab.
2. Select **Export CSV**.

Columns: `email`, `first_name`, `last_name`, `status`, `joined_on`, `unsubscribed_on`, `deliverable`, `source`.

- Only people who have confirmed are in the file. Someone who signed up on your website and hasn't clicked the confirmation email yet joins the export once they do.
- People who unsubscribed are never exported.
- Addresses that bounced or reported spam are still exported, with `deliverable` set to "no — bounced or complained", so you know why they won't get your email.

The **Export CSV** button shows once at least one person has confirmed. The **Mailing list** tab itself appears only when your organization can collect a list. People who can run it: Owners and Co-leaders (anyone with **Edit settings**). For how families get on the list, see [Your mailing list](/docs/organizations/communication/mailing-list).

## On a phone

At famlo.co in your phone's browser, every export downloads the same way it does on a computer.

A Famlo iPhone app is coming soon.

## What can't be exported

There's no export for:
- Messages and conversations with families.
- Testimonials.
- **Local insights**.
- Past announcements.

If you plan to close your listing, download the files you want to keep first. See [Closing your listing](/docs/organizations/closing-your-listing).

## Troubleshooting

**I don't see an Export button.**
Either there's nothing to export yet (no families, no registrations, nobody on the roster, or nobody confirmed on the mailing list), or your access doesn't include that page. Ask an Owner to check your lines in **People** › **Staff & teachers**.

**My registrations file is missing older or canceled bookings.**
The export follows the **Show** and **Activity** filters, and **Show** starts on **Confirmed & attended**. Choose **Everyone** and **All activities**, then export again.

**The roster file says "Not shared" in some health columns.**
Your access doesn't include that child's health details, so the file leaves them out, the same as the screen. Someone whose access covers the class can export them.

**The Families file has no Dues column.**
The column appears only for people who can take payments and refunds, and only when your organization charges dues.

## What's next

- [The Money place: ledger, class payments and who sees money](/docs/organizations/money/money-overview)
- [The Classes list and Registrations](/docs/organizations/running/classes-list)
- [Your mailing list](/docs/organizations/communication/mailing-list)
- [What staff can do: roles and access](/docs/organizations/members-and-roles)
- [Closing your listing](/docs/organizations/closing-your-listing)
