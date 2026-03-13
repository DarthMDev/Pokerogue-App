# Installing PokeRogue on iOS

There are three ways to sideload the app depending on your setup. No jailbreak required for any of them.

---

## Option 1 — SideStore (Recommended — no PC needed after setup)

SideStore is the most convenient option because it refreshes apps **on-device** using a VPN trick, so you don't need a computer running 24/7 to keep the app alive.

### One-time setup

1. **Install SideStore itself** — follow the official guide at [sidestore.io](https://sidestore.io) to get SideStore onto your device. This part requires a PC/Mac once.

2. **Get an anisette server URL** — SideStore needs this to authenticate with Apple without a Mac. The official one is built into the app, but if it's overloaded you can use a public one. SideStore will prompt you during setup.

3. Once SideStore is installed, you never need a computer again for future installs or refreshes.

### Installing PokeRogue

1. Download `PokeRogue-iOS-unsigned.ipa` from the [Releases](../../releases) page (or from the latest [Actions](../../actions) build artifact).

2. On your iPhone, open SideStore.

3. Tap the **+** button → **Install from Files** → select the downloaded IPA.

4. The app will install and appear on your home screen.

### Keeping it alive (refreshing before 7 days)

SideStore can refresh automatically in the background:

- Open SideStore → tap your profile icon → enable **Background Refresh**.
- Make sure the SideStore VPN profile is active (it appears in your status bar).
- SideStore will silently re-sign the app before the 7-day window expires.

---

## Option 2 — Sideloadly (PC/Mac required for refreshes)

Good option if you already have Sideloadly installed for other apps.

1. Download [Sideloadly](https://sideloadly.io) on your PC or Mac.

2. Download `PokeRogue-iOS-unsigned.ipa` from the [Releases](../../releases) page.

3. Plug your iPhone into your computer.

4. Open Sideloadly, drag the IPA into the window, enter your Apple ID, click **Start**.

5. On your iPhone, go to **Settings → General → VPN & Device Management** → tap your Apple ID → **Trust**.

6. Open PokeRogue from your home screen.

### Refreshing

You must re-run Sideloadly every 7 days (free Apple ID limit). Sideloadly has an auto-refresh feature, so leave the app running on your computer.

---

## Option 3 — AltStore (PC/Mac required)

Similar to Sideloadly but with a dedicated AltStore app on your device that manages installs.

1. Install [AltStore](https://altstore.io) following their official guide.

2. In the AltStore app on your iPhone, tap **+** (My Apps tab) → select the downloaded IPA.

3. Refresh via the AltStore Mac/PC companion app.
---

## Free Apple ID Limitations

All three options above use a free Apple ID, which has these limits:

| Limit | Details |
|---|---|
| App expiry | Apps expire after **7 days** and must be re-signed |
| App ID limit | Maximum **3 active app IDs** at a time |
| No TestFlight | Paid developer account required |

If you hit the 3 app limit, go to [appleid.apple.com](https://appleid.apple.com) → Sign-In and Security → remove old app IDs.

---

## TrollStore (No expiry — iOS 14.0–17.0 only)

If your device runs **iOS 14.0 through 17.0**, TrollStore can install the unsigned IPA permanently with no 7-day expiry and no Apple ID needed.

1. Check if your device/iOS version is supported at [ios.cfw.guide/trollstore](https://ios.cfw.guide/installing-trollstore/).
2. Follow the installation guide for your specific iOS version.
3. Once TrollStore is installed, open it → tap **+** → select the IPA → Install.

The app will never expire and survives reboots. This is the best option if your device qualifies.