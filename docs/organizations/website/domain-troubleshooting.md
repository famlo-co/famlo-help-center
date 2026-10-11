---
sidebar_position: 10
title: Domain troubleshooting
description: What each problem message in Website › Domain means and how to fix it, from a missing www record or Cloudflare's proxy to paused sign-in.
keywords: [domain not connecting, www record not found, domain points to wix, cloudflare dns only grey cloud, website padlock https, sign-in is paused, we stopped waiting for domain, famlo custom domain problem]
audience: organizations
who: Owners and co-leaders (anyone with School settings set to Edit settings)
plan: Website plan
---

# Domain troubleshooting

When your web address won't connect, or stops working, **Website** › **Domain** tells you what Famlo found, in one sentence. This page explains each of those messages and how to fix it. To connect an address for the first time, start with [Connect your own domain](/docs/organizations/website/custom-domain).

## Start here

1. Open **Website**, then **Domain**.
2. Read the message under **Last check** (1). It says what Famlo saw the last time it looked at your record.
3. Sign in at the company you bought your domain from and open its DNS settings. Fix the record (2) as the section below for your message describes. Copy the **Value** from the console with **Copy** instead of typing it.
4. Come back and select **Check now** (3).

<Screenshot src="/img/screens/organizations/domain-troubleshooting-waiting.webp" alt="Website, Domain tab, Waiting for your records: the Last check box saying Your www record points to Wix, not Famlo as 1, the CNAME record with Name www as 2, and the Check now button as 3" url="famlo.co/co-op/cedar-hollow-learning-co-op/website/domain" width={624} height={898} />

As the console puts it, "Changes usually show up within an hour, sometimes up to a day." You don't have to keep pressing **Check now**: Famlo checks every hour and emails you when the address works.

The messages name the record they're about. For www.yourschool.org that's your **www** record. If you connected a subdomain such as classes.yourschool.org, the message names that record instead, for example "your classes record".

## "We can't see a www record yet."

Famlo found no record for www at all. Either it hasn't been added, or it hasn't spread across the internet yet.

- Check that you added a `CNAME` record with **Name** `www` and the exact **Value** from **Website** › **Domain**.
- Make sure it was added to the domain you typed in Famlo, not to a different one you own.
- If you added it a few minutes ago, give it time. Changes can take up to a day to show.

## "Your www record points to Wix, not Famlo."

Your www record still sends visitors to another service, usually the one that hosted your old website. Famlo names the company when it can: Wix, Squarespace, Shopify, Weebly, GoDaddy's parking page, GitHub Pages, Google Sites, Netlify or Vercel. When it can't, it shows the address or name the record points to instead, as in "Your www record points to 203.0.113.7, not Famlo."

To fix it:

1. In your domain company's DNS settings, find the record named **www**. It may be a CNAME or an `A` record.
2. Delete it. As the console says, "Delete any older record with the same name."
3. Add the `CNAME` record shown in **Website** › **Domain**.
4. Select **Check now**.

If you bought the domain through your old website builder, its DNS settings are usually in that builder's account. Once www points at Famlo, your old site no longer opens at that address. To keep old links working, add them under **Old addresses** (see [Connect your own domain](/docs/organizations/website/custom-domain)).

## "Your www record goes through Cloudflare's proxy."

Your domain's DNS is at Cloudflare, and the www record has the orange cloud turned on. That hides your record from Famlo.

1. In Cloudflare, open your domain's DNS records.
2. Edit the **www** record and set its proxy status to **DNS only** (the gray cloud).
3. Save it, then select **Check now** in Famlo.

## "Your www record points to an older Famlo address."

Your record points at Famlo, but not with the value for this address. Each address you connect gets its own value, so a value copied from an earlier setup, a different address or another guide won't work.

1. Open **Website** › **Domain** and copy the **Value** of the `CNAME` record.
2. At your domain company, edit the www record and paste that value in.
3. Select **Check now**.

## "We couldn't look up your www record just now."

Famlo asked for your record and didn't get an answer. This is often brief. Wait a little, then select **Check now**. If the message is still there a day later, ask your domain company to check that the domain is active and its DNS settings are answering.

## The padlock (https) is being set up, or failed

When Famlo finds your record, the address shows **Almost ready** and **Securing your site**: "We're setting up the padlock (https) for your address. This takes a few minutes. You don't need to do anything." Your site isn't live until this finishes, and Famlo emails you the moment it is.

Sometimes a line appears under it:

| What it says | What to do |
| --- | --- |
| "… doesn't reach Famlo yet. Make sure it's a CNAME record pointing to …, then press Check now." | Check the www record is a `CNAME` with the exact value shown. If it is, this usually clears on the next check. Select **Check now**. |
| The address "is already connected to another website" | Another service still has your address set up. Remove the address from that service, then select **Check now**. |
| "We couldn't start securing …" | Select **Check now** to try again. If it keeps happening, [contact Famlo Support](/docs/account/support). |
| The security certificate couldn't be issued, was withdrawn, ran out or is switched off | Select **Check now** to request a new one. |

On an address that's already live, "We couldn't set up the padlock (https) for your address." can also appear on the **Live** card, with a **Check now** button. Select it to try again.

## Sign-in is paused on your address

If a live address stops pointing at Famlo, the line under **Website** changes to "www.yourschool.org · Needs attention" and the **Domain** tab shows **Not pointing at Famlo**. Famlo checks twice, an hour apart, before it does this, then emails you once with the subject "Sign-in is paused on www.yourschool.org". The email goes to the person who created or claimed the listing and everyone with **School settings** set to **Edit settings**.

While it's paused:

- Your pages and classes still show at your address.
- Signing in there is paused. Parents who try are sent to sign in on famlo.co, where their account and bookings are unchanged.
- Families who were signed in on your site are signed out, and sign in again once it's fixed.

The email says this usually means "the domain's registration lapsed, or a DNS record was changed at the company you bought it from." To fix it, renew the domain if it has lapsed, then put the `CNAME` record back exactly as **Website** › **Domain** shows it, and select **Check now**. One good check reconnects it. Use the value in the console, not the address named in the email.

## "We stopped waiting for www.yourschool.org"

Famlo holds an address for seven days while you set up its records. The **Domain** tab shows the date: "We'll hold this address for you until …". If Famlo never sees the records in that time, it lets the address go and emails you "We stopped waiting for www.yourschool.org". Nothing on your site changes.

To start again, open **Website** › **Domain**, type the address and select **Next: connect it**. If you already added the CNAME record, you don't need to change it: the same address gets the same value when your organization adds it again. Then fix whatever the message under **Last check** says.

## Messages when you add an address

| Message | What it means |
| --- | --- |
| "is already registered to another organization" | Another Famlo organization has this address connected. Check you typed your own domain. If it's yours, [contact Famlo Support](/docs/account/support). |
| "is one of Famlo's own" | Famlo addresses can't be used. Your site needs a domain you own. |
| "must be a bare domain like www.example.com" | Check the address for typos. Use only letters, numbers, hyphens and dots, like yourschool.org. |
| "You're already setting up …. Cancel that first to use a different address" | One address at a time. Cancel the one in progress first. |
| "Finish setting up your current address, or remove it, before choosing another." | Same: finish or cancel the current one first. |
| "A web address of your own comes with the Website plan" | Your organization needs the **Website** plan. See [Famlo plans](/docs/organizations/getting-started/famlo-plans). |

More than one organization can start setting up the same address. The first one whose record points at Famlo gets it, and the others' claims are dropped. If your address disappears from **Website** › **Domain** while you were still setting it up, that's what happened.

## What Check now can say

| Message | Meaning |
| --- | --- |
| "It's working — your site is live at …" | Done. |
| "Found it. We're securing … now" | Your record is right. The padlock takes a few minutes. |
| "All good: … points to Famlo." | Nothing to fix. |
| "Not yet — see what we found below." | Read the message under **Last check**. |
| "We checked a moment ago. Give it a few seconds, then try again." | Wait a few seconds. |
| "We couldn't check just now. Please try again in a minute." | Try again in a minute. |

## Troubleshooting

**My site opens at www.yourschool.org but not at yourschool.org.**
The address without www uses the second record: an `A` record named `@` whose value is the address shown in Famlo, on your website's **Domain** tab. Famlo's checks look at the www record, so the console can't tell you if this one is missing. Add it at your domain company, or fix its value.

**My site says "This website is taking a short break".**
That isn't a domain problem. It shows when your organization's **Website** plan has ended or a payment failed. Nothing is deleted, and paying again brings the site back. See [Famlo plans](/docs/organizations/getting-started/famlo-plans).

**I don't see the Domain tab.**
Every **Website** screen needs **School settings** set to **Edit settings**. See [What staff can do](/docs/organizations/members-and-roles).

**I've tried everything and it still won't connect.**
[Open a ticket with Famlo Support](/docs/account/support). Include your address and the message under **Last check**.

## What's next

- [Connect your own domain](/docs/organizations/website/custom-domain)
- [Your Famlo website: what you get](/docs/organizations/website/overview)
- [Famlo plans: Free, Scholarship and Website](/docs/organizations/getting-started/famlo-plans)
- [Get help from Famlo Support](/docs/account/support)
