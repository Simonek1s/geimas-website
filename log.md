# Change log

## 2026-09-06 — Drift Dash App Store website and Pages workflow

Created a standalone npm/SvelteKit website with static homepage, support, and
privacy routes. Used the source game's icon and five original gameplay PNGs,
local fonts with license notices, responsive layouts, email contact, native FAQ disclosures, and
direct screenshot links. No client JavaScript, server, analytics, tracking,
cookies, or browser persistence is required. Kept product copy specific to the
game rather than inheriting the supplied benches research's app-specific claims.

Implemented GitHub Actions deployment using locked npm installs, Node 22,
Svelte checks, separate build/deploy jobs, Pages metadata for URL prefixes,
main-only publishing, least-privilege permissions, and artifact upload. Added
static output/link/anchor verification and publication checks. Documented run,
editing, and publishing workflows, architecture, screenshot provenance, and
App Store release requirements; root AGENTS.md remains under 40 lines.

The owner approved an ad-free v1 and supplied a public support contact, stored
only in public site configuration. The privacy policy distinguishes local game
saves from support mail, host request information, and device backups. Research
confirmed that Apple's individual developer name follows the legal account
name; organizations may use a registered trade name under Apple's rules. Brand
selection does not establish the responsible legal identity, so that field and
policy review remain pending rather than being inferred. Publication checks
deliberately reject this unfinished release state.

Limitations: the source game's AdMob initializer and iOS setup script still
conflict with the approved v1 direction; the game itself was not modified. Its
support/privacy links and signed-build privacy behavior still require release
work. The website checkout began empty, with no Git remote, so no repository
creation, push, GitHub deployment, or live-URL verification was performed. No App
Store product URL or badge is fabricated. Browser interaction/visual testing was
not requested; a compiled local preview was opened and returned HTTP 200.

Validation: Svelte reported zero errors and warnings. Static builds passed at
both root and `/geimas-website`, including canonical metadata under the project
prefix; output checks verified three HTML pages and 114 local links/assets.
Ten temporary positive/negative publication scenarios passed. SHA-256 and PNG
dimension checks confirmed all five screenshots match the supplied originals
exactly at 1290 × 2796. Online npm audit reported three low-severity entries
from one transitive `cookie` advisory in SvelteKit's server tooling, with no
moderate/high/critical findings; the deployed output contains no server or
scripts. Did not apply npm's suggested downgrade of the framework.

## 2026-09-06 — Publication next steps

Reviewed the current configuration, README, and App Store readiness document to
identify the immediate owner handoff: confirm the responsible legal identity,
review the privacy draft, and select the destination GitHub repository. The
remaining implementation sequence is to reconcile the game with the approved
ad-free release, deploy the website, add final support/privacy links in the app,
and enter the public URLs in App Store Connect. Identity and policy review are
still unset, and this checkout still has no Git repository or remote. No code or
deployment changes were made because this request asked for next-step guidance;
validation was a read-only check of the existing files, with no tests needed.

## 2026-09-06 — Connect the selected GitHub repository

Configured the owner-selected destination as the local Git origin and initialized
the main branch. Updated README and deployment/readiness documents to identify
the selected repository instead of leaving repository selection as an open task.
Verified the remote was public and empty through repository metadata and
git ls-remote, so no existing source or history needs replacing. The GitHub
connector reports read-only access, and a local Git push dry run was rejected
with HTTP 403 because the configured account lacks write access. Prepared the
initial local source commit, including the workflow and all original screenshots;
no remote commits were created. Documented the required access/authentication
step and upload command. The legal identity and policy-review flag remain
pending. Formatting and staged whitespace checks passed. No app code or website
publication was changed, and runtime tests were not repeated for these Git and
documentation-only changes.

## 2026-09-06 — Upload after repository invitation acceptance

Confirmed repository write access after invitation acceptance and successfully
pushed the prepared website, five original screenshots, and Pages workflow to
main. The local branch now tracks origin/main. Updated the README and deployment
documents to remove the resolved upload blocker and record the current release
status.

