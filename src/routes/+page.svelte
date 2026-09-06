<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import { screenshots } from '$lib/screenshots.js';
  import PageMeta from '$lib/PageMeta.svelte';
</script>

<PageMeta
  title="Drift Dash — One more run."
  description="Meet Drift Dash, an endless arcade police-chase racer for iPhone. Explore real gameplay screenshots, get support, and read our privacy policy."
  path="/"
/>

<main id="main">
  <section class="hero shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot"></span> ENDLESS ARCADE RACING</p>
      <h1 id="hero-title">ONE MORE<br /><span>RUN.</span></h1>
      <p class="hero-description">
        Lose the cops. Chase your best.<br />Turn a quick escape into your next obsession.
      </p>
      <div class="hero-actions">
        <a class="button button-orange" href="#screenshots"
          >Explore the game <span aria-hidden="true">↗</span></a
        >
        {#if site.appStoreUrl}
          <a class="text-link" href={site.appStoreUrl}
            >View on the App Store <span aria-hidden="true">↗</span></a
          >
        {:else}
          <span class="release-note">In development<br /><strong>for iPhone</strong></span>
        {/if}
      </div>
      <div class="hero-facts">
        <span>Endless roads</span><span>Your own garage</span><span>Pure arcade energy</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-outline" aria-hidden="true"></div>
      <span class="vertical-label" aria-hidden="true">BUILT FOR THE CHASE / DRIFT DASH</span>
      <img
        class="hero-shot hero-shot-back"
        src={`${base}/screenshots/01-open-road.png`}
        alt=""
        width="1290"
        height="2796"
      />
      <img
        class="hero-shot hero-shot-front"
        src={`${base}/screenshots/02-city.png`}
        alt="An orange car boosts through colorful streets in Drift Dash, reaching 274 km/h."
        width="1290"
        height="2796"
        fetchpriority="high"
      />
      <span class="gameplay-stamp"><span class="status-dot"></span> ACTUAL GAMEPLAY</span>
      <div class="edition-mark" aria-hidden="true"><span>DD</span><small>01 / ∞</small></div>
    </div>
  </section>

  <div class="race-strip" aria-hidden="true">
    <span>CHASE THE HORIZON</span><span>↗</span><span>MAKE YOUR ESCAPE</span><span>↗</span><span
      >ONE MORE RUN</span
    ><span>↗</span>
  </div>

  <section class="game-section shell" id="the-game" aria-labelledby="game-title">
    <div class="section-intro">
      <p class="eyebrow">01 / THE GAME</p>
      <h2 id="game-title">Small screen.<br /><span>Big getaway.</span></h2>
    </div>
    <div class="game-details">
      <p class="lead">The road keeps going. So do you.</p>
      <p>
        Drift through bends, weave through traffic, and stay ahead of the chase in a colorful world
        that never sits still. Collect coins, build up your garage, and see how far your next run
        takes you.
      </p>
      <div class="feature-row">
        <span class="feature-number">01</span>
        <div>
          <h3>Find your flow</h3>
          <p>Changing scenery and an endless road keep every escape moving.</p>
        </div>
      </div>
      <div class="feature-row">
        <span class="feature-number">02</span>
        <div>
          <h3>Make it your ride</h3>
          <p>Unlock vehicles and upgrade their engine, grip, boost, and nitro.</p>
        </div>
      </div>
      <div class="feature-row">
        <span class="feature-number">03</span>
        <div>
          <h3>Beat your best</h3>
          <p>Collect coins, complete missions, and come back for one more run.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="screenshots-section" id="screenshots" aria-labelledby="screenshots-title">
    <div class="shell section-heading">
      <div>
        <p class="eyebrow">02 / OUT ON THE ROAD</p>
        <h2 id="screenshots-title">Catch a glimpse.</h2>
      </div>
      <p>Five moments from the game.<br />Open any shot for the full picture.</p>
    </div>
    <div class="shell screenshot-grid">
      {#each screenshots as shot, i}
        <figure class="screenshot-card">
          <a
            class="screenshot-link"
            href={`${base}/screenshots/${shot.file}`}
            aria-label={`Open screenshot: ${shot.title}`}
          >
            <img
              src={`${base}/screenshots/${shot.file}`}
              alt={shot.alt}
              width="1290"
              height="2796"
              loading="lazy"
            />
            <span class="shot-expand" aria-hidden="true">↗</span>
          </a>
          <figcaption>
            <span class="shot-number">0{i + 1}</span>
            <div>
              <h3>{shot.title}</h3>
              <p>{shot.detail}</p>
            </div>
          </figcaption>
        </figure>
      {/each}
    </div>
    <p class="shell screenshot-note">
      Captured from the game’s development build. The final iOS release may differ.
    </p>
  </section>

  <section class="pit-stop shell" aria-labelledby="support-title">
    <div>
      <p class="eyebrow">03 / THE PIT STOP</p>
      <h2 id="support-title">Need a hand?</h2>
      <p>Game questions, a bump in the road, or an idea for the next run.</p>
    </div>
    <a class="button button-dark" href={`${base}/support/`}
      >Visit support <span aria-hidden="true">↗</span></a
    >
  </section>
</main>
