---
slug: /organizations/attendance
sidebar_position: 3
title: Attendance, check-in and the sign-in QR
description: Take attendance on the register, record drop-off and pick-up, let parents sign in by QR code, and export the term's attendance.
keywords: [take attendance, check in, drop off and pick up, sign-in QR code, attendance register, export attendance, attendance reminder]
audience: organizations
who: Owners, Co-leaders, Class organizers, Front desk, and Teachers for their own classes
---

# Attendance, check-in and the sign-in QR

Each meeting of a class has its own register, sized for a phone at the door. On it you mark who was there and record when each child was dropped off and picked up. Parents can also sign their own children in and out by scanning a QR code. Attendance is included on every Famlo plan.

## Take attendance

1. On the day, open the class and select **Take attendance** on the meeting card. You can also use **Take attendance** on **Today**, or on a meeting in **Schedule**.
2. On the register, select a status for each child (1).
3. When a child arrives, select **Drop off** (2).
4. When a child leaves, select **Pick up**.

<Screenshot src="/img/screens/organizations/attendance-register.webp" alt="A register on a phone with a child's status buttons, the Drop off button and Show sign-in QR highlighted" url="famlo.co/co-op/sunnyside-learning/activities/weekly-co-op-morning-83sqm9ojbj/attendance/76" width={390} height={844} />

Before the meeting day, the class page says "Take attendance appears here on the day." To open a register on another day, use the class's **Sessions** tab: select **Open check-in** for a meeting that's coming up, or **View** for one that already has a register. A past meeting with no register shows "No register taken" there. To take it late, open any register and select **All meetings**: the **Attendance** page lists every meeting, past and upcoming, and each one opens its register.

The header shows how many children are here, for example "2 / 8 present". **Present** and **Late** count toward that number. **Excused** and **Absent** don't.

When nothing else is scheduled, for example between terms, **Today** also reminds you of registers you missed: "Record attendance for your last class" under **Also this week**, with a **Record** button. It covers meetings from the last two weeks that had children booked and no register.

## Statuses, drop-off and pick-up

Each child's card shows their photo, their name and the parent who booked. Any allergies, special needs and medical notes appear on the card too, so you can see them at the door.

| Control | What it records |
|---|---|
| **Present**, **Late**, **Excused**, **Absent** | Whether the child was here. Only one applies at a time. Selecting another one replaces it. |
| **Drop off** | The time the child arrived and who recorded it. The button becomes "Dropped off" with the time. |
| **Pick up** | The time the child left and who recorded it. It stays grayed out until a drop-off is recorded. |

Drop-off and attendance work together:

- If you record a drop-off for a child with no status yet, they're marked **Present**.
- A drop-off also moves an **Absent** child to **Present**. A **Late** or **Excused** status stays as you set it.
- A child marked **Present** or **Late** shows a **Here** badge.

:::warning
A drop-off or pick-up time can't be cleared or changed once it's recorded. If you tapped the wrong child, keep a note of the correction yourself.
:::

### Late pickups

If your organization charges for late pickups, **Pick up** turns into **Pick up · late** once the class end time plus your grace period has passed. Selecting it opens **Charge late pickup?** with the pickup time, the minutes late and the amount at your rate. For a per-minute charge you can adjust the minutes. Then select **Picked up · send $X request** to send the family a payment request, or **Picked up, no charge**. Both record the pickup. Nothing is charged to a card. The family pays the request when they're ready.

This only appears when a **Late pickup** charge is set up in **Money** › **Charges** and the meeting has an end time. See [Ask a family to pay](/docs/organizations/money/payment-requests) to set one up.

### Classes with sections

A class split into sections has a register for each section. Use the section switch at the top of the **Attendance** page to move between them.

## Let parents sign in with a QR code

Every meeting has its own sign-in code. Parents scan it with their phone and record their own child's drop-off and pick-up, so you don't have to tap each one.

1. On the register, select **Show sign-in QR** (3). On **Today**, the class that's running now also has a **Sign-in QR** button.
2. Leave the **Scan to sign in** page on a screen at the door, or select **Print this code**.

<Screenshot src="/img/screens/organizations/attendance-qr.webp" alt="The Scan to sign in page with a QR code, the class name, the date and Print this code" url="famlo.co/co-op/sunnyside-learning/activities/weekly-co-op-morning-83sqm9ojbj/attendance/76/qr" width={390} height={844} />

The code is for one meeting only, and the page shows that meeting's class and date. Print a new one for each meeting.

### What parents see

Under the code it says: "Parents: scan with your phone camera, sign in to Famlo if asked, then tap to drop off or pick up your children."

