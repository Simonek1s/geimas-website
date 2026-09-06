import { readFileSync } from 'node:fs';

const site = JSON.parse(readFileSync(new URL('../src/lib/site.json', import.meta.url), 'utf8'));
const problems = [];

if (!site.developerName.trim())
  problems.push('Set developerName to the responsible person or registered business.');
if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.supportEmail) ||
  /@(example\.(com|org)|test\.invalid)$/i.test(site.supportEmail)
) {
  problems.push('Set a real, monitored supportEmail.');
}
if (site.advertising !== 'none-v1')
  problems.push(
    'The current policy only covers the confirmed ad-free v1. Update the policy for any other release.'
  );
if (site.privacyReviewed !== true)
  problems.push(
    'Review the policy and no-ads release checklist in docs/app-store-readiness.md, then set privacyReviewed to true.'
  );
for (const key of ['policyEffectiveDate', 'policyUpdatedDate']) {
  const value = site[key];
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    Number.isNaN(Date.parse(value)) ||
    new Date(value).toISOString().slice(0, 10) !== value
  ) {
    problems.push(`${key} must be a real date in YYYY-MM-DD format.`);
  }
}
if (
  site.appStoreUrl &&
  !/^https:\/\/apps\.apple\.com\/(?:[a-z]{2}\/)?app\/(?:[^/?#]+\/)?id\d+(?:\?[^#]*)?$/.test(
    site.appStoreUrl
  )
) {
  problems.push(
    'appStoreUrl must be a direct HTTPS apps.apple.com product URL, or empty before release.'
  );
}

try {
  const url = new URL(process.env.VITE_SITE_URL || '');
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    /^(localhost|127\.|\[?::1)/.test(url.hostname)
  ) {
    problems.push(
      'VITE_SITE_URL must be the public HTTPS website URL without credentials, query, or fragment.'
    );
  }
  if (url.pathname.replace(/\/$/, '') !== (process.env.BASE_PATH || '')) {
    problems.push(
      'VITE_SITE_URL pathname must match BASE_PATH (empty for a custom domain or user site).'
    );
  }
} catch {
  problems.push(
    'Set VITE_SITE_URL to the final HTTPS website URL. GitHub Actions supplies this from configure-pages.'
  );
}

if (problems.length) {
  console.error(
    `Publication is not ready:\n${problems.map((problem) => `- ${problem}`).join('\n')}`
  );
  process.exit(1);
}
console.log(
  'Public contact details, policy review, v1 scope, dates, and deployment URL are configured.'
);