Validation: the initial push triggered GitHub Actions run 34037490323; locked
dependency installation and Svelte checks passed with zero errors or warnings.
The configure-pages step failed with Not Found because Pages is not enabled,
and deployment was skipped. The repository owner must select GitHub Actions as
the Pages source; the current collaborator has no administration permission.
Legal identity and privacy review remain unset, so enabling Pages alone will
not make the release checks pass. No public site or app changes were deployed.
Only documentation changed after the verified source upload; formatting and
whitespace checks cover those changes without repeating runtime tests.

## 2026-09-06 — Conversion-focused storefront refresh

Reworked the homepage around the instantly legible police-escape fantasy: a
brighter `CAN YOU ESCAPE?` hero, more direct gameplay description, stronger
feature copy, neon color system, and a five-frame `survive → dodge → power up →
beat the record → escape` screenshot story. Each card adds a short marketing
hook around the original development capture while continuing to link to the
unmodified full-size PNG. Reworked the favicon/marketing icon from the existing
1024-pixel source into a much tighter, higher-energy composition: the same car
dominates the frame against the existing road, cyan chevron, and horizon glow.
The AI-assisted edit was explicitly constrained against new vehicles,
characters, scenery, text, logos, or third-party art.

Researched current App Store positioning and Apple guidance. Subway Surfers,
Smashy Road: Wanted 2, and #DRIVE were selected as evidence-backed benchmarks
for direct action language and a single recognizable fantasy. Added a proposed
subtitle, promotional text, full description, exact screenshot hooks, evidence,
and Product Page Optimization recommendation to `docs/app-store-listing.md`.
The website treatment is implemented, but App Store Connect metadata and the
iOS asset catalog remain unchanged pending signed-build review and a later
release task.

Validation: Prettier completed, Svelte reported zero errors and warnings, and
root plus `/geimas-website` static builds passed all checks. Verification found
three prerendered pages, five screenshots, and 114 valid local links/assets in
both path modes. Desktop and 390 × 844 browser reviews confirmed hero and
horizontal screenshot-card readability. SHA-256 checks confirmed all five
gameplay PNGs still match their app-source originals. The 1024 × 1024 icon also
remained distinct and recognizable in a 40 × 40 downscale. `git diff --check`
passed.

## 2026-09-06 — Diagnose README published as the website

Verified that the live homepage is the repository README rendered by Jekyll,
and that successful run 34037630711 used GitHub's default Build with Jekyll job
instead of the Svelte workflow. Updated README and deployment/readiness docs
with the correct Pages source selection and the distinction between the two
workflows. The existing workflow already builds and uploads the Svelte output;
no website code or release assertions were changed for this diagnosis.

Validation: fetched the public HTML, inspected both workflow job lists, and
retried the failed custom workflow. Its new attempt passed dependency install,
Svelte checks with zero errors/warnings, and Pages configuration. It stopped at
release validation because responsible identity and privacy review are still
unset, matching a local release check with the public deployment URL. Deployment
was skipped. Repository permissions provide write access without permission to
change the publishing source, and the available browser session is signed out.
The owner still needs to select GitHub Actions as the Pages source and complete
the existing release prerequisites. Documentation formatting and whitespace
checks cover this request; concurrent storefront edits were left intact.

## 2026-09-06 — Set the supplied developer identity and explain policy review

Set the owner-supplied responsible developer identity in the public site
configuration and updated the draft notice to focus on release behavior and
support practices. Updated README and decision documents to mark the identity
field complete and explain that privacyReviewed is a project release assertion,
not an Apple approval status. The review flag remains false: the app source
still initializes AdMob and the support-handling statements have not been
confirmed. The explanation request was not treated as policy approval or as
authorization to change the game source.

Validation: Svelte checks passed with zero errors/warnings; the static build
and verification passed for three pages, five screenshots, and 114 local
links/assets. Release validation with the actual Pages URL now reports only
the remaining privacy-review failure. Rechecked the app's AdMob initialization
and iOS setup references, and Apple's published policy-disclosure requirements.
Formatting and whitespace checks passed. No deployment was performed, and
existing unrelated storefront changes were preserved.

## 2026-09-06 — Match disclosures to the current app

