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

The local `main` branch is committed and `origin` points to the repository below.
Uploading currently requires GitHub write access: the configured Git account was
denied. Give that account collaborator access or authenticate Git with an account
that already has write access, then run `git push -u origin main`.

1. Use [Simonek1s/geimas-website](https://github.com/Simonek1s/geimas-website),
   the selected website repository, with a `main` branch.
2. Complete `src/lib/site.json`: confirm the developer's legal identity and review
   the policy and v1 release against `docs/app-store-readiness.md`. Only then set
   `privacyReviewed` to `true`. Contact details are public; never put secrets here.
3. In the repository, select **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`, or run **Deploy website to GitHub Pages** from Actions.
   The workflow uses `npm ci`, checks the site, and deploys `build/`.
   Pull requests build and verify without publishing. Unreviewed policy details
   deliberately stop publication; ordinary local and pull-request builds work.

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
this site has no build dependency on that app. See `docs/` for scope and release
requirements. The app itself still needs its AdMob path disabled for v1 and
working links to the final support and privacy URLs.
