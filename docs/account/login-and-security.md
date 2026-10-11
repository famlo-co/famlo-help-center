---
sidebar_position: 2
title: Login and security
description: Set or change your password, confirm your email, connect Google, Facebook or Apple, add a passkey, and sign out devices you don't recognize.
keywords: [famlo password, famlo passkey, change famlo password, sign out other devices, connect google to famlo, famlo account security, face id touch id famlo]
audience: everyone
---

# Login and security

Everything about how you get into your Famlo account lives in **Account settings** › **Login & security**: your password, your email confirmation, connected Google, Facebook or Apple accounts, passkeys, and the devices you're signed in on. It works the same for families and for people who run an organization.

To get there, open the avatar menu and choose **Account settings**, then **Login & security**. On a phone, **Account settings** opens as a list; tap **Login & security**.

You never strictly need a password. Famlo can always email you a six-digit sign-in code. How signing in works is on [Signing in and creating your account](/docs/account/signing-in).

## Add a passkey

A passkey lets you sign in with your fingerprint, your face, or your device's PIN or screen lock instead of a password. It is the strongest way into your account, because it can't be guessed, phished or reused on another website.

1. Open **Account settings**, then **Login & security** (1).
2. Under **Passkeys**, select **Add a passkey** (2). On a Mac the button reads **Add Touch ID**, and on a Windows computer **Add Windows Hello**.
3. If Famlo asks you to **Confirm your password**, type it and select **Confirm**. If you don't have a password, Famlo asks you to sign in again first.
4. Confirm with your fingerprint, face or PIN when your device asks.

<Screenshot src="/img/screens/account/login-and-security-passkeys.webp" alt="Login & security in Account settings, with Login & security in the sidebar and the Add Touch ID button under Passkeys highlighted" url="famlo.co/account/login-and-security" width={1280} height={800} />

Famlo asks for that extra check only when you signed in more than 15 minutes ago. A passkey can sign in to your account on its own, so Famlo makes sure it's really you before adding one.

You don't name the passkey. Famlo labels it with the device and browser you added it on, such as "macOS · Chrome", and shows when you added it and when you last used it. A passkey saved to iCloud Keychain or Google Password Manager carries a **Synced** badge: it moves with your password manager to your other devices and survives losing this one.

Next time you sign in, choose **Continue with a passkey** (or **Continue with Touch ID** / **Continue with Windows Hello**).

### The one-time offer after you sign in

If you have no passkey yet, your **Dashboard** shows a **Set up a passkey** window once after you sign in (on a Mac it says **Set up Touch ID**). Choose **Set up a passkey** to add one there, or **Set it up later in settings** to close it. It doesn't come back either way. You can always add one from **Login & security**.

If you set up an organization's payouts and have no passkey, **School settings** › **Getting paid** also suggests "Protect your payouts — add a passkey", until you add one or choose **Not now**. It's optional, and payouts work the same either way. See [Set up getting paid with Stripe](/docs/organizations/getting-paid).

### Remove a passkey

1. Under **Passkeys**, find the one you want to remove.
2. Select **Remove**, then confirm.

After that you need another way to sign in on that device. Where your browser supports it, Famlo also asks your password manager to forget the removed passkey.

### When passkeys are removed for you

| What you do | What happens to passkeys |
| --- | --- |
| Change your password from **Login & security** | Every passkey on your account is removed |
| **Sign out** one device under **Device history** | Passkeys added on that kind of device and browser are removed. **Synced** ones are kept, and Famlo tells you so |
| **Sign out of all other devices** | Nothing is removed |
| Reset a forgotten password from the sign-in page | Nothing is removed |
| Close your account | Every passkey is removed |

Famlo emails you whenever a passkey is added to or removed from your account ("A passkey was added to your Famlo account", "A passkey was removed from your Famlo account"). You can't turn these off.

## Set or change your password

A password is optional. It's one more way in alongside the emailed code, a passkey or a connected account.

1. Under **Login**, find **Password**.
2. Select **Set password** if you don't have one yet, or **Update** if you do.
3. If you're changing a password, enter your **Current password**.
4. Enter your **New password** and type it again in **Confirm new password**.
5. Select **Set password** or **Update password**.

Your password needs at least 8 characters. Famlo turns down very common passwords and ones that have shown up in a data breach on another website.

When you save a password, whether it's your first or a new one:

- It signs you out on every other device. You stay signed in on the one you're using.
- Famlo emails you "Your Famlo password was changed".

