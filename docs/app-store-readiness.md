# App Store website and current app

Status: current-source website disclosures approved by owner and implemented;
website/source accuracy review completed; signed iOS submission checks pending.
Updated: 2026-09-06.

## Approved scope

The owner requested that the website describe the current app. This replaces
using the earlier no-advertising v1 intention as a statement of current behavior.
It authorizes accurate website disclosures; it does not change the game or
establish that a production advertising release has been tested or approved.

The inspected app checkout was clean at commit
`0fff64aa9fba8208745b5a8c1e69f9e9dd6bb7f3`, package version `1.0.0`.
The current working source and iOS setup script were reviewed. There is no
`ios/` project in this checkout and AdMob is absent from its package manifest and
lockfile. No signed iOS archive or device network trace was available, so native
statements on the website are conditional on an iOS build including AdMob.

The supplied website requirements remain the baseline. Vilnius Benches-specific
claims about CloudKit, location, photographs, localization, or an iOS minimum do
not apply to Drift Dash and were not copied. No store availability, age rating,
accessibility certification, or App Store product URL is invented.

## Implemented behavior and evidence

| Topic                  | Evidence in `../geimas`                                                                                                                          | Website disclosure                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Active game            | `index.html` → `src/main.js` → `src/game.js`; game imports `src/lib/ads.js`                                                                      | Current development game, without claiming a shipped iOS version                                                   |
| Local saves            | `src/lib/cars.js`: localStorage save, garage, coins, upgrades, records, missions, cosmetics and preferences                                      | Saved on the device/browser; no developer cloud recovery                                                           |
| Accounts and analytics | Active source has no account, cloud-save service, online leaderboard, or separate gameplay analytics integration; model fetches load game assets | No account/cloud save; SDK advertising processing disclosed separately                                             |
| Browser rewards        | `Ads._sim()` displays a local timed overlay; non-native `ready()` makes the offer available                                                      | Browser previews simulate reward videos without contacting AdMob                                                   |
| Native initialization  | `if (NATIVE) nativeSetup()`; plugin registry lookup; initialize then prepare; no plugin means no ad availability                                 | With AdMob enabled, ad requests can start before choosing a reward                                                 |
| Reward placements      | `game.js`: revive, double run coins, double mission claims                                                                                       | Optional rewarded videos; play continues without watching                                                          |
| Reward outcome         | Native completion is inferred from the SDK result; browser simulation has completion/early-close paths                                           | Failed or unfinished videos do not promise a reward; delivery issues can be reported                               |
| iOS setup              | `ios-setup.sh` installs AdMob and adds ATT prompt text; default rewarded unit is Google's test unit, with an environment override                | Conditional native integration; production fill and monetization are not claimed                                   |
| Tracking and consent   | Initialization passes `requestTrackingAuthorization: true`; no explicit UMP consent/info/privacy-options flow in active source                   | iOS may request tracking permission; no invented in-game privacy controls or consent-before-all-requests guarantee |
| Support                | Owner-supplied identity/email; website mailto links; no form or retention automation                                                             | Email and attachments reach the support mailbox and remain until deleted; requests use the public address          |
| Website                | Prerendered HTML with local assets and no scripts, cookies, storage, or analytics                                                                | Hosting request data is separate from game saves and advertising                                                   |

Old placeholder comments at the top of `ads.js` say no network is wired up, but
executable native code lower in the same file contradicts them. The executable
paths are the source of truth. Browser simulation does not prove that a native
build makes no advertising requests, and test ad units do not prove no SDK data
processing. Declining ATT is not a general opt-out from all SDK data processing.

## Privacy content review

`privacyReviewed=true` now records the completed website/source accuracy review.
It is an implemented project publication check, not legal sign-off, mailbox
inspection, signed-build verification, or an Apple approval status. The owner
supplied the responsible name; it was not inferred from another account.

The reviewed policy distinguishes local saves, browser reward simulation,
conditional native advertising, voluntarily sent support mail, and hosting.
Native SDK data categories and provider practices are attributed to Google.
Policy and support pages no longer promise an ad-free v1, zero advertising
tracking, or that network activity begins only after a reward button is tapped.

