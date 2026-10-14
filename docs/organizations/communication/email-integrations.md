---
sidebar_position: 4
title: Connect Mailchimp, Wix, MailerLite, Kit or a webhook
description: Keep your Famlo mailing list in sync with Mailchimp, Wix, MailerLite, Kit, or Zapier and Make through a webhook, from School settings › Integrations.
keywords: [mailchimp integration, wix contacts sync, mailerlite group, kit tag, zapier webhook, make webhook, newsletter sync, mailing list sync]
audience: organizations
who: Owners and co-leaders
---

# Connect Mailchimp, Wix, MailerLite, Kit or a webhook

Connect the email tool you already use, and the families on your Famlo mailing list flow into it every hour, so you can send your newsletter from there. You set this up in **School settings** › **Integrations**. Every tool works on every Famlo plan, with or without a Famlo website. With Mailchimp, MailerLite and Kit, unsubscribes also come back: someone who unsubscribes in your tool comes off your Famlo mailing list too. To open the page you need School settings set to **Edit settings**, which owners and co-leaders have by default.

Integrations send your [mailing list](/docs/organizations/communication/mailing-list): the families who ticked the box to hear from you when they booked, or signed up on your website. Famlo doesn't send newsletters for you. For messages Famlo delivers, use [Announcements](/docs/organizations/communication/announcements).

## Connect a tool

1. Open **School settings** (1), then **Integrations** (2).
2. Select the card for your tool to open it.
3. Paste your key into **API key** (3). For a webhook, paste the address into **Webhook URL** instead.
4. Select **Connect** followed by the tool's name, for example **Connect Mailchimp** (4). Famlo checks the key with your tool straight away.
5. For Mailchimp, MailerLite and Kit, pick where families go once the key works: an **Audience**, a **Group** or a **Tag**. Then select **Save and test**.

<Screenshot src="/img/screens/organizations/email-integrations-cards.webp" alt="School settings with Integrations highlighted, showing the Wix, Mailchimp, MailerLite, Kit and Zapier, Make or any webhook cards, each marked Beta" url="famlo.co/co-op/sunnyside-learning/settings/integrations" width={1280} height={800} />

<Screenshot src="/img/screens/organizations/email-integrations-mailchimp.webp" alt="The Mailchimp card opened, with the API key field and Connect Mailchimp highlighted" url="famlo.co/co-op/sunnyside-learning/settings/integrations" width={728} height={352} />

Families start arriving in your tool at the next hourly sync. Every card is marked **Beta**: check your contacts in your tool after the first sync, and if anything looks wrong, tell us through the [support desk](/docs/account/support).

You don't have to connect anything. Your mailing list also exports to a CSV file that any of these tools can import.

## What each tool asks for

| Tool | What you enter | What you pick after it connects | Where to find the key (as the card says) |
|---|---|---|---|
| **Wix** | **API key**, **Account ID**, and **Site ID (optional)**, needed only if your Wix account has more than one site | Nothing | "Find it in Wix under Settings › Advanced › API keys. The key needs Manage Email Subscriptions permission." |
| **Mailchimp** | **API key** | An **Audience** | "Find it in Mailchimp under Account › Extras › API keys." |
| **MailerLite** | **API key** | A **Group**. "Families are added to this group." | "Find it in MailerLite under Integrations › API › Generate new token." |
| **Kit** | **API key** (a v4 key) | A **Tag**. "Families get this tag in Kit." | "Find it in Kit under Settings › Developer › API keys (use a v4 key)." |
| **Zapier, Make or any webhook** | **Webhook URL**, from a Zapier "Catch Hook", a Make "Custom Webhook", or your own server | Nothing | The address must start with `https://`. |

The list of audiences, groups or tags comes from your own account, so create the one you want in your tool first. Until you pick one, the card shows a prompt such as **Pick a MailerLite group** or **Pick a Kit tag**, and nothing is sent.

Famlo never shows a saved key again. The field shows only the first and last few characters, with "A key is saved. Leave this blank to keep it." To change the key, paste a new one and select **Save and test**.

## MailerLite and Kit

The **MailerLite** and **Kit** cards are there for every organization, below **Mailchimp**.

They work one at a time. While MailerLite or Kit is connected you can't connect any other tool, and you can't connect MailerLite or Kit while another tool is connected. If you try, you'll see "You're already sending to [tool]. Disconnect it first." Wix, Mailchimp and the webhook can run side by side.

## How syncing works

