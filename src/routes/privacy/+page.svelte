<script>
  import { base } from '$app/paths';
  import site from '$lib/site.json';
  import PageMeta from '$lib/PageMeta.svelte';

  const privacyLink = `mailto:${site.supportEmail}?subject=${encodeURIComponent('Drift Dash privacy request')}`;
</script>

<PageMeta
  title="Privacy policy — Drift Dash"
  description="How Drift Dash v1 handles local game progress, support emails, website visits, and your privacy choices. No accounts or ads in v1."
  path="/privacy/"
/>

<main id="main" class="shell document-main">
  <a class="back-link" href={`${base}/`}>← Back to the game</a>
  <header class="document-header">
    <p class="eyebrow">YOUR DATA / PRIVACY</p>
    <h1>Your game.<br /><span>Your peace of mind.</span></h1>
    <p>Privacy policy for Drift Dash version 1 and this website.</p>
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
        This policy describes the planned ad-free v1. Its statements must be checked against the
        released app and support practices before publication.
      </p>
    </div>
  {/if}

  <div class="policy-layout">
    <nav class="policy-nav" aria-label="Privacy policy contents">
      <span class="eyebrow">ON THIS PAGE</span><a href="#overview">At a glance</a><a
        href="#responsible-developer">Who is responsible</a
      ><a href="#game-data">Data in the game</a><a href="#support-data">When you contact us</a><a
        href="#website-data">Website and providers</a
      ><a href="#retention">Retention and protection</a><a href="#your-choices"
        >Your choices and rights</a
      ><a href="#changes">Policy changes</a>
    </nav>

    <article class="prose policy-copy" aria-label="Drift Dash privacy policy">
      <section id="overview">
        <h2>Privacy, at a glance.</h2>
        <div class="privacy-summary">
          <p>
            <strong>No account. No ads in v1.</strong><br />The v1 game does not send your gameplay
            data to us or use advertising or analytics services.
          </p>
          <p>
            <strong>Progress stays on your device.</strong><br />Your garage, coins, upgrades,
            records, missions, and settings are saved locally.
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
          Drift Dash v1 saves game progress and preferences in local app storage on your device.
          This includes coins, unlocked and selected vehicles, upgrades, cosmetic choices, scores
          and mission progress, and control, sound, haptic, camera, and graphics settings. The game
          reads this data so you can continue playing with your progress and preferences.
        </p>
        <p>
          There is no Drift Dash account, developer-operated cloud save, or online leaderboard. We
          cannot see or retrieve your local save. The v1 game does not use ads, advertising
          identifiers, cross-app tracking, or analytics SDKs. It does not request your location,
          contacts, microphone, or photo library.
        </p>
        <p>
          Apple may include app data in device backups according to your iOS and iCloud settings.
          Those backups are managed by you and Apple; they are not a Drift Dash synchronization
          service. Apple’s App Store and device services operate under <a
            href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a
          >.
        </p>
      </section>

      <section id="support-data">
        <h2>3. When you contact us</h2>
        <p>
          If you email us, we receive your email address, any name displayed by your email service,
          your message, and attachments or technical details you choose to include. We use these to
          answer you, investigate problems, respond to feedback, and handle privacy requests. We do
          not add you to a marketing list.
        </p>
        <p>
          Support correspondence is handled through Gmail. Google and your email provider process
          messages and delivery information as part of providing email. Read <a
            href="https://policies.google.com/privacy">Google’s privacy policy</a
          > for its handling of information.
        </p>
        <p>
          Where EU data protection law applies, the {site.privacyReviewed
            ? 'basis'
            : 'proposed basis'} for ordinary support handling is our legitimate interest in answering
          requests and keeping the game working. Handling legal privacy requests may also be necessary
          to meet legal obligations. We do not make advertising, profiling, or automated decisions about
          you from support messages.
        </p>
      </section>

      <section id="website-data">
        <h2>4. Website and service providers</h2>
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
          We do not sell personal information or share gameplay data with third parties. Providers
          handling personal information for us must protect it to the same or a higher standard than
          this policy and Apple’s applicable privacy requirements. Provider terms and their actual
          roles must support that protection.
        </p>
        <p>
          Google, GitHub, and Apple operate internationally and may process information outside your
          country, including outside the European Economic Area. Their privacy statements explain
          applicable transfer arrangements and safeguards. You can contact us for information about
          the providers used for your support request.
        </p>
      </section>

      <section id="retention">
        <h2>5. Retention, deletion, and protection</h2>
        <p>
          <strong>Game progress:</strong> Local data remains on your device until the app’s data is removed.
          Deleting the app removes its local data; offloading it retains the data. Copies in backups follow
          your device and backup settings and may return if you restore a backup.
        </p>
        <p>
          <strong>Support messages:</strong> We keep correspondence for as long as it is needed to respond,
          resolve the issue, and maintain a necessary record of the request. Relevant information may
          need to be kept longer to meet legal obligations or establish, exercise, or defend legal claims.
          You can request deletion by email; we will explain any information that must be retained and
          why.
        </p>
        <p>
          <strong>Provider records:</strong> Hosting logs, email delivery records, and provider backup
          copies follow the providers’ retention rules. We cannot directly delete records that a provider
          controls independently.
        </p>
        <p>
          We limit support information to what is needed for the request and use the security
          controls available for the support mailbox. Please send only relevant information and
          remove private details from screenshots or attachments.
        </p>
      </section>

      <section id="your-choices">
        <h2>6. Your choices and rights</h2>
        <ul>
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
            <strong>No advertising consent in v1:</strong> there is no advertising or tracking consent
            to revoke. If a future optional feature uses consent, you will be told how to withdraw it.
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
        <h2>7. Changes to this policy</h2>
        <p>
          We will update this page when data practices change and revise the date above.
          Advertising, accounts, analytics, or cloud saves would require a new review and updated
          disclosures before they are introduced. This policy covers the ad-free v1 release.
        </p>
        <p>Need help with the game? Visit <a href={`${base}/support/`}>Drift Dash support</a>.</p>
      </section>
    </article>
  </div>
</main>
