# Drift Dash website

Static SvelteKit website for the Drift Dash iOS game: homepage with five original
gameplay screenshots, `/support/`, and `/privacy/`. Requires Node.js 22 and npm.

```sh
nvm use
npm ci
npm run dev
```

Check and build: `npm run check && npm run build && npm run verify`.
Preview the generated `build/` directory with `npm run preview`.
Pages, navigation, and FAQs work without JavaScript.
Format source changes with `npm run format`.

## Publish with GitHub Pages

The Svelte site is live at
[simonek1s.github.io/geimas-website](https://simonek1s.github.io/geimas-website/).
The custom Pages workflow deploys `main`; homepage, support, privacy, styles, and
all five screenshots were verified on the public host.

1. Use [Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website),
   the selected website repository, with a `main` branch.
2. Public identity and current-app disclosures are configured in
   `src/lib/site.json`. The policy covers browser reward simulations and native
   AdMob integration. Reset `privacyReviewed` when app data behavior or policy
   copy changes, review against `docs/app-store-readiness.md`, then mark the
   content reviewed. This is a website accuracy check, not signed-app or Apple
   approval. Contact details are public; never put secrets here.
3. As the repository owner, open
   [Settings → Pages](https://github.com/Simonek1s/geimas-website/settings/pages)
   and select **Build and deployment → Source → GitHub Actions**. Publishing
   `main` from `/(root)` runs Jekyll on the repository and displays the README.
   The required Svelte workflow already exists; do not add a suggested template.
4. Push to `main`, or run **Deploy website to GitHub Pages** from Actions.
   The workflow uses `npm ci`, checks the site, and deploys `build/`.
   Pull requests build and verify without publishing. Unreviewed policy details
   deliberately stop publication; ordinary local and pull-request builds work.

If the live page shows the README, check that the successful run is **Deploy
website to GitHub Pages**, with an npm build and upload of `build/`. GitHub's
default **pages build and deployment** run with **Build with Jekyll** publishes
the repository source instead. A failed Svelte run leaves the previous page live.

GitHub supplies the correct URL and asset prefix for project sites, user sites,
and configured custom domains. Enable **Enforce HTTPS** when available. Use the
successful deployment URL plus `/support/` and `/privacy/` in App Store Connect.
Leave `appStoreUrl` empty until the product page exists; the site shows no badge.

To check a project-path build locally:

```sh
BASE_PATH=/geimas-website npm run build
BASE_PATH=/geimas-website npm run verify
BASE_PATH=/geimas-website npm run preview
```

Edit copy in `src/routes/`, styles in `src/app.css`, and screenshot captions in
`src/lib/screenshots.js`. Screenshot originals came from `../geimas/appstore/`;
this site has no build dependency on that app. Keep App Store copy and visual
direction in `docs/app-store-listing.md`. See `docs/` for scope and release
requirements. Before App Store submission, verify the signed app's actual ad and
consent behavior and add working links to the final support and privacy URLs.
