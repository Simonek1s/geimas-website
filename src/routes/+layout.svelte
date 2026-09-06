<script>
  import '@fontsource/barlow-condensed/700.css';
  import '@fontsource/barlow-condensed/800.css';
  import '@fontsource/barlow-condensed/900.css';
  import '@fontsource/barlow-condensed/800-italic.css';
  import '@fontsource/barlow-condensed/900-italic.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/800.css';
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
  <div class="hazard-line" aria-hidden="true"></div>
  <div class="shell header-inner">
    <a class="brand" href={`${base}/`} aria-label="Drift Dash home">
      <img src={`${base}/icon.png`} alt="" width="44" height="44" />
      <span>DRIFT <span class="brand-hot">DASH</span></span>
    </a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href={`${base}/#hooked`}>The hook</a>
      <a href={`${base}/#screenshots`}>Screenshots</a>
      <a href={`${base}/support/`}>Support</a>
      {#if site.appStoreUrl}
        <a class="nav-cta" href={site.appStoreUrl}>Get the game <span aria-hidden="true">↗</span></a
        >
      {:else}
        <span class="nav-status"><span class="blink" aria-hidden="true"></span>In development</span>
      {/if}
    </nav>
  </div>
</header>

{@render children()}

<footer class="site-footer">
  <div class="shell footer-top">
    <a class="brand footer-brand" href={`${base}/`}>DRIFT <span class="brand-hot">DASH</span></a>
    <p class="footer-tagline">One road. One chase. One more run.</p>
    <nav aria-label="Footer navigation">
      <a href={`${base}/#hooked`}>The hook</a>
      <a href={`${base}/#screenshots`}>Screenshots</a>
      <a href={`${base}/support/`}>Support</a>
      <a href={`${base}/privacy/`}>Privacy policy</a>
    </nav>
  </div>
  <div class="shell footer-bottom">
    <span>© 2026 {site.developerName || 'Drift Dash'}. In development for iPhone.</span>
    <span>iPhone is a trademark of Apple Inc. Screenshots are untouched development captures.</span>
  </div>
</footer>
