# Asset provenance

Status: implemented. Imported: 2026-09-06.

The five files in `static/screenshots/` are unmodified copies of the corresponding
`../geimas/appstore/01-open-road.png` through `05-night.png`. Each is 1290 × 2796
pixels. The app's `tools/appstore-shots.mjs` documents capture from its browser
game harness. They are real development gameplay, not AI-generated imagery or
claims about the signed iOS build. All five originals are available from the
gallery; the homepage additionally reuses two of them.

The inherited “causeway” and “night” filenames do not reliably label what is in
the images. Captions stay scene-neutral; alt text describes the visible gameplay.
Regenerate screenshots from the final release if its appearance changes. Keep
this provenance document current when replacing any images.

`static/icon.png` is copied from `../geimas/public/icon.png`. The source app's
`CREDITS.md` attributes game models to Kenney's CC0 kits. No new artwork or
third-party download badge is introduced by the website.

Inter and Barlow Condensed are installed through their Fontsource npm packages
and served locally. Their bundled license notices are copied into
`static/licenses/` and included in the published output. There are no remote
font or image requests.
