<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import PageMeta from '$lib/PageMeta.svelte';

  const supportLink = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Drift Dash support')}`;
</script>

<PageMeta
  title="Support — Drift Dash"
  description="Get help with Drift Dash. Contact the developer about game problems, feedback, feature requests, or privacy questions."
  path="/support/"
/>

<main id="main" class="document-page">
  <div class="document-hero">
    <div class="shell">
      <a class="back-link" href={`${base}/`}><span aria-hidden="true">←</span> Back to the game</a>
      <header class="document-header">
        <p class="eyebrow">The pit stop / Support</p>
        <h1>Stuck?<br /><span>Let’s get you back on the road.</span></h1>
        <p>
          Something not quite right? Get in touch about game problems, feedback, or an idea for a
          future update.
        </p>
      </header>
    </div>
  </div>

  <div class="shell document-main support-layout">
    <aside class="contact-card" aria-labelledby="contact-title">
      <span class="contact-icon" aria-hidden="true">↗</span>
      <h2 id="contact-title">Talk to the developer.</h2>
      {#if site.developerName}<p>{site.developerName}</p>{/if}
      <a class="contact-email" href={supportLink}>{site.supportEmail}</a>
      <p>
        For Drift Dash support, feedback, and feature requests. Use the same address for privacy
        questions or data requests.
      </p>
      {#if site.developerAddress}<p>{site.developerAddress}</p>{/if}
      {#if site.developerPhone}<p>Phone: {site.developerPhone}</p>{/if}
      <a class="btn btn-dark" href={supportLink}>Email support <span aria-hidden="true">↗</span></a>
    </aside>

    <div class="support-content prose">
      <section aria-labelledby="report-title">
        <h2 id="report-title">A good report gets us further.</h2>
        <p>
          Tell us what happened and what you expected. These details help us understand the problem:
        </p>
        <ul>
          <li>Your Drift Dash app version and iOS version.</li>
          <li>Your iPhone model and the language you use in the app.</li>
          <li>The steps that lead to the issue and any error message.</li>
          <li>A screenshot, if useful, with personal information removed.</li>
        </ul>
        <div class="notice">
          <strong>Keep it game-related.</strong>
          <p>
            Please don’t send passwords, payment details, personal photos, exact location, or device
            backups. We’ll ask if we need anything else.
          </p>
        </div>
      </section>

      <section class="faq" aria-labelledby="faq-title">
        <p class="eyebrow">A quick tune-up</p>
        <h2 id="faq-title">Before you write.</h2>
        <details>
          <summary>The game feels slow or stutters.</summary>
          <p>
            Open the game’s Settings and change graphics quality to Auto or Low. Close other
            demanding apps and let your phone cool down if it feels warm. If the issue continues,
            include your model and graphics setting in your report.
          </p>
        </details>
        <details>
          <summary>My progress seems to be missing.</summary>
          <p>
            Cars, coins, upgrades, missions, and preferences are saved on your device. There is no
            Drift Dash account or cloud save. Avoid deleting the app while troubleshooting: deleting
            it also removes its local data, and we cannot restore progress from a server.
          </p>
        </details>
        <details>
          <summary>I can’t hear the music.</summary>
          <p>
            Check your device volume and connected headphones, then open Settings in Drift Dash and
            make sure music is turned on. The game also has a separate haptics setting.
          </p>
        </details>
        <details>
          <summary>Do I need an account?</summary>
          <p>
            No account is needed. Your game progress stays on your device; the current game has no
            developer-operated cloud save or online leaderboard.
          </p>
        </details>
        <details>
          <summary>Does the current game have ads?</summary>
          <p>
            The game includes optional rewarded videos for continuing eligible runs, doubling run
            coins, and earning bonus mission rewards. Browser previews simulate these videos. iOS
            builds with Google AdMob enabled can show network ads; the ad service may connect and
            preload an ad when the game starts, before you choose a reward. You can keep playing
            without watching a video. Read about <a href={`${base}/privacy/#advertising-data`}
              >advertising and privacy</a
            >.
          </p>
        </details>
        <details>
          <summary>A reward video is unavailable or didn’t give a bonus.</summary>
          <p>
            A bonus offer may be hidden when an ad is unavailable. A failed or unfinished video does
            not award a bonus. If a completed video does not give the expected reward, tell us which
            offer you chose and what happened, along with your app version and device model.
          </p>
        </details>
        <details>
          <summary>How can I delete my data?</summary>
          <p>
            Use iOS Settings → General → iPhone Storage → Drift Dash → Delete App to remove local
            game data. Offloading the app keeps its data. For a browser preview, clear that game's
            site data in your browser. To request deletion of support correspondence, email us. See <a
              href={`${base}/privacy/#your-choices`}>your privacy choices</a
            > for details about device backups and service providers.
          </p>
        </details>
      </section>
      <p class="support-privacy">
        Find out how we handle game data and support messages in the <a href={`${base}/privacy/`}
          >privacy policy</a
        >.
      </p>
    </div>
  </div>
</main>
