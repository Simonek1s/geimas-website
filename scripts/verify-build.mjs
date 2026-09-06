import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';

const output = resolve('build');
const base = process.env.BASE_PATH || '';
const origin = 'https://build.invalid';
const site = JSON.parse(readFileSync('src/lib/site.json', 'utf8'));

/**
 * Enumerate files in the generated public directory recursively.
 * @param {string} directory Absolute directory to inspect.
 * @returns {string[]} Absolute paths to all regular generated files.
 */
function filesIn(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = resolve(directory, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });
}

/**
 * Resolve a same-origin generated URL while enforcing the deployment prefix.
 * @param {string} reference URL found in generated HTML or CSS.
 * @param {string} sourceUrl Public URL of the document containing the reference.
 * @returns {{ file: string, fragment: string } | null} Target file and anchor, or null for external resources.
 */
function localTarget(reference, sourceUrl) {
  const url = new URL(reference.replaceAll('&amp;', '&'), sourceUrl);
  if (url.origin !== origin) return null;
  assert(url.pathname.startsWith(`${base}/`), `URL escapes BASE_PATH: ${url.pathname}`);
  let file = resolve(output, `.${decodeURIComponent(url.pathname.slice(base.length))}`);
  assert(
    file === output || file.startsWith(`${output}/`),
    `URL escapes build directory: ${url.pathname}`
  );
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, 'index.html');
  return { file, fragment: decodeURIComponent(url.hash.slice(1)) };
}

for (const page of ['index.html', 'support/index.html', 'privacy/index.html']) {
  assert(existsSync(resolve(output, page)), `Missing prerendered page: ${page}`);
}
assert(existsSync(resolve(output, '.nojekyll')), 'Missing .nojekyll marker');

const files = filesIn(output);
let checked = 0;
for (const file of files.filter((path) => path.endsWith('.html') || path.endsWith('.css'))) {
  const content = readFileSync(file, 'utf8');
  const url = `${origin}${base}/${relative(output, file).replace(/index\.html$/, '')}`;
  const references = file.endsWith('.html')
    ? [...content.matchAll(/\b(?:href|src)="([^"<>]+)"/g)].map((match) => match[1])
    : [...content.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((match) => match[1]);
  for (const reference of references) {
    const target = localTarget(reference, url);
    if (!target) continue;
    assert(existsSync(target.file), `Broken local URL ${reference} in ${relative(output, file)}`);
    if (target.fragment && target.file.endsWith('.html')) {
      const targetHtml = readFileSync(target.file, 'utf8');
      assert(
        targetHtml.includes(`id="${target.fragment}"`),
        `Missing anchor ${reference} in ${relative(output, file)}`
      );
    }
    checked++;
  }
  if (file.endsWith('.html')) {
    assert(/<html[^>]+lang="en"/.test(content), `Missing page language: ${file}`);
    assert(/<title>[^<]+<\/title>/.test(content), `Missing page title: ${file}`);
    assert(content.includes('name="description"'), `Missing page description: ${file}`);
    assert(!/<script\b/i.test(content), `Static pages must work without client scripts: ${file}`);
    assert(!/(?:href|src)="(?:javascript:|http:\/\/)/i.test(content), `Unsafe URL: ${file}`);
    assert(
      !/\b(?:TODO|Lorem ipsum|example\.com|your-email)\b/i.test(content),
      `Placeholder content: ${file}`
    );
    if (process.env.VITE_SITE_URL) {
      const pagePath = `/${relative(output, file).replace(/index\.html$/, '')}`;
      assert(
        content.includes(
          `rel="canonical" href="${process.env.VITE_SITE_URL.replace(/\/$/, '')}${pagePath}"`
        ),
        `Wrong canonical URL: ${file}`
      );
    }
  }
}

const support = readFileSync(resolve(output, 'support/index.html'), 'utf8');
assert(support.includes(`mailto:${site.supportEmail}`), 'Support needs a working email link');
assert(support.includes(site.supportEmail), 'Support email must be visible');
const privacy = readFileSync(resolve(output, 'privacy/index.html'), 'utf8');
for (const section of ['game-data', 'support-data', 'website-data', 'retention', 'your-choices']) {
  assert(privacy.includes(`id="${section}"`), `Missing required privacy topic: ${section}`);
}
assert.equal(
  files.filter((path) => dirname(path) === resolve(output, 'screenshots') && path.endsWith('.png'))
    .length,
  5,
  'Expected five original gameplay screenshots'
);
console.log(
  `Verified three prerendered pages, five screenshots, contact/privacy content, and ${checked} local links/assets at ${base || '/'}.`
);
