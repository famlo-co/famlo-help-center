---
sidebar_position: 8
title: Publish, schedule and restore versions
description: Publish your website changes now or at a set time, cancel or move a schedule, and view or restore an earlier version of your site.
keywords: [publish website, schedule website changes, website version history, restore old version, undo website changes, scheduled publish failed, website draft]
audience: organizations
who: Owners and co-leaders
plan: Website plan
---

# Publish, schedule and restore versions

Changes you make in the on-page editor stay in a draft until you publish them. You can publish now, or pick a time and Famlo publishes for you. Every publish is saved in version history, so you can look at an earlier version or bring it back. You need the [Website plan](/docs/organizations/getting-started/famlo-plans) and **Edit settings** on the **School settings** line, which Owners and Co-leaders have.

## Publish your changes

1. Open **Website**, then select **Edit your website**.
2. Make your changes. The top bar says **Saved · draft** once they're saved.
3. Select **Publish** in the top bar. The **Publish your changes?** dialog opens.
4. Check the list under **What changes** (1).
5. Under **When** (2), leave **Publish now** selected.
6. Select **Publish now** (3).

<Screenshot src="/img/screens/organizations/website-publishing-and-history-publish-dialog.webp" alt="The Publish your changes? dialog, with the What changes list, the When choices and the Publish now button highlighted, and Version history on the right" url="famlo.co/co-op/bramblewood-learning-co-op/website/editor" width={1040} height={620} dark={false} />

Famlo says **Published.** and how soon families will see it, usually within a few minutes. Select **View it live ↗** to open the page on your site. The top bar then says **Up to date**.

What the dialog shows:

- **The header** names your web address and how many pages changed, or "site settings changed".
- **What changes** lists each change, with counts such as **1 edited**, **1 added** or **1 removed**. Select **Show** beside a change to jump to it on the page.
- **Version history** is on the right (see [Version history](#version-history)).
- "Your draft stays saved if you close this." Select **Keep editing** or the close button to go back without publishing.

Publishing puts out the whole draft, including changes other people on your team made in the editor. When there's nothing new, **Publish** is grayed out, with the tooltip **Nothing new to publish**.

If you haven't connected your own web address yet, you can still publish. Your site goes online once your domain connects. See [Connect your own domain](/docs/organizations/website/custom-domain).

:::note
Changes on the **Theme**, **Logo & icon**, **Details**, **Domain** and **Connections** tabs, and the **In menu** switches on the **Pages** tab, go live when you save them. They don't wait for **Publish**. See [Your Famlo website: what you get](/docs/organizations/website/overview).
:::

## Schedule changes for later

Use a schedule for a new term or an announcement that should appear at a set time.

1. In the editor, select **Publish**.
2. Under **When**, select **Schedule**.
3. Pick the date and time. It starts at next Monday, 7:00 AM, and times go in 5-minute steps.
4. Select **Schedule**.

The time is in your organization's time zone, the one set in **School settings**, not your computer's. The time must be at least 10 minutes from now and within the next year. Otherwise you see "Pick a time at least ten minutes from now." or "Pick a time within the next year."

Famlo publishes within 5 minutes of the time you chose. Until then:

- The top bar shows the time, for example **Scheduled · Mon, Oct 12, 7:00 AM**, and the **Publish** button reads **Scheduled ▾**.
- You and your team can keep editing. "Your newer edits go out too", so whatever is in the draft at that time is what goes live.
- Families keep seeing your site as it is now.

## Change or cancel a schedule

Select **Scheduled ▾** in the top bar. The dialog shows **Scheduled for** and the date and time.

| To | Do this |
|---|---|
| Move it | Select **Change the time**, pick a new date and time, then select **Change time**. |
| Publish straight away | Select **Publish now instead**, then **Publish now**. |
| Cancel it | Select **Cancel schedule**. "Schedule cancelled. Your changes stay in your draft." |

## Version history

Each time you publish, Famlo saves that version of your whole site. Open the list with **History** in the editor's top bar. On a smaller screen, open the page menu at the top and choose **Version history**. The list is also on the right of the **Publish** dialog.

<Screenshot src="/img/screens/organizations/website-publishing-and-history-history.webp" alt="The Version history list, with View and Restore highlighted on an older version" url="famlo.co/co-op/bramblewood-learning-co-op/website/editor" width={360} height={472} dark={false} />

The list shows:

- **Your draft**, with **Now** and who edited it last, when you have unpublished changes.
- Each published version with its date and time, newest first, and up to 20 of them. The one families see has a **Live** badge.
- Who published it: **Published by you**, or a teammate's name. **(scheduled)** means it went out on a schedule.
- **Restored from** and a date, when that version started as a restored copy.
- **Your site when the page editor arrived**: the version saved when the on-page editor first opened on your site.

Select **View** (1) beside an older version to open it in a new tab. It's a look only: you can't edit it, and its links don't go anywhere.

## Restore an earlier version

1. Open version history.
2. Find the version you want and select **Restore** (2).
3. If you have unpublished changes, Famlo asks "Replace your draft with" that date. "Your unpublished changes will be replaced." Select **Replace draft**, or **Cancel** to keep them.

The editor reloads with that version as your draft: "Restored the version from" the date. "Nothing changes for families until you publish." Check the pages, then [publish](#publish-your-changes) when you're ready.

Restoring replaces the whole draft. It doesn't mix in your newer changes. Things to know:

- Pages you deleted since that version come back, with their photos where Famlo still has them.
- If a returning page's address is now used by another page, it gets a new one. Famlo tells you, for example "About now lives at /about-2".
- If that version's logo no longer exists, your current logo stays: "Your logo from that version no longer exists, so your current logo stays."

## If a scheduled publish doesn't go out

Famlo emails you when scheduled changes couldn't be published. Families keep seeing your site as it was.

| Email | What happened | What to do |
|---|---|---|
| **Your scheduled website changes couldn't go live** | Something on a page or in your settings needs fixing. The email says what. It goes to the person who scheduled it, at most once a day. | Select **Open the editor** and fix it. The changes stay scheduled and go out at Famlo's next check, which runs every 5 minutes. |
| **Scheduled website changes for** your organization **were not published** | The person who scheduled them can no longer edit the website, for example after their access changed or they left your team. It goes to your organization's owner, and to that person if they still have an account. | The changes are kept as a draft and no longer scheduled. Open the editor and publish them, or schedule them again. |

When a schedule comes due, Famlo checks that the person who set it can still edit your website, and publishes in their name.

## Troubleshooting

**The dialog says "This needs fixing first:" or "These need fixing first:".**
Something in your draft can't be published yet. Each problem is listed, with **Show** where it points to a place on a page. Fix it, then select **Publish** again.

**It says "Someone is publishing right now. Try again in a moment."**
Someone else on your team is publishing. Wait a moment and try again.

**A box says "Your site was just published".**
Someone else published while you were editing. Reload to keep working. If your last change wasn't saved, the box shows it so you can copy it.

**Publish is grayed out.**
Nothing in the draft differs from your live site. The tooltip says **Nothing new to publish**.

**I published, but my site isn't online.**
Your site needs a web address you own. See [Connect your own domain](/docs/organizations/website/custom-domain) and [Domain troubleshooting](/docs/organizations/website/domain-troubleshooting).

## What's next

- [Edit your website on the page](/docs/organizations/website/editor)
- [Pages, your menu, and who can see each page](/docs/organizations/website/pages-and-menu)
- [Set up your website](/docs/organizations/website/setup-wizard)
- [Connect your own domain](/docs/organizations/website/custom-domain)