Changing an existing password also removes every passkey on your account. Add them again on the devices you trust. Setting your first password leaves your passkeys alone.

That makes changing your password the right move if you think someone else has been in your account.

If you've forgotten your password, you don't change it here. Use **Forgot your password?** on the sign-in page, or simply sign in with an emailed code. See [How do I recover my account?](/docs/how-to/recover-account).

## Confirm your email address

The **Email confirmation** row shows your address (partly hidden) and whether it's confirmed. A confirmed address lets you sign in with an emailed code if you ever lose your password.

1. Under **Login**, next to **Email confirmation**, select **Verify**.
2. Enter the six-digit code Famlo emails you, then select **Confirm**.

The code expires in 10 minutes, and asking for it replaces any other code Famlo has sent you. If it doesn't arrive, select **Send a new code**.

To change the address itself, use **Personal information**. See [Your profile and preferences](/docs/account/personal-information).

## Connect Google, Facebook or Apple

Under **Social accounts** there is a row each for Google, Facebook and Apple, marked **Connected** or **Not connected**.

- **Connect** takes you to that provider to approve. Afterwards you can sign in with **Continue with Google** (or Facebook, or Apple).
- **Disconnect** asks you to confirm, then removes it. You'll sign in with your email address or password instead.

Famlo emails you each time one is connected or disconnected.

You can disconnect a provider even if it's the way you usually sign in, because the emailed code still works. Famlo stops you only when that provider is your last way back in, for example when your email address isn't confirmed and you have no password. You'll see "Set a password first — Google is currently the only way into your account." Set a password or confirm your email, then try again.

## Device history

**Device history** lists every device that is signed in to your account now: the device and browser, where it signed in from when Famlo can tell, and when. The one you're using has a **Current session** badge. The first five show, and a link below them opens the rest.

<Screenshot src="/img/screens/account/login-and-security-devices.webp" alt="Device history with a Sign out link on another device and the Sign out of all other devices button highlighted" url="famlo.co/account/login-and-security" width={760} height={348} />

- To sign out one device, select **Sign out** next to it (1). Passkeys added on that kind of device and browser are removed too. **Synced** passkeys keep working, and Famlo tells you which to remove under **Passkeys** if you want them gone.
- To sign out everywhere else, select **Sign out of all other devices** (2) and confirm. This keeps your passkeys.

The device you're using has no **Sign out** link here. Use **Log out** in the avatar menu (on a phone, at the bottom of **Account settings**).

A device drops off the list by itself after 30 days without use. If you don't recognize a device, sign it out. If you think someone knows your password, change it too, which also removes every passkey.

## The "Did you just sign in?" email

When your account signs in from a device Famlo hasn't seen before, you get an email titled "Did you just sign in to Famlo?". It says when and on what device, and where when Famlo can tell.

If it was you, you don't need to do anything. If it wasn't, select **Review my account** in the email, change your password right away, and sign out any device you don't recognize. A device you sign out counts as new again, so you'll hear about its next sign-in.

## Keeping your account safe

Beside the settings (below them on a narrower screen), the **Keeping your account safe** panel is a quick checklist. It shows whether you've set a password, whether your email address is confirmed, how many passkeys you have, and how many devices you're signed in on.

:::note
Famlo doesn't offer two-step sign-in with an authenticator app or text messages. A passkey is the strongest protection available.
:::

## Troubleshooting

**Adding a passkey doesn't work on this computer.**
Your device or browser may not support passkeys, or has no fingerprint reader or screen lock set up. Try on your phone or another device. You can still sign in with an emailed code.

**It says I need to sign in again before adding a passkey.**
You signed in more than 15 minutes ago and your account has no password. Log out, sign back in, and add the passkey straight away.

**My passkeys disappeared.**
They're removed when you change your password, when you sign out the device they were added on, or when you remove them yourself. Add a new one from **Passkeys**.

**I can't disconnect Google, Facebook or Apple.**
It's your only way back in. Set a password or confirm your email address first.

**I still can't get in.**
See [How do I recover my account?](/docs/how-to/recover-account), or open a ticket from [Getting help](/docs/account/support).

## What's next

- [Signing in and creating your account](/docs/account/signing-in)
- [Your profile and preferences](/docs/account/personal-information)
- [Notifications](/docs/account/notifications)
- [How do I recover my account?](/docs/how-to/recover-account)
