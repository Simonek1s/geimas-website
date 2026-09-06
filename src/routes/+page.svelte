<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import { screenshots, marqueeLines } from '$lib/screenshots.js';
  import PageMeta from '$lib/PageMeta.svelte';

  const hooks = [
    {
      title: "ONE TAP. YOU'RE GONE.",
      body: 'No warm-up lap. The road is already moving when you start, and a run fits in the gap between two things you were supposed to be doing.'
    },
    {
      title: 'THE COPS NEVER QUIT.',
      body: 'Get flagged and the chase is on. Keep your speed, keep your nerve, and whatever you do, don’t look back.'
    },
    {
      title: 'POWER-UPS THAT FEEL ILLEGAL.',
      body: 'Coin magnets, ×2 multipliers, glowing rings. A decent run turns into a ridiculous one.'
    },
    {
      title: 'BUILD THE GETAWAY CAR.',
      body: 'Unlock new cars. Tune engine, grip, boost and nitro. Come back faster than last time.'
    },
    {
      title: 'COINS. MISSIONS. BRAGGING RIGHTS.',
      body: 'Grab gold mid-run, clear missions, and chase a record you’ll want to screenshot.'
    }
  ];
</script>

<PageMeta
  title="Drift Dash — Can you outrun the cops?"
  description="Dodge traffic, smash the boost and lose the police in Drift Dash: a loud, fast, endless arcade racer in development for iPhone. Real gameplay. One more run."
  path="/"
/>

