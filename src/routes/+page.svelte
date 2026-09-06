<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import { screenshots } from '$lib/screenshots.js';
  import PageMeta from '$lib/PageMeta.svelte';
</script>

<PageMeta
  title="Drift Dash — Escape the chase."
  description="Outrun the cops, dodge traffic, collect coins, and beat your best in Drift Dash, a colorful endless arcade racer for iPhone."
  path="/"
/>

<main id="main">
  <section class="hero shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot"></span> ENDLESS POLICE CHASE</p>
      <h1 id="hero-title">CAN YOU<br /><span>ESCAPE?</span></h1>
      <p class="hero-description">
        Dodge traffic. Hit the boost. Lose the cops.<br />Your next record is one clean move away.
      </p>
      <div class="hero-actions">
        <a class="button button-orange" href="#screenshots"
          >Enter the chase <span aria-hidden="true">↗</span></a
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
        <span>Instant arcade runs</span><span>Unlockable cars</span><span>Relentless speed</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-outline" aria-hidden="true"></div>
      <span class="vertical-label" aria-hidden="true">NO FINISH LINE / DRIFT DASH</span>
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
    <span>DODGE THE TRAFFIC</span><span>↗</span><span>LOSE THE COPS</span><span>↗</span><span
      >SMASH YOUR BEST</span
    ><span>↗</span>
  </div>

  <section class="game-section shell" id="the-game" aria-labelledby="game-title">
    <div class="section-intro">
      <p class="eyebrow">01 / THE GAME</p>
      <h2 id="game-title">No finish line.<br /><span>No easy way out.</span></h2>
    </div>
    <div class="game-details">
      <p class="lead">The chase starts fast. It only gets faster.</p>
      <p>
        Weave through traffic, drift through bends, and stay ahead of the police in a colorful world
        that never sits still. Collect coins, build your garage, and turn one quick run into a new
        personal best.
      </p>
      <div class="feature-row">
        <span class="feature-number">01</span>
        <div>
          <h3>Own the road</h3>
          <p>Changing scenery, tight traffic, and an endless route keep every escape moving.</p>
        </div>
      </div>
      <div class="feature-row">
        <span class="feature-number">02</span>
        <div>
          <h3>Build the getaway car</h3>
          <p>Unlock vehicles and tune their engine, grip, boost, and nitro.</p>
        </div>
      </div>
      <div class="feature-row">
        <span class="feature-number">03</span>
        <div>
          <h3>Push your luck</h3>
          <p>Collect coins, complete missions, and chase a record worth one more run.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="screenshots-section" id="screenshots" aria-labelledby="screenshots-title">
    <div class="shell section-heading">
      <div>
        <p class="eyebrow">02 / THE CHASE</p>
        <h2 id="screenshots-title">Five reasons to tap.</h2>
      </div>
      <p>Real gameplay. Zero fake renders.<br />Open any frame for the original capture.</p>
    </div>
    <div class="shell screenshot-grid">
      {#each screenshots as shot, i}
        <figure class="screenshot-card">
          <a
            class={`screenshot-link theme-${shot.theme}`}
            href={`${base}/screenshots/${shot.file}`}
            aria-label={`Open screenshot: ${shot.title}`}
          >
            <span class="screenshot-hook">
              <span>{shot.kicker}</span>
              <strong>{shot.title}</strong>
            </span>
            <span class="screenshot-frame">
              <img
                src={`${base}/screenshots/${shot.file}`}
                alt={shot.alt}
                width="1290"
                height="2796"
                loading="lazy"
              />
              <span class="shot-expand" aria-hidden="true">↗</span>
            </span>
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
      Original development-build captures shown without retouching. The final iOS release may
      differ.
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