Updated the website's privacy and support content to describe the current app
instead of treating the earlier no-ads intention as implemented behavior.
Reviewed the clean app source at commit 0fff64aa9fba8208745b5a8c1e69f9e9dd6bb7f3.
The browser uses a local reward simulation; the native code conditionally starts
AdMob and preloads before a reward is selected. The checkout has no generated
iOS project and no AdMob dependency in its manifest or lockfile, so the policy
conditions native claims on builds that include the integration.

Added provider-attributed advertising data categories, tracking controls, reward
availability guidance, and browser-save deletion instructions. Removed stale
ad-free promises and unsupported support retention/security/legal assertions.
Updated the advertising scope and marked the website/source review complete;
AGENTS, README, and decision docs now distinguish this content review from
signed-build testing, legal review, and Apple approval. Kept release validation
and added output checks for the ad disclosures, stale ad-free copy, and reviewed
pages showing draft/noindex markers. The game itself was not modified.

Validation: Svelte reported zero errors/warnings. Root and project-path builds
passed static verification for three pages, five screenshots, and 117 local
links/assets, including project-path canonical URLs. Publication validation
passed for the configured public URL; temporary fixtures rejected outdated
no-ads scope and an unreviewed policy. Evaluating the unchanged app ad module
with a mock native runtime confirmed no browser SDK calls, unavailable ads with
no native plugin, preloading at native initialization, and preloading after a
video. This does not verify a signed device build or live SDK traffic. Primary
Google and Apple sources were checked for provider data and tracking controls.
Formatting and whitespace checks passed. Prepared the corrections for the
existing GitHub Pages workflow; deployment verification follows the push.

Deployment result: pushed the corrections as commit 6f6a877. Custom GitHub
Actions run 34039301073 passed both build and deploy. Direct public homepage,
support, and privacy requests returned HTTP 200 with current Svelte content,
correct canonical URLs, and no draft/noindex markers. The old Jekyll README was
absent. Five gameplay screenshots, the icon, and the stylesheet returned HTTP
200 with appropriate content types. Updated publishing docs to record the live
site. Website and app working trees were clean after the source push; the app
was unchanged. Only deployment documentation changed after these checks.

## 2026-09-06 — Loud store-page redesign of the website

Rebuilt the homepage, shared layout, and stylesheet around the App Store
conversion patterns of the most downloaded endless runners (Subway Surfers,
Temple Run, Smashy Road: Wanted 2, Hill Climb Racing): one challenge question as
the headline, ALL-CAPS imperative verbs, three-to-five-word screenshot hooks, and
saturated yellow, orange, pink, and cyan against a near-black purple. The hero
uses a CSS sunburst and perspective road derived from the icon’s own palette,
three floating phone frames, hazard stripes, and two crossing marquee strips. The
feature grid became five tilted colour cards; the gallery keeps the five untouched
captures with per-frame HUD speed and distance chips; a cyan “one more run” band
leads to support. Support and privacy pages received the same header treatment
while keeping every section, anchor, and disclosure unchanged. The only graphics
remain `icon.png` and the five original screenshots; all other shapes are CSS.
Heavier Barlow Condensed (800/900 and italics) and Inter 800 weights are imported
from the already-installed Fontsource packages. All motion is CSS-only, disabled
under `prefers-reduced-motion`, and the output still contains no scripts.

Limitations: the hero’s three stat tiles quote only numbers visible in the
captures (278 km/h, 5225 m, 11779 coins) and are labelled as such; no ratings,
download counts, badges, or store URL are claimed. The clickbait tone remains a
conversion hypothesis, not a measured result, and the Svelte setup, routes,
configuration, scripts, and workflow were not changed.

Validation: svelte-check reported zero errors and warnings; root and
`/geimas-website` builds passed verification (158 local links and assets, no
scripts). Rendered pages were visually checked in Chrome at 1440 px and in a
390 px viewport for the homepage, support, and privacy. Two review findings were
fixed before completion: outlined headline words inherited a transparent stroke
colour, and feature-card numbers overlapped titles on narrow cards. No tests were
added for cosmetic changes.
