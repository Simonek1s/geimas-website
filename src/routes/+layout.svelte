<script>
  import '@fontsource/barlow-condensed/600.css';
  import '@fontsource/barlow-condensed/700.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '../app.css';
  import { base } from '$app/paths';
  import site from '$lib/site.json';

  let { children } = $props();
</script>

<svelte:head>
  {#if !site.privacyReviewed}<meta name="robots" content="noindex, nofollow" />{/if}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="shell header-inner">
    <a class="brand" href={`${base}/`} aria-label="Drift Dash home">
      <img src={`${base}/icon.png`} alt="" width="40" height="40" />
      <span>DRIFT DASH<span class="brand-dot">.</span></span>
    </a>
    <nav aria-label="Main navigation">
      <a href={`${base}/#the-game`}>The game</a>
      <a href={`${base}/#screenshots`}>Screenshots</a>
      <a class="nav-support" href={`${base}/support/`}>Support <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
</header>

{@render children()}

<footer class="site-footer">
  <div class="shell footer-top">
    <a class="brand footer-brand" href={`${base}/`}>DRIFT DASH<span class="brand-dot">.</span></a>
    <p>A little escape. A lot of acceleration.</p>
    <nav aria-label="Footer navigation">
      <a href={`${base}/support/`}>Support</a>
      <a href={`${base}/privacy/`}>Privacy policy</a>
    </nav>
  </div>
  <div class="shell footer-bottom">
    <span>© 2026 {site.developerName || 'Drift Dash'}.</span>
    <span>iPhone is a trademark of Apple Inc.</span>
  </div>
</footer>
