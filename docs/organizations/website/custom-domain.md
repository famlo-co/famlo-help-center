---
sidebar_position: 9
title: Connect your own domain
description: Put your Famlo website on a web address you own. Add two DNS records, follow the status in Website › Domain, and change or forward addresses.
keywords: [connect domain to famlo, custom domain famlo website, cname www famlo, dns records for my website, point my domain to famlo, change website address, show in google search, redirect old website pages]
audience: organizations
who: Owners and co-leaders (anyone with School settings set to Edit settings)
plan: Website plan
---

# Connect your own domain

Your Famlo website goes online at a web address you already own, like www.yourschool.org. You type the address in **Website** › **Domain**, add two records where you bought it, and Famlo connects it, usually within an hour. You need the **Website** plan and **School settings** set to **Edit settings**.

## Before you start

- **A domain you own.** Famlo doesn't sell or register domains. If you don't have one yet, buy it from any domain seller first. There's no free famlo.co address for your website.
- **A sign-in where you bought it.** You'll add two records in its **DNS settings**. If someone else bought the domain, ask them to sign in with you, or send them this page.
- **A few minutes in your DNS settings.** Then Famlo does the waiting for you.

## Add your address in Famlo

1. Open **Website**, then the **Domain** tab (1).
2. In **Web address** (2), type the address you own, like yourschool.org. You can paste a full link too. Famlo tidies it.
3. Check the line under the field. A plain domain opens at its www address: "Your site will open at www.yourschool.org. The address without www will forward there."
4. Select **Next: connect it** (3).

<Screenshot src="/img/screens/organizations/website-custom-domain-add.webp" alt="Website › Domain with the Domain tab as 1, the Web address field filled in with maplegrove.example as 2, and Next: connect it as 3" url="famlo.co/co-op/maple-grove-homeschool-co-op/website/domain" width={1280} height={800} />

Famlo then shows the records to add, under **Add these two records**.

## Add the two records

Sign in where you bought your domain and find its DNS settings. Add both records exactly as Famlo shows them, and delete any older record with the same name.

| Record | Type | Name | Value | What it does |
| --- | --- | --- | --- | --- |
| 1 | `CNAME` | `www` | The value shown in Famlo. It ends in `.sites.famlo.co`. | Sends www.yourschool.org to your Famlo site. |
| 2 | `A` | `@` | `98.94.145.58` | Makes yourschool.org, without www, forward to www.yourschool.org. |

The CNAME value is made for your organization and this address, so copy it from your own screen, not from the picture below. Use the **Copy** button on each record (1 and 2), and paste the value with nothing added: no `http://`, no slash and no spaces.

<Screenshot src="/img/screens/organizations/website-custom-domain-records.webp" alt="Waiting for your records: Add these two records, with the CNAME record for www as 1, the A record for @ as 2, and Check now as 3" url="famlo.co/co-op/maple-grove-homeschool-co-op/website/domain" width={624} height={898} />

Tips that work at most DNS companies:

- **Type only `www` in the Name field**, not the whole address. Most DNS companies add your domain for you, and typing it all can create www.yourschool.org.yourschool.org.
- **Some companies write the root differently.** Where Famlo shows `@`, a few want the Name left blank. Your company's panel under [Find your registrar's steps](#find-your-registrars-steps) says which.
- **Replace, don't add.** A name with a CNAME can't have any other record. If there's already a `www` record, edit it or delete it first. On `@`, delete every other `A` record and any `AAAA` record.
- **Leave your email alone.** Don't touch `MX` or `TXT` records. They run your email and other services.
- **Edit where your nameservers point.** If your domain uses another company's nameservers (for example Cloudflare's, or a website builder's), add the records there, not where you bought the domain.

Once both records are in, go back to **Website** › **Domain** and select **Check now** (3), or wait for Famlo's hourly check.

## If you use a subdomain

You can put your site on a subdomain instead, like families.yourschool.org. Type the whole subdomain in **Web address**. Famlo keeps it exactly as typed and shows **Add this record**: one `CNAME` whose Name is the first part (here, `families`) and whose Value is the one shown in Famlo. There's no A record to add, and your main domain isn't touched.

## What not to do

Some DNS companies offer shortcuts that look helpful but stop your site from connecting.

| Don't | Why, and what to do instead |
| --- | --- |
| Turn on domain forwarding, a URL redirect, or "connect to a website" for yourschool.org or www | It replaces or locks the records Famlo needs. Turn it off, then add the A record. Famlo forwards the address without www for you. |
| Use an ALIAS, ANAME or "flattened" CNAME on `@` | Visitors who type your address without www get a security error. Use the `A` record Famlo shows. |
| Make `www` an `A` record | `www` must be the `CNAME` Famlo shows. Famlo won't find an A record there, and your site won't open. |
| Turn on a proxy or CDN for these records, such as Cloudflare's orange cloud | Famlo can't see a proxied record. In Cloudflare, set both records to **DNS only** (the gray cloud). |
| Keep old website records beside Famlo's | Delete the old `A`, `AAAA` and `www` records left by a previous website, parking page or website builder. |

## While Famlo checks your records

Famlo checks your address every hour, and straight away when you select **Check now**. The line under the **Website** heading follows along, from "Connecting www.yourschool.org." to "www.yourschool.org · Live".

| What you see | What it means | What to do |
| --- | --- | --- |
| **Waiting for your records**, with "Not found yet" on each record | Famlo hasn't seen your www record yet. The yellow box shows the last check and what Famlo found. | Check the records, then wait. "Changes usually show up within an hour, sometimes up to a day." |
| **Almost ready** and **Securing your site** | "Both records found. We're setting up the padlock (https) for your address. This takes a few minutes." | Nothing. Famlo emails you the moment it's live. |
| **Live** | "Families can reach your site and sign in here." The address without www forwards there too. | Turn on **Show in Google search** when your pages are ready. |

If the yellow box names a problem, such as a record that still points to your old website builder, see [Domain troubleshooting](/docs/organizations/website/domain-troubleshooting).

**Famlo holds your address for 7 days.** The waiting card says "We'll hold this address for you until" a date a week after you started. If Famlo still hasn't seen your records by then, it lets the address go and emails you "We stopped waiting for www.yourschool.org". Nothing on your site changes. Add the address again whenever you're ready. Famlo shows the same records as before, so any you already added keep working.

To use a different address before this one connects, select **Cancel and use a different address**.

**The "Your site is live" email.** When your address connects, Famlo emails you and everyone else who can edit your website: "Good news: www.yourschool.org now opens your Famlo site." Families can browse, sign in and book there from then on.

## When your site is live

<Screenshot src="/img/screens/organizations/website-custom-domain-live.webp" alt="The Live card for www.sunnysidelearning.example, with Show in Google search as 1 and Change address as 2" url="famlo.co/co-op/sunnyside-learning/website/domain" width={624} height={358} />

**Show in Google search** (1) starts off for every new address, so Google doesn't list half-built pages. When your pages are ready, tick it. The notice says "Your site can now show in Google search." Untick it to hide the site again ("Hidden from Google search."). It saves straight away.

Your site is on its address once it's published and the address is **Live**. If you haven't published yet, see [Publish, schedule and restore versions](/docs/organizations/website/publishing-and-history).

## Change your address

Your site stays live on its current address while the new one connects.

1. Open **Website** › **Domain** and select **Change address** (2).
2. Type the new address and select **Next: connect it**.
3. Add the records Famlo shows for the new address at the company where you bought it.

While you wait, the top card says **Live now**: "Stays live until your new address is ready. Nothing changes for families yet." The card below, **Moving to**, shows the new address, its records and **Check now**. When the new address works, Famlo switches your site to it by itself. To stop, select **Cancel the change**.

You can change to one new address at a time. Finish or cancel a change before starting another.

**After the switch:**

- **Your old address forwards to the new one**, so old links, bookmarks and Google results still land on your site. Famlo suggests keeping it for a few months, and renewing the old domain while you do.
- **Families sign in again once.** Anyone who was signed in at the old address needs to sign in again at the new one.
- **The new address starts hidden from Google.** Turn on **Show in Google search** again.

To stop forwarding the old address, select **Stop forwarding** on its card and confirm. Links to it then stop working. Famlo says "www.oldschool.org is no longer one of your site's addresses.", and the card may show **Removing…** for a few minutes.

There's no button to take a live address off your site without moving to another one. If you need that, [open a support ticket](/docs/account/support).

## Send old addresses to your new pages

Moving from an old website? At the bottom of **Website** › **Domain**, **Old addresses** sends links to your old pages to the right new ones, so Google results and saved links keep working.

1. In **Old address**, type the old page's path, like `/meetmarni`.
2. In **Goes to**, type the page on your Famlo site, like `/instructors`. Famlo suggests your published pages as you type.
3. Select **Add redirect**.

Redirects save straight to your live site. To delete one, select **Remove** beside it in the list.

- Both addresses are paths on your own site, starting with `/`. You can't send visitors to another website.
- Capital letters, a slash at the end and anything after `?` in the old address are ignored.
- Each old address can be added once, and it can't go to itself.
- A redirect only applies where no page exists at that address. If you later make a page with that address, the page wins.

## Find your registrar's steps

Find the company where you bought your domain, or where its nameservers point. Each panel says where its DNS settings are, what trips people up there, and links to that company's own help. Wherever you are, add the two records exactly as shown in **Website** › **Domain**.

<RegistrarGuides />

## Troubleshooting

**Famlo still says "Not found yet" after an hour.** Check that the CNAME's Name is just `www` and its value matches Famlo's exactly, and that no other `www` record is left. Some companies take longer, up to a day. See [Domain troubleshooting](/docs/organizations/website/domain-troubleshooting) for each message Famlo shows.

**Check now says "We checked a moment ago."** Wait a few seconds, then try again.

**My address said Live, and now it doesn't.** Someone may have changed your DNS, or your domain may have renewed with new settings. See [Domain troubleshooting](/docs/organizations/website/domain-troubleshooting).

**I'm stuck.** [Open a support ticket](/docs/account/support) and include your web address.

## What's next

- [Domain troubleshooting](/docs/organizations/website/domain-troubleshooting)
- [Publish, schedule and restore versions](/docs/organizations/website/publishing-and-history)
- [Analytics, the cookie banner and your calendar feed](/docs/organizations/website/connections)
- [Your Famlo website: what you get](/docs/organizations/website/overview)