Unsupported claims about fixed support retention, marketing-list use, mailbox
security practices, a legal basis, and blanket equal protection by providers
were removed. The policy states the known email mechanism and request channel,
without claiming an automatic deletion schedule or a verified response SLA.
Google and GitHub provider retention is distinguished from app data deletion.
Operational and legal questions cannot be established by inspecting app source.

Update disclosures and reset the review flag when the app's data behavior,
advertising integration, provider configuration, or support processes change.
The publication script validates the current advertising scope, identity,
review state, dates, and final HTTPS URL. Static verification checks the ad
section, provider/tracking references, absence of stale ad-free promises, and
absence of draft/noindex markers once reviewed.

## Remaining signed-app and App Store checks

These are app-submission tasks, separate from publishing an accurate website
about the current development version:

- Generate and inspect the signed iOS build: installed SDK versions, plugin
  registration, ad unit configuration, actual initialization/reward behavior,
  privacy manifests, and network requests. The setup script installs unpinned
  packages, so source inspection cannot establish the final SDK contents.
- Check ATT and any applicable regional consent requirements before ad requests;
  implement and test a consent/privacy-options flow where needed. The current
  source has no such explicit UMP flow. Do not infer compliant consent behavior
  from an ATT initialization option or source comments.
- Add accessible in-app support/privacy links. No working links were found in
  the current game. Verify both against the final public HTTPS destinations.
- Reconcile App Store Connect privacy answers with the signed app and providers.
  The current website makes no claim that all Apple requirements are satisfied.
- Verify applicable controller/trader contact details, legal grounds, support
  retention and request handling, international transfers, and the provider
  protection commitments required by Apple's privacy-policy rules. These are
  not verified by this source review.

## Website destinations and publishing

| App Store field      | Destination                        | State                                                                                     |
| -------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| Support URL          | Final HTTPS site URL + `/support/` | Implemented: developer contact, issue-report guidance and current-app FAQs                |
| Privacy Policy URL   | Final HTTPS site URL + `/privacy/` | Current-source disclosures implemented and reviewed; signed-app/legal checks above remain |
| Marketing URL        | Final HTTPS site URL + `/`         | Implemented: game features and five original development screenshots                      |
| Accessibility URL    | Omit                               | No app accessibility audit                                                                |
| Account deletion URL | Omit                               | No app accounts in current source                                                         |

The selected repository is
[Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website).
Write access is available. The last inspected live page was the README from
GitHub's default Jekyll run 34037630711. The owner must select **Settings → Pages
→ Build and deployment → Source → GitHub Actions**; the linked collaborator
cannot change that setting. The existing custom workflow builds with npm and
uploads only `build/`. Its earlier attempts stopped on the then-incomplete
identity/privacy check. The updated website review no longer depends on making
the app ad-free.

Verify the successful Svelte deployment and direct support/privacy URLs before
entering them in App Store Connect. Keep screenshot provenance in `docs/assets.md`;
listing copy and visual direction in `docs/app-store-listing.md` remain proposals
for App Store Connect. Website assets do not update the iOS asset catalog.

## Primary references checked on 2026-09-06

- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/): support/privacy access and policy disclosure requirements, including providers and retention/deletion.
- [Apple platform version fields](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information): Support URL required; Marketing URL optional.
- [Google Mobile Ads iOS data disclosure](https://developers.google.com/admob/ios/privacy/data-disclosure): SDK data categories and the developer's responsibility to check the installed SDK.
- [Google UMP iOS guidance](https://developers.google.com/admob/ios/privacy): consent status, required forms, privacy options, and when to request ads.
- [Capacitor AdMob plugin](https://github.com/capacitor-community/admob): SDK configuration, tracking authorization, consent and reward interfaces; the current app has no installed/pinned AdMob version.
- [Apple tracking controls](https://support.apple.com/en-us/102420): iOS tracking permission and IDFA access.
- [Google partner-app data use](https://policies.google.com/technologies/partner-sites), [privacy policy](https://policies.google.com/privacy), and [retention](https://policies.google.com/technologies/retention): provider processing and controls.
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement): hosting request information and provider processing.
