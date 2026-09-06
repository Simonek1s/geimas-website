<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import PageMeta from '$lib/PageMeta.svelte';

  const privacyLink = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Drift Dash privacy request')}`;
</script>

<PageMeta
  title="Privacy policy — Drift Dash"
  description="How the current Drift Dash game handles local saves, optional rewarded ads, support emails, website visits, and your privacy choices."
  path="/privacy/"
/>

<main id="main" class="shell document-main">
  <a class="back-link" href={`${base}/`}>← Back to the game</a>
  <header class="document-header">
    <p class="eyebrow">YOUR DATA / PRIVACY</p>
    <h1>Your game.<br /><span>Your peace of mind.</span></h1>
    <p>Privacy policy for the current development version of Drift Dash and this website.</p>
    <div class="policy-dates">
      <span
        >Effective: <time datetime={site.policyEffectiveDate}>{site.policyEffectiveDate}</time
        ></span
      ><span
        >Last updated: <time datetime={site.policyUpdatedDate}>{site.policyUpdatedDate}</time></span
      >
    </div>
  </header>

  {#if !site.privacyReviewed || !site.developerName}
    <div class="notice policy-draft">
      <strong>Policy draft — awaiting release review.</strong>
      <p>
        The game’s data behavior or these disclosures have changed and need to be checked before
        this policy is published.
      </p>
    </div>
  {/if}

  <div class="policy-layout">
    <nav class="policy-nav" aria-label="Privacy policy contents">
      <span class="eyebrow">ON THIS PAGE</span><a href="#overview">At a glance</a><a
        href="#responsible-developer">Who is responsible</a
      ><a href="#game-data">Data in the game</a><a href="#advertising-data">Rewarded ads</a><a
        href="#support-data">When you contact us</a
      ><a href="#website-data">Website and providers</a><a href="#retention"
        >Retention and protection</a
      ><a href="#your-choices">Your choices and rights</a><a href="#changes">Policy changes</a>
    </nav>

    <article class="prose policy-copy" aria-label="Drift Dash privacy policy">
      <section id="overview">
        <h2>Privacy, at a glance.</h2>
        <div class="privacy-summary">
          <p>
            <strong>No account. Local progress.</strong><br />Your garage, coins, upgrades, records,
            missions, and settings are saved on your device.
          </p>
          <p>
            <strong>Rewarded videos are optional.</strong><br />Browser previews use simulated
            videos. iOS builds with Google AdMob enabled can request ads before you choose to watch
            one.
          </p>
          <p>
            <strong>Support and the website are different.</strong><br />Email providers process
            messages you choose to send. GitHub processes technical information when you visit this
            website.
          </p>
        </div>
      </section>

      <section id="responsible-developer">
        <h2>1. Who is responsible</h2>
        {#if site.developerName}<p>
            {site.developerName} is responsible for Drift Dash and the personal information handled to
            provide support (the “developer”, “we”, or “us”).
          </p>{:else}<p>
            The responsible developer’s legal name is awaiting confirmation for this draft.
          </p>{/if}
        <p>
          For privacy questions or to exercise your rights, contact <a href={privacyLink}
            >{site.supportEmail}</a
          >.
        </p>
        {#if site.developerAddress}<p>Address: {site.developerAddress}</p>{/if}
        {#if site.developerPhone}<p>Phone: {site.developerPhone}</p>{/if}
      </section>

      <section id="game-data">
        <h2>2. Data in the game</h2>
        <p>
          Drift Dash saves game progress and preferences in local storage on your device. This
          includes coins, unlocked and selected vehicles, upgrades, cosmetic choices, scores and
          mission progress, and control, sound, haptic, camera, and graphics settings. The game
          reads this data so you can continue playing with your progress and preferences.
        </p>
        <p>
          There is no Drift Dash account, developer-operated cloud save, or online leaderboard. The
          game does not upload your save to a developer-operated server, so we cannot retrieve or
          restore it remotely. A browser preview saves progress in that browser’s storage.
        </p>
        <p>
          The core game does not request access to your precise location, contacts, microphone, or
          photo library. There is no separate gameplay analytics service. Advertising services can
          process device, interaction, and diagnostic information as described below.
        </p>
        <p>
          Apple may include app data in device backups according to your iOS and iCloud settings.
          Those backups are managed by you and Apple; they are not a Drift Dash synchronization
          service. Apple’s App Store and device services operate under <a
            href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a
          >.
        </p>
      </section>

      <section id="advertising-data">
        <h2>3. Optional rewarded ads</h2>
        <p>
          The current game offers rewarded videos for continuing an eligible run, doubling coins
          from a run, or receiving bonus mission rewards. Watching a video is optional; you can play
          without choosing these offers. Browser previews show a local simulated video and do not
          contact AdMob for ads.
        </p>
        <p>
          In iOS builds with Google AdMob enabled, the game attempts to start the ad service and
          load a rewarded ad when the game loads. It also attempts to load another after a video
          finishes or closes. <strong
            >Ad requests may therefore happen before you tap a reward button.</strong
          > Ad availability depends on the build, connection, and ad service.
        </p>
        <p>
          Google’s Mobile Ads service may receive IP addresses (which can indicate approximate
          location), device or advertising identifiers where available, ad views and interactions,
          app interaction information, crash reports, and performance information. This data can
          support ad delivery, measurement, fraud prevention, analytics, and service improvements.
          Processing depends on the SDK, ad configuration, and applicable privacy choices. See
          <a href="https://developers.google.com/admob/ios/privacy/data-disclosure"
            >Google’s Mobile Ads data disclosures</a
          >
          and
          <a href="https://policies.google.com/technologies/partner-sites"
            >how Google uses information from partner apps</a
          >.
        </p>
        <p>
          An iOS build may ask for tracking permission. You can decline and continue playing.
          Declining tracking does not remove ads or stop every ad-service request. The current game
          has no separate in-game advertising privacy settings screen. See
          <a href="#your-choices">your choices</a> for iOS tracking controls and provider information.
        </p>
      </section>

      <section id="support-data">
        <h2>4. When you contact us</h2>
        <p>
          If you email us, we receive your email address, any name displayed by your email service,
          your message, and attachments or technical details you choose to include. We use these to
          answer you, investigate problems, respond to feedback, and handle privacy requests.
        </p>
        <p>
          Support correspondence is handled through Gmail. Google and your email provider process
          messages and delivery information as part of providing email. Read <a
            href="https://policies.google.com/privacy">Google’s privacy policy</a
          > for its handling of information.
        </p>
      </section>

      <section id="website-data">
        <h2>5. Website and service providers</h2>
        <p>
          This is a static website hosted on GitHub Pages. We do not add analytics, advertising,
          tracking pixels, cookies, or browser storage. Screenshots, fonts, and other site assets
          are served with the site. Visiting a page does not automatically send an email.
        </p>
        <p>
          GitHub and its infrastructure providers receive technical request information, such as
          your IP address and browser information, to deliver the website and maintain security.
          GitHub handles that information under the <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            >GitHub General Privacy Statement</a
          >.
        </p>
        <p>
          The website does not run AdMob or load an advertising video. The game’s native advertising
          service, support email, and website hosting have different data flows; the providers’
          linked policies describe their processing and privacy controls.
        </p>
        <p>
          Google, GitHub, and Apple operate internationally and may process information outside your
          country, including outside the European Economic Area. Their privacy statements explain
          applicable transfer arrangements and safeguards. You can contact us for information about
          the providers used for your support request.
        </p>
      </section>

      <section id="retention">
        <h2>6. Retention and deletion</h2>
        <p>
          <strong>Game progress:</strong> Local data remains on your device until the app’s data is removed.
          Deleting the app removes its local data; offloading it retains the data. Copies in backups follow
          your device and backup settings and may return if you restore a backup.
        </p>
        <p>
          <strong>Browser progress:</strong> A preview’s save remains in browser storage until that site’s
          data is cleared or the browser removes it. The game does not provide cloud recovery.
        </p>
        <p>
          <strong>Support messages:</strong> Emails and attachments remain in the support mailbox until
          deleted. The game and website do not automatically delete this correspondence, and deleting
          the app does not remove it. Contact the support address to request deletion of messages relating
          to you.
        </p>
        <p>
          <strong>Advertising and provider records:</strong> Google and GitHub retain information
          according to their own policies and processing purposes. Removing your local save does not
          delete records already held by an ad service, email provider, or website host. See
          <a href="https://policies.google.com/technologies/retention">Google’s retention policy</a>
          and the GitHub privacy statement above. We cannot directly delete records a provider controls
          independently.
        </p>
        <p>
          Please send only information relevant to your request and remove private details from
          screenshots or attachments. Do not send passwords, payment details, or device backups.
        </p>
      </section>

      <section id="your-choices">
        <h2>7. Your choices and rights</h2>
        <ul>
          <li>
            <strong>Clear browser progress:</strong> remove the game preview’s site data using your browser
            settings. This clears its local save; it does not delete support email or provider records.
          </li>
          <li>
            <strong>Delete local game data:</strong> in iOS Settings, open General → iPhone Storage →
            Drift Dash → Delete App. This erases local progress. Removing only the Home Screen icon or
            choosing Offload App does not delete the data.
          </li>
          <li>
            <strong>Manage backups:</strong> use your iOS, iCloud, or computer backup settings to manage
            stored copies. A restored backup may restore game data.
          </li>
          <li>
            <strong>Ask about support information:</strong> email
            <a href={privacyLink}>{site.supportEmail}</a> to request access, correction, or deletion.
            We may ask for limited information to verify that a request concerns you.
          </li>
          <li>
            <strong>Manage iOS tracking permission:</strong> open Settings → Privacy &amp; Security
            → Tracking. If Drift Dash has requested permission and appears there, you can change it.
            This controls tracking permission, including access to the system advertising
            identifier; it does not switch off every ad or network request. Read
            <a href="https://support.apple.com/en-us/102420">Apple’s tracking controls guide</a>.
          </li>
          <li>
            <strong>Ask about advertising data:</strong> use the privacy controls and contact
            options described in
            <a href="https://policies.google.com/privacy">Google’s privacy policy</a>.
          </li>
        </ul>
        <p>
          Where applicable law provides these rights, you may also request restriction or
          portability of your information, object to processing based on legitimate interests, and
          withdraw consent for processing that relies on consent. Withdrawal does not affect the
          lawfulness of earlier processing. You can complain to your local data protection
          authority; in Lithuania this is the <a href="https://vdai.lrv.lt/en/"
            >State Data Protection Inspectorate</a
          >.
        </p>
        <p>
          If you are a parent or guardian concerned about information a child sent in a support
          message, contact us so we can review and address it.
        </p>
      </section>

      <section id="changes">
        <h2>8. Changes to this policy</h2>
        <p>
          We will update this page when data practices change and revise the date above. Changes to
          advertising, accounts, analytics, or cloud saves require updated disclosures. This policy
          describes the current development version, including browser reward simulations and iOS
          builds with AdMob enabled.
        </p>
        <p>Need help with the game? Visit <a href={`${base}/support/`}>Drift Dash support</a>.</p>
      </section>
    </article>
  </div>
</main>
