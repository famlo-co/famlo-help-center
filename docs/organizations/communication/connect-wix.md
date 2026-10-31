---
sidebar_position: 4.5
title: "Connect Wix: step by step"
description: A plain-language walkthrough for connecting your Wix site to Famlo, so families on your Famlo mailing list land in your Wix email list. Find your Site ID, make an API key, and paste both into Famlo.
keywords: [connect wix, wix api key, wix site id, wix email marketing, wix newsletter famlo, wix rejected the key 403, manage email subscriptions]
audience: organizations
who: Owners and co-leaders
---

# Connect Wix: step by step

If you send your newsletter from Wix, you can have Famlo add every family who signs up on Famlo to your Wix email list, automatically, every hour. Setting it up means copying two things from Wix and pasting them into Famlo. No technical knowledge needed. It takes about 10 minutes.

You'll copy:

| What | What it looks like | Where it is |
|---|---|---|
| **Site ID** | A long code with four dashes, like `1a2b3c4d-1234-5678-abcd-1234567890ab` | In your browser's address bar, on your Wix site's dashboard |
| **API key** | A very long code that starts with `IST.` | You make it in Wix's API Keys Manager |

:::tip Before you start
- Do this on a computer, not a phone. It's much easier to copy and paste.
- Use the Wix login that **owns** your site. Only an account owner or co-owner can make API keys.
- Open a note or a blank document to paste things into as you go.
:::

## Step 1: Copy your Site ID

1. Sign in to Wix and open your site's dashboard: go to **Sites** and select your site's picture.
2. Look at the address bar at the very top of your browser. It will look something like this:

   `manage.wix.com/dashboard/`**`1a2b3c4d-1234-5678-abcd-1234567890ab`**`/home`

   (Sometimes more follows `/home`, like `?referralInfo=my-sites`. Ignore it.)

3. The **Site ID** is the long code between `/dashboard/` and the next `/`. Copy it and paste it into your note.

Not sure you've got the right part? Copy the whole address instead. Famlo picks the Site ID out of it for you.

## Step 2: Make an API key

An API key is like a password that lets Famlo add people to your Wix email list, and nothing else you don't allow.

1. Go to Wix's **API Keys Manager**: [manage.wix.com/account/api-keys](https://manage.wix.com/account/api-keys). Sign in if Wix asks.
2. Select **+ Generate API Key** at the top right.
3. Under **Key details**, give the key a name you'll recognise later, such as **Famlo**.
4. If Wix asks which sites the key can use, choose your site (or all sites).
5. In the list of permissions, find **Manage Email Subscriptions** ("Read and modify the subscription status for email addresses") and tick it. That's the only one Famlo needs.
6. Select **Generate Key**.
7. Wix shows your new key **only once**, in a pop-up. Copy it right away and paste it into your note.

If you closed the pop-up before copying the key, that's fine: make another one the same way. You can delete the extra key from the API Keys Manager.

## Step 3: Paste both into Famlo

1. In Famlo, open **School settings**, then **Integrations**.
2. Open the **Wix** card.
3. Paste each one into its box: **API key** and **Site ID**.
4. Select **Connect Wix**.

Famlo checks with Wix straight away. When the card says **Connected**, you're done. Families on your [mailing list](/docs/organizations/communication/mailing-list) start arriving in your Wix contacts at the next hourly sync (on the hour). Check your Wix contacts after that first sync.

## If it doesn't connect

**"Add your Wix Site ID"**
The Site ID box was empty. Go back to [Step 1](#step-1-copy-your-site-id).

**"Wix rejected the key (403)"**
Wix didn't accept the combination. Check these, in this order:

1. **The Site ID.** It should be the code from the address bar of *this* site's dashboard ([Step 1](#step-1-copy-your-site-id)). A Site ID from a different site won't work.
2. **The permission.** Open the key in the API Keys Manager and check **Manage Email Subscriptions** is ticked.
3. **The key's sites.** If the key is limited to certain sites, make sure your site is one of them.
4. **The Wix login.** The key has to come from a Wix login that owns or co-owns the site. If you have more than one Wix login, try the other one.

The **Account ID** shown on the API Keys Manager page isn't needed. Famlo doesn't ask for it.

After fixing anything, select **Save and test** on the Wix card. You don't need to paste the key again unless you made a new one: leave the API key box blank to keep the saved one.

**"Wix rejected the key (401)"**
The key itself is wrong, often because only part of it was copied. Make a new key ([Step 2](#step-2-make-an-api-key)) and paste it in.

Still stuck? Tell us through the [support desk](/docs/account/support) and we'll help you get connected.

## What Famlo does with the key

- Famlo uses the key only to add families from your Famlo mailing list to your Wix email list, and to mark people unsubscribed in Wix when they unsubscribe on Famlo.
- It doesn't send your newsletter, change your website, or read your orders or bookings.
- Unsubscribes made in Wix don't come back to Famlo. See [how syncing works](/docs/organizations/communication/email-integrations#how-syncing-works).
- To stop syncing, open the Wix card and select **Disconnect**. You can also delete the key in the API Keys Manager.

## What's next

- [Connect Mailchimp, Wix, MailerLite, Kit or a webhook](/docs/organizations/communication/email-integrations)
- [Your mailing list](/docs/organizations/communication/mailing-list)