- **Every hour, on the hour.** Famlo sends new sign-ups and new unsubscribes to each connected tool.
- **Only confirmed sign-ups.** Someone still marked **Waiting to confirm** on your mailing list isn't sent until they confirm.
- **Unsubscribes go out too.** When a family unsubscribes from your list on Famlo, they're marked unsubscribed in your tool at the next sync.
- **Unsubscribes come back from Mailchimp, MailerLite and Kit.** See [Unsubscribes sync both ways](#unsubscribes-sync-both-ways). Wix and the webhook only send changes from Famlo to your tool.
- **Pointing somewhere new.** If you change the Wix account, the audience, group or tag, or the webhook address, Famlo sends everyone subscribed on your list to the new place at the next sync.

What reaches each tool:

| Tool | What is sent |
|---|---|
| Wix | Email address and whether they're subscribed |
| Mailchimp, MailerLite, webhook | Email address, first and last name when Famlo has them, and whether they're subscribed |
| Kit | Email address and first name when Famlo has it, plus your tag |

### Unsubscribes sync both ways

With **Mailchimp**, **MailerLite** or **Kit** connected, the card says: "Unsubscribes sync both ways." When someone unsubscribes in your tool (for Mailchimp, from the audience you picked), they come off your Famlo mailing list too.

- Your tool tells Famlo when someone unsubscribes. Famlo also checks with your tool every hour (every day for MailerLite), in case a notice was missed. If the card says "We couldn't ask [tool] to tell us straight away", Famlo relies on that regular check instead.
- On your [mailing list](/docs/organizations/communication/mailing-list), that person shows as "Unsubscribed in [tool]" with the date.
- Only your organization's Famlo mailing list changes. The person still gets their booking confirmations and other emails from Famlo, and other organizations' lists aren't touched.
- If you have other tools connected, they're told about the unsubscribe at the next sync.
- Only unsubscribes made after Famlo started listening to your tool count, so older unsubscribes already in your tool don't change your Famlo list. An unsubscribe also has to be newer than the person's last sign-up on Famlo. Someone who unsubscribed in your tool and then signed up again on Famlo stays on your list.
- Bounces and spam reports stay in your tool and don't change your Famlo list.

When you disconnect the tool, Famlo stops listening to it.

### Addresses that bounce

If emails to an address have bounced or been marked as spam, Wix still receives it, flagged as undeliverable. Mailchimp, MailerLite and Kit aren't sent that address at all, so it doesn't count against your sending.

### Kit and MailerLite won't re-subscribe people

If someone unsubscribed inside Kit and later signs up again on Famlo, Kit keeps them unsubscribed, and Famlo can't change that. The Kit card counts them: "N families signed up again after unsubscribing in Kit. Kit keeps them unsubscribed, and we can't change that. They can re-join from one of your Kit forms."

MailerLite works the same way: it decides whether someone who unsubscribed in MailerLite can be made active again.

## The webhook and its signing secret

The **Zapier, Make or any webhook** card sends every change to an address you choose, so you can pass your list to anything Zapier or Make connects to, or to your own server.

- When you connect, and each time you select **Save and test**, Famlo sends one sample contact (sample@example.com) so you have something to map fields from in Zapier or Make.
- Each request is JSON with a list of contacts. Each contact has `email`, `first_name`, `last_name`, `subscribed` and `deliverable`, and `deliverability_reason` when an address can't be reached.
- After you connect, the card shows a **Signing secret**. "We sign every request with this, as X-Famlo-Signature (HMAC-SHA256 of the body)." If your address is public, check that header so you only accept requests from Famlo.
- The webhook is one-way. An unsubscribe made in the tool on the other end never reaches Famlo. As the card says, if you use Mailchimp, MailerLite or Kit, connect it with its own card instead: "those sync unsubscribes both ways."

## Statuses

| On the card | What it means |
|---|---|
| **Connected** | The key works and families are syncing. |
| **Pick a** … (for example **Pick a Kit tag**) | The key works, but nothing is sent until you choose where families go. The card opens by itself. |
| **Not working** | Your tool turned down the key or a sync. The card opens and shows the message your tool gave. A red dot on **Integrations** says "An integration has stopped working". |
| No label | Not connected. |

If your tool asks Famlo to slow down, the sync simply carries on at the next hour. That doesn't show as **Not working**.

## Disconnect a tool

1. Open **School settings**, then **Integrations**, and open the tool's card.
2. Select **Disconnect**.
3. Confirm "Disconnect [tool]? Your mailing list stays here — only the key is removed."

You'll see "Disconnected from [tool]. Nobody was removed from your mailing list." Famlo stops syncing. Contacts already in your tool stay there.

## Troubleshooting

**The card says Not working.**
Read the message on the card. Most often the key was deleted, expired or lacks permission in your tool. Make a new key there, paste it, and select **Save and test**. For Wix, check the key has **Manage Email Subscriptions** permission and that the **Account ID** is right.

**I connected, but my tool is empty.**
Sync runs every hour, on the hour, so give it until the next hour. Make sure you picked an audience, group or tag, and that your [mailing list](/docs/organizations/communication/mailing-list) has confirmed sign-ups. People still waiting to confirm aren't sent.

**Someone unsubscribed in my tool but is still on my Famlo list.**
Unsubscribes come back from Mailchimp, MailerLite and Kit only, not from Wix or the webhook. Famlo ignores unsubscribes made before it started listening to your tool, and ones older than the person's last sign-up on Famlo. Otherwise, give it until the next check: every hour, or every day for MailerLite.

**"You're already sending to … Disconnect it first."**
MailerLite and Kit can't run alongside another tool. Disconnect the other tool first, then connect the one you want.

**My webhook says "The webhook URL must start with https://".**
Famlo only sends to secure addresses. Use the `https://` address your Zapier or Make step gives you.

## What's next

- [Your mailing list](/docs/organizations/communication/mailing-list)
- [Announcements](/docs/organizations/communication/announcements)
- [School settings](/docs/organizations/settings)
- [Your Famlo website: what you get](/docs/organizations/website/overview)