After signing in, a parent sees only their own children who are booked into that meeting. Each child has one button, **Drop off** or **Pick up**, followed by the child's first name. The child's line shows "Not signed in yet", "Dropped off at 9:02 AM by you" (or by the name of whoever recorded it), and then "All done for today" after pickup.

- Parents can only record drop-off and pick-up. **Present**, **Late**, **Excused** and **Absent** are set by your staff.
- A parent's drop-off counts the same as yours, so the child shows as **Present** on your register.
- If none of their children are booked into that meeting, they see "Nobody in your family is registered for this meeting" and a **Check your registrations** button.

## Who can take attendance

| Role | Registers they can open |
|---|---|
| **Owner**, **Co-leader**, **Class organizer** | Every class |
| **Front desk** | Every class. They check every child in and out and can look families up, but they don't see the Classes list. |
| **Teacher** | Only the classes they're assigned to |
| **Custom** | Depends on the **Attendance** line: **Their own classes** or **Everyone** |

To change what someone can do, see [What staff can do](/docs/organizations/members-and-roles). To assign a teacher to a class, use the class's **Instructors** tab.

## The register and the roster check-in

The class's **Roster** tab also has a **Check in** button and an **Undo** link for each booking, plus a count like "6 / 10 checked in". It's a quick way to tick people off at the door. Here's how it differs from the register:

| | Register | Roster **Check in** |
|---|---|---|
| Records | A status for each meeting, plus drop-off and pick-up times | That the booking was checked in |
| Corrections | Change the status any time. Times can't be cleared. | **Undo** |
| Counts toward families' school records | Yes | No |
| In the attendance export | Yes | No |

For classes that meet more than once, use the register.

## Attendance reminders

On the day of a meeting with children booked, if the register isn't complete yet, Famlo sends a reminder to take attendance. Each person gets one reminder per meeting, in their Famlo notifications. It isn't emailed. It goes to the people who run your classes and check-in: owners, co-leaders, class organizers and Front desk.

To turn reminders off for one class:

1. Open the class, select **•••**, then **Edit details**.
2. Under **Everything else**, open **Reminders**.
3. Untick **Remind the teacher to take attendance**, then save your changes.

That turns them off for every meeting of the class. To stop them only for yourself, open **Account settings** › **Notifications** and change **Team updates**. That category also covers role changes, join requests and roster changes.

## Export attendance

You can download a class's attendance for the whole term as a CSV file:

- On the class's **Sessions** tab (1), select **Export register** (2).
- Or on the **Attendance** page, which lists every meeting, select **Export term**.

<Screenshot src="/img/screens/organizations/attendance-sessions.webp" alt="A class page with the Sessions tab and the Export register button highlighted, above a list of meetings with their attendance" url="famlo.co/co-op/sunnyside-learning/activities/homeschool-pe-5w3otvbree?tab=sessions" width={1280} height={800} />

Both give you the same file, with one row for each child who has an attendance record at a meeting. The columns are Meeting date, Meeting, Child, Status, Method (staff or parent QR), Checked in at, Checked in by, Checked out at and Notes. A canceled meeting gets its own row marked "cancelled", so you can tell it apart from a meeting where nobody took the register. The file doesn't include allergies or medical notes.

For roster and registration exports, see [Export your data](/docs/organizations/settings/exports).

## Attendance and families' school records

Every night, Famlo uses the attendance you take to put your classes on each child's school record. Meetings where a child is **Present** or **Late** count, and **Absent** or **Excused** don't. You don't have to do anything else. See [How your classes appear on families' school records](/docs/organizations/running/student-records).

## Troubleshooting

**I can't find Take attendance.**
On the class page, it only appears on the meeting card on the meeting day. On other days, use the **Sessions** tab. If you still can't see it, your access may not cover attendance for this class. Ask an owner to check your access in **People** › **Staff & teachers**.

**A child is missing from the register.**
The register lists children with an active booking for that meeting. Check that the family finished registering, and that they booked this date or the whole term. A canceled booking drops off the register.

**The Attendance page says "No meetings scheduled yet."**
The class has no date. Set one in the class's details, then open attendance again.

**Pick up won't respond.**
It stays grayed out until a drop-off is recorded for that child. Select **Drop off** first.

**I marked the wrong status.**
Select the right one on that child's card. It replaces the old one.

**A parent says the code doesn't work.**
They need to sign in to Famlo with an account in the family that made the booking, and their child needs a booking for that meeting. Check that they scanned the code for today's meeting.

## What's next

- [Running a class: the class page](/docs/organizations/running/class-page)
- [What staff can do: roles and access](/docs/organizations/members-and-roles)
- [Ask a family to pay: payment requests and saved charges](/docs/organizations/money/payment-requests)
- [Export your data (CSV)](/docs/organizations/settings/exports)
- [How your classes appear on families' school records](/docs/organizations/running/student-records)
