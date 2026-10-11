---
sidebar_position: 8
title: "How your classes appear on families' school records"
description: How attendance and bookings put your classes on each child's school record, what families see, and the two record settings you control.
keywords: [school record, homeschool transcript, attendance hours, confirm course completion, completion policy, school profile, student records]
audience: organizations
who: Owners and bookkeepers (for the two record settings)
---

# How your classes appear on families' school records

Every child on Famlo has a school record their parents use for transcripts, hours logs and other documents. Your classes land on it automatically, from the attendance you take and from the bookings families make. There's nothing to switch on. Two optional settings let you confirm completion and stand behind how Famlo describes your organization.

## How a class gets onto a record

Famlo adds one line per child, per class, per school year. A class that meets every week for a whole term is still one line, not one per meeting. Records update overnight, so a meeting you take attendance for today shows up on families' records the next day.

A line can come from two kinds of evidence:

- **Your attendance.** When you take attendance, the meetings a child was there for count, and their hours come from each meeting's start and end times. This is the stronger kind, and it wins whenever it exists.
- **A booking, if you never take attendance.** A child with a booking still gets a line. Famlo counts the meetings that have already happened, using the schedule you published, and shows them as *scheduled hours*, kept separate from hours you recorded. A booking still waiting for payment doesn't count. If a family cancels partway through, only the meetings up to the cancellation count.

<Screenshot src="/img/screens/organizations/student-records-family-view.webp" alt="A child's school record showing two classes from Sunnyside Learning Co., one with sessions attended and hours, one with meetings held and scheduled hours" url="famlo.co/family/members/2/record" width={892} height={332} />

Here is how this looks to a parent. **Math Circle** had attendance taken, so it reads "5 of 6 sessions · 7.5 hours". **Robotics Club** had bookings but no attendance, so it reads "4 meetings held · 6.0 scheduled hours". Both show your organization's name and the instructor.

The instructor is the teacher assigned to the class, or the name under **Who teaches** in the class editor. Placeholder names such as "Staff" or "TBD", or your organization's own name, are left off.

The school year runs from August 1 to July 31.

:::tip
Take attendance from the first meeting. Families' documents then list hours from your own check-in rather than from your schedule, and only classes with attendance can be confirmed automatically.
:::

## What each attendance status means for hours

| Status on the register | Counts toward the record? |
|---|---|
| **Present** | Yes. The meeting counts as attended and adds its hours. |
| **Late** | Yes, the same as Present. |
| **Excused** | No. The meeting doesn't count as attended and adds no hours. |
| **Absent** | No. The meeting doesn't count as attended and adds no hours. |

A few more rules:

- Recording a **Drop off** for a child marked **Absent** changes them to **Present**.
- A meeting without a start and end time still counts as attended, but adds no hours. The family sees a note that you didn't log session times, so set times on your meetings.
- Canceled meetings are left out. They don't count as attended or as missed.

To take attendance, see [Attendance and check-in](/docs/organizations/attendance).

## What families and other organizations can see

Parents see everything on their own child's record, from every organization the child attends. Your organization's part covers only the records your own classes created. You never see what another organization recorded for a child, or what a parent added themselves, and other organizations never see yours.

Families can rename a line from your class and add a subject, dates, credit and notes. They can't change hours you counted from your attendance. The edit form tells them to ask you to correct it, because your record is what a college would check against. Families can also hide a line from their documents, but they can't delete it. Hiding it doesn't change the attendance you took.

On the record and the transcript, each line from your class shows how it was established:

| Label | Transcript code | Meaning |
|---|---|---|
| **Provider records** | PR | Attendance or bookings from your organization, not individually confirmed |
| **Instructor confirmed** | IC | Confirmed, for example under your completion policy (below) |

