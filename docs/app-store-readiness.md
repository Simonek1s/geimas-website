# App Store website and v1 release

Status: website implemented; ad-free v1 and developer identity approved by owner;
privacy draft and app-release reconciliation pending. Updated: 2026-09-06.

## Website scope

The supplied `app-store-website-requirements.md` was the requirements baseline.
Its Vilnius Benches-specific details do not describe Drift Dash: no bench data,
CloudKit mirror, location collection, photos, Lithuanian localization, or iOS 26
minimum was copied. The inspected Drift Dash UI is English. No unsupported
minimum iOS version, age rating, store availability, or accessibility claim is
published.

| App Store field      | Website destination                | State                                                                           |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------- |
| Support URL          | Final HTTPS site URL + `/support/` | Implemented: visible owner-supplied email, mailto, issue-report guidance, FAQs  |
| Privacy Policy URL   | Final HTTPS site URL + `/privacy/` | Implemented as draft; identity supplied, operational and release review pending |
| Marketing URL        | Final HTTPS site URL + `/`         | Implemented: conversion-focused product copy and five supplied screenshots      |
| Accessibility URL    | Omit                               | App accessibility has not been audited                                          |
| Account deletion URL | Omit                               | No app accounts or account creation in inspected source                         |

The owner supplied the responsible developer's name, which is now implemented
in `src/lib/site.json` and rendered in the policy. This records the owner's
declaration; it does not independently verify the Apple account. Apple uses the
legal name for individual developer accounts. Organizations may use a registered
trade name when creating their first app. Keep the legal identity accurate;
never infer it from an email address or Git author details.

## Approved v1 data direction

The owner explicitly confirmed **no ads in v1** and provided a public support
email. `src/lib/cars.js` stores the garage, coins, records, missions, upgrades,
cosmetics, and settings in local storage. No account, online leaderboard,
developer save server, or separate analytics integration was found in the
inspected current source. The site therefore describes the intended no-ads v1,
separately from voluntarily sent support mail and GitHub hosting request logs.

Local game data remains until app data is deleted. Offloading retains data;
device backups may retain or restore it. The developer cannot delete or recover
local progress remotely. No unsupported in-app reset or recovery feature is
promised. Email is handled through the owner-selected Gmail address; GitHub
hosts the website. Their retention and international processing must be reflected
in the final policy rather than making a blanket “we collect nothing” claim.

## Before setting privacyReviewed to true

`privacyReviewed` is an implemented project release check, not an Apple review
status or an application for approval. It records that the policy's descriptions
match the app that will ship and the developer's actual support operations.
Supplying the developer name completes the identity field, but does not confirm
the remaining policy statements or resolve the app's active AdMob path.

- The owner-supplied responsible name is now set in `src/lib/site.json`; add
  address/phone only where applicable law or business circumstances require them.
- Review the complete privacy draft against actual support operations: Gmail
  account use, purposes/legal basis, retention criteria, mailbox security,
  recipient roles, international processing and safeguards, and equal protection
  by providers. The proposed legitimate-interest basis is not a legal finding.
- Confirm the signed v1 has no AdMob initialization or SDK data collection,
  including preloading before a player chooses an ad. Inspect a device build.
- Update effective/updated dates and remove proposal wording when approved.
  `privacyReviewed=true` removes the draft banner/noindex; the name must also be
  present. This is a release assertion, not a substitute for verifying the app.
- Reconcile App Store Connect privacy answers with the actual shipping build and
  third-party SDKs. The website cannot complete that questionnaire automatically.

## App source discrepancies: work still needed in ../geimas

`src/lib/ads.js` calls `nativeSetup()` on native platforms, initializes the
Capacitor AdMob plugin with tracking authorization, and preloads rewarded ads.
`ios-setup.sh` installs `@capacitor-community/admob` and adds ATT prompt text.
`APPSTORE.md` still describes an advertising-supported release. Merely omitting
an ad unit or hiding buttons would not substantiate an ad-free policy: the native
initialization, SDK installation, ad prompts, and reward/UI behavior must be
reconciled for the signed v1. This website request does not alter the game.

No working in-app support/privacy links were found. Add an accessible Help/About
entry opening the final HTTPS URLs, including the policy link required by Apple.
Do not copy the older app note advising against external links as a reason to
omit mandatory privacy access. Inspect both links on the signed build.

## Publication and submission

The owner selected [Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website)
as the website repository; it was verified public and empty on 2026-09-06.
Repository invitation acceptance resolved write access, and the source is now
uploaded to `main`. The first Actions run passed installation and Svelte checks,
then failed in `configure-pages` with Not Found because Pages was not enabled.
Pages was later enabled with the default Jekyll build, which published the
README instead of the Svelte website. The public homepage and successful Jekyll
run 34037630711 confirmed this on 2026-09-06.

The repository owner must select **Settings → Pages → Build and deployment →
Source → GitHub Actions**. The current collaborator has write access without
permission to change that setting. Use the existing **Deploy website to GitHub
Pages** workflow after the release checks pass; developer identity is now set,
while privacy review remains incomplete. The currently published README is not a
verified support or privacy destination. Keep the final support/privacy URLs
public, directly reachable, HTTPS, and free of placeholder copy. Check mobile
readability and direct page loads on the actual Svelte deployment before using
the URLs in App Store Connect.

The optional App Store link stays absent until a real product URL is supplied.
The site uses no Apple download badge. If adding one later, use official artwork,
the correct destination and required trademark credit. Screenshot files are
unaltered development captures, not certified screenshots of the signed v1.
The inherited filenames do not consistently describe their pictured scenery;
website captions/alt text describe what is actually visible.

The revised listing copy, screenshot sequence, and icon treatment are documented
in `docs/app-store-listing.md`. They are implemented on the website but remain a
proposal for App Store Connect until reviewed against the signed build. The icon
file in the website does not update the iOS asset catalog automatically.

Trader status, EU contact requirements, final privacy legal review, Apple review
metadata, and accessibility answers remain the owner's release work. No universal
Terms/EULA page or Lithuanian translation was added beyond the stated scope.

## Primary references checked on 2026-09-06

- [Apple platform version fields](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information): Support URL required; Marketing URL optional.
- [Apple App Review Guidelines, 1.5 and 5.1.1](https://developer.apple.com/app-store/review/guidelines/): contact access, privacy policy disclosure, third-party protection, retention/deletion, and in-app privacy access.
- [Apple developer names](https://developer.apple.com/help/app-store-connect/create-an-app-record/set-your-developer-name): individual legal name versus an organization's registered trade name.
- [Google iOS SDK disclosure](https://developers.google.com/admob/ios/privacy/data-disclosure): SDK presence must be reconciled with App Privacy answers; the policy does not describe an AdMob release.
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement): hosting/infrastructure processing.
- [Google privacy policy](https://policies.google.com/privacy): support-mail provider processing.
