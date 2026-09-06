# Static website architecture

Status: implemented and uploaded to the approved repository;
Svelte deployment awaits the correct Pages source and release details.
Decision date: 2026-09-06.

The website is a standalone npm/SvelteKit project in `geimas-website`, using
`../geimas` only as source material for product facts and supplied assets. This
keeps the App Store's required support/privacy URLs independent of the game
runtime. The owner explicitly selected npm, Svelte, and GitHub Pages, which take
precedence over the Sites skill's default framework and hosting workflow.

`@sveltejs/adapter-static` writes `build/index.html`, `build/support/index.html`,
and `build/privacy/index.html`. All routes are prerendered with trailing slashes.
Client hydration is disabled; normal links, native disclosure elements, and
static HTML work without scripts. There is no database, account system, form
backend, runtime server, analytics, tracking, or browser persistence.

`src/lib/site.json` holds public release metadata. Route components own page
content; the layout owns navigation and fonts. `PageMeta.svelte` adds per-page
titles, descriptions, and canonical URLs when `VITE_SITE_URL` is provided.
All internal routes and asset paths use SvelteKit's `base` value. Fonts are local
npm assets; original gameplay PNGs are committed with the site.

The Pages workflow installs the lockfile with Node 22 and runs Svelte checks.
Pull requests build under a repository path and verify local links/assets without
deployment privileges. Main builds derive `BASE_PATH` and `VITE_SITE_URL` from
`actions/configure-pages`, validate release metadata, and upload only `build/`.
A dependent deployment job alone receives `pages: write` and `id-token: write`.
Per-ref concurrency cancels superseded builds, not unrelated pull requests.

`scripts/verify-build.mjs` checks required HTML pages, privacy sections, visible
email links, all local HTML/CSS references and anchors, screenshot count, and
absence of scripts and insecure links. The same checks run at root and a project
prefix. `scripts/check-release.mjs` rejects unfinished identity/policy review,
invalid dates, unsupported advertising scope, and inconsistent deployment URLs.

The local preview may show draft policy status; publication must not. The owner
selected [Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website) as
the destination repository. It was verified public and empty before connecting
the local source. No custom domain or App Store app change has been performed.
Verify the final public URLs against a successful Svelte deployment.

After repository invitation acceptance, the `main` branch was uploaded and now
tracks `origin/main`. GitHub confirms write access without administration access.
The first Actions run successfully installed the lockfile and passed Svelte
checks, then `configure-pages` returned Not Found because Pages was not enabled.
Pages was subsequently enabled with GitHub's default branch/Jekyll build. Run
34037630711 successfully published the repository README as HTML, verified on
the public URL on 2026-09-06. That run never built the Svelte app.

The implemented deployment remains the existing custom workflow uploading only
`build/`. The owner must select **Settings → Pages → Build and deployment →
Source → GitHub Actions**; no replacement workflow or committed build output
is needed. The linked account cannot change that setting. Privacy-review
validation still blocks the Svelte release. A failed custom
workflow does not replace the previously published Jekyll page.

Retrying custom run 34037490323 after Pages enablement passed dependency
installation, Svelte checks, and `configure-pages`, then stopped at the two
expected identity/privacy-review errors. No Svelte artifact was deployed.

The owner subsequently supplied the responsible developer identity; it is now
implemented in `src/lib/site.json`. The remaining `privacyReviewed` flag is this
project's assertion that release behavior and support operations match the
policy, not an Apple approval status. It remains false while those checks are
incomplete, including the app source's AdMob initialization.

References: [SvelteKit static adapter](https://svelte.dev/docs/kit/adapter-static),
[GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