For the family side, see [Your child's school record](/docs/families/school-records/school-record) and [Transcripts, diplomas and other documents](/docs/families/school-records/transcripts-and-documents).

## Confirm completion automatically

You can have Famlo confirm a course was completed once a child has attended enough of it. The confirmed line then shows **Instructor confirmed**, with "Confirmed under [your organization]'s completion policy" and the date. No person's name is added.

<Screenshot src="/img/screens/organizations/student-records-settings.webp" alt="School settings with If a family cancels selected and the Choose and Review and confirm links highlighted" url="famlo.co/co-op/sunnyside-learning/settings/enrollment" width={1280} height={760} />

1. Open **School settings**, then **If a family cancels** (1).
2. On **Confirming a course was completed**, select **Choose** (2), or **Change** if you set it before.
3. Pick an option under "When should Famlo confirm completion for you?".
4. Select **Save**.

<Screenshot src="/img/screens/organizations/student-records-completion-policy.webp" alt="The Confirming a course was completed row, open, with the four options and the Save button" url="famlo.co/co-op/sunnyside-learning/settings/enrollment/completion_policy/edit" width={728} height={597} />

| Option | Confirms a record when the child attended |
|---|---|
| **They attended most of it (80%)** | 80% or more of the class's meetings. The product calls this "The usual answer". |
| **They attended half of it (50%)** | Half or more. Suited to drop-in classes where nobody comes every week. |
| **They attended every session (100%)** | Every meeting. |
| **I'll confirm each one myself** | No automatic confirmation. Records keep the **Provider records** label. |

The row then reads, for example, "Confirmed automatically at 80% attendance", or "Not set — every record waits for you to confirm it".

How it works:

- It applies only to classes where you took attendance in Famlo. Lines that came from bookings alone have no attendance to measure, so they're never confirmed this way.
- Famlo checks overnight, as meetings run.
- Records already confirmed stay confirmed, including if you later change or remove the policy.

## How Famlo describes you on a student's records

Families can print a school profile to send to colleges and evaluators. It has a block for each organization the child learned with. Famlo builds yours from what actually happened, so you don't need to write it. It shows:

- Your organization's name, city and state, and what kind of organization you are.
- When the class met, how many sessions the child attended (or how many meetings were held), the hours and where they came from, and the dates.
- The courses the child took with you, and any confirmation.
- A short quote in your own words. If you haven't added one, it uses the start of your organization's description.
- Your organization's email, so a reader can check an enrollment with you directly.

You can review it and stand behind it:

1. Open **School settings**, then **If a family cancels**.
2. On **How Famlo describes you on a student's records**, select **Review and confirm** (3), or **Review** if you confirmed it before.
3. Read **What a family's document says**. Courses, sessions and hours come from your own records and can't be edited here.
4. Optionally, fill in **Anything to add (optional)**, such as an accreditation, who teaches or how you grade. Keep it to one or two sentences.
5. Tick **I confirm this is accurate**. This puts today's date on your block, so a reader knows how current it is.
6. Select **Save**.

The row then reads "Confirmed" with the date, and families' school profiles show "Confirmed by the organization" with that date. To withdraw your confirmation, untick the box and save. Until you confirm, families' documents still show your courses and hours, just without your sign-off.

## Who can change these settings

Both settings are on the **If a family cancels** page. Only people whose **Money** access is set to **Take payments & refund** can open it, which by default means owners and bookkeepers. Co-leaders can't. Anyone who takes attendance, including teachers for their own classes, feeds the records. See [What staff can do: roles and access](/docs/organizations/members-and-roles).

The same page holds your standard refund terms. See [Refund terms (If a family cancels)](/docs/organizations/classes/refund-terms).

## Troubleshooting

**A family says your class is missing from their child's record.**
Records update overnight, so check again the next day. A class appears only once at least one meeting has happened, or once the child was marked **Present** or **Late**. A booking that is still waiting for payment doesn't count.

**A family says the hours are wrong.**
Families can't change hours you counted. Check the register for that class: make sure the child is marked correctly and each meeting has a start and end time. Excused and Absent meetings add no hours.

**A record shows scheduled hours instead of attended ones.**
That class had bookings but no attendance, so Famlo used your published schedule. Taking attendance from a class's first meeting avoids this.

## What's next

- [Attendance and check-in](/docs/organizations/attendance)
- [Refund terms (If a family cancels)](/docs/organizations/classes/refund-terms)
- [What staff can do: roles and access](/docs/organizations/members-and-roles)
- [Your child's school record](/docs/families/school-records/school-record)
