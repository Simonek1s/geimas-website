# Static website architecture

Status: implemented; current-app disclosure review completed locally;
public deployment must be verified. Updated: 2026-09-06.

This is a standalone npm/SvelteKit project. `../geimas` provides source evidence
and original game assets, but is not a build dependency. The owner selected
npm, Svelte, and GitHub Pages; those choices take precedence over Sites defaults.

`adapter-static` produces homepage, support and privacy HTML in `build/`.
All routes are prerendered with trailing slashes and `csr=false`. There is no
runtime server, database, account system, form backend, client script, analytics,
cookie, or browser persistence. Links and native disclosure elements work in
static HTML. Fonts and game screenshots are hosted with the site.

Public identity, contact details, policy dates, and advertising scope live in
`src/lib/site.json`. Components own page content; the shared layout owns fonts
and navigation. All internal routes and assets use `$app/paths` base.
`PageMeta.svelte` derives canonical metadata from `VITE_SITE_URL` when supplied.

## Current-app disclosure contract

Approved by the owner and implemented: describe the current app, including its
browser reward simulation and conditional native AdMob integration. The earlier
ad-free v1 intention is not evidence of current behavior. The current advertising
value is `rewarded-admob-native`. Source evidence, source revision, conditional
native behavior, and remaining submission work are in `app-store-readiness.md`.

`privacyReviewed` is a website/source accuracy assertion. It does not certify
support operations, a signed iOS build, legal compliance, or App Store approval.
The review is complete for the current disclosures: unsupported operational
promises were removed rather than treated as confirmed. Set the flag false
when data behavior, relevant provider configuration, or disclosures change;
update the content and review evidence before marking it true again. Draft
builds remain possible locally, while publication requires reviewed content.

## Validation and GitHub Pages

`scripts/check-release.mjs` validates identity, contact format, reviewed content,
advertising scope, dates, optional App Store destination, and the final HTTPS
URL/base-path pairing. `scripts/verify-build.mjs` checks three required pages,
local links/assets/anchors, metadata, contact and privacy sections, five
screenshots, and absence of scripts/insecure links. It also checks native ad
references and rejects stale ad-free claims and reviewed pages with draft or
noindex markers. It has no dependency on the sibling app checkout.

The workflow uses Node 22, npm ci and Svelte checks. Pull requests build under
the repository path with no deployment privileges. Main uses `configure-pages`
for `BASE_PATH` and `VITE_SITE_URL`, validates metadata, builds/verifies, and
uploads only `build/`. A dependent deploy job receives `pages: write` and
`id-token: write`. Per-ref concurrency cancels only superseded builds.

The approved remote is
[Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website).
Source upload and collaborator write access were verified. The last inspected
public page was the README produced by GitHub's default Jekyll run 34037630711.
The owner must choose **Settings → Pages → Build and deployment → Source →
GitHub Actions**, since the collaborator cannot change the source. The custom
Svelte workflow already exists; no extra template or committed build output
is needed. Failed workflows leave the previously published page in place.
Verify the public Svelte deployment before treating its URLs as usable for
App Store Connect. No custom domain or game-source changes are part of this
website implementation.

References: [SvelteKit static adapter](https://svelte.dev/docs/kit/adapter-static),
[GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