<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="hero-rays" aria-hidden="true"></div>
    <div class="hero-road" aria-hidden="true"><span class="hero-road-line"></span></div>

    <div class="shell hero-inner">
      <div class="hero-copy">
        <p class="chip"><span class="blink" aria-hidden="true"></span> New endless arcade racer</p>
        <h1 id="hero-title">
          <span class="line">Can you</span>
          <span class="line hl-yellow">outrun</span>
          <span class="line hl-cyan">the cops?</span>
        </h1>
        <p class="hero-description">
          Dodge traffic. Smash the boost. Lose the police. Every run gets faster, every crash gets
          louder, and every game over ends the same way:
          <span class="shout">one more run.</span>
        </p>
        <div class="hero-actions">
          {#if site.appStoreUrl}
            <a class="btn btn-yellow" href={site.appStoreUrl}
              >Get the game <span aria-hidden="true">↗</span></a
            >
            <a class="btn btn-ghost" href="#screenshots">See it in action</a>
          {:else}
            <a class="btn btn-yellow" href="#screenshots"
              >See it in action <span aria-hidden="true">↓</span></a
            >
            <a class="btn btn-ghost" href="#hooked">Why you won’t stop</a>
          {/if}
        </div>
        <p class="release-note">
          <strong>In development for iPhone.</strong> No App Store page yet, no fake badges. Just the
          game.
        </p>
        <div class="hero-stats" aria-label="Numbers visible in the gameplay captures">
          <div class="stat"><strong>278</strong><span>km/h on screen</span></div>
          <div class="stat"><strong>5225</strong><span>meters in one run</span></div>
          <div class="stat"><strong>11779</strong><span>coins in one HUD</span></div>
          <p class="hero-stats-note">Straight from the real captures below. Not a render.</p>
        </div>
      </div>

      <div class="hero-visual">
        <div class="phone phone-left">
          <img
            src={`${base}/screenshots/01-open-road.png`}
            alt=""
            width="1290"
            height="2796"
            loading="eager"
          />
        </div>
        <div class="phone phone-front">
          <img
            src={`${base}/screenshots/02-city.png`}
            alt="An orange car boosts through colorful streets in Drift Dash, reaching 274 km/h."
            width="1290"
            height="2796"
            fetchpriority="high"
          />
        </div>
        <div class="phone phone-right">
          <img
            src={`${base}/screenshots/05-night.png`}
            alt=""
            width="1290"
            height="2796"
            loading="eager"
          />
        </div>
        <span class="sticker sticker-x2" aria-hidden="true">×2</span>
        <span class="sticker sticker-police" aria-hidden="true">Police!</span>
        <span class="sticker sticker-real"
          ><span class="blink" aria-hidden="true"></span>Actual gameplay</span
        >
      </div>
    </div>
  </section>

  <div class="marquee-zone" aria-hidden="true">
    <div class="marquee marquee-yellow">
      <div class="marquee-track">
        {#each [0, 1] as copy (copy)}
          {#each marqueeLines.primary as line}<span>{line}</span><span class="star">★</span>{/each}
        {/each}
      </div>
    </div>
    <div class="marquee marquee-pink marquee-reverse">
      <div class="marquee-track">
        {#each [0, 1] as copy (copy)}
          {#each marqueeLines.secondary as line}<span>{line}</span><span class="star">★</span
            >{/each}
        {/each}
      </div>
    </div>
  </div>

  <section class="hooked" id="hooked" aria-labelledby="hooked-title">
    <div class="shell">
      <p class="eyebrow">01 / The hook</p>
      <h2 class="section-title" id="hooked-title">
        Why you won’t stop <span class="outline">playing.</span>
      </h2>
      <div class="hook-grid">
        {#each hooks as hook, i}
          <article class={`hook hook-${i + 1}`}>
            <span class="hook-num" aria-hidden="true">0{i + 1}</span>
            <h3>{hook.title}</h3>
            <p>{hook.body}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="shots" id="screenshots" aria-labelledby="screenshots-title">
    <div class="shell shots-head">
      <div>
        <p class="eyebrow eyebrow-light">02 / The proof</p>
        <h2 class="section-title" id="screenshots-title">
          Five reasons <span class="hl-yellow">to tap.</span>
        </h2>
      </div>
      <p class="shots-lead">
        Real gameplay. Zero fake renders.<br />Tap any frame to open the untouched original.
      </p>
    </div>
    <div class="shell shot-grid">
      {#each screenshots as shot, i}
        <figure class={`shot theme-${shot.theme}`}>
          <a
            class="shot-link"
            href={`${base}/screenshots/${shot.file}`}
            aria-label={`Open screenshot ${i + 1}: ${shot.kicker} ${shot.title}`}
          >
            <span class="shot-hook">
              <span>{shot.kicker}</span>
              <strong>{shot.title}</strong>
            </span>
            <span class="shot-frame">
              <img
                src={`${base}/screenshots/${shot.file}`}
                alt={shot.alt}
                width="1290"
                height="2796"
                loading="lazy"
              />
            </span>
            <span class="shot-hud">
              <span>{shot.speed} km/h</span>
              <span>{shot.distance} m</span>
            </span>
          </a>
          <figcaption>
            <p>{shot.detail}</p>
            <span class="shot-open">0{i + 1} · Open original <span aria-hidden="true">↗</span></span
            >
          </figcaption>
        </figure>
      {/each}
    </div>
    <p class="shell shots-note">
      Original development-build captures shown without retouching. The final iOS release may
      differ.
    </p>
  </section>

  <section class="one-more" aria-labelledby="one-more-title">
    <div class="hazard-band" aria-hidden="true"></div>
    <div class="shell one-more-inner">
      <div>
        <p class="eyebrow">03 / One more run</p>
        <h2 class="section-title" id="one-more-title">
          Your record <span class="outline">is waiting.</span>
        </h2>
        <p class="one-more-text">
          Drift Dash is in development for iPhone. Got a question, a bug, or a wild idea for the
          next update? The pit stop is open.
        </p>
      </div>
      <div class="one-more-actions">
        {#if site.appStoreUrl}
          <a class="btn btn-yellow" href={site.appStoreUrl}
            >Get the game <span aria-hidden="true">↗</span></a
          >
        {:else}
          <span class="status-pill"
            ><span class="blink" aria-hidden="true"></span>In development · iPhone</span
          >
        {/if}
        <a class="btn btn-dark" href={`${base}/support/`}
          >Talk to the dev <span aria-hidden="true">↗</span></a
        >
        <a class="text-link" href={`${base}/privacy/`}>Read the privacy policy</a>
      </div>
    </div>
    <div class="hazard-band" aria-hidden="true"></div>
  </section>
</main>
