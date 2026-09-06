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
connector reports read-only access; local Git push access is being checked.
The legal identity and policy-review flag remain pending. No app code or website
publication was changed, and runtime tests were not repeated for these Git and
documentation-only changes.
